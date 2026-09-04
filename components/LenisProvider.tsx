"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Fixed pill nav offset so anchored sections don't hide underneath it.
const ANCHOR_OFFSET = -88;

export default function LenisProvider() {
  useEffect(() => {
    // Respect users who ask for reduced motion — leave native scrolling alone.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId = requestAnimationFrame(function loop(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    });

    // Route in-page anchor clicks through Lenis so they glide instead of jump.
    // Native CSS `scroll-behavior: smooth` is removed in globals.css because
    // it fights Lenis; this handler is its replacement.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        history.pushState(null, "", window.location.pathname);
        return;
      }
      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, {
        offset: ANCHOR_OFFSET,
        duration: 1.4,
      });
      history.pushState(null, "", hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
      (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
    };
  }, []);

  return null;
}
