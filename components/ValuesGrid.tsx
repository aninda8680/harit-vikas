"use client";

import { useState } from "react";
import { motion } from "framer-motion";
type FocusArea = {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
};

const focusAreas: FocusArea[] = [
  {
    id: "farming",
    icon: "Sprout",
    title: "Sustainable Farming",
    description:
      "We tackle soil degradation, water scarcity, and climate variability by equipping farmers with better practices, precision data tools, multi-cropping education, and long-term economic support — making agriculture both resilient and profitable.",
    color: "green",
  },
  {
    id: "women",
    icon: "Users",
    title: "Women Empowerment",
    description:
      "From safe work environments to supply chain transparency, we challenge systemic barriers — traditional gender roles, limited educational access, workplace discrimination — through gender-sensitive policy advocacy and community programs.",
    color: "emerald",
  },
  {
    id: "skills",
    icon: "GraduationCap",
    title: "Skill Development",
    description:
      "We counter rural education dropout and youth unemployment through digital literacy programs, technical vocational training, and climate-resilient livelihood pathways — especially for underserved communities in remote areas.",
    color: "teal",
  },
];
import { ArrowRight } from "lucide-react";

export default function ValuesGrid() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="focus-areas" className="py-14 sm:py-24 lg:py-32 bg-[color:var(--color-hv-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top: Title */}
        <div className="max-w-4xl mb-10 sm:mb-16">
           <span className="hv-badge mb-4 sm:mb-6">Our Focus</span>
           <h2 
             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--color-hv-forest-dark)] leading-[1.1]"
             style={{ fontFamily: "var(--font-display)" }}
           >
             Our focus areas,<br/>which drive <span className="italic text-[color:var(--color-hv-sage)]">everything we do</span>
           </h2>
        </div>

        {/* Bottom: The 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area, idx) => {
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={area.id}
                layout
                onMouseEnter={() => setActiveIndex(idx)}
                className={`
                  cursor-pointer rounded-[2rem] p-8 md:p-10 w-full
                  transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] flex flex-col justify-between min-h-[340px] sm:min-h-[420px] lg:min-h-[480px] text-white
                  bg-[color:var(--color-hv-forest-dark)]
                  ${isActive 
                    ? "shadow-[0_20px_40px_-15px_rgba(10,51,40,0.5)] scale-[1.02] border border-white/20 z-10 relative opacity-100" 
                    : "shadow-sm border border-white/5 scale-100 opacity-90 z-0"
                  }
                `}
              >
                <div>
                  <span className="text-6xl md:text-7xl font-bold opacity-20 mb-8 block text-white transition-colors duration-500" style={{ fontFamily: "var(--font-display)" }}>
                    0{idx + 1}
                  </span>
                  <h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white transition-colors duration-500"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {area.title}
                  </h3>
                  
                  <div className="mt-8">
                    <p className={`text-sm lg:text-base leading-relaxed transition-all duration-500 ${isActive ? 'text-white/95' : 'text-white/70'}`}>
                      {area.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 flex justify-end">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 bg-white text-[color:var(--color-hv-forest-dark)] ${isActive ? 'shadow-lg scale-110 opacity-100' : 'opacity-70'}`}>
                     <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
