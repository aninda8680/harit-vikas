"use client";

import { motion } from "framer-motion";
import { Sprout, Users, GraduationCap } from "lucide-react";
type FocusArea = {
  id: string;
  icon: string; // Lucide icon name
  title: string;
  description: string;
  color: string; // Tailwind color for accent
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

const iconMap: Record<string, React.ElementType> = {
  Sprout,
  Users,
  GraduationCap,
};

const colorMap: Record<
  string,
  { bg: string; border: string; icon: string; tag: string }
> = {
  green: {
    bg: "rgba(15,76,58,0.06)",
    border: "rgba(15,76,58,0.15)",
    icon: "#0F4C3A",
    tag: "#0F4C3A",
  },
  emerald: {
    bg: "rgba(26,107,83,0.06)",
    border: "rgba(26,107,83,0.15)",
    icon: "#1A6B53",
    tag: "#1A6B53",
  },
  teal: {
    bg: "rgba(74,140,111,0.08)",
    border: "rgba(74,140,111,0.2)",
    icon: "#4A8C6F",
    tag: "#4A8C6F",
  },
};

export default function FocusAreas() {
  return (
    <section
      id="focus-areas"
      className="section-pad bg-[color:var(--color-hv-white)]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="tag-chip mb-4 inline-block"
          >
            Impact Focus Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Driving change{" "}
            <span className="gradient-text">where it matters most</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg text-[color:var(--color-hv-ink-light)] leading-relaxed"
          >
            Our impact work is organized around three interconnected areas — each
            reinforcing the others toward a more equitable, resilient future.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {focusAreas.map((area, i) => {
            const Icon = iconMap[area.icon];
            const colors = colorMap[area.color] ?? colorMap.green;
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="card-base p-8 flex flex-col gap-5 cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: colors.bg,
                    border: `1.5px solid ${colors.border}`,
                  }}
                >
                  {Icon && (
                    <Icon
                      size={26}
                      strokeWidth={1.75}
                      style={{ color: colors.icon }}
                    />
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-hv-forest-dark)",
                  }}
                >
                  {area.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-hv-ink-light)" }}
                >
                  {area.description}
                </p>

                {/* Tag */}
                <div className="pt-2 border-t border-[color:var(--color-hv-mist)]">
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: colors.tag }}
                  >
                    Focus Area →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
