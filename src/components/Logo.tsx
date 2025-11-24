interface LogoProps {
  className?: string;
  iconSize?: number;
  textSize?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

export default function Logo({ className = "", iconSize = 40, textSize = "md", variant = "light" }: LogoProps) {
  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const iconSizes = {
    sm: 32,
    md: 40,
    lg: 48,
  };

  const size = iconSizes[textSize] || iconSize;
  const textClass = textSizes[textSize] || textSizes.md;
  const isHorizontal = className.includes("flex-row");
  const textColor = variant === "dark" ? "text-white" : "text-accent-soft-green";

  return (
    <div className={`flex ${isHorizontal ? "flex-row items-center gap-3" : "flex-col items-center"} ${className}`}>
      {/* Book Icon with DC Letters */}
      <svg
        width={size}
        height={size * 0.9}
        viewBox="0 0 100 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={isHorizontal ? "" : "mb-2"}
      >
        {/* Book Spine - Darker Green */}
        <path
          d="M10 10 L10 80 L22 80 L22 10 Z"
          fill="#6B9F78"
        />
        {/* Left Page - Lighter Green */}
        <path
          d="M22 10 L22 80 L55 75 L55 15 Z"
          fill="#88B04B"
        />
        {/* Right Page - Lighter Green */}
        <path
          d="M55 15 L55 75 L90 80 L90 10 Z"
          fill="#88B04B"
        />
        {/* Letter D - Left page */}
        <path
          d="M28 28 L28 62 L38 62 Q48 62 48 52 L48 38 Q48 28 38 28 L28 28 Z"
          fill="#88B04B"
        />
        <path
          d="M33 33 L38 33 Q43 33 43 38 L43 52 Q43 57 38 57 L33 57 Z"
          fill="#88B04B"
        />
        {/* Letter C - Right page */}
        <path
          d="M62 28 Q57 28 54 33 L54 48 Q57 58 62 58 Q67 58 70 53 L70 38 Q67 28 62 28 Z"
          fill="#88B04B"
        />
        <path
          d="M62 33 Q59 33 57 35 L57 46 Q59 48 62 48 Q65 48 67 46 L67 35 Q65 33 62 33 Z"
          fill="#88B04B"
        />
      </svg>
      
      {/* Text */}
      <div className={`flex flex-col ${isHorizontal ? "items-start" : "items-center"} ${textClass} font-bold ${textColor}`}>
        <span className="leading-tight">Didomi</span>
        <span className="text-[0.75em] leading-tight">Consortium</span>
      </div>
    </div>
  );
}

