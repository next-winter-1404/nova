"use client";
import BlureLightCircle from "../common/BlureLightCircle";
import Container from "../common/Container";
import GreenSectionTitle from "../common/GreenSectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ScrollFloat from "../animations/ScrollFloat/ScrollFloat";
import BlogCard from "../common/productCard/BlogCard";
import { useQuery } from "@tanstack/react-query";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";

const MostPopulerDestinationSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["houses"],
    queryFn: () => getHouses(),
  });
  return (
    <div className="relative padding-section">
      <BlureLightCircle position="top-5" />
      <Container>
        <div className="flex flex-col items-center gap-14">
          <div className="flex flex-col items-center gap-6">
            <GreenSectionTitle title="مقصد رویا ها" />
            <h2 className="text-32-medium">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
                اجاره ویلا در محبوب ترین مقاصد این ماه
              </ScrollFloat>
            </h2>
            <p className="text-16-medium text-center text-white">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
                ! در اینجا می توانید محبوب ترین مقصد هارا از بین انتخاب کاربران
                مشاهده کنید و آن ها بررسی کنید
              </ScrollFloat>
            </p>
          </div>
          <Container>
            <div className="sm:max-w-[1376px] max-w-[400px] padding-section overflow-hidden flex-center gap-8">
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
                pagination={{ clickable: true }}
                className="my-house-swiper"
              >
                {isLoading && <p className="text-white">Loading...</p>}

                {data?.houses?.map((house: any) => (
                  <SwiperSlide key={house.id}>
                    <BlogCard title={house.address} rate={house.rate} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default MostPopulerDestinationSection;
