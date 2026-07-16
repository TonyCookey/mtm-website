export const siteConfig = {
  name: "Mentor To Marry",
  domain: "mentortomarry.com",
  url: "https://mentortomarry.com",
  selfanyUrl: "https://selfany.com/MTM",
  freeCommunityUrl: "https://selfany.com/RFMSC",
  email: "hello@mentortomarry.com",
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? ""
  }
} as const;
