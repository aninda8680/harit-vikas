"use client";

import { motion } from "framer-motion";
import Image from "next/image";
type Project = {
  id: string;
  name: string;
  initiative: string;
  description: string;
  longDescription: string;
  url: string;
  image: string;
  tags: string[];
  status: "Live" | "In Development" | "Upcoming";
};

const projects: Project[] = [
  {
    id: "aim",
    name: "AIM",
    initiative: "Project Sayan",
    description:
      "Agricultural Intelligence & Monitoring — a real-time data and analytics platform for sustainable farm management.",
    longDescription:
      "AIM is the flagship data platform under Project Sayan, combining geotagged IoT sensor data, satellite imagery, and cloud analytics to give farmers and agronomists actionable insights on soil health, water usage, crop performance, and climate risk.",
    url: "https://aim.harit-vikas.com",
    image: "/placeholders/project-aim.svg",
    tags: ["IoT", "Cloud Analytics", "MRV", "AgriTech"],
    status: "Live",
  },
];
import { ArrowUpRight } from "lucide-react";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-[color:var(--color-hv-cream)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="hv-badge mb-6 inline-block">Our Projects</span>
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--color-hv-forest-dark)] leading-[1.1]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Building tools for a<br/><span className="italic text-[color:var(--color-hv-sage)]">sustainable future</span>
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <p className="text-[color:var(--color-hv-ink-mid)] max-w-sm text-right text-lg">
              Explore the real-world applications of our technology and consulting frameworks.
            </p>
          </div>
        </div>

        <motion.div 
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              variants={fadeUp}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden cursor-pointer shadow-[var(--shadow-soft)] hover:shadow-[0_20px_40px_-15px_rgba(10,51,40,0.15)] hover:-translate-y-2 transition-all duration-500 border border-[color:var(--color-hv-mist)]"
            >
              <div className="relative w-full h-[320px] overflow-hidden bg-[color:var(--color-hv-mist)]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-[10s] group-hover:scale-110 ease-out"
                  unoptimized={project.image.endsWith(".svg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2.5">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-500' : 'bg-amber-500'} shadow-[0_0_8px_currentColor]`} />
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[color:var(--color-hv-ink-dark)]">
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--color-hv-sage)] mb-4 block">
                  {project.initiative}
                </span>
                <h3 
                  className="text-2xl lg:text-3xl font-bold text-[color:var(--color-hv-forest-dark)] mb-4 leading-tight group-hover:text-[color:var(--color-hv-mint)] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.name}
                </h3>
                <p className="text-[color:var(--color-hv-ink-mid)] leading-relaxed mb-10 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 font-bold text-[color:var(--color-hv-forest)] group-hover:text-[color:var(--color-hv-sage)] transition-colors">
                  Visit Project
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
