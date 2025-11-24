export interface NavLink {
  name: string;
  href: string;
}

export interface SectorLink extends NavLink {
  icon: string;
  color: "text-accent-light-blue" | "text-accent-soft-green";
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "#" },
];

export const SECTORS_NAV_LINKS: SectorLink[] = [
  {
    name: "Education",
    href: "/education",
    icon: "school",
    color: "text-accent-light-blue",
  },
  {
    name: "Technology",
    href: "/it-solutions",
    icon: "developer_mode",
    color: "text-accent-light-blue",
  },
  {
    name: "Agriculture",
    href: "/agriculture",
    icon: "eco",
    color: "text-accent-soft-green",
  },
  {
    name: "Safety",
    href: "/safety",
    icon: "health_and_safety",
    color: "text-accent-soft-green",
  },
];

export const CONTACT_INFO = {
  address: "6, Soji Adepegba close Allen Avenue, Ikeja Lagos Nigeria.",
  email: "info@didomiconsortium.com",
  phones: ["0807 116 7839", "0915 637 7772"],
};

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];
