export const signatureScreens = [
  {
    kicker: "Profile",
    title: "Build a profile with more than a photo.",
    body: "MTM gathers faith, values, readiness, and practical context so introductions can begin with clarity.",
    image: "",
    screen: "profile",
    stat: "84%",
    label: "profile clarity"
  },
  {
    kicker: "Matches",
    title: "See people worth considering with care.",
    body: "Recommendations surface meaningful signals first, then let mutual interest open the next step.",
    image: "",
    screen: "matches",
    stat: "Fit",
    label: "reviewed match"
  }
] as const;

export const profileMarquee = [
  { name: "Ada", age: "29", tag: "Faith-led", image: "/images/profiles/ada.jpg" },
  { name: "Tomi", age: "33", tag: "Family-minded", image: "/images/profiles/tomi.jpg" },
  { name: "Kemi", age: "31", tag: "Ready to grow", image: "/images/profiles/kemi.jpg" },
  { name: "Daniel", age: "35", tag: "Intentional", image: "/images/profiles/daniel.jpg" },
  { name: "Mara", age: "28", tag: "Purposeful", image: "/images/profiles/mara.jpg" },
  { name: "Femi", age: "34", tag: "Mentor-ready", image: "/images/profiles/femi.jpg" },
  { name: "Ife", age: "30", tag: "Clear values", image: "/images/profiles/ife.jpg" },
  { name: "Nosa", age: "36", tag: "Covenant-minded", image: "/images/profiles/nosa.jpg" }
] as const;
