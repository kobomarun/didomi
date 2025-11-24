import Logo from "./Logo";
import SectorsDropdown from "./SectorsDropdown";
import Link from "next/link";
import { MAIN_NAV_LINKS } from "@/data/navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light px-6 sm:px-10 py-4 sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <Link href="/" className="flex items-center">
        <Logo textSize="sm" iconSize={36} className="flex-row gap-3" />
      </Link>
      <nav className="hidden md:flex flex-1 justify-center gap-8 items-center">
        <Link className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors" href="/">
          Home
        </Link>
        <Link className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors" href="/about">
          About
        </Link>
        <SectorsDropdown />
        <Link className="text-sm font-medium leading-normal text-primary hover:text-accent-light-blue transition-colors" href="#">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-4">
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

