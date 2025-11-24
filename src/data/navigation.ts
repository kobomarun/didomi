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
  { name: "About", href: "#" },
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
  address: "123 Innovation Drive, Tech City",
  email: "contact@didomi.co",
  phone: "+1 (555) 123-4567",
};

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];
