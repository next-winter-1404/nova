"use client";

import { motion } from "framer-motion";

interface SlideProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export default function Slide({
  children,
  direction = "right",
}: SlideProps) {
  return (
    <motion.div
      initial={{
        x: direction === "right" ? 50 : -50,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}