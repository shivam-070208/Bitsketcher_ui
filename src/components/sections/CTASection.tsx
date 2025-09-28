"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiZap } from "react-icons/fi";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="text-center">
        <motion.div
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6",
            "bg-foreground text-primary"
          )}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FiZap className="w-4 h-4" />
          Ready to get started?
        </motion.div>

        <motion.h2
          className={cn(
            "text-foreground text-4xl font-bold mb-6 md:text-5xl"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Start Building Today
        </motion.h2>

        <motion.p
          className={cn(
            "text-secondary text-lg max-w-2xl mx-auto mb-12"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join thousands of developers who are already building faster, 
          more beautiful interfaces with BitSketcher UI.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.a
            href="#explore"
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-8 py-4 text-lg font-semibold",
              "bg-foreground text-primary hover:bg-primary hover:text-foreground",
              "border-foreground border-2 transition-all duration-300",
              "hover:shadow-lg hover:shadow-foreground/20"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Components
            <FiArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://github.com"
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-8 py-4 text-lg font-semibold",
              "bg-background text-foreground hover:bg-foreground hover:text-primary",
              "border-foreground border-2 transition-all duration-300",
              "hover:shadow-lg hover:shadow-foreground/20"
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View on GitHub
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span className={cn("text-secondary text-sm")}>
            Follow us:
          </span>
          <div className="flex gap-4">
            <motion.a
              href="https://twitter.com"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-background border border-secondary/20",
                "hover:border-secondary/40 transition-colors"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter className="w-4 h-4 text-secondary" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-background border border-secondary/20",
                "hover:border-secondary/40 transition-colors"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-4 h-4 text-secondary" />
            </motion.a>
            <motion.a
              href="https://github.com"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                "bg-background border border-secondary/20",
                "hover:border-secondary/40 transition-colors"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-4 h-4 text-secondary" />
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className={cn(
            "mt-16 pt-8 border-t border-secondary/20",
            "text-secondary text-sm"
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Built with ❤️ by the BitSketcher team • 
            <span className="text-foreground font-medium"> Open Source</span> • 
            <span className="text-foreground font-medium"> MIT License</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
