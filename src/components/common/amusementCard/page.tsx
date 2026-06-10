"use client";
import React, { FC } from "react";
import CardContainer from "../card/page";
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg";
import smallLeftArrowWhite from "@/src/assets/icons/smallLeftArrowWhite.svg";
import Image from "next/image";
import Button from "../button/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import InnerAmusementCard from "../innerAmusementCard/page";
import { IHouse } from "@/src/core/types/IHouse";
import ProductCard from "../productCard/ProductCard";
import ContentContainerShape from "../shape/ContentContainerShape";

interface AmusementCardProp {
  houses: IHouse[];
}
const AmusementCard: FC<AmusementCardProp> = ({ houses }) => {
  if (!houses || !Array.isArray(houses)) {
    return <p>در حال بارگذاری</p>;
  }
  return (
    <div className="flex-center relative">
      <svg
        viewBox="0 0 1376 550.5"
        preserveAspectRatio="none"
        className="w-full h-[700px]"
      >
        <path
          d="M1129.95 19.21C1137.5 19.21 1144.89 17.0698 1151.27 13.0601C1151.27 13.0601 1162.23 6.1499 1162.23 6.1499C1168.61 2.12988 1176 0 1183.55 0C1183.55 0 1336 0 1336 0C1358.09 0 1376 17.9102 1376 40C1376 40 1376 510.5 1376 510.5C1376 532.59 1358.09 550.5 1336 550.5C1336 550.5 40 550.5 40 550.5C17.9086 550.5 0 532.59 0 510.5C0 510.5 0 59.21 0 59.21C0 37.1201 17.9086 19.21 40 19.21C40 19.21 1129.95 19.21 1129.95 19.21Z"
          fill="#232323"
        />
      </svg>
      <div className="flex gap-12 flex-col items-center w-[92%] absolute inset-0 m-auto mt-10">
        <div className="w-full flex gap-6 flex-col mt-8">
          <div className="flex gap-4" dir="rtl">
            <h2 className="md:text-[16px] text-[14px] text-primary-accent-green">
              جدید ترین نقاط
            </h2>
            <Image src={LeftTriangle} alt="LeftTriangle" />
          </div>
          <div className="flex flex-row items-center justify-between">
            <Button
              text=" مشاهده همه"
              width="w-[137px]"
              height="h-[36px]"
              buttonStyle={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                fontSize: "16px",
                gap: "20px",
                backgroundColor: "dark-700",
                border: "2px solid #FFF",
              }}
              icon={<Image src={smallLeftArrowWhite} alt="smallLeftArrow" />}
            ></Button>
            <span className="md:text-[32px] text-[24px] text-white-pure">
              {" "}
              جدید ترین مناقط تفریحی
            </span>
          </div>
        </div>
        <div className="md:w-full w-[390px] flex items-center justify-between overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full h-full"
          >
            {houses.map((house: IHouse) => (
              <SwiperSlide key={house.id}>
                <ProductCard
                  title={house.title}
                  photos={house.photos}
                  rate={house.rate}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AmusementCard;
