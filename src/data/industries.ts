export interface IndustryStats {
  label: string;
  value: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: string;
  color: "accent-light-blue" | "accent-soft-green";
  bgGradient: string;
  description: string;
  features: string[];
  stats: IndustryStats;
  cta: string;
  href: string;
  image: string;
  isLogo?: boolean;
}

export const INDUSTRIES: Industry[] = [
  {
    id: "education",
    title: "Education",
    icon: "school",
    color: "accent-light-blue",
    bgGradient: "bg-accent-light-blue/5",
    description: "Transforming learning experiences with innovative educational solutions that empower students and educators worldwide.",
    features: [
      "Digital Learning Platforms",
      "Curriculum Development",
      "Teacher Training Programs",
      "Student Assessment Tools",
    ],
    stats: {
      label: "Students Impacted",
      value: "2M+",
    },
    cta: "Explore Education Solutions",
    href: "/education",
    image: "/images/education-logo.jpg",
    isLogo: true,
  },
  {
    id: "technology",
    title: "Technology",
    icon: "developer_mode",
    color: "accent-light-blue",
    bgGradient: "bg-accent-light-blue/5",
    description: "Pioneering cutting-edge technology solutions that drive digital transformation and innovation across industries.",
    features: [
      "Software Development",
      "Cloud Infrastructure",
      "AI & Machine Learning",
      "Cybersecurity Solutions",
    ],
    stats: {
      label: "Projects Delivered",
      value: "500+",
    },
    cta: "Explore Technology Solutions",
    href: "/it-solutions",
    image: "/images/technology-logo.png",
    isLogo: true,
  },
  {
    id: "agriculture",
    title: "Didomi Farm",
    icon: "eco",
    color: "accent-soft-green",
    bgGradient: "bg-accent-soft-green/5",
    description: "Cultivating sustainable and efficient agricultural practices that ensure food security and environmental stewardship.",
    features: [
      "Smart Farming Solutions",
      "Sustainable Practices",
      "Crop Management Systems",
      "Rural Development Programs",
    ],
    stats: {
      label: "Farms Supported",
      value: "10K+",
    },
    cta: "Explore Didomi Farms",
    href: "/agriculture",
    image: "/images/agriculture-logo.png",
    isLogo: true,
  },
  {
    id: "safety",
    title: "Safety",
    icon: "health_and_safety",
    color: "accent-soft-green",
    bgGradient: "bg-accent-soft-green/5",
    description: "Ensuring security and protection through advanced safety protocols, training, and systems that safeguard communities.",
    features: [
      "Safety Training Programs",
      "Risk Assessment Tools",
      "Emergency Response Systems",
      "Compliance Solutions",
    ],
    stats: {
      label: "Lives Protected",
      value: "1M+",
    },
    cta: "Explore Safety Solutions",
    href: "/safety",
    image: "/images/safety-logo.png",
    isLogo: true,
  },
];
