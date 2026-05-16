"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Input from "../../../common/input/Input";

const PassengerCounter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [count, setCount] = useState(
    () => Number(searchParams.get("passengerCount")) || 0
  );

  useEffect(() => {
    const param = new URLSearchParams(searchParams.toString());
    if (count > 0) {
      param.set("passengerCount", count.toString());
    } else {
      param.delete("passengerCount");
    }
    router.replace(`?${param.toString()}`, { scroll: false });
  }, [count]);


  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    setCount((prev) => {
      if (prev <= 0) return prev;
      return prev - 1;
    });
  };
  return (
    <div className="w-full relative">
      <Input
        labelText="تعداد مسافران"
        borderColor="border-white text-white"
        name="passengerCount"
        tagBgStyle={{ background: "var(--color-dark-700)" }}
        InputHeight="h-15"
        labelTextSize="text-white"
        parentWidth="w-full"
        placeHolder={`${count}`}
        dir="rtl"
      />
      <div className="w-[40%] absolute top-0 left-4 h-15  flex justify-between items-center">
        <div
          onClick={addCount}
          className="w-6 h-6 bg-primary-accent-green cursor-pointer rounded flex-center sm:text-[30px] font-semibold"
        >
          +
        </div>
        <span className="text-white font-bold text-xl"> {count}</span>
        <div
          onClick={minusCount}
          className="w-6 h-6 sm:text-[32px] font-semibold  bg-primary-accent-green cursor-pointer rounded flex-center"
        >
          -
        </div>
      </div>
    </div>
  );
};

export default PassengerCounter;
