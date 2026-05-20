"use client";

import { IHouse } from "@/src/core/types/IHouse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../common/productCard/ProductCard";
import Container from "../common/Container";

interface SliderSectionProps {
  cardData: IHouse[];
}

const SliderSection = ({ cardData }: SliderSectionProps) => {
  const getMortgageHouses = cardData.filter(
    (house) => house.transaction_type === "mortgage",
  );
  return (
    <Container>
      <div className="w-full overflow-hidden flex-center gap-8 justify-end">
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
          className="w-full flex justify-end "
        >
          {getMortgageHouses.map((item: IHouse) => (
            <SwiperSlide key={item.id}>
              <ProductCard
                seeMore
                offer="15"
                title={item.title}
                rooms={item.rooms}
                location={item.address}
                discounted_price={item.discounted_price}
                rate={item.rate}
                price={item.price}
                buttonText="قیمت خرید :"
                bathrooms={item.bathrooms}
                capacity={item.capacity}
                photos={item.photos}
                href={`/mortgageandhouserent/${item.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default SliderSection;
