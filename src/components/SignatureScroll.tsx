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
            start: "top center",
            end: "bottom center",
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
    <section className="signature" id="app" ref={sectionRef}>
      <div className="signature__inner">
        <div className="signature__header">
          <p className="eyebrow">The app experience</p>
          <h2>A calmer way to move from preparation to connection.</h2>
        </div>
        <div className="signature__sticky">
          <PhoneMock {...screen} activeIndex={active} />
        </div>
        <div className="signature__steps">
          {signatureScreens.map((item, index) => (
            <article className={`signature__step ${active === index ? "is-active" : ""}`} key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item.kicker}</p>
              <h3>{item.title}</h3>
              <small>{item.body}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
