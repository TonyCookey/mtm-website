import { motion, useReducedMotion } from "motion/react";

type PhoneMockProps = {
  kicker: string;
  title: string;
  body: string;
  screen: string;
  activeIndex: number;
};

export function PhoneMock({ kicker, title, body, screen, activeIndex }: PhoneMockProps) {
  const reduceMotion = useReducedMotion();
  const screenNode = <AnimatedPhoneScreen kicker={kicker} title={title} body={body} screen={screen} />;

  return (
    <motion.div
      className="phone-stage"
      aria-label={`${kicker}: ${title}`}
      animate={
        reduceMotion
          ? undefined
          : {
              y: activeIndex % 2 === 0 ? 0 : 10,
              rotate: activeIndex % 2 === 0 ? -0.4 : 0.4
            }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="phone">
        <div className="phone__screen">{screenNode}</div>
      </div>
    </motion.div>
  );
}

function AnimatedPhoneScreen({ kicker, title, body, screen }: { kicker: string; title: string; body: string; screen: string }) {
  const reduceMotion = useReducedMotion();
  const details = getScreenDetails(screen);

  return (
    <div className={`phone-screen-shell phone-screen-shell--${screen}`}>
      <motion.div
        className="phone-screen"
        key={screen}
        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="phone-screen__status">
          <span>9:41</span>
          <span>MTM</span>
        </div>
        <div className="phone-screen__body">
          <p>{kicker}</p>
          <h4>{title}</h4>
          <span>{body}</span>
        </div>
        <div className="phone-screen__panel">
          {details.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <div className="phone-screen__tabs">
          <span className={screen === "mentoring" ? "is-active" : ""}>Mentor</span>
          <span className={screen === "matching" ? "is-active" : ""}>Match</span>
          <span className={screen === "marriage" ? "is-active" : ""}>Marry</span>
        </div>
      </motion.div>
    </div>
  );
}

function getScreenDetails(screen: string) {
  switch (screen) {
    case "mentoring":
      return ["12-week classes", "Readiness surveys", "Accountability"];
    case "matching":
      return ["Profile pool", "Recommendations", "Guided chats"];
    case "marriage":
      return ["Discernment", "Introductions", "Next steps"];
    default:
      return ["Faith", "Values", "Readiness"];
  }
}
