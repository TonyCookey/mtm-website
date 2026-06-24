export const methodPillars = [
  {
    eyebrow: "01",
    title: "Mentoring",
    body: "Start with guided reflection, wise counsel, and practical preparation before anyone enters your shortlist."
  },
  {
    eyebrow: "02",
    title: "Matching",
    body: "Recommendations are shaped by readiness, values, review, and mutual interest rather than casual browsing."
  },
  {
    eyebrow: "03",
    title: "Marriage readiness",
    body: "The process keeps attention on character, accountability, clarity, and the decisions that matter after attraction."
  }
] as const;

export const journeySteps = [
  "Payment and onboarding",
  "Mentoring begins",
  "Assessments and profile review",
  "Readiness feedback",
  "Curated recommendations",
  "Mutual match",
  "Seven-day chat window"
] as const;

export const signatureScreens = [
  {
    kicker: "Mentoring progress",
    title: "Preparation before pressure",
    body: "Members move through guided prompts and mentor checkpoints before recommendations are unlocked.",
    stat: "72%",
    label: "readiness profile"
  },
  {
    kicker: "Recommended profile",
    title: "Context beats chemistry alone",
    body: "A recommendation comes with meaningful signals: values, readiness, faith, and mentor-reviewed fit.",
    stat: "Fit",
    label: "values aligned"
  },
  {
    kicker: "Safe explanation",
    title: "Why this person, why now",
    body: "Members see a clear explanation of why a recommendation may be worth prayerful consideration.",
    stat: "3",
    label: "shared anchors"
  },
  {
    kicker: "Mutual match",
    title: "The chat opens only when interest is mutual",
    body: "When both people choose to continue, a focused seven-day chat window begins with intention.",
    stat: "7",
    label: "days to discern"
  }
] as const;
