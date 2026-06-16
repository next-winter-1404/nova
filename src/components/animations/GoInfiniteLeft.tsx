"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ArrowAnimationProps {
  children: React.ReactNode;
  distance?: number;
  duration?: number;
}

const ArrowAnimation = ({
  children,
  distance = 8,
  duration = 0.8,
}: ArrowAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={
        isHovered
          ? { x: 0 }
          : { x: [0, -distance, 0] }
      }
      transition={{
        duration,
        repeat: isHovered ? 0 : Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ArrowAnimation;