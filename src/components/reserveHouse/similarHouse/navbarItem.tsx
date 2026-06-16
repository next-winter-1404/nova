import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FiChevronLeft } from "react-icons/fi";
import building from "@/src/assets/icons/house-building.svg";
import ShinyText from "../../animations/ShinyText/ShinyText";
import ArrowAnimation from "../../animations/GoInfiniteLeft";
interface IProp {
  similarTitle?: string;
  href: string;
}
const SimilarNavbarItem: FC<IProp> = ({ similarTitle, href }) => {
  return (
    <div className=" w-full  bg-dark-700 rounded-2xl h-[52px] mt-4 flex justify-between gap-6 px-5 ">
      <div className="flex-center text-primary-accent-green gap-4 cursor-pointer hover:opacity-70">
        <ArrowAnimation duration={1.5} distance={2}>
          <FiChevronLeft className="w-4 h-4" />
        </ArrowAnimation>
        <Link href={href} className="cursor-pointer">
          مشاهده همه
        </Link>
      </div>
      <div className="flex-center text-white-pure gap-4">
        <span>
          <ShinyText
            text={similarTitle}
            speed={1}
            delay={0}
            color="var(--color-white-pure)"
            shineColor="var(--color-gray-300)"
            spread={120}
            direction="right"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
        </span>
        <Image alt="icon" src={building} className="w-4 h-4" />
      </div>
    </div>
  );
};

export default SimilarNavbarItem;
