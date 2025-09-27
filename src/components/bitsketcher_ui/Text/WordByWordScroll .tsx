"use client";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
const cn = (...props: string[]): string => props.join(" ");
const WordByWordScroll = ({ Text, className = "" }: Props) => {
  const words = Text.split(" ");
  return (
    <motion.div  className={cn(className, "flex flex-wrap")}>
      {words.map((word, index) => (
        <Word key={index} word={word} delay={index * 0.02} />
      ))}
    </motion.div>
  );
};

const Word = ({ word, delay }: { word: string; delay: number }) => {
    const ref = useRef(null);
  const Inview= useInView( ref,{amount:"all"});

  

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: Inview?1:0, y:  Inview?0:20 ,filter:Inview?["blur(0px)","blur(5px)","blur(0px)"]:""}}
      transition={{ duration: Inview?0.3:0,delay:Inview?delay:0 }}
      className="mr-2"
    >
      {word}
    </motion.span>
  );
};


export default WordByWordScroll;