"use client";
import BlureLightCircle from "../common/BlureLightCircle";
import Container from "../common/Container";
import GreenSectionTitle from "../common/GreenSectionTitle";
import ProductCard from "../common/productCard/ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const MostPopulerDestinationSection = () => {
  return (
    <div className="relative padding-section">
      <BlureLightCircle bgColor="#8CFF4552" />
      <Container>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-6">
            <GreenSectionTitle title="مقصد رویا ها" />
            <h2 className="text-32-medium">
              اجاره ویلا در محبوب ترین مقاصد این ماه
            </h2>
            <p className="text-[16px] text-center text-white">
              ! در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب کاربران
              مشاهده کنید و آن ها بررسی کنید
            </p>
          </div>
          <Container>
            <div className="w-full overflow-hidden flex-center gap-8">
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
                className="my-house-swiper"
              >
                <SwiperSlide>
                  <ProductCard
                    title="آپارتمان لوکس زعفرانیه"
                    location="گیلان ، رشت"
                    rate="4.5"
                    price="25000000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    title="آپارتمان لوکس زعفرانیه"
                    location="گیلان ، رشت"
                    rate="4.5"
                    price="25000000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    title="آپارتمان لوکس زعفرانیه"
                    location="گیلان ، رشت"
                    rate="4.5"
                    price="25000000"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <ProductCard
                    title="آپارتمان لوکس زعفرانیه"
                    location="گیلان ، رشت"
                    rate="4.5"
                    price="25000000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    title="آپارتمان لوکس زعفرانیه"
                    location="گیلان ، رشت"
                    rate="4.5"
                    price="25000000"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <ProductCard
                    title="آپارتمان لوکس زعفرانیه"
                    location="گیلان ، رشت"
                    rate="4.5"
                    price="25000000"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default MostPopulerDestinationSection;
