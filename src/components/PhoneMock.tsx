import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type PhoneMockProps = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  screen: string;
  stat: string;
  label: string;
  activeIndex: number;
};

export function PhoneMock({ kicker, title, body, image, screen, stat, label, activeIndex }: PhoneMockProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="phone"
      aria-label={`${kicker}: ${title}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: activeIndex % 2 === 0 ? 0 : 18,
              rotate: activeIndex % 2 === 0 ? -1.5 : 1.5
            }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="phone__speaker" />
      <div className="phone__screen">
        <AnimatePresence mode="wait">
          <motion.div
            className={`phone__motion phone__motion--${screen}`}
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            {image ? (
              <Image src={image} alt={title} fill sizes="300px" className="phone__image" />
            ) : (
              <PhonePlaceholder screen={screen} stat={stat} label={label} title={title} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function PhonePlaceholder({ screen, stat, label, title }: { screen: string; stat: string; label: string; title: string }) {
  return (
    <div className="phone-placeholder">
      <div className="phone-placeholder__status">
        <span>9:41</span>
        <span>MTM</span>
      </div>
      <div className="phone-placeholder__hero">
        <p>{screen}</p>
        <strong>{stat}</strong>
        <span>{label}</span>
      </div>
      <div className="phone-placeholder__body">
        <h4>{title}</h4>
        <div className="phone-placeholder__lines">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="phone-placeholder__cards">
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
