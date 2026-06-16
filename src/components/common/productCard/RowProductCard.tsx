import { FC } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Location from "@/src/assets/icons/Location.svg";
import bed from "@/src/assets/icons/bed.svg";
import houseTree from "@/src/assets/icons/houseTree.svg";
import car from "@/src/assets/icons/car.svg";
import bathroom from "@/src/assets/icons/bathroom.svg";
import leftArrow from "@/src/assets/icons/leftArrow.svg";
import Button from "../button/page";
import imgPlaceholder from "@/src/assets/images/imagePlaceHolder (2).png"
import { IProductCard } from "@/src/core/types/IProductCard";
import Link from "next/link";
import CompareButton from "../compareButton/page";
import CompareBadge from "../compareBadge/page";

import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
const RowProductCard: FC<IProductCard> = ({
  price,
  rate,
  address,
  title,
  bathrooms,
  rooms,
  parking,
  href,
  id
}) => {
  return (
    <div className="flex gap-15">
      <div className="flex flex-col items-start justify-between flex-1 gap-4 whitespace-nowrap">
        <div>
        <CompareButton propertyId={id}/>
        <CompareBadge/>
        </div>
        {price && (
          <span className="flex-center gap-2 px-3 py-1.5 whitespace-nowrap text-semibold-28 text-primary-accent-green">
            <i>ت</i>
            <span>{formatPrice(Number(price))}</span>
          </span>
        )}
        <Link href={href}>
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
              cursor: "pointer",
            }}
          />
        </Link>
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
                {rate||0}
                <FaStar className="w-4 h-4" />
              </span>
            </span>

          </div>
          <span className="flex justify-end text-20-medium whitespace-nowrap">
            {title ? <Link href={href} className="block w-full max-w-full truncate whitespace-nowrap overflow-hidden text-right direction-rtl text-20-regular">{title}</Link> : "عنوانی وجود ندارد"}
          </span>
          <div className="flex flex-col items-end gap-5">
            <div className="flex justify-start gap-1.5">
              <h2 className="w-[80px] text-[16px] text-gray-300  whitespace-nowrap block w-full max-w-full truncate  overflow-hidden text-right direction-rtl ">
                {address || "ادرسی وجود ندارد"}
              </h2>
              <Image src={Location} alt="Location" className="w-4 h-4" />
            </div>
            <div className=" h-[16px] flex items-center justify-end text-gray-300 gap-1 whitespace-nowrap">
              <div className=" w-[30px] text-[13px] justify-center flex gap-2.5">
                حیاط 
                <Image src={houseTree} alt="houseTree" />
              </div>
              <div className="border-l border-gray-300 w-[85px] text-[13px] justify-center flex gap-2.5 ">
                <span>{bathrooms || "--"}</span>
                <span>حمام</span> <Image src={bathroom} alt="bathroom" />
              </div>
              <div className="border-l border-gray-300 w-[91px] text-[13px] justify-center flex gap-2.5">
                <span>{parking || "--"}</span>
                <span>پارکینگ</span>
                <Image src={car} alt="car" />
              </div>
              <div className="border-l border-gray-300 w-[77px] text-[13px] justify-end flex gap-2.5">
                <span>{rooms || "--"}</span>
                <span>خوابه</span>
                <Image src={bed} alt="bed" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[160px] ">
          <ImageFallback
              fallbackSrc={imgPlaceholder}
              src={ imgPlaceholder}
              alt="state image"
              width={200}
              height={160}
              className="rounded-2xl w-fit h-full rounded-xl"
            />
        </div>
      </div>
    </div>
  );
};

export default RowProductCard;
