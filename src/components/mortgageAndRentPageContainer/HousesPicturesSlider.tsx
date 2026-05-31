"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import HousePicture from "@/src/assets/images/singleHouse.png";

interface HousesPicturesSliderProp {
  imagesSrc: string[];
}

const HousesPicturesSlider = ({ imagesSrc }: HousesPicturesSliderProp) => {

    if (imagesSrc == null || imagesSrc.length === 0) {
    return (
      <div className="w-full flex-center">
        <Image src={HousePicture} alt="house picture" width={400} height={300} />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          390: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
        }}
        className="flex-centr"
      >
          {imagesSrc.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <Image src={imageSrc} alt="house picture" width={400} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HousesPicturesSlider;
