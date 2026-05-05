"use client";
import { useState } from "react";
import DropMenu from "@/src/components/common/dropMenu/DropMenu";
import TopReserveHouseSection from "@/src/components/reserveHouse/topSection";
import Input from "@/src/components/common/input/Input";

const HouseReservePage = () => {
  const [facil, setFacil] = useState("room");
  const Facilities = [
    {
      value: "room",
      label: "room",
    },
    {
      value: "bath",
      label: "bath",
    },
    {
      value: "balcony",
      label: "balcony",
    },
  ];
  return (
    <div className="items-center flex justify-center flex-col">
      <TopReserveHouseSection />
      <div className="bg-dark-800 flex  mt-6 p-6  lg:max-w-[1375px] w-[90%] rounded-[40px] ">
        <div className="w-[40%]  rounded-[40px] h-[1032px] border">map</div>

        <div className="w-[60%] flex flex-col gap-6 items-center ">
          <div className="flex justify-evenly items-center  w-full">
            <DropMenu
              options={Facilities}
              dropDownLabel="امکانات هتل"
              onChange={setFacil}
              value={facil}
            />
            <Input
              labelText=":حداقل قیمت"
              tagBgStyle={{ background: "var(--color-dark-800)" }}
              InputHeight="h-[50]"
              placeHolder="تومان"
              textColor="text-[#AAAAAA]"
              textSize="indent-5"
              borderColor="border-[#DDDDDD]"
              labelTextSize="text-[#AAAAAA]"
              type="number"

            />
            <Input
              labelText=":حداکثر قیمت"
              tagBgStyle={{ background: "var(--color-dark-800)" }}
              InputHeight="h-[50]"
              placeHolder="تومان"
              textColor="text-[#AAAAAA]"
              textSize="indent-5"
              borderColor="border-[#DDDDDD]"
              labelTextSize="text-[#AAAAAA]"
              type="number"
            />
          </div>
          <div className="w-[90%] border-2 border-[#4E4E4E]"/>
          <div className="flex flex-col items-center max-h-[911px]  overflow-auto border w-[90%]">
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseReservePage;
