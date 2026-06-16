"use client";
import React, { useEffect, useMemo, useRef, ReactNode, RefObject, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    return text.split(" ").map((word, index) => (
      <span className="word" key={index}>
        {word}&nbsp;
      </span>
    ));
  }, [children]);

 useLayoutEffect(() => {
  const el = containerRef.current;
  if (!el) return;

  const wordElements = el.querySelectorAll(".word");

  if (!wordElements.length) return;

  const ctx = gsap.context(() => {
    const anim = gsap.fromTo(
      wordElements,
      {
        opacity: 0,
        yPercent: 120,
        scale: 0.9,
      },
      {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );

    ScrollTrigger.refresh(); 

    return () => anim.kill();
  }, el);

  return () => ctx.revert();
}, [children]);

  return (
    <span ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </span>
  );
};

export default ScrollFloat;
