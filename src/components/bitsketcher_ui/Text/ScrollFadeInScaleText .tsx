"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cn = (...props: string[]): string => props.join(" ");

interface Props {
  Text: string;
  className?: string;
}

const ScrollFadeInScaleText = ({ Text, className = "" }: Props) => {
    const Target = useRef(null)
  const { scrollYProgress } = useScroll({target:Target,
    offset: ["start start", "end end"] // Adjust the start and end offsets for the scroll animation
  });

  // Opacity and Scale based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]);

  return (
    <motion.div ref={Target}
      className={cn(className, "uppercase")}
      style={{ opacity, scale }}
    >
      {Text}
    </motion.div>
  );
};

export default ScrollFadeInScaleText;
