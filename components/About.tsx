"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const capabilities = [
  {
    num: "01",
    title: "IoT + Geotagged Data",
    desc: "Real-time sensor networks capturing precise field conditions and resource telemetry.",
  },
  {
    num: "02",
    title: "Cloud Analytics",
    desc: "Transforming raw environmental data into actionable dashboards and predictive models.",
  },
  {
    num: "03",
    title: "MRV Frameworks",
    desc: "Rigorous verification systems bringing transparency to sustainability claims and carbon tracking.",
  },
  {
    num: "04",
    title: "Community Programs",
    desc: "On-ground training and capacity building to ensure technology creates lasting human value.",
  },
  {
    num: "05",
    title: "Hardware R&D",
    desc: "Proprietary research building the next generation of resilient environmental monitoring tools.",
  },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full min-h-screen lg:min-h-[90vh] flex items-center bg-white overflow-hidden py-24"
    >
      {/* Parallax Background Glow */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-[color:var(--color-hv-forest)]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 lg:items-center">
          
          {/* Left Column - 40% */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tag-chip mb-8 inline-block self-start"
            >
              What We Do
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--color-hv-forest-dark)] leading-[1.1] mb-8 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Technology in service of the planet.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[color:var(--color-hv-ink-light)] leading-relaxed font-light max-w-md mb-12"
            >
              Harit Vikas combines proprietary hardware, cloud platforms, and community programs to create scalable environmental impact.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link 
                href="#impact" 
                className="group flex items-center gap-3 text-sm tracking-widest uppercase font-bold text-[color:var(--color-hv-forest)] hover:text-[color:var(--color-hv-forest-dark)] transition-colors"
              >
                Learn how it works
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - 60% */}
          <div className="w-full lg:w-[60%] flex flex-col justify-center">
            <motion.ul
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="w-full flex flex-col border-t border-[color:var(--color-hv-mist)]"
            >
              {capabilities.map((cap) => (
                <motion.li
                  key={cap.num}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="group relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-8 border-b border-[color:var(--color-hv-mist)] hover:bg-[color:var(--color-hv-mist)]/10 transition-colors duration-500 -mx-6 px-6 sm:mx-0 sm:px-4 rounded-xl"
                >
                  {/* Oversized faint number */}
                  <span 
                    className="text-4xl md:text-5xl font-light text-[color:var(--color-hv-mist)] transition-colors duration-500 group-hover:text-[color:var(--color-hv-sage)]/60 leading-none shrink-0" 
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {cap.num}
                  </span>
                  
                  {/* Text content */}
                  <div className="flex flex-col pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-[color:var(--color-hv-forest-dark)] tracking-tight mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-base md:text-lg text-[color:var(--color-hv-ink-light)] leading-relaxed font-normal max-w-xl">
                      {cap.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
