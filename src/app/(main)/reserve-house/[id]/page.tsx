"use client"
import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import Button from "@/src/components/common/button/page";
import HouseMainInformation from "@/src/components/common/houseMainInformation";
import ToolTip from "@/src/components/common/tooltip";
import { FaStar } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import share from "@/src/assets/icons/share-square.svg";
import Image from "next/image";
import test from "@/src/assets/images/HeroSectionBackground.jpg";
import { ITab } from "@/src/core/types/ITab";
import building from "@/src/assets/icons/house-building.svg";
import InfoCardContainer from "@/src/components/common/infoCardContainer";
import DropMenu from "@/src/components/common/dropMenu/DropMenu";
import { useState } from "react";
const SingleReserveHousePage = () => {
  const [checkOutDate, setCheckOutDate] = useState("nyc");
  const [checkInDate, setCheckInDate] = useState("nyc");

  const cities = [
    { value: "nyc", label: "New York" },
    { value: "la", label: "Los Angeles" },
    { value: "chi", label: "Chicago" },
  ];
  const items: BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رزرو هتل",
    },
    {
      href: "/reserve-house",

      label: `رزرو هتل ${"رشت"}`,
    },
    {
      label: `رزرو هتل ${"همایون فر"}`,
    },
  ];
  const tabs: ITab[] = [
    { value: "about", label: "درباره ملک" },
    { value: "facilities", label: " امکانات اقامتگاه" },
    { value: "comment", label: "نظرات کاربران" },
  ];
  
  return (
    <div className="flex-center bg-dark-900">
      <div className="flex items-end flex-col gap-6 w-4/5 lg:w-[1375px] mt-17 ">
        <Breadcrumb items={items} twClassname="lg:mt-14 mt-6" />
        <div className="flex  flex-col gap-8 md:gap-4 lg:flex-row-reverse lg:items-end justify-between  w-full mt-4 p-4">
          <HouseMainInformation
            houseTitle="هتل همایون فر کیش ایران"
            houseAddress="  گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ"
          />
          <div className="flex items-center gap-4 justify-between " dir="rtl">
            <Button
              text={`${5} ستاره `}
              icon={<FaStar className="text-white h-4 w-4" />}
              buttonStyle={{
                background: "var(--color-blue-purple-500)",
                width: 92,
                height: 32,
                borderRadius: 10,
              }}
            />
            <div className="w-1 h-4 border-white border-1 bg-white hidden lg:block " />
            <div className="flex gap-4">
              <ToolTip
                mainContent={
                  <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-primary-accent-green">
                    <FiCopy className="w-4 h-4 text-gray-300 hover:text-black" />
                  </div>
                }
                tooltipText="کپی کردن"
              />
              <ToolTip
                mainContent={
                  <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-primary-accent-green">
                    <Image className="w-4 h-4" alt="icon" src={share} />
                  </div>
                }
                tooltipText="اشتراک گذاری"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-15 lg:gap-5 lg:flex-row lg:p-2 lg:justify-between lg:items-start p-4 flex-col-reverse  items-end w-full">
          <div className="flex gap-3 md:flex md:flex-wrap md:justify-between lg:grid lg:grid-cols-2 lg:w-[228px]">
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
            <div className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"></div>
          </div>
          <Image
            alt="icon"
            src={test}
            className="md:w-full  lg:max-w-[1100px] lg:h-[420px] rounded-[40px]"
          />
        </div>
        <section className="flex flex-row-reverse justify-between border w-full items-center">
          <div className="w-[999px] bg-dark-700 rounded-2xl h-[52px] mt-4 flex justify-end gap-6 p-1">
            {tabs.map((tab) => (
              <div className="min-w-[140px] h-full bg-primary-accent-green rounded-xl flex-center ">
                <button className="w-full cursor-pointer">{tab.label}</button>
              </div>
            ))}
          </div>
          <InfoCardContainer>
            <div className="w-[233px] h-[50px] bg-gray-550 rounded-b-[32px] flex-center gap-2 text-semibold-20">
              <span>:رزرو خونه برای</span>
              <Image alt="icon" src={building} className="w-5 h-5" />
            </div>
            
          </InfoCardContainer>

        </section>
      </div>
    </div>
  );
};

export default SingleReserveHousePage;
