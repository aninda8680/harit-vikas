"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

export default function DevelopmentPath() {
  return (
    <section id="about" className="py-14 sm:py-24 lg:py-32 bg-[color:var(--color-hv-cream)] relative overflow-hidden">
      {/* Subtle abstract background accent */}
      <div className="absolute top-0 right-0 w-full max-w-[800px] h-[800px] bg-[color:var(--color-hv-sage)]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="lg:col-span-5 flex flex-col items-start text-left"
          >
            <motion.span variants={fadeUp} className="hv-badge mb-6 self-start">
              About Us
            </motion.span>
            
            <motion.h2 
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--color-hv-forest-dark)] leading-[1.1] mb-8 sm:mb-12 break-words"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our development path:<br/>from idea to impact
            </motion.h2>
            
            {/* Artistic dual image block */}
            <motion.div variants={fadeUp} className="relative w-full max-w-[340px] aspect-[0.85] mx-auto lg:mx-0 mt-8">
              {/* Top Right Image */}
              <div className="absolute top-0 right-0 w-[80%] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-0">
                 <Image 
                   src="/dev-path-1.png" 
                   alt="Harit Vikas sustainable development" 
                   fill 
                   sizes="(max-width: 768px) 100vw, 33vw"
                   className="object-cover hover:scale-105 transition-transform duration-700" 
                 />
              </div>
              {/* Bottom Left Image */}
              <div className="absolute bottom-0 left-0 w-[70%] aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-[color:var(--color-hv-cream)] z-10 hover:scale-[1.03] transition-transform duration-500 group">
                 <Image 
                   src="/dev-path-2.png" 
                   alt="Harit Vikas on-ground action" 
                   fill 
                   sizes="(max-width: 768px) 100vw, 33vw"
                   className="object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="lg:col-span-7 flex flex-col justify-center lg:pl-8 lg:pt-8"
          >
            <div className="prose prose-lg text-[color:var(--color-hv-ink-mid)] max-w-none">
              <motion.p variants={fadeUp} className="text-xl md:text-2xl leading-relaxed mb-8 text-[color:var(--color-hv-ink-dark)] font-medium">
                Harit Vikas operates at the critical intersection where technical innovation meets sustainable development. We believe that technology should serve the planet, not extract from it.
              </motion.p>
              
              <motion.div variants={fadeUp} className="h-px w-full bg-[color:var(--color-hv-mist)] my-10" />
              
              <motion.p variants={fadeUp} className="text-lg leading-loose mb-6 text-[color:var(--color-hv-ink)]">
                Our approach is rooted in three core technological pillars:
              </motion.p>
              
              <ul className="space-y-6 text-base md:text-lg">
                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-hv-forest)] mt-2.5 flex-shrink-0 shadow-[0_0_8px_var(--color-hv-forest)]" />
                  <span className="leading-relaxed"><strong className="text-[color:var(--color-hv-forest-dark)] font-semibold">IoT & Geotagged Data:</strong> Deploying rugged sensor networks to capture real-time, ground-truth environmental data.</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-hv-forest)] mt-2.5 flex-shrink-0 shadow-[0_0_8px_var(--color-hv-forest)]" />
                  <span className="leading-relaxed"><strong className="text-[color:var(--color-hv-forest-dark)] font-semibold">Cloud Analytics:</strong> Transforming raw telemetry into actionable dashboards and predictive agricultural models.</span>
                </motion.li>
                <motion.li variants={fadeUp} className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-[color:var(--color-hv-forest)] mt-2.5 flex-shrink-0 shadow-[0_0_8px_var(--color-hv-forest)]" />
                  <span className="leading-relaxed"><strong className="text-[color:var(--color-hv-forest-dark)] font-semibold">MRV (Monitoring, Reporting, Verification):</strong> Bringing algorithmic transparency and credibility to sustainability claims.</span>
                </motion.li>
              </ul>
              
              <motion.div 
                variants={fadeUp} 
                className="mt-14 p-8 bg-[color:var(--color-hv-white)] rounded-3xl border border-[color:var(--color-hv-mist)] shadow-[var(--shadow-soft)] hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-hv-forest)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="font-semibold text-[color:var(--color-hv-forest)] mb-3 text-sm uppercase tracking-[0.2em]">Our Reach</p>
                  <p className="text-2xl md:text-3xl leading-snug text-[color:var(--color-hv-ink-dark)]" style={{ fontFamily: "var(--font-display)" }}>
                    Connecting <span className="text-[color:var(--color-hv-sage)] italic font-semibold">technology and people</span> across multiple focus areas to build a resilient future.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
