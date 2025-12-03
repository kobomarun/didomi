"use client";

import Logo from "./Logo";
import SectorsDropdown from "./SectorsDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { SECTORS_NAV_LINKS } from "@/data/navigation";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsSectorsOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSectorsOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsSectorsOpen(false);
    }
  };

  return (
    <>
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
          <button 
            className="md:hidden flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className="material-symbols-outlined text-2xl text-primary">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 top-[73px] z-40 bg-white border-t border-border-light overflow-y-auto"
        >
          <nav className="flex flex-col px-6 py-4">
            <Link 
              className="text-base font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors py-3 border-b border-border-light" 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              className="text-base font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors py-3 border-b border-border-light" 
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            {/* Mobile Sectors Dropdown */}
            <div className="border-b border-border-light">
              <button
                className="w-full text-base font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors py-3 flex items-center justify-between"
                onClick={() => setIsSectorsOpen(!isSectorsOpen)}
              >
                <span>Sectors</span>
                <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${isSectorsOpen ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              {isSectorsOpen && (
                <div className="pl-4 pb-2">
                  {SECTORS_NAV_LINKS.map((sector) => (
                    <Link
                      key={sector.name}
                      href={sector.href}
                      className="flex items-center gap-3 py-3 rounded-md hover:bg-accent-light-blue/5 transition-all group"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsSectorsOpen(false);
                      }}
                    >
                      <div className={`flex items-center justify-center size-10 rounded-lg bg-accent-light-blue/10 ${sector.color === "text-accent-soft-green" ? "bg-accent-soft-green/10" : ""}`}>
                        <span className={`material-symbols-outlined ${sector.color} text-xl`}>
                          {sector.icon}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary group-hover:text-accent-light-blue transition-colors">
                        {sector.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              className="text-base font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors py-3 border-b border-border-light" 
              href="#footer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#" 
              className="mt-4 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity flex"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="truncate">Get a Quote</span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

