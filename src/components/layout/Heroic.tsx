"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils"; // Import the cn utility
import { FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { PiSquaresFour } from "react-icons/pi"; // placeholder for shadcn/ui

const technologies = [
  {
    name: "Next.js",
    icon: <SiNextdotjs size={16} />,
  },
  {
    name: "Shadcn/ui",
    icon: <PiSquaresFour size={16} />,
  },
  {
    name: "Tailwindcss",
    icon: <SiTailwindcss size={16} />,
  },
];

const HeroicSection = () => {
  return (
    <section className={cn("relative min-h-[calc(100vh-4rem)] px-6 py-24 text-center")}>
      {/* Top Badge Link */}
      <motion.a
        href="#"
        className={cn(
          "mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium",
          "bg-foreground text-primary",
          "transition-colors hover:opacity-90"
        )}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Backed by ▲ Vercel OSS
      </motion.a>

      {/* Main Heading */}
      <motion.h1
        className={cn(
          "text-foreground mb-4 text-4xl leading-tight font-extrabold md:text-6xl"
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        You Sketch It.
        <br /> We Make It Real.
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className={cn(
          "text-secondary mx-auto mb-10 max-w-lg text-sm font-medium"
        )}
        initial={{filter:"blur(2px)" }}
        animate={{ filter:"blur(0px)" }}
        transition={{ duration: 1 }}

      >
       Tired of repetitive UI code? Just copy, paste, and focus on what truly matters — building amazing products with ready-to-use components, no hassle.
      </motion.p>

      {/* CTA Buttons */}
      <div className={cn("mb-12 flex flex-wrap justify-center gap-4")}>
        <motion.a
          href="#explore"
          className={cn(
            "rounded-md px-6 py-3 text-sm font-semibold",
            "bg-background text-foreground border-foreground border",
            "hover:bg-foreground hover:text-primary transition-all",
            "shadow-[-1px_3px_0px_0px_var(--secondary)] hover:shadow-transparent"
          )}
          whileHover={{ scale: 1.05 }}
        >
          Explore Components
        </motion.a>
        <motion.a
          href="https://github.com/"
          className={cn(
            "inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold",
            "bg-foreground text-primary hover:bg-primary hover:text-foreground",
            "border-foreground border",
            "transition-all hover:opacity-90",
            "shadow-[-1px_3px_0px_0px_var(--color-zinc-600)] hover:shadow-transparent"
          )}
          whileHover={{ scale: 1.05 }}
        >
          <FaGithub />
          Contribute to Github
        </motion.a>
      </div>

      {/* Tech Badges */}
      <motion.div
        className={cn("flex flex-wrap items-center justify-center gap-6")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 font-bold",
              "bg-foreground text-primary"
            )}
          >
            {tech.icon}
            {tech.name}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroicSection;
