"use client";
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import Button from "../button/page";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY;

      setVisible(scrolled > 400);
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex gap-4 items-center fixed right-10 bottom-5 z-50">
      <Button
        buttonStyle={{
          display: visible ? "flex" : "none",
          width: 52,
          height: 52,
          borderRadius: 12,
          cursor: "pointer",
          background: "var(--color-dark-900-transparent-64)",
          border: " 1px solid var(--color-dark-650)",
          backdropFilter: " blur(10px)",
        }}
        icon={<FaChevronUp className="text-white" size={20} />}
        className="w-[48px] h-[48px] bg-dark-purple cursor-pointer transition-all"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollButton;
