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
              y: activeIndex % 2 === 0 ? 0 : 12,
              rotate: activeIndex % 2 === 0 ? -0.6 : 0.6
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
              <PhonePlaceholder screen={screen} stat={stat} label={label} title={title} body={body} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function PhonePlaceholder({
  screen,
  stat,
  label,
  title,
  body
}: {
  screen: string;
  stat: string;
  label: string;
  title: string;
  body: string;
}) {
  const matches = screen === "matches";

  return (
    <div className="phone-placeholder">
      <div className="phone-placeholder__status">
        <span>9:41</span>
        <span>Mentor To Marry</span>
      </div>
      <div className="phone-placeholder__hero">
        <p>{matches ? "Reviewed recommendation" : "Marriage profile"}</p>
        <h4>{matches ? "A match worth slowing down for." : title}</h4>
        <span>{body}</span>
      </div>
      <div className="phone-placeholder__metric">
        <strong>{stat}</strong>
        <span>{label}</span>
      </div>
      <div className={matches ? "phone-placeholder__profiles" : "phone-placeholder__cards"}>
        {matches ? (
          <>
            <ProfileCard name="Ada" detail="Faith-led · Lagos" />
            <ProfileCard name="Tomi" detail="Intentional · Abuja" />
          </>
        ) : (
          <>
            <span>Faith</span>
            <span>Values</span>
            <span>Readiness</span>
          </>
        )}
      </div>
    </div>
  );
}

function ProfileCard({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="phone-profile-card">
      <span>{name.slice(0, 1)}</span>
      <div>
        <strong>{name}</strong>
        <small>{detail}</small>
      </div>
    </div>
  );
}
