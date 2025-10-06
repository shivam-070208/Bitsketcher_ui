import Container from "@/components/layout/Container";
import HeroicSection from "@/components/layout/Heroic";
import Navbar from "@/components/layout/Navbar";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import { cn } from "@/lib/utils";


import React from "react";

export const metadata = {
  title: "BitSketcher UI - Shadcn Component Library",
  description:
    "A modern and customizable Tailwind CSS component library for building stunning user interfaces with ease.",
};

export default function Home() {
  return (
    <div
      className={cn(
        "h-fit min-h-screen max-w-screen overflow-x-hidden transition-all",
        "bg-[radial-gradient(var(--secondary)_1px,var(--primary)_1px)] [background-size:20px_20px]",
      )}
    >
      <Navbar />
      <Container
        className={cn(
          "border-secondary bg-primary border-x border-dashed ",
          "h-fit pt-20",
        )}
      >
        <HeroicSection />
        <FeaturesSection />
        <StatsSection />     
        <CTASection />
      </Container>
    </div>
  );
}
