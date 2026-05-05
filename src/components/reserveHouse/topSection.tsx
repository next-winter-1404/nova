"use client";
import Button from "@/src/components/common/button/page";
import DropMenu from "@/src/components/common/dropMenu/DropMenu";
import Input from "@/src/components/common/input/Input";
import { useState } from "react";
import megaPhone from "@/src/assets/icons/megaphone.svg";
import Image from "next/image";

const TopReserveHouseSection = () => {
  const [checkOutDate, setCheckOutDate] = useState("nyc");
  const [checkInDate, setCheckInDate] = useState("nyc");

  const cities = [
    { value: "nyc", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" },
  ];
  return (
    <div className="mt-4 bg-dark-800 flex-between rounded-3xl p-4 w-full" dir="rtl">
      <div className="flex justify-between w-[81%] items-center ">
        <DropMenu
          options={cities}
          value={checkInDate}
          onChange={setCheckInDate}
          placeholder="وارد کنید ..."
          dropDownLabel=": تاریخ ورود "
        />
        <DropMenu
          options={cities}
          value={checkOutDate}
          onChange={setCheckOutDate}
          placeholder="وارد کنید ..."
          dropDownLabel=":  تاریخ خروج"
        />
        <Input
          labelText="جستجو"
          InputHeight="h-[50px]"
          tagBgStyle={{ background: "var(--color-dark-800)",color:"white" }}
          borderColor="border-white border"
          textColor="text-white"
          placeHolder="نام هتل مورد نظر ....."
          parentWidth="lg:w-[619px]"
        />
      </div>
      <Button
        text={`تعداد اگهی : ${33}`}
        backgroundColor="transparent"
        buttonStyle={{ background: "transparent", border: "1px solid white" }}
        icon={<Image alt="megaphone" src={megaPhone} />}
      />
    </div>
  );
};

export default TopReserveHouseSection;
