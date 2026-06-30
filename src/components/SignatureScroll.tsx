"use client";

import { useEffect, useRef, useState } from "react";
import { signatureScreens } from "@/content/homepage";
import { PhoneMock } from "@/components/PhoneMock";

export function SignatureScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let context: { revert: () => void } | undefined;

    async function setup() {
      const gsapModule = await import("gsap");
      const triggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>(".signature__step");
        panels.forEach((panel, index) => {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 28%",
            end: "bottom 28%",
            onEnter: () => setActive(index),
            onEnterBack: () => setActive(index)
          });
        });
      }, sectionRef);
    }

    setup();

    return () => {
      context?.revert();
    };
  }, []);

  const screen = signatureScreens[active] ?? signatureScreens[0];

  return (
    <section className={`signature signature--${screen.screen}`} id="app" ref={sectionRef}>
      <div className="signature__sticky">
        <div className="signature__copy">
          <p className="eyebrow">{screen.kicker}</p>
          <h2>{screen.title}</h2>
          <span>{screen.body}</span>
        </div>
        <div className="signature__phone-wrap">
          <PhoneMock {...screen} activeIndex={active} />
        </div>
      </div>
      <div className="signature__steps" aria-hidden>
        {signatureScreens.map((item, index) => (
          <article className="signature__step" key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
