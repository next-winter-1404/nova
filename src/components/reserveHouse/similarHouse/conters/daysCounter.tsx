"use client";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface DaysCounterProps {
  days: number;
}

const DaysCounter = ({ days }: DaysCounterProps) => {
  return (
    <div className="absolute top-12 left-10 w-[55px] h-[55px] rounded-2xl bg-blue-purple-500 flex-center flex-col text-white">
      <FiChevronUp className="w-4 h-6 cursor-pointer opacity-50" strokeWidth={5} />
      <span dir="rtl" className="flex-center">
        {days} شب
      </span>
      <FiChevronDown className="w-4 h-6 cursor-pointer opacity-50" strokeWidth={5} />
    </div>
  );
};

export default DaysCounter;