"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[1000px] overflow-hidden">
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

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

      {/* ── MOBILE layout: flex column, content top → SDG bottom ── */}
      <div className="absolute inset-0 flex flex-col justify-between px-5 pt-24 pb-8 md:hidden">
        {/* Text content near top */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-sm"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="mb-3 flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/HV_logo_white.png"
                alt="Harit Vikas Logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <h2
              className="text-xl font-bold tracking-wide !text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Harit Vikas
            </h2>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-[1.85rem] leading-[1.1] font-bold mb-3 drop-shadow-sm !text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bridging IoT data and
            <br />
            on-ground action
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm text-white/80 leading-relaxed mb-5 max-w-[280px]"
          >
            Deploying remote sensors, cloud analytics, and community workshops
            to drive verifiable environmental change across India.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[color:var(--color-hv-forest)] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-300 group"
            >
              Contact Us
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        {/* SDG logo pinned to bottom on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="flex justify-center"
        >
          <Image
            src="/sdg.png"
            alt="Sustainable Development Goals"
            width={300}
            height={300}
            className="object-contain opacity-90 drop-shadow-lg"
          />
        </motion.div>
      </div>

      {/* ── DESKTOP layout: content bottom-left, SDG centered-right ── */}
      <div className="absolute inset-0 hidden md:flex flex-col justify-end px-14 lg:px-20 pb-32 lg:pb-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-5">
            <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 drop-shadow-md">
              <Image
                src="/HV_logo_white.png"
                alt="Harit Vikas Logo"
                fill
                sizes="(max-width: 1024px) 80px, 96px"
                className="object-contain"
                priority
              />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide !text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Harit Vikas
            </h2>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl lg:text-[5rem] font-bold leading-[1.05] mb-6 drop-shadow-sm !text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bridging IoT data and
            <br />
            on-ground action
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-8"
          >
            Deploying remote sensors, cloud analytics, and community workshops
            to drive verifiable environmental change across India.
          </motion.p>

          <motion.div variants={fadeUp}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[color:var(--color-hv-forest)] hover:bg-[color:var(--color-hv-forest-dark)] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.35)] group"
            >
              Contact Us
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* SDG Logo — desktop only, right side */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute right-10 md:right-14 lg:right-20 top-1/2 -translate-y-1/2 z-10 hidden md:block"
      >
        <Image
          src="/sdg.png"
          alt="Sustainable Development Goals"
          width={300}
          height={300}
          className="object-contain opacity-90 drop-shadow-lg lg:w-[380px] lg:h-[380px]"
        />
      </motion.div>

      {/* Bottom tagline — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-5 right-5 md:right-14 lg:right-20 z-10 hidden md:block"
      >
        <span className="text-[0.65rem] font-semibold text-white/40 tracking-[0.15em] uppercase">
          Climate is changing, so should we.
        </span>
      </motion.div>
    </section>
  );
}
