"use client";
import Container from "@/src/components/common/Container";
import GreenSectionTitle from "../common/GreenSectionTitle";
import CardContainer from "../common/card/page";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import villa from "@/public/icons/villa.svg";
import cottage from "@/public/icons/cottage.svg";
import woodenHouse from "@/public/icons/wooden-house.svg";
import house from "@/public/icons/house.svg";
import apartment from "@/public/icons/apartment.svg";
import Image from "next/image";
import BlureLightCircle from "../common/BlureLightCircle";
import ScrollFloat from "../animations/ScrollFloat/ScrollFloat";
import FadeIn from "../animations/FadeIn";
import SlideInRight from "../animations/GoingFromRight";

const stateCategories = [
  { label: "ملک ویلایی", icon: villa },
  { label: "ملک کلبه", icon: cottage },
  { label: "بومگردی", icon: woodenHouse },
  { label: "استخردار", icon: house },
  { label: "ملک ساحلی", icon: cottage },
  { label: "آپارتمان", icon: apartment },
];

interface CategorySectionProps {
  id: number;
  name: string;
}

const CategorySection = ({ data }: CategorySectionProps) => {
  return (
    <div className="w-full relative padding-section">
      <BlureLightCircle position="sm:-left-8 top-5" />
      <Container>
        <div className="padding-section sm:max-w-full max-w-[400px] flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col items-center gap-6">
            <GreenSectionTitle title="دسته بندی املاک دلتا" />
            <p className="text-32-medium">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
                ! هر ملکی بخوای اینجا پیدا میشه
              </ScrollFloat>
            </p>
            <p className="text-16-medium text-center text-white-pure">
              <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
                با کلیک به روی هر دسته بندی می توانید تمام آگهی مربوط آن را
                مشاهده کنید و به ملک مورد علاقه خود برسید
              </ScrollFloat>
            </p>
          </div>
          <div className="max-w-full flex justify-center items-center">
            
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
                className="my-house-swiper w-full moveItRight "
              >
               
                {data?.map((category) => (
                  <SwiperSlide key={category.id}>
                    <div className="group relative w-[213px] ">
                      <svg
                        width="213"
                        height="89"
                        viewBox="0 0 213 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-dark-860 group-hover:text-primary-accent-green inset-0 m-auto"
                      >
                        <path
                          d="M103.688 23.5C108.543 23.5 113.052 20.98 115.602 16.85C115.602 16.85 121.898 6.65002 121.898 6.65002C124.448 2.52002 128.956 0 133.812 0C133.812 0 199 0 199 0C206.732 0 213 6.27002 213 14C213 14 213 75 213 75C213 82.73 206.732 89 199 89C199 89 14 89 14 89C6.26801 89 0 82.73 0 75C0 75 0 37.5 0 37.5C0 29.77 6.26801 23.5 14 23.5C14 23.5 103.688 23.5 103.688 23.5Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="absolute inset-0 m-auto top-5 left-2 flex-center gap-3 whitespace-nowrap bg">
                        <span className="text-white-pure group-hover:text-dark-700  text-20-regular">
                          ✦
                        </span>
                        <p className="text-white-pure text-20-regular group-hover:text-dark-700">
                          {category.name}
                        </p>
                        <span className=" text-white-pure group-hover:text-dark-700 text-20-regular">
                          ✦
                        </span>
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategorySection;
