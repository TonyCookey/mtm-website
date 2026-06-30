import { BookOpen, ClipboardCheck, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionShell } from "@/components/SectionShell";

const mentoringPillars = [
  {
    icon: BookOpen,
    title: "12 weeks of mentoring classes",
    body: "The journey begins with teaching that helps singles examine readiness, faith, values, communication, and the realities of covenant marriage."
  },
  {
    icon: ClipboardCheck,
    title: "Assessments and guided reflection",
    body: "Surveys and readiness prompts help members understand where they are strong, where they need growth, and what kind of support they need next."
  },
  {
    icon: MessageCircle,
    title: "Accountability before introductions",
    body: "Chats, recommendations, and off-platform introductions work best after members have been prepared, reviewed, and supported with care."
  }
] as const;

export function MentoringSection() {
  return (
    <SectionShell
      id="mentoring"
      eyebrow="Mentoring first"
      title="Before matching begins, MTM helps you prepare for the kind of marriage you are praying for."
      intro="Mentoring is not an add-on. It is the first part of the MTM process, helping serious Christian singles build clarity, maturity, and accountability before recommendations or introductions."
    >
      <div className="mentoring-grid">
        {mentoringPillars.map((pillar, index) => {
          const Icon = pillar.icon;

          return (
            <Reveal className="mentoring-card" delay={index * 0.08} key={pillar.title}>
              <span className="mentoring-card__icon">
                <Icon size={22} aria-hidden />
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
