"use client";
import { motion, useAnimation, useInView } from "motion/react";
import { useRef, useEffect } from "react";

const cn = (...props: string[]): string => props.join(" ");

interface Props {
  Text: string;
  className?: string;
}

const ScrollFlipRevealText = ({ Text, className = "" }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 40, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className, "flex flex-col gap-2 perspective-1000")}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {Text.split("\n").map((line, index) => (
        <motion.div key={index} variants={child} className="origin-bottom">
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollFlipRevealText;
