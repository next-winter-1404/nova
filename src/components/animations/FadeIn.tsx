"use client";

import { motion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  y?: number;
  x?: number;
}

const FadeIn = ({
  children,
  duration = 0.5,
  delay = 0,
  y = 20,
  x = 0,
}: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{
        once: true, 
        amount: 0.2, 
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;