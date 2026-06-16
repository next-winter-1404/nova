"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import smallLeftArrow from "@/src/assets/icons/smallLeftArrow.svg";
import clock from "@/src/assets/icons/clock 2.svg";
const Timer = () => {
  const [secondsElapsed, setSecondsElapsed] = useState(120);

  useEffect(() => {
    if (secondsElapsed <= 0) return;

    const interval = setInterval(() => {
      setSecondsElapsed((prev) => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsElapsed]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-blue-purple-500 rounded-xl h-[34px] p-1 lg:w-1/3 w-1/2 flex items-center gap-2 md:gap-4">
      <button
        type="button"
        className={` md:rounded-[10px] rounded-md h-full  flex-center md:gap-2 ${secondsElapsed==0?"w-full":"w-[60%] bg-white"}`}
      >
        <span className="cursor-pointer text-[13px] whitespace-nowrap  text-black ">
          ارسال دوباره رمز
        </span>
        <Image alt="arrow" src={smallLeftArrow} />
      </button>
      <div className={` md:gap-3 ${secondsElapsed==0?"hidden":"flex-center"}`}>
        <span className="text-16-semibold text-white">{formatTime(secondsElapsed)}</span>
        <Image alt="clock" src={clock} />
      </div>
    </div>
  );
};

export default Timer;
