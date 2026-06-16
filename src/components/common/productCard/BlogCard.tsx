import React from "react";
import leftArrow from "@/src/assets/icons/leftArrow.svg";
import Image from "next/image";
import CardShape from "../shape/CardShape";
import { FaStar } from "react-icons/fa";

interface BlogCardProps {
  title: string;
  rate?: string;
  subInf?: string;
  seeMore?: boolean;
  caption?: string;
  estimated_reading_time?: string;
  author_id?: number;
  created_at?: string;
  category_id?: number;
   id: number;
}

const BlogCard = ({
  title,
  rate,
  seeMore,
  created_at,
  estimated_reading_time,
  caption,
  id,
}: BlogCardProps) => {
  return (
    <div className="group max-w-76.5  text-white-pure flex flex-col gap-4 font-vazir">
      {seeMore && (
        <div className="group-hover:bg-primary-accent-green w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700">
          <Image src={leftArrow} alt="leftArrow" />
        </div>
      )}
      <div className="relative flex-col-center max-w-76.5 h-58 p-5">
        <CardShape />
        <div className="w-68.5 h-39 rounded-[20px] bg-dark-600 z-10 mt-8"></div>
        <div className="w-full flex justify-end absolute top-3 right-4">
          <span className=" w-[67px] h-8 flex-center gap-1 px-3 py-1.5 whitespace-nowrap text-dark-700 group-hover:text-white-pure bg-white-pure rounded-lg group-hover:bg-dark-850">
            <span className="flex-center gap-2 mt-1">
              <span className="flex-center">
                <FaStar className="w-4 h-4 mb-1.5" />
              </span>
              {rate || 0}
            </span>
          </span>
        </div>
      </div>
      <span className="block w-full max-w-full truncate whitespace-nowrap overflow-hidden text-right direction-rtl text-20-regular">
        {title || "عنوانی وجود ندارد"}
      </span>
    </div>
  );
};

export default BlogCard;
