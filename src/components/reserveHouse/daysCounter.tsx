"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDebounce } from "use-debounce";
const DaysCounter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [daysCount, setDaysCountCount] = useState(
    () => Number(searchParams.get("daysCount")) || 0
  );
  const [debounceCont] = useDebounce(daysCount, 500);

  useEffect(() => {
    const param = new URLSearchParams(searchParams.toString());
    if (debounceCont > 0) {
      param.set("daysCount", daysCount.toString());
    } else {
      param.delete("daysCount");
    }
    router.replace(`?${param.toString()}`, { scroll: false });
  }, [debounceCont]);

  return (
    <div className=" absolute top-12 left-10 w-[55px] h-[55px] rounded-2xl bg-blue-purple-500 flex-center flex-col text-white ">
      <FiChevronUp
        className="w-4 h-6 cursor-pointer "
        strokeWidth={5}
        onClick={() => {
          setDaysCountCount(daysCount + 1);
        }}
      />
      <span dir="rtl" className="flex-center">
        {" "}
        {daysCount} شب
      </span>
      <FiChevronDown
        className="w-4 h-6  cursor-pointer"
        strokeWidth={5}
        onClick={() => {
          if (daysCount > 0) setDaysCountCount(daysCount - 1);
        }}
      />
    </div>
  );
};

export default DaysCounter;
