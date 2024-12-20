"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

export const GoogleGeminiEffect = ({
  pathLengths,
  className,
}: {
  pathLengths: any[];
  className?: string;
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: { duration: 10, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  return (
    <div
      className={cn(
        "h-full w-full flex items-center justify-center",
        className
      )}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {pathLengths.map((pathLength, index) => (
          <motion.circle
            key={index}
            cx="50"
            cy="50"
            r={15 + index * 5}
            fill="none"
            stroke={`rgba(168, 85, 247, ${0.1 + index * 0.1})`}
            strokeWidth="0.5"
            animate={controls}
            style={{
              pathLength: pathLength,
            }}
          />
        ))}
        
        {/* Processing effect */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="rgba(168, 85, 247, 0.3)"
          strokeWidth="0.5"
          strokeDasharray="5,5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  );
};

