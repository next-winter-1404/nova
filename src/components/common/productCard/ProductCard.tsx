import CardContainer from "@/src/components/common/card/page";
import Image from "next/image";
import Location from "@/src/assets/icons/Location.svg";
import bed from "@/src/assets/icons/bed.svg";
import houseTree from "@/src/assets/icons/houseTree.svg";
import car from "@/src/assets/icons/car.svg";
import bathroom from "@/src/assets/icons/bathroom.svg";
import leftArrow from "@/src/assets/icons/leftArrow.svg";
import Star from "@/src/assets/icons/Star.svg";
import OldPriceComponent from "./OldPrice";
import { IProductCard } from "@/src/core/types/IProductCard";
import { computingDiscount } from "@/src/utils/helper/computingDiscount";
import Link from "next/link";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
import imagePalaceHolder from "@/src/assets/images/imagePlaceHolder (2).png";
import { FaStar } from "react-icons/fa";
import CardShape from "../shape/CardShape";
import { formatPrice } from "@/src/utils/hooks/formatPrice";

const ProductCard = ({
  title,
  address,
  bathrooms,
  bookings,
  capacity,
  caption,
  discount_id,
  discounted_price,
  id,
  location,
  parking,
  photos,
  price,
  rate,
  rooms,
  tags,
  seeMore,
  offer,
  buttonText,
  href,
}: IProductCard) => {
  
  // countinig discount
  const discountPercent = computingDiscount({ discounted_price, price });
  const roundDiscountPercent = Math.round(discountPercent);

  return (
    <div className="group max-w-76.5  text-white-pure flex flex-col gap-4 font-vazir">
      {seeMore && (
        <div className="group-hover:bg-primary-accent-green w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700">
          <Image src={leftArrow} alt="leftArrow" />
        </div>
      )}

      <div className="relative flex-center max-w-76.5 h-58 p-5">

        <CardShape/>
        
        <div className="w-68.5 h-39 rounded-[20px] bg-dark-600 z-10 mt-8"></div>
        <div className="w-full flex justify-end absolute top-3 right-4">
          <span className=" w-[67px] h-8 flex-center gap-1 px-3 py-1.5 whitespace-nowrap text-dark-700 group-hover:text-white-pure bg-white-pure rounded-lg group-hover:bg-dark-850">
            <span
              className="flex-center gap-2 mt-1"
            >
               <span className="flex-center"><FaStar className="w-4 h-4 mb-1.5" /></span>
              {rate || 0}
             
            </span>
          </span>
        </div>
      </div>
      <div className="flex-col-center gap-3">
        <span
          className={`w-full ${discounted_price && discounted_price === "0" ? " flex items-center justify-between" : "justify-end"} `}
        >
          {discounted_price && discounted_price === "0" ? (
            <span className="text-16-semibold px-3 py-1.5 sm:w-14 w-12 text-center rounded-xl bg-tomato-red whitespace-nowrap">
              %{roundDiscountPercent}
            </span>
          ) : (
            ""
          )}
          <span className="flex justify-end text-20-regular">
            {title && href ? (
              <Link href={href}>{title}</Link>
            ) : (
              title || "عنوانی وجود ندارد"
            )}
          </span>
        </span>

        {bathroom && (
          <>
            <div className="w-full flex justify-end gap-3">
              <h2 className="text-[16px] text-gray-300">
                {address || "ادرسی وجود ندارد"}
              </h2>
              <Image src={Location} alt="Location" />
            </div>
            <div className="w-full h-[16px] flex items-center justify-end text-gray-300 gap-1 whitespace-nowrap">
              <div className=" w-[30px] justify-center flex gap-2.5 text-13-regular">
                حیاط
                <Image src={houseTree} alt="houseTree" />
              </div>
              <div className="border-l border-gray-300 w-[85px] text-13-regular justify-center flex gap-2.5 ">
                <span>{bathrooms || "--"}</span>
                <span>حمام</span> <Image src={bathroom} alt="bathroom" />
              </div>
              <div className="border-l border-gray-300 w-[91px] text-13-regular justify-center flex gap-2.5">
                <span>{parking || "--"}</span>
                <span>پارکینگ</span>
                <Image src={car} alt="car" />
              </div>
              <div className="border-l border-gray-300 w-[77px] text-13-regular justify-end flex gap-2.5">
                <span>{rooms || "--"}</span>
                <span>خوابه</span>
                <Image src={bed} alt="bed" />
              </div>
            </div>
            <div className="w-full h-[36px] group-hover:bg-primary-accent-green bg-dark-600 text-white-pure group-hover:text-dark-800 rounded-[12px] flex items-center justify-between pl-3 pr-3">
              <h2 className="text-16-medium"> {formatPrice(Number(price))} </h2>
              <h2 className="text-gray-300 text-16-medium">
                {discounted_price && discounted_price === "0" ? (
                  <OldPriceComponent oldPrice={price} />
                ) : (
                  <span>{buttonText}</span>
                )}
              </h2>
            </div>
          </>
        )}
      </div>
      {/* <CardContainer
      // parentExtraStyle={{width:"300px"}}
        curveColor="#393939"
        cavity="round"
        labelContent={
          <div className="w-[67px] h-[30px] mt-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] z-20 ">
            <Image src={Star} alt="star" />
            {rate}
          </div>
        }
        labelSize="md"
        mainContent={
          <div
            className={`w-[297px] h-[156px] ${photos ? <Image src={photos[0]} alt="state image" /> : " bg-dark-600 "} rounded-2xl`}
          ></div>
        }
        labelBackground="group-hover:bg-[#8cff45] bg-[#393939]"
        labelExtraStyle={{ minHeight: "25px" }}
        mainExtraStyle="group-hover:bg-primary-accent-green bg-dark-700 p-6"
      /> */}
    </div>
  );
};

export default ProductCard;
