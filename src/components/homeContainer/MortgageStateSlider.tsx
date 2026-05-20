"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../common/productCard/ProductCard";

const MortgageStateSlider = () => {
  return (
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
      className="flex-center border"
    >
      <SwiperSlide>
        <ProductCard
          seeMore
          title="آپارتمان لوکس زعفرانیه"
          location="گیلان ، رشت"
          price="50000"
          rate="4.5"
          buttonText="قیمت خرید :"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MortgageStateSlider;
