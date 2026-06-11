"use client";
import ProductCard from "@/src/components/common/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IHouse } from "@/src/core/types/IHouse";

interface HouseCardInfoProp {
  houses: IHouse[];
}

const SpecialOfferSlider = ({ houses }: HouseCardInfoProp) => {
  const getHouseWithOffer = houses.filter(
    (house) => house.discounted_price !== null,
  );
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
      pagination={{ clickable: true }}
      centerInsufficientSlides={true}
      className="w-full"
    >
      {getHouseWithOffer.map((item: IHouse) => (
        <SwiperSlide key={item.id} className="group">
          <ProductCard
            seeMore
            offer="15"
            title={item.title}
            rooms={item.rooms}
            location={item.address}
            discounted_price={item.discounted_price}
            rate={item.rate}
            price={item.price}
            buttonText=": قیمت خرید"
            bathrooms={item.bathrooms}
            capacity={item.capacity}
            photos={item.photos}
            href={`/mortgageandhouserent/${item.id}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SpecialOfferSlider;
