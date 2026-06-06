import Image from "next/image";
import CardContainer from "../card/page";
import leftArrow from "@/src/assets/icons/leftArrow.svg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { IBlogs } from "@/src/core/types/IBogs";
import Link from "next/link";
import { formatDateTime } from "@/src/utils/hooks/formDates";

const BlogCard = ({
  created_at,
  estimated_reading_time,
  caption,
  title,
  id
}: IBlogs) => {
  return (
    <Link href={`/blogs/${id}`}>
      <div className="group  text-white-pure flex flex-col gap-4 ">
        <div className="group-hover:bg-primary-accent-green w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700">
          <Image src={leftArrow} alt="leftArrow" />
        </div>

        <CardContainer
          curveColor="#393939"
          cavity="round"
          labelContent={
            <div
              className="w-[75%] h-[30px] mt-[5px] flex items-center text-[13px] whitespace-nowrap  text-dark-800 justify-center  gap-1 bg-white-pure rounded-[8px] z-20 "
              dir="rtl"
            >
              <FaRegClock />
              {estimated_reading_time}
            </div>
          }
          labelSize="md"
          mainContent={
            <div className={`w-full h-[156px] bg-dark-600 rounded-2xl`}></div>
          }
          labelBackground="group-hover:bg-[#8cff45] bg-[#393939]"
          labelExtraStyle={{ minHeight: "25px" }}
          mainExtraStyle="group-hover:bg-primary-accent-green bg-dark-700 p-6 w-full"
        />

        <div
          className="flex-col items-end gap-3 h-[156px] md:w-full  sm:w-[400px]  "
          dir="rtl"
        >
          <div className="flex items-center gap-1 text-gray-300">
            <FaCalendarAlt className="w-4 h-4 mb-1" />
            <span>{formatDateTime(created_at)}</span>
          </div>
          <span className="sm:text-[20px] text-[18px] text-white truncate ">
            {title}
          </span>
          <p className="text-gray-300  line-clamp-3">{caption}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
