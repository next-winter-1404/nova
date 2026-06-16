"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollSlideProps {
  children: React.ReactNode;
  direction?: "left" | "right";
}

export default function ScrollSlide({
  children,
  direction = "right",
}: ScrollSlideProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "start 15%"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "right" ? [60, 0] : [-60, 0],
  );

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} className="w-full" style={{ x, opacity }}>
      {children}
    </motion.div>
  );
}
