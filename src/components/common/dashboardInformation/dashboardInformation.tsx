import Image from "next/image";
import Link from "next/link";
import grayTriangle from "@/src/assets/images/grayTriangle.svg";
import { FC, ReactNode } from "react";

interface IProp {
  role?: string;
  amount?: number | string;
  cardText?: string;
  href?: string;
  twContentClassName?: string;
  icon?: ReactNode;
  content?: ReactNode;
  seeMore?: boolean;
}
const DashboardInformation: FC<IProp> = ({
  role,
  cardText,
  amount,
  href,
  icon,
  seeMore,
  content,
  twContentClassName
}) => {
  return (
    <div className="lg:max-w-[364px] h-[130px]  rounded-[12px] bg-dark-600 flex-col flex gap-1">
      <div dir="rtl" className="flex-center w-full gap-3">
        <div className="w-[50px] h-[60px] bg-dark-900 rounded-b-xl flex-center">
          {icon}
        </div>
        <div className="flex flex-col gap-1 w-[65%] text-white">
          <h2>{amount}</h2>
          <h2>{cardText}</h2>
        </div>
      </div>
      <div className="text-gray-500 text-center whitespace-nowrap overflow-hidden">
        {"-------------------------------------------"}
      </div>

      {seeMore && (
        <Link
          href={`${role}/${href}`}
          className="w-full flex justify-between px-5 items-center cursor-pointer"
        >
          <span className="text-gray-400">مشاهده</span>
          <Image alt="icon" src={grayTriangle} />
        </Link>
      )}
      <div className={twContentClassName}>{content}</div>
    </div>
  );
};

export default DashboardInformation;
