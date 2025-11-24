"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { SECTORS_NAV_LINKS } from "@/data/navigation";

export default function SectorsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className="relative">
      <button 
        className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
      >
        Sectors
        <span className={`material-symbols-outlined text-lg transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white rounded-lg shadow-xl border border-border-light py-2 z-50"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="px-2">
            {SECTORS_NAV_LINKS.map((sector) => (
              <Link
                key={sector.name}
                href={sector.href}
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-accent-light-blue/5 transition-all group cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <div className={`flex items-center justify-center size-10 rounded-lg bg-accent-light-blue/10 ${sector.color === "text-accent-soft-green" ? "bg-accent-soft-green/10" : ""}`}>
                  <span className={`material-symbols-outlined ${sector.color} text-xl group-hover:scale-110 transition-transform`}>
                    {sector.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-primary group-hover:text-accent-light-blue transition-colors block">
                    {sector.name}
                  </span>
                </div>
                <span className="material-symbols-outlined text-lg text-slate-400 group-hover:text-accent-light-blue group-hover:translate-x-1 transition-all">
                  arrow_forward
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

