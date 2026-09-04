"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sprout, Users, GraduationCap } from "lucide-react";

export default function ImpactPhotoSection() {
  return (
    <section className="px-4 md:px-6 py-16 lg:py-24 max-w-[90rem] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="relative w-full h-[70vh] min-h-[500px] md:min-h-[600px] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl group"
      >
        {/* Background Image with slow zoom on hover */}
        <Image
          src="/placeholders/impact-photo.png"
          alt="Harit Vikas impact in the field"
          fill
          className="object-cover transition-transform duration-[20s] group-hover:scale-110"
          unoptimized
        />
        
        {/* Targeted Gradient Overlays (avoiding muddying the whole image) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:w-3/4 lg:bg-gradient-to-tr lg:from-[color:var(--color-hv-forest-dark)]/90 lg:via-[color:var(--color-hv-forest-dark)]/40 lg:to-transparent mix-blend-multiply" />
        
        <div className="absolute inset-0 p-5 sm:p-8 md:p-14 lg:p-20 flex flex-col justify-between z-10">
          
          <div className="max-w-3xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold !text-white leading-[1.1] drop-shadow-md"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We build sustainable systems, reliable data, and <span className="italic !text-white">community-first impact.</span>
            </motion.h2>
          </div>

          {/* Bottom Content (Icons left, Stats right) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mt-auto w-full"
          >
            
            {/* Left: Focus Area Icon Chips */}
            <div className="flex flex-wrap gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl hover:bg-white/20 transition-colors" title="Sustainable Farming">
                <Sprout size={28} strokeWidth={1.5} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl hover:bg-white/20 transition-colors" title="Women Empowerment">
                <Users size={28} strokeWidth={1.5} />
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-xl hover:bg-white/20 transition-colors" title="Skill Development">
                <GraduationCap size={28} strokeWidth={1.5} />
              </div>
            </div>

            {/* Right: Small Stat Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white">
                <span className="font-bold text-sm text-[color:var(--color-hv-forest-dark)] tracking-wider">V1</span>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white">
                <span className="font-bold text-sm text-[color:var(--color-hv-forest-dark)] tracking-wider">R&amp;D</span>
              </div>
              <div className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md shadow-xl border border-white">
                <span className="font-bold text-sm text-[color:var(--color-hv-forest-dark)] tracking-wider">2026</span>
              </div>
            </div>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
