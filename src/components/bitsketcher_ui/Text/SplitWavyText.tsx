
"use client"
import { motion } from "motion/react";

export interface SplitWavyTextProps {
  text: string;
  waveAmplitude?: number;
  delay?: number;
  cn?:string;
}

const SplitWavyText: React.FC<SplitWavyTextProps> = ({
  text,
  waveAmplitude = 50,
  delay = 0,
  cn=""
}) => {
  return (
    <div className={"flex " + " "+ cn}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: -3}}
          animate={{ y: [-3, -waveAmplitude, 0],opacity:[0,1] }}
          transition={{
            delay: delay + index * 0.05,
            duration: 0.8,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default SplitWavyText;
