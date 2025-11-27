import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "light" }: LogoProps) {
  const mainTextColor = variant === "dark" ? "text-white" : "text-primary";
  const subTextColor = variant === "dark" ? "text-white/80" : "text-accent-soft-green";

  return (
    <div className={`${outfit.className} ${className}`}>
      <div className="flex flex-col">
        <span className={`font-bold leading-none tracking-tight ${mainTextColor} text-2xl`}>
          DIDOMI
        </span>
        <span className={`text-[0.65rem] font-medium tracking-[0.25em] uppercase ${subTextColor} ml-0.5`}>
          Consortium
        </span>
      </div>
    </div>
  );
}

