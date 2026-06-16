import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { TbBookmarkFilled } from "react-icons/tb";
import grayTriangle from "@/src/assets/images/grayTriangle.svg";
import GlareHover from "../../animations/GlareHover/GlareHover";
import ShinyText from "../../animations/ShinyText/ShinyText";
interface IProp {
  role?: string;
  navigateText?: string;
  href?: string;
  title?: string;
  twParentClassName?: string;
  children?: ReactNode;
  topSectionContent?: ReactNode;
  seemore?: boolean;
  isIcon?: boolean;
  twTopContent?: string;
}
const DashboardContentContainer: FC<IProp> = ({
  role,
  href,
  navigateText,
  title,
  children,
  twParentClassName,
  seemore = false,
  topSectionContent,
  twTopContent,
  isIcon,
}) => {
  return (
    <div
      className={`flex flex-col bg-dark-600 rounded-[12px] ${twParentClassName}`}
    >
      <div dir="rtl" className="flex justify-between  w-full p-3 ">
        <div className="flex gap-2  items-center">
          {isIcon && (
            <TbBookmarkFilled className="w-[26px] h-[26px] text-white" />
          )}
          <h2 className="md:text-[20px] whitespace-nowrap text-white">
            <ShinyText
              text={title}
              speed={1.5}
              delay={0}
              color="var(--color-white-pure)"
              shineColor="var(--color-gray-300)"
              spread={120}
              direction="right"
              yoyo={true}
              pauseOnHover={false}
              disabled={false}
            />
          </h2>
        </div>
        {seemore ? (
          <div>
            <Link
              href={`${role}/${href}`}
              className="w-full flex gap-2  px-5 items-center cursor-pointer"
            >
              <span className="text-gray-400">{navigateText}</span>
              <Image alt="icon" src={grayTriangle} />
            </Link>
          </div>
        ) : (
          <div className={`${twTopContent}`}>{topSectionContent}</div>
        )}
      </div>
      <div className="text-gray-300 w-full h-px border border-dashed"></div>
      <div className="w-full lg:p-5 py-5">{children}</div>
    </div>
  );
};

export default DashboardContentContainer;
