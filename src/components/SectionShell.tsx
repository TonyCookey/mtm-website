import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <section className="section" id={id}>
      <div className="section__inner">
        <Reveal className="section__header">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
