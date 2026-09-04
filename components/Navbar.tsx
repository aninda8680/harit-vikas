"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Verticals", href: "#verticals" },
  { label: "Impact", href: "#focus-areas" },
  { label: "Projects", href: "#projects" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const lastScrollY = useRef(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY < lastScrollY.current) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        // Optional: hide immediately on scroll down
        // setIsHidden(true);
      }

      lastScrollY.current = currentScrollY;

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      if (currentScrollY > 50) {
        timeoutId.current = setTimeout(() => {
          setIsHidden(true);
        }, 3000);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/80 backdrop-blur-md shadow-sm border-b border-[color:var(--color-hv-mist)]"
          : "py-5 bg-transparent"
      } ${isHidden ? "md:-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[color:var(--color-hv-forest)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
              HV
            </span>
          </div>
          <span
            className="font-bold text-lg text-[color:var(--color-hv-forest-dark)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Harit Vikas
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-[color:var(--color-hv-ink-light)] hover:text-[color:var(--color-hv-forest)] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[color:var(--color-hv-sage)] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-[color:var(--color-hv-forest)] text-white hover:bg-[color:var(--color-hv-forest-dark)] transition-all duration-200 hover:shadow-lg hover:shadow-green-900/20 hover:-translate-y-0.5"
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-[color:var(--color-hv-mist)] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`w-5 h-0.5 bg-[color:var(--color-hv-ink)] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-0.5 bg-[color:var(--color-hv-ink)] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-0.5 bg-[color:var(--color-hv-ink)] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-[color:var(--color-hv-mist)]"
          >
            <ul className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-base font-medium text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-5 py-2.5 rounded-full text-sm font-semibold bg-[color:var(--color-hv-forest)] text-white"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
