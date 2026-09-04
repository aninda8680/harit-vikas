"use client";

import { motion } from "framer-motion";
type TeamMember = {
  id: string;
  name: string;
  role: string;
  tag?: "Hardware" | "Software" | "Founder" | "Co-Founder";
  image: string;
  bio?: string;
  pending?: boolean;
};

const founders: TeamMember[] = [
  {
    id: "owner-1",
    name: "Sayan Chakraborty",
    role: "CEO & Co-Founder",
    tag: "Founder",
    image: "/placeholders/sayan.jpeg",
    bio: "Visionary leader driving Harit Vikas's mission at the intersection of technology and sustainability.",
  },
  {
    id: "owner-2",
    name: "Ankita Sen",
    role: "CTO & Co-Founder",
    tag: "Co-Founder",
    image: "/placeholders/ankita.jpeg",
    bio: "Technical architect behind our IoT and cloud analytics infrastructure.",
  },
  {
    id: "owner-3",
    name: "Subhadri Pal",
    role: "CFO & Co-Founder",
    tag: "Co-Founder",
    image: "/placeholders/Shubhadri.jpeg",
    bio: "Financial strategist ensuring sustainable growth and robust resource management.",
  },
  {
    id: "owner-4",
    name: "Jeet Biswas",
    role: "R&D Head & Co-Founder",
    tag: "Co-Founder",
    image: "/placeholders/Jeet.jpeg",
    bio: "Leading research and development for our next-generation environmental monitoring tools.",
  },
];

const coreTeam: TeamMember[] = [
  {
    id: "intern-1",
    name: "Aninda",
    role: "Software Intern",
    tag: "Software",
    image: "/placeholders/aninda.jpeg",
  },
  {
    id: "intern-2",
    name: "Pratyasha",
    role: "Software Intern",
    tag: "Software",
    image: "/placeholders/pratyasha.jpeg",
  },
  {
    id: "intern-3",
    name: "Shuvodip",
    role: "Hardware Intern",
    tag: "Hardware",
    image: "/placeholders/shuvodip.jpeg",
  },
  {
    id: "intern-4",
    name: "Somnath",
    role: "Hardware Intern",
    tag: "Hardware",
    image: "/placeholders/somnath.jpeg",
  },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

// Tag accent dot colors
const tagDotColor: Record<string, string> = {
  Founder: "bg-[color:var(--color-hv-mint)]",
  "Co-Founder": "bg-[color:var(--color-hv-sage)]",
  Hardware: "bg-amber-400",
  Software: "bg-sky-400",
};

const tagTextColor: Record<string, string> = {
  Founder: "text-[color:var(--color-hv-mint)]",
  "Co-Founder": "text-[color:var(--color-hv-sage)]",
  Hardware: "text-amber-400",
  Software: "text-sky-400",
};

/* ─────────────────────────────────────────────────────────
   FOUNDER PORTRAIT CARD
   Pure image card — no text overlay. Name, role & tag
   sit cleanly below the photo.
───────────────────────────────────────────────────────── */
function FounderCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group cursor-default"
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
    >
      {/* Photo — pure image, no overlay text */}
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-[color:var(--color-hv-forest-dark)] mb-4"
        style={{ aspectRatio: "3/4" }}
      >
        {!member.pending ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={`${member.name}, ${member.role} at Harit Vikas`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-hv-forest)] to-[color:var(--color-hv-forest-dark)]" />
        )}
        {/* Very subtle vignette at the bottom edge — no text on it */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Text below the card */}
      <div className="px-0.5">
        {!member.pending && (
          <h4
            className="text-[0.95rem] font-bold text-[color:var(--color-hv-forest-dark)] leading-tight mb-0.5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {member.name}
          </h4>
        )}
        <p className="text-[0.75rem] text-[color:var(--color-hv-ink-mid)] mb-2 leading-snug">
          {member.role}
        </p>
        {member.tag && (
          <span className="inline-flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tagDotColor[member.tag] ?? "bg-[color:var(--color-hv-sage)]"
                }`}
            />
            <span
              className={`text-[0.62rem] font-bold uppercase tracking-widest ${tagTextColor[member.tag] ?? "text-[color:var(--color-hv-sage)]"
                }`}
            >
              {member.tag}
            </span>
          </span>
        )}
      </div>
    </motion.div>
  );
}


/* ─────────────────────────────────────────────────────────
   CORE TEAM ROW
   Minimal horizontal strip: index number + small square
   photo + name/role + dot tag. No box, just a thin rule.
───────────────────────────────────────────────────────── */
function CoreTeamRow({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group flex items-center gap-5 py-5 border-b border-[color:var(--color-hv-mist)] last:border-b-0 hover:bg-[color:var(--color-hv-cream-dark)]/40 -mx-4 px-4 rounded-lg transition-colors duration-300 cursor-default"
    >
      {/* Index */}
      <span
        className="text-2xl font-light text-[color:var(--color-hv-mist)] w-7 text-right flex-shrink-0 select-none tabular-nums"
        style={{ fontFamily: "var(--font-display)" }}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Square photo */}
      <div className="relative w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 border border-[color:var(--color-hv-mist)]">
        {member.pending ? (
          <div className="w-full h-full bg-gradient-to-br from-[color:var(--color-hv-mist)] to-[color:var(--color-hv-cream-dark)] flex items-center justify-center">
            <span className="text-xs font-bold text-[color:var(--color-hv-forest-mid)]">
              {member.name.charAt(0)}
            </span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={`${member.name}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* Name + Role */}
      <div className="flex-1 min-w-0">
        <p
          className="font-semibold text-[color:var(--color-hv-forest-dark)] text-sm leading-tight truncate"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {member.pending ? "—" : member.name}
        </p>
        <p className="text-xs text-[color:var(--color-hv-ink-light)] mt-0.5 truncate">
          {member.role}
        </p>
      </div>

      {/* Tag dot + label */}
      {member.tag && (
        <span className="flex items-center gap-1.5 flex-shrink-0">
          <span
            className={`w-2 h-2 rounded-full ${tagDotColor[member.tag] ?? "bg-[color:var(--color-hv-sage)]"}`}
          />
          <span className="text-[0.65rem] font-semibold uppercase tracking-widest text-[color:var(--color-hv-ink-light)]">
            {member.tag}
          </span>
        </span>
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   SECTION
───────────────────────────────────────────────────────── */
export default function Team() {
  return (
    <section
      id="team"
      className="py-14 sm:py-20 lg:py-28 bg-gradient-to-b from-[color:var(--color-hv-cream)] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header — left-aligned, label + rule */}
        <div className="mb-10 sm:mb-16">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-[color:var(--color-hv-sage)]">
              Our Team
            </span>
            <span className="h-px w-10 bg-[color:var(--color-hv-sage)]/40" aria-hidden="true" />
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-bold text-[color:var(--color-hv-forest-dark)] leading-[1.1] tracking-tight max-w-xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The people behind the{" "}
            <span className="italic font-normal text-[color:var(--color-hv-sage)]">mission</span>
          </h2>
        </div>

        {/* Two-column: founder portraits left, core team roster right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">

          {/* Left: Founder portrait grid */}
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[color:var(--color-hv-forest)]/60 mb-6">
              Founders &amp; Owners
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4"
            >
              {founders.map((member) => (
                <FounderCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>

          {/* Right: Core team roster */}
          <div className="lg:pt-10">
            <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[color:var(--color-hv-forest)]/60 mb-2">
              Core Team — Engineering
            </p>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {coreTeam.map((member, i) => (
                <CoreTeamRow key={member.id} member={member} index={i} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
