"use client";
import { motion } from "framer-motion";
import { MouseEventHandler, useState, useRef, useLayoutEffect } from "react";

const cn = (...props: string[]): string => props.join(" ");

interface Props {
  Text: string;
  Scalefactor?: number;
  className?: string;
  EffectLength?: number;
}

type Position = {
  x: number;
  y: number;
  
};

const MorphingText = ({
  Text,
  Scalefactor = 3.0,
  className = "",
  EffectLength = 100
}: Props) => {
  const [mousePosition, setMousePosition] = useState<Position | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [letterPositions, setLetterPositions] = useState<Position[]>([]);

  const getPosition: MouseEventHandler<HTMLDivElement> = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const positions = letterRefs.current.map((el) => {
      if (!el || !containerRef.current) return { x: 0, y: 0 };
      const rect = el.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      return {
        x: rect.left + rect.width / 2 - containerRect.left,
        y: rect.top + rect.height / 2 - containerRect.top,
      };
    });

    setLetterPositions(positions);
  }, [Text]);

  const getScale = (letterPos: Position): number => {
    if (!mousePosition) return 1;

    const dx = letterPos.x - mousePosition.x;
    const dy = letterPos.y - mousePosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = EffectLength; // You can tweak this
    const scale = Scalefactor - (distance / maxDistance) * (Scalefactor - 1);
    return Math.max(1.0, Math.min(Scalefactor, scale));
  };



  return (
    <div
      ref={containerRef}
      onMouseLeave={() => setMousePosition(null)}
      onMouseMove={getPosition}
      className={cn(className, "font-light  uppercase flex")}
    >
      {Text.split("").map((value, index) => {
        const scale = mousePosition && letterPositions[index]
          ? getScale(letterPositions[index])
          : 1.0;

        return (
          <motion.span
            key={index}
            ref={(el) => (letterRefs.current[index] = el)}
            animate={{ scaleX: scale, rotateZ: (scale - 1), marginRight: `${(scale-1 ) *50}px` }} // Rotate a bit based on scale
            className="origin-left"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {value}
          </motion.span>
        );
      })}
    </div>
  );
};

export default MorphingText;
