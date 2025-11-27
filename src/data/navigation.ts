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
  email: "info@didomicomsortium.c",
  offices: [
    {
      name: "United Kingdom Office",
      address: "10 Royal Lane, West Drayton UB7 8DL, United Kingdom",
      phone: "+44 7506 186439",
    },
    {
      name: "Nigeria Office",
      address: "No. 59, Oduduwa Way, GRA Ikeja, Lagos, Nigeria",
      phone: "0814 547 4977",
    },
  ],
};

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
];
