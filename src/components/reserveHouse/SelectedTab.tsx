"use client";

import { ITab } from "@/src/core/types/ITab";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

interface IPropertyTab {
  options: ITab[];
  twClassname?: string;
  buttonWidth?:string;
}
const SelectedTab: FC<IPropertyTab> = ({ options, twClassname, buttonWidth }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
;

  const [selectedTab, setSelectedTab] = useState<string>(
    searchParams.get("tab") ||  options[options.length - 1]?.value || ""
  );
  const handleSelect = (tabValue: string) => {
    setSelectedTab(tabValue);

    const param = new URLSearchParams(searchParams.toString());
    param.set("tab", tabValue);
    router.push(`?${param.toString()}`, { scroll: false });
  };
  return (
    <div
      className={`  bg-dark-700 rounded-2xl h-[52px] mt-4 flex justify-end lg:gap-6 gap-2 p-1 ${twClassname}`}
    >
      {options.map((op) => (
        <div
          key={op.value}
          className={`${buttonWidth} h-full  text-[13px] md:text-[18px] whitespace-nowrap rounded-xl flex-center ${
            selectedTab === op.value
              ? "bg-primary-accent-green "
              : "bg-dark-700 text-gray-300"
          }`}
        >
          <button
            className="w-full cursor-pointer flex-center gap-2"
            onClick={() => {
              handleSelect(op.value);
            }}
          >
            {op.label}
            {op.icon}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedTab;
