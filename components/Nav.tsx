"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Verticals", href: "#verticals" },
  { label: "Focus Areas", href: "#focus-areas" },
  { label: "Team", href: "#team" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock while mobile menu is open.
  // When Lenis is active, also stop()/start() it so the smoothed
  // virtual scroll doesn't keep gliding behind the open drawer.
  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (menuOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-5 md:px-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className={`
            w-full max-w-6xl rounded-full border
            flex items-center justify-between
            px-4 py-2.5 md:px-6 md:py-3
            transition-all duration-500
            ${scrolled
              ? "bg-[color:var(--color-hv-white)]/95 backdrop-blur-xl border-[color:var(--color-hv-mist)] shadow-[var(--shadow-nav)]"
              : "bg-black/20 backdrop-blur-md border-white/15 shadow-none"
            }
          `}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group" onClick={closeMenu}>
            <span className="relative block w-8 h-8 shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Harit Vikas logo"
                fill
                sizes="32px"
                className="object-contain mix-blend-screen"
              />
            </span>
            <span
              className={`font-semibold text-sm tracking-tight transition-colors duration-500 ${scrolled ? "text-[color:var(--color-hv-forest-dark)]" : "text-white"}`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              Harit Vikas
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs font-semibold tracking-wide transition-colors duration-300 hover:opacity-100 ${scrolled ? "text-[color:var(--color-hv-ink-mid)] hover:text-[color:var(--color-hv-forest)]" : "text-white/90 hover:text-white"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-dark text-xs py-2 px-4 gap-1.5">
              Contact Us
              <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile hamburger — X when open */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-full transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`w-4 h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-[color:var(--color-hv-ink)]" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-4 h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-[color:var(--color-hv-ink)]" : "bg-white"} ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-4 h-0.5 rounded transition-all duration-300 ${scrolled ? "bg-[color:var(--color-hv-ink)]" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </motion.nav>
      </header>

      {/* ─── Mobile Menu ─────────────────────────────────────────────────
          Rendered OUTSIDE the pill nav (not inside header) so it is never
          clipped by the nav's overflow or border-radius. It sits as a
          full-screen overlay above everything except z-50 header. */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop — click to close */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              aria-hidden="true"
              onClick={closeMenu}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="fixed top-[72px] left-4 right-4 z-50 bg-[color:var(--color-hv-white)] rounded-3xl border border-[color:var(--color-hv-mist)] shadow-[var(--shadow-card)] p-6 flex flex-col gap-1 md:hidden"
            >
              {/* Close button inside drawer */}
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[color:var(--color-hv-cream)] flex items-center justify-center text-[color:var(--color-hv-ink-mid)] hover:text-[color:var(--color-hv-forest)] transition-colors"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 pt-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: i * 0.04, ease: "easeOut" }}
                    className="flex items-center justify-between text-sm font-semibold text-[color:var(--color-hv-ink)] hover:text-[color:var(--color-hv-forest)] py-3 px-2 border-b border-[color:var(--color-hv-mist)] last:border-0 transition-colors group"
                  >
                    {link.label}
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[color:var(--color-hv-forest)]" />
                  </motion.a>
                ))}
              </nav>

              {/* CTA */}
              <a
                href="#contact"
                onClick={closeMenu}
                className="btn-dark text-sm text-center justify-center mt-4"
              >
                Contact Us <ArrowRight size={14} />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
