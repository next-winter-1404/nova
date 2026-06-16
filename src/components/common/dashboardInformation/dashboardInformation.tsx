import Image from "next/image";
import Link from "next/link";
import grayTriangle from "@/src/assets/images/grayTriangle.svg";
import { FC, ReactNode } from "react";
import GlareHover from "../../animations/GlareHover/GlareHover";
import CountUp from "../../animations/CountUp/CountUp";
import ShinyText from "../../animations/ShinyText/ShinyText";

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
  twContentClassName,
}) => {
  return (
    <div className="max-w-[364px]  rounded-[12px] bg-dark-600 flex-col flex gap-1 pb-3">
      <div dir="rtl" className="flex-center w-full gap-3">
        <div className="w-[50px] h-[60px] bg-dark-900 rounded-b-xl flex-center">
          {icon}
        </div>
        <div className="flex flex-col gap-1 w-[65%] text-white">
          <h2>
            <CountUp to={amount} from={amount - 50} />
          </h2>
          <h2>
            <ShinyText
              text={cardText}
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
      </div>
      <div className="text-gray-500 text-center whitespace-nowrap overflow-hidden">
        {"-------------------------------------------"}
      </div>

      {seeMore && (
        <Link
          href={`${role}/${href}`}
          className="w-full flex justify-between px-5 items-center cursor-pointer"
        >
          <span className="text-gray-400 hover:text-gray">مشاهده</span>
          <Image alt="icon" src={grayTriangle} />
        </Link>
      )}
      <div className={twContentClassName}>{content}</div>
    </div>
  );
};

export default DashboardInformation;
