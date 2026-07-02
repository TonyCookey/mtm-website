export const siteConfig = {
  name: "Mentor To Marry",
  domain: "mentortomarry.com",
  url: "https://mentortomarry.com",
  selfanyUrl: "https://selfany.com/MTM",
  freeCommunityUrl: "https://selfany.com/MTMFREE",
  email: "hello@mentortomarry.com",
  phoneDisplay: "+234 814 912 6848",
  whatsappUrl: "https://wa.me/2348149126848",
  analytics: {
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? ""
  }
} as const;
