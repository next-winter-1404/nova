import React, { FC } from "react";
import CardContainer from "../card/page";
import Image from "next/image";
import Star from "@/src/assets/icons/Star.svg";
import { FaStar } from "react-icons/fa";
import Location from "@/src/assets/icons/Location.svg";
import bed from "@/src/assets/icons/bed.svg";
import houseTree from "@/src/assets/icons/houseTree.svg";
import car from "@/src/assets/icons/car.svg";
import bathroom from "@/src/assets/icons/bathroom.svg";
import leftArrow from "@/src/assets/icons/leftArrow.svg";
import Button from "../button/page";
import { IHouse } from "@/src/core/types/IHouse";

const RowProductCard: FC<IHouse> = ({ price, rate, address, title,bathrooms,rooms,parking }) => {
  return (
    <div className="flex">
      <div className="flex flex-col justify-end flex-1 gap-4 whitespace-nowrap">
        <span className="flex-center gap-2 px-3 py-1.5 whitespace-nowrap text-semibold-28 text-primary-accent-green">
          <i>ت</i>
          <span>{price}</span>
        </span>
        <Button
          text={"مشاهده ملک"}
          backgroundColor="8cff45"
          icon={<Image src={leftArrow} alt="icon" />}
          buttonStyle={{
            background: "transparent",
            width: "130px",
            color: "var(--color-primary-accent-green)",
            fontSize: "16px",
            fontWeight: "600",
            border: "1px solid var(--color-primary-accent-green)",
            padding: "12px 16px",
          }}
        />
      </div>
      <div className="flex flex-2 gap-4">
        <div className="flex flex-col justify-end flex-1 gap-4 ">
          <div className="w-full flex justify-end">
            <span className="w-[82px] flex-center gap-1 px-3 py-1.5 whitespace-nowrap text-white bg-blue-purple-500 rounded-lg">
              ستاره
              <span
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
                className=""
              >
                {rate}
                <FaStar className="w-4 h-4" />
              </span>
            </span>
          </div>
          <span className="flex justify-end text-20-medium whitespace-nowrap">
            {title}
          </span>
          <div className="flex flex-col items-end gap-5">
            <div className="flex justify-start gap-1.5">
              <h2 className="text-[16px] text-gray-300 text-right  whitespace-nowrap">
                {address}
              </h2>
              <Image src={Location} alt="Location" className="w-4 h-4" />
            </div>
            <div className=" h-[16px] flex items-center justify-end text-gray-300 gap-1 whitespace-nowrap">
              <div className=" w-[30px] text-[13px] justify-center flex gap-2.5">
                حیاط <Image src={houseTree} alt="houseTree" />
              </div>
              <div className="border-l border-gray-300 w-[85px] text-[13px] justify-center flex gap-2.5 ">
                <span>{bathrooms}</span>
                <span>حمام</span> <Image src={bathroom} alt="bathroom" />
              </div>
              <div className="border-l border-gray-300 w-[91px] text-[13px] justify-center flex gap-2.5">
             <span>{parking}</span>
             <span>پارکینگ</span>
             <Image src={car} alt="car" />
              </div>
              <div className="border-l border-gray-300 w-[77px] text-[13px] justify-end flex gap-2.5">
               <span>
               {rooms}
               </span>
               <span>خوابه</span>
              <Image src={bed} alt="bed" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[120px] h-[160px] bg-amber-500"></div>
      </div>
    </div>
  );
};

export default RowProductCard;
