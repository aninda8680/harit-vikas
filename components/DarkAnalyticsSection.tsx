"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { Satellite, Sprout } from "lucide-react";
import Image from "next/image";

// Shared motion config — expo-out easing, fires once on scroll
const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT } },
};

type Stat = {
  id: string;
  label: string;
  target: number;
  decimals?: number;
  suffix?: string;
};

const analyticsStats: Stat[] = [
  { id: "hectares", label: "Hectares Monitored", target: 500, suffix: "+" },
  { id: "datapoints", label: "Data Points Collected", target: 1.2, decimals: 1, suffix: "M+" },
  { id: "farms", label: "Partner Farms", target: 40, suffix: "+" },
];

function AnimatedNumber({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(`0${decimals > 0 ? `.${"0".repeat(decimals)}` : ""}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE_OUT,
      onUpdate: (v) => setDisplay(`${v.toFixed(decimals)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, target, decimals, suffix]);

  return <span ref={ref}>{display}</span>;
}

export default function DarkAnalyticsSection() {
  return (
    <section className="bg-[color:var(--color-hv-forest-dark)] py-14 md:py-16 lg:py-20 relative overflow-hidden text-white">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[color:var(--color-hv-mint)]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-x-16 lg:gap-y-10 items-start"
        >
          {/* 1 — Headline (left third) */}
          <motion.div variants={fadeUp} className="flex flex-col">
            {/* Editorial eyebrow: label + thin rule (matches TwoColumnSection) */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[0.72rem] md:text-xs font-semibold tracking-[0.2em] uppercase text-[color:var(--color-hv-mint)]">
                Global Reach
              </span>
              <span className="h-px w-8 sm:w-12 bg-[color:var(--color-hv-mint)]/40" aria-hidden="true" />
            </div>

            <h2
              className="text-4xl xl:text-5xl font-bold text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building systems for
              <br />
              <span className="text-[color:var(--color-hv-mint)] italic font-normal">
                verifiable impact
              </span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-white/65 max-w-xs font-normal">
              Ground-truth telemetry, rigorously collected and independently verifiable.
            </p>

            {/* Incidental photo strip — corner accent, not a hero block */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-2 pr-4 max-w-xs">
              <span className="relative block w-16 h-11 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/field-ops-wide.png"
                  alt="Harit Vikas field monitoring"
                  fill
                  sizes="64px"
                  className="object-cover"
                  quality={75}
                />
              </span>
              <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-wide text-white/80">
                <Satellite size={13} className="text-[color:var(--color-hv-mint)] shrink-0" />
                Live field monitoring
              </span>
            </div>
          </motion.div>

          {/* 2 — Oversized numerals (right two-thirds) */}
          <motion.div variants={fadeUp}>
            <dl className="grid grid-cols-3 gap-6 sm:gap-10">
              {analyticsStats.map((stat) => (
                <div key={stat.id} className="border-t border-white/15 pt-4 sm:pt-5">
                  <dd
                    className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <AnimatedNumber
                      target={stat.target}
                      decimals={stat.decimals ?? 0}
                      suffix={stat.suffix ?? ""}
                    />
                  </dd>
                  <dt className="mt-2.5 text-[0.65rem] sm:text-xs text-[color:var(--color-hv-mint)]/80 uppercase tracking-[0.14em] font-semibold leading-relaxed">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* 3 — Minimal split-bar data viz, low-chrome on dark bg */}
          <motion.div variants={fadeUp} className="lg:col-start-2">
            <div className="mt-2 lg:mt-4 lg:ml-0">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                <Sprout size={14} className="text-[color:var(--color-hv-mint)]" />
                Distribution by Vertical
              </p>

              {/* Single line divided into two proportional segments */}
              <div
                className="flex w-full h-[3px] rounded-full overflow-hidden bg-white/15"
                role="img"
                aria-label="Resource distribution: 40 percent Space Sciences R and D, 60 percent Impact Vertical"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "40%" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.4, delay: 0.3, ease: EASE_OUT }}
                  className="h-full bg-[color:var(--color-hv-mint)]"
                />
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.4, delay: 0.45, ease: EASE_OUT }}
                  className="h-full bg-[color:var(--color-hv-sage)]"
                />
              </div>

              <div className="mt-3 flex items-start justify-between gap-4 text-sm">
                <span className="text-white/85 font-medium">
                  Space Sciences R&amp;D{" "}
                  <span className="ml-1 font-bold text-white">40%</span>
                </span>
                <span className="text-right text-white/85 font-medium">
                  Impact Vertical{" "}
                  <span className="ml-1 font-bold text-white">60%</span>
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
