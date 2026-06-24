import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, HeartHandshake, LockKeyhole, MessageSquare } from "lucide-react";

type PhoneMockProps = {
  kicker: string;
  title: string;
  body: string;
  stat: string;
  label: string;
  activeIndex: number;
};

export function PhoneMock({ kicker, title, body, stat, label, activeIndex }: PhoneMockProps) {
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
        <div className="phone__status">
          <span>MTM</span>
          <LockKeyhole size={14} aria-hidden />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="phone__motion"
            key={title}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14, scale: 0.98 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="phone__metric">
              <motion.span
                initial={reduceMotion ? false : { scale: 0.9 }}
                animate={reduceMotion ? undefined : { scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                {stat}
              </motion.span>
              <p>{label}</p>
            </div>
            <div className="phone__copy">
              <p>{kicker}</p>
              <h3>{title}</h3>
              <span>{body}</span>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="phone__stack">
          <div>
            <CheckCircle2 size={18} aria-hidden />
            <span>Mentor reviewed</span>
          </div>
          <div>
            <HeartHandshake size={18} aria-hidden />
            <span>Values aligned</span>
          </div>
          <div>
            <MessageSquare size={18} aria-hidden />
            <span>Mutual next step</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
