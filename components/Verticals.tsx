"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], delay: i * 0.12 },
  }),
};

const verticals = [
  {
    id: "space-sciences",
    badge: "HV Space Sciences R&D",
    emoji: "🛰️",
    headline: "Where Hardware Meets Data",
    description:
      "Our R&D vertical is the technical engine of Harit Vikas — a dual-track team building the hardware and software that power next-generation environmental monitoring.",
    teams: [
      {
        name: "Hardware Team",
        icon: "⚙️",
        desc: "Custom IoT device development — sensors, embedded systems, and field-deployable monitoring stations engineered for rugged rural environments.",
      },
      {
        name: "Software Team",
        icon: "💻",
        desc: "Data platform and cloud analytics — collecting, processing, and visualising sensor telemetry at scale to power decision-making.",
      },
    ],
    initiative: {
      name: "Project saaya",
      desc: "Our active flagship initiative — covering Sustainable Farming intelligence and precision Data Plotting across agricultural regions.",
    },
    accentBg: "from-[#0A3328] to-[#0F4C3A]",
  },
  {
    id: "impact",
    badge: "Impact Vertical",
    emoji: "🌍",
    headline: "Sustainability Meets Community",
    description:
      "Our impact vertical translates technology into real-world change — driving eco-friendly farming, affordable sustainable housing, and skills that future-proof livelihoods.",
    teams: [
      {
        name: "Eco-Friendly Farming",
        icon: "🌾",
        desc: "Introducing regenerative and sustainable practices that improve yield, reduce chemical dependency, and build climate resilience for smallholder farmers.",
      },
      {
        name: "Innovative Housing",
        icon: "🏡",
        desc: "Exploring low-carbon, affordable housing solutions that serve rural and semi-urban communities without compromising on dignity or sustainability.",
      },
      {
        name: "Skill Development",
        icon: "📚",
        desc: "Running programs that equip communities — especially women and youth — with digital skills, technical know-how, and pathways to green jobs.",
      },
    ],
    accentBg: "from-[#1A6B53] to-[#4A8C6F]",
  },
];

export default function Verticals() {
  return (
    <section id="verticals" className="section-pad bg-[color:var(--color-hv-cream)] overflow-hidden">
      {/* Background decoration */}
      <div className="relative">
        <div
          className="blob w-[500px] h-[500px] bg-[color:var(--color-hv-mist)] top-0 right-0 -z-0"
          style={{ animationDuration: "24s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="tag-chip mb-4 inline-block"
          >
            Our Business Verticals
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Two pillars,{" "}
            <span className="gradient-text">one mission</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-lg text-[color:var(--color-hv-ink-light)] leading-relaxed"
          >
            Harit Vikas is structured around two complementary verticals — one
            builds the tools, the other deploys them for lasting social and
            environmental impact.
          </motion.p>
        </div>

        {/* Verticals grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {verticals.map((v, vi) => (
            <motion.div
              key={v.id}
              custom={vi}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col rounded-3xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Dark header */}
              <div className={`bg-gradient-to-br ${v.accentBg} p-8 text-white`}>
                <span className="text-sm font-semibold tracking-widest uppercase text-green-300/70 mb-2 block">
                  {v.badge}
                </span>
                <div className="text-4xl mb-3">{v.emoji}</div>
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3 text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {v.headline}
                </h3>
                <p className="text-green-100/80 leading-relaxed text-sm sm:text-base">
                  {v.description}
                </p>
              </div>

              {/* Light body */}
              <div className="bg-white flex-1 p-8 flex flex-col gap-5">
                <div className="space-y-4">
                  {v.teams.map((team) => (
                    <div key={team.name} className="flex gap-3">
                      <span className="text-xl mt-0.5 flex-shrink-0">{team.icon}</span>
                      <div>
                        <p className="font-semibold text-sm text-[color:var(--color-hv-forest-dark)] mb-0.5">
                          {team.name}
                        </p>
                        <p className="text-sm text-[color:var(--color-hv-ink-light)] leading-relaxed">
                          {team.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Initiative badge */}
                {v.initiative && (
                  <div className="mt-auto pt-5 border-t border-[color:var(--color-hv-mist)]">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[color:var(--color-hv-cream)]">
                      <span className="text-xl">🚀</span>
                      <div>
                        <p className="font-bold text-sm text-[color:var(--color-hv-forest)]">
                          Active Initiative: {v.initiative.name}
                        </p>
                        <p className="text-xs text-[color:var(--color-hv-ink-light)] mt-0.5 leading-relaxed">
                          {v.initiative.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
