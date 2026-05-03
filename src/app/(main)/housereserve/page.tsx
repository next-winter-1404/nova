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
    <>
      <TopReserveHouseSection />
      <div className="bg-dark-800 flex mt-12 p-6">
      <div>map</div>

        <div className="w-[60%]">
          <div className="flex">
            <DropMenu
              options={Facilities}
              dropDownLabel="امکانات هتل"
              onChange={setFacil}
              value={facil}
            />
            <Input labelText="حداقل قیمت" tagBgStyle={{background:"var(--color-dark-800)"}}/>
            <Input labelText="حداکثر قیمت" tagBgStyle={{background:"var(--color-dark-800)"}}/>
          </div>
          <div>bottom</div>
        </div>
      </div>
    </>
  );
};

export default HouseReservePage;
