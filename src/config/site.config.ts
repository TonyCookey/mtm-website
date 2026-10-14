export const siteConfig = {
  name: "Mentor To Marry",
  domain: "www.mentortomarry.com",
  url: "https://www.mentortomarry.com",
  seo: {
    title: "Christian Matchmaking & Marriage Preparation | Mentor To Marry",
    description:
      "A guided community for Christian singles in Nigeria and the diaspora, with marriage mentoring, readiness assessments, and intentional matching."
  },
  selfanyUrl: "https://selfany.com/MTM",
  freeCommunityUrl: "https://selfany.com/RFMSC",
  email: "hello@mentortomarry.com",
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? ""
  }
} as const;
