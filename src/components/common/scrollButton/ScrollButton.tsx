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
          height: 48,
          width: 48,
        }}
        icon={<FaChevronUp className="text-white" size={20} />}
        className="w-[48px] h-[48px] bg-dark-purple cursor-pointer transition-all"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollButton;