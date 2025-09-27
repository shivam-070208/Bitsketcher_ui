"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "@/contexts/ThemeContext";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  FiSearch,
  FiSun,
  FiMoon,
  FiLinkedin,
  FiTwitter,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const navigationItems = [
    { name: "Components", href: "/components" },
    { name: "Assets", href: "/assets" },
    { name: "About", href: "/about" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={cn(
        "fixed top-0 w-screen  py-3 backdrop-blur-md",
        "border-secondary border-b border-dashed",
      )}
    >
      <Container
        className={cn("flex items-center justify-between")}
        padding="2xl"
      >
        {/* Left Side: Logo + Nav */}
        <div className={cn("flex items-center gap-8")}>
          <Link href="/" className={cn("flex items-center gap-2")}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={22}
              height={22}
              className={cn(
                "invert-0 dark:invert",
                "border-secondary border-b-2 border-l-2",
              )}
            />
            <h2 className={cn("text-foreground font-bold tracking-wider")}>
              BitSketcher
            </h2>
          </Link>

          {/* Desktop Nav */}
          <div
            onMouseLeave={() => setHovered(null)}
            className={cn("hidden gap-2 sm:flex")}
          >
            {navigationItems.map(({ name, href }, index) => (
              <Link
                key={index}
                href={href}
                onMouseEnter={() => setHovered(name)}
                className={cn(
                  "text-secondary relative px-3 py-2 text-xs font-bold",
                  "z-0",
                )}
              >
                {name}
                {hovered === name && (
                  <motion.div
                    layoutId="movablespan"
                    className={cn(
                      "absolute top-0 left-0 -z-1 h-full w-full shadow-xs backdrop-blur-md",
                      "bg-secondary/20 shadow-secondary",
                    )}
                  />
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Side: Social + Toggle + Search */}
        <div className={cn("hidden items-center gap-4 sm:flex")}>
          <Link
            href="https://www.linkedin.com/groups/15088009/"
            target="_blank"
          >
            <FiLinkedin
              className={cn("text-secondary/80 hover:text-secondary")}
              size={17}
            />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FiTwitter
              className={cn("text-secondary/80 hover:text-secondary")}
              size={17}
            />
          </Link>
          <button
            onClick={toggleTheme}
            className={cn(
              "text-secondary/80 hover:text-secondary cursor-pointer",
            )}
          >
            {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <div className="relative">
            <button
              className={cn(
                "relative flex w-fit items-center justify-start rounded-xl border px-4 py-2 text-xs shadow",
                "bg-primary text-secondary border-secondary"
              )}
            >
              <FiSearch size={20} />
              <span
                className={cn(
                  "pr-4 pl-2 text-xs font-medium transition-colors sm:text-sm",
                )}
              >
                Search{" "}
                <span className="hidden xl:inline-block">Components</span>
              </span>
              <kbd
                className={cn(
                  "pointer-events-none hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none sm:flex",
                )}
              >
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className={cn(
            "text-secondary/80 hover:text-secondary sm:hidden",
            "cursor-pointer",
          )}
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </Container>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={cn(
              "bg-primary absolute top-full left-0 w-full shadow-md sm:hidden",
            )}
          >
            <div className={cn("flex flex-col items-start gap-4 p-4")}>
              {navigationItems.map(({ name, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className={cn("text-secondary font-medium")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
              <div className="mt-2 flex gap-4">
                <Link
                  href="https://www.linkedin.com/groups/15088009/"
                  target="_blank"
                >
                  <FiLinkedin
                    className={cn(
                      "text-secondary/80 hover:text-secondary hover:scale-104",
                    )}
                    size={17}
                  />
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <FiTwitter
                    className={cn(
                      "text-secondary/80 hover:text-secondary hover:scale-104",
                    )}
                    size={17}
                  />
                </Link>
                <button
                  onClick={toggleTheme}
                  className={cn(
                    "text-secondary/80 hover:text-secondary cursor-pointer hover:scale-104",
                  )}
                >
                  {theme === "dark" ? (
                    <FiSun size={17} />
                  ) : (
                    <FiMoon size={17} />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
