"use client";
import { useState, useEffect } from "react";
import { data } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0B]/85 backdrop-blur-2xl border-b border-[#27272A]"
          : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="font-mono text-sm tracking-widest text-[#A1A1AA] hover:text-[#F59E0B] transition-colors">
          <span className="font-display text-2xl tracking-widest text-[#FAFAFA]">APK</span>
          <span className="cursor-blink text-[#F59E0B] ml-0.5">_</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-ul font-mono text-xs text-[#52525B] hover:text-[#E4E4E7] tracking-widest uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side — Resume + status pill */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={data.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-sm border border-[#F59E0B]/40 text-[#F59E0B] font-mono text-xs tracking-wider hover:bg-[#F59E0B]/8 transition-all duration-200"
          >
            Resume ↗
          </a>
          <a
            href="mailto:anaghapk2005@gmail.com"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#27272A] bg-[#18181B] hover:border-[#F59E0B]/40 transition-colors group"
          >
            <span className="pulse-dot relative w-2 h-2 rounded-full bg-[#4ADE80] flex-shrink-0" />
            <span className="font-mono text-xs text-[#52525B] group-hover:text-[#A1A1AA] transition-colors tracking-wider">
              Open to Work
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
