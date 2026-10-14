"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  distance?: number;
};

export function Reveal({ children, className, delay = 0, as = "div", distance = 16 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion.create(as);

  if (reduceMotion) {
    const StaticComponent = as as ElementType;
    return <StaticComponent className={className}>{children}</StaticComponent>;
  }

  return (
    <Component
      className={className}
      // Keep server-rendered content readable before animation scripts load.
      initial={{ y: distance }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
