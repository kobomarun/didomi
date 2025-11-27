"use client";

import Logo from "./Logo";
import SectorsDropdown from "./SectorsDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const isSafetyPage = pathname?.startsWith("/safety");
  const isEducationPage = pathname?.startsWith("/education");
  const isTechnologyPage = pathname?.startsWith("/it-solutions");
  const isAgriculturePage = pathname?.startsWith("/agriculture");

  const getLogo = () => {
    if (isSafetyPage) return "/images/safety-logo.png";
    if (isEducationPage) return "/images/education-logo.jpg";
    if (isTechnologyPage) return "/images/technologylogo.png";
    if (isAgriculturePage) return "/images/didomi-farm.png";
    return null;
  };

  const currentLogo = getLogo();

  return (
    <header className="flex items-center whitespace-nowrap border-b border-solid border-border-light px-6 sm:px-10 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <Link href="/" className="flex items-center">
        {currentLogo ? (
          <div className="relative h-12 w-48">
            <Image
              src={currentLogo}
              alt="Didomi Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        ) : (
          <Logo textSize="sm" iconSize={36} className="flex-row gap-3" />
        )}
      </Link>
      <nav className="hidden md:flex flex-1 justify-center gap-8 items-center mx-8">
        <Link className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors" href="/about">
          About
        </Link>
        <SectorsDropdown />
        <Link className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors" href="#footer">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4 ml-auto">
        <Link href="#" className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">Get a Quote</span>
        </Link>
        <button className="md:hidden flex items-center justify-center">
          <span className="material-symbols-outlined text-2xl text-primary">menu</span>
        </button>
      </div>
    </header>
  );
}

