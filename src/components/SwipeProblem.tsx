"use client";

import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Heart, ShieldCheck, X } from "lucide-react";

const cards = [
  {
    name: "Quick Spark",
    note: "Attraction first",
    meta: "Thin context",
    color: "var(--red)"
  },
  {
    name: "Maybe Later",
    note: "Endless browsing",
    meta: "Little counsel",
    color: "var(--cream-muted)"
  },
  {
    name: "Surface Match",
    note: "Profile over process",
    meta: "No readiness",
    color: "var(--gold)"
  }
] as const;

export function SwipeProblem() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="swipe-problem">
      <motion.div
        className="swipe-problem__stack"
        initial={reduceMotion ? false : { opacity: 0, x: -22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="swipe-problem__shadow" />
        {cards.map((card, index) => {
          const top = index === 0;
          return (
            <motion.article
              className={`swipe-card swipe-card--${index + 1}`}
              key={card.name}
              style={{ "--card-accent": card.color } as React.CSSProperties}
              initial={false}
              whileHover={top && !reduceMotion ? { x: 38, y: -10, rotate: 8 } : undefined}
              whileInView={
                top && !reduceMotion
                  ? {
                      x: [0, 34, 0],
                      rotate: [0, 7, 0]
                    }
                  : undefined
              }
              viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="swipe-card__photo">
                <span />
                <Heart size={22} aria-hidden />
              </div>
              <div>
                <p>{card.name}</p>
                <strong>{card.note}</strong>
                <small>{card.meta}</small>
              </div>
              <div className="swipe-card__actions" aria-hidden>
                <span>
                  <X size={18} />
                </span>
                <span>
                  <Heart size={18} />
                </span>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <motion.div
        className="swipe-problem__answer"
        initial={reduceMotion ? false : { opacity: 0, x: 22 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Mentor To Marry</p>
        <h3>A guided path replaces the guessing game.</h3>
        <div className="swipe-problem__rows">
          {["Mentoring before matching", "Readiness review", "Mutual interest with accountability"].map((item) => (
            <div key={item}>
              <CheckCircle2 size={18} aria-hidden />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="swipe-problem__seal">
          <ShieldCheck size={22} aria-hidden />
          <span>Preparation creates better context for connection.</span>
        </div>
      </motion.div>
    </div>
  );
}
