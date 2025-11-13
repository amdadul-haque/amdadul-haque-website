"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiWebflow,
  SiFramer,
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "#eee" }, // black
  { name: "React", icon: SiReact, color: "#61DAFB" }, // blue
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // blue
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }, // cyan
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" }, // green
  { name: "Express", icon: SiExpress, color: "#eee" }, // black
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // green
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }, // blue
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }, // yellow
  { name: "Webflow", icon: SiWebflow, color: "#eee" }, // black
  { name: "Framer", icon: SiFramer, color: "#0055FF" }, // blue
];

const SkillsScroll = () => {
  return (
    <section className="border- bg-[#222] py-10">
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 text-xl font-semibold uppercase tracking-wider"
                style={{ color: skill.color }}
              >
                <Icon className="text-3xl" />
                <span>{skill.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export { SkillsScroll };
