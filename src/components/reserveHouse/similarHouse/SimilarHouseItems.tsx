"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from '../../common/productCard/ProductCard'
import { FC } from "react";
import { IHousesResponse } from "@/src/core/types/IHouse";

const SimilarHouseItems:FC<IHousesResponse> = ({houses}) => {
  return (
    <div className="w-full overflow-hidden flex-center gap-8 ">
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
            className="w-full flex-center gap-4"
          >
            {houses?.map((house) => (
              <SwiperSlide >
                <ProductCard
                  title={house.title}
                  location={house.location}
                  rate={house.rate}
                  buttonText="قیمت رزرو"
                  capacity={house.capacity}
                  address={house.address}
                  parking={house.parking}
                  bathrooms={house.bathrooms}
                  rooms={house.rooms}
                  discounted_price={house.discounted_price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default SimilarHouseItems
