"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FiUsers, FiDownload, FiStar, FiGitBranch } from "react-icons/fi";

const stats = [
  {
    icon: <FiUsers className="w-8 h-8" />,
    value: "10K+",
    label: "Active Developers",
    description: "Building amazing products"
  },
  {
    icon: <FiDownload className="w-8 h-8" />,
    value: "50K+",
    label: "Downloads",
    description: "This month alone"
  },
  {
    icon: <FiStar className="w-8 h-8" />,
    value: "4.9",
    label: "Rating",
    description: "Based on community feedback"
  },
  {
    icon: <FiGitBranch className="w-8 h-8" />,
    value: "100+",
    label: "Components",
    description: "Ready to use"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          className={cn(
            "text-foreground text-3xl font-bold mb-4 md:text-4xl"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by Developers Worldwide
        </motion.h2>
        <motion.p
          className={cn(
            "text-secondary text-lg max-w-2xl mx-auto"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of developers who are already building faster with BitSketcher UI
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={cn(
              "text-center p-6 rounded-lg border border-secondary/20",
              "bg-background/50 backdrop-blur-sm",
              "hover:border-secondary/40 transition-all duration-300",
              "hover:shadow-lg hover:shadow-secondary/10"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className={cn(
              "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center",
              "bg-foreground text-primary"
            )}>
              {stat.icon}
            </div>
            <motion.div
              className={cn("text-3xl font-bold text-foreground mb-2")}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              {stat.value}
            </motion.div>
            <h3 className={cn(
              "text-foreground text-lg font-semibold mb-1"
            )}>
              {stat.label}
            </h3>
            <p className={cn(
              "text-secondary text-sm"
            )}>
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Testimonial */}
      <motion.div
        className={cn(
          "mt-16 p-8 rounded-lg border border-secondary/20",
          "bg-background/50 backdrop-blur-sm text-center"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <blockquote className={cn(
          "text-foreground text-xl font-medium mb-4 italic"
        )}>
          "BitSketcher UI has completely transformed how we build interfaces. 
          The components are beautiful, performant, and incredibly easy to customize."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className={cn(
            "w-12 h-12 rounded-full bg-foreground flex items-center justify-center",
            "text-primary font-bold"
          )}>
            JS
          </div>
          <div className="text-left">
            <div className={cn("text-foreground font-semibold")}>
              John Smith
            </div>
            <div className={cn("text-secondary text-sm")}>
              Senior Frontend Developer at TechCorp
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
