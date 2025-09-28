"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  FiZap, 
  FiCopy, 
  FiCode, 
  FiShield, 
  FiTrendingUp 
} from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "Lightning Fast",
    description: "Optimized components that load instantly and perform smoothly across all devices."
  },
  {
    icon: <FiCopy className="w-6 h-6" />,
    title: "Copy & Paste",
    description: "No complex installations. Just copy the code and start building immediately."
  },
  {
    icon: <FiCode className="w-6 h-6" />,
    title: "Developer First",
    description: "Built by developers, for developers. Clean, readable, and maintainable code."
  },
  
  {
    icon: <FiShield className="w-6 h-6" />,
    title: "Production Ready",
    description: "Battle-tested components used in production by thousands of developers."
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: "Always Updated",
    description: "Regular updates with new components and improvements based on community feedback."
  }
];

const FeaturesSection = () => {
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
          Why Choose BitSketcher UI?
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
          Everything you need to build modern, beautiful user interfaces with minimal effort.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={cn(
              "p-6 rounded-lg border border-secondary/20",
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
              "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
              "bg-foreground text-primary"
            )}>
              {feature.icon}
            </div>
            <h3 className={cn(
              "text-foreground text-xl font-semibold mb-2"
            )}>
              {feature.title}
            </h3>
            <p className={cn(
              "text-secondary text-sm leading-relaxed"
            )}>
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
