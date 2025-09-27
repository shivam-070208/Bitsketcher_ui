import Container from "@/components/layout/Container";
import Navbar from "@/components/layout/Navbar";
import { cn } from "@/lib/utils";
import { Viewport } from "next";

import React from "react";

export const metadata = {
  title: "BitSketcher UI - Shadcn Component Library",
  description:
    "A modern and customizable Tailwind CSS component library for building stunning user interfaces with ease."
  };

export default function Home() {
  return (
    <div
      className={cn("min-h-screen w-screen transition-all h-fit",
        "bg-[radial-gradient(var(--secondary)_1px,var(--primary)_1px)] [background-size:20px_20px] ",
      )}
    >
      <Navbar />
      <Container className={cn("border-x border-secondary border-dashed bg-primary")}><div className="h-screen  w-full"></div></Container>
    </div>
  );
}
