"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const DaysCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-[55px] h-[55px] rounded-2xl bg-blue-purple-500 flex-center flex-col text-white ">
      <FiChevronUp
        className="w-4 h-6 cursor-pointer "
        strokeWidth={5}
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <span dir="rtl" className="flex-center">
        {" "}
        {count} شب
      </span>
      <FiChevronDown
        className="w-4 h-6  cursor-pointer"
        strokeWidth={5}
        onClick={() => {
          if (count > 0) setCount(count - 1);
        }}
      />
    </div>
  );
};

export default DaysCounter;
