"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="px-4 md:px-6 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="max-w-[90rem] mx-auto rounded-[2rem] md:rounded-[3rem] bg-[color:var(--color-hv-forest-dark)] p-8 sm:p-12 md:p-24 text-center relative overflow-hidden flex flex-col items-center shadow-2xl"
      >
        {/* Animated glowing orbs in background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[color:var(--color-hv-mint)]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-[spin_15s_linear_infinite]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[color:var(--color-hv-sage)]/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 animate-[spin_20s_linear_infinite_reverse]" />

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#fff" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        <span className="hv-badge-dark mb-10 relative z-10 shadow-lg">Let's Work Together</span>
        
        <h2 
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold !text-white max-w-5xl mb-6 sm:mb-8 leading-[1.1] relative z-10 drop-shadow-sm"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Partner with us to create <span className="italic !text-white">meaningful change.</span>
        </h2>
        
        <p className="text-lg md:text-xl text-green-50/80 max-w-2xl mb-14 relative z-10 leading-relaxed font-medium">
          Whether you're an investor looking for high-impact tech opportunities or an organization seeking to deploy sustainable infrastructure, we have the tools and the team to deliver.
        </p>

        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:info@harit-vikas.com"
          className="relative z-10 inline-flex items-center justify-center gap-3 bg-white text-[color:var(--color-hv-forest-dark)] px-10 py-5 rounded-full font-bold text-lg transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          Partner With Us
          <ArrowRight size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
