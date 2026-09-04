"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.4 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] max-h-[1000px] overflow-hidden">
      {/* Full-bleed photo */}
      <Image
        src="/bg.png"
        alt="Harit Vikas — lush green paddy field at golden hour"
        fill
        priority
        sizes="100vw"
        quality={90}
        className="object-cover object-center"
      />

      {/* Gradient overlays — heavy at bottom-left for text, light on right to let the photo breathe */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

      {/* Content — sits at the bottom, magazine-style */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-14 lg:px-20 pb-24 md:pb-32 lg:pb-40 pt-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Brand Heading with Company Logo */}
          <motion.div variants={fadeUp} className="mb-4 sm:mb-5 flex items-center gap-4 sm:gap-6">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex-shrink-0 drop-shadow-md">
              <Image
                src="/HV_logo_white.png"
                alt="Harit Vikas Logo"
                fill
                sizes="(max-width: 640px) 64px, (max-width: 1024px) 96px, 120px"
                className="object-contain"
                priority
              />
            </div>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide"
              style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
            >
              Harit Vikas
            </h2>
          </motion.div>

          {/* Main headline — large, white, sits on the image */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] mb-6 drop-shadow-sm"
            style={{ fontFamily: "var(--font-display)", color: "#ffffff" }}
          >
            Bridging IoT data and
            <br />
            on-ground action
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white leading-relaxed max-w-xl mb-8"
          >
            Deploying remote sensors, cloud analytics, and community workshops
            to drive verifiable environmental change across India.
          </motion.p>

          {/* CTAs + Stats row */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* CTA button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[color:var(--color-hv-forest)] hover:bg-[color:var(--color-hv-forest-dark)] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] group self-start"
            >
              Contact Us
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>

          </motion.div>
        </motion.div>
      </div>

      {/* SDG Logo on the right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-8 md:right-14 lg:right-20 top-1/2 -translate-y-1/2 z-10 hidden md:block"
      >
        <Image 
          src="/sdg.png" 
          alt="Sustainable Development Goals" 
          width={400} 
          height={400} 
          className="object-contain opacity-90 drop-shadow-lg"
        />
      </motion.div>

      {/* Bottom-right tagline — subtle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 right-8 md:right-14 lg:right-20 z-10 hidden md:block"
      >
        <span className="text-[0.7rem] font-semibold text-white/50 tracking-[0.15em] uppercase">
          Climate is changing, so should we.
        </span>
      </motion.div>
    </section>
  );
}
