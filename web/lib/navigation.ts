export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; items: NavLink[] };
export type NavEntry = NavLink | NavGroup;

export const isGroup = (entry: NavEntry): entry is NavGroup => "items" in entry;

export const MAIN_NAV: NavEntry[] = [
  {
    label: "For you",
    items: [
      { label: "Gen Z", href: "/for-you/gen-z" },
      { label: "Adults under 65", href: "/for-you/adults" },
      { label: "Kids", href: "/for-you/kids" },
    ],
  },
  {
    label: "For Business",
    items: [
      { label: "Overview", href: "/business" },
      { label: "Results", href: "/business/results" },
      { label: "Mental Health", href: "/business/mental-health" },
      { label: "For Small Businesses", href: "/business/small-businesses" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Vital OS", href: "/vital-os" },
  { label: "Plans", href: "/plans" },
];

export const AUTH_LINK: NavLink = { label: "Login / Signup", href: "/login" };
export const DOCTORS_LINK: NavLink = { label: "Doctors Panel", href: "/doctors" };
