"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface TwoColumnSectionProps {
  eyebrow: string;
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaText?: string;
  ctaHref?: string;
  imageLeft?: boolean;
  id?: string;
}

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
};

export default function TwoColumnSection({
  eyebrow,
  headline,
  description,
  imageSrc,
  imageAlt,
  ctaText = "Contact Us",
  ctaHref = "#contact",
  imageLeft = false,
  id = "verticals",
}: TwoColumnSectionProps) {
  // Extract 2-digit index from eyebrow if present (e.g., "Vertical 01" -> "01"), or fallback
  const indexMatch = eyebrow.match(/\d+/);
  const sectionNumber = indexMatch
    ? indexMatch[0].padStart(2, "0")
    : id === "impact"
    ? "02"
    : "01";

  const imageContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.985 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="relative w-full aspect-[3/2] rounded-lg overflow-hidden shadow-[0_12px_36px_rgba(10,51,40,0.12)] bg-[#07241c]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-contain object-center"
        unoptimized={imageSrc.endsWith(".svg")}
        quality={90}
      />
    </motion.div>
  );

  const textContent = (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="relative z-10 flex flex-col justify-center"
    >
      {/* Oversized faint index watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-8 sm:-top-12 lg:-top-14 -left-2 sm:-left-3 lg:-left-6 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold leading-none text-[color:var(--color-hv-forest-dark)] opacity-[0.05] tracking-tighter -z-10"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {sectionNumber}
      </span>

      {/* Editorial eyebrow: label + horizontal rule */}
      <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4 lg:mb-5">
        <span className="text-[0.72rem] md:text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--color-hv-sage)]">
          {eyebrow}
        </span>
        <span
          className="h-px w-8 sm:w-12 bg-[color:var(--color-hv-sage)]/40"
          aria-hidden="true"
        />
      </motion.div>

      {/* Headline */}
      <motion.h2
        variants={fadeUp}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-bold text-[color:var(--color-hv-forest-dark)] leading-[1.14] tracking-tight mb-4 lg:mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {headline}
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="text-base lg:text-[1.05rem] text-[color:var(--color-hv-ink-mid)] leading-relaxed mb-6 lg:mb-8 max-w-xl font-normal"
      >
        {description}
      </motion.p>

      {/* Minimal underlined CTA */}
      <motion.div variants={fadeUp}>
        <a
          href={ctaHref}
          className="group inline-flex items-center gap-2.5 text-sm md:text-[0.925rem] font-semibold text-[color:var(--color-hv-forest-dark)] hover:text-[color:var(--color-hv-forest)] transition-colors py-1"
        >
          <span className="relative pb-0.5 border-b border-[color:var(--color-hv-forest-dark)]/40 group-hover:border-[color:var(--color-hv-forest-dark)] transition-colors">
            {ctaText}
          </span>
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1.5 text-[color:var(--color-hv-forest)]"
          />
        </a>
      </motion.div>
    </motion.div>
  );

  return (
    <section
      id={id}
      className="py-10 md:py-14 lg:py-16 bg-[color:var(--color-hv-cream)] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`flex flex-col ${
            imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-10 lg:gap-14 xl:gap-16`}
        >
          {/* Image column — 48% width on desktop, 3:2 full diagram presentation */}
          <div className="w-full lg:w-[48%] xl:w-[46%] shrink-0">
            {imageContent}
          </div>

          {/* Text column — 52% width on desktop */}
          <div className="w-full lg:w-[52%] xl:w-[54%]">
            {textContent}
          </div>
        </div>
      </div>
    </section>
  );
}
