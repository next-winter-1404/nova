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

const stateCategories = [
  { label: "ملک ویلایی", icon: villa },
  { label: "ملک کلبه", icon: cottage },
  { label: "بومگردی", icon: woodenHouse },
  { label: "استخردار", icon: house },
  { label: "ملک ساحلی", icon: cottage },
  { label: "آپارتمان", icon: apartment },
];

const CategorySection = () => {
  return (
    <div className="w-full relative padding-section">
      <BlureLightCircle position="sm:-left-8 top-5"/>
      <Container>
        <div className="padding-section sm:max-w-[1000px] max-w-[400px] flex flex-col justify-center items-center gap-14">
          <div className="flex flex-col items-center gap-6">
            <GreenSectionTitle title="دسته بندی املاک دلتا" />
            <h2 className="text-32-medium">! هر ملکی بخوای اینجا پیدا میشه</h2>
            <p className="text-16-medium text-center text-white-pure">
              با کلیک به روی هر دسته بندی می توانید تمام آگهی مربوط آن را مشاهده
              کنید و به ملک مورد علاقه خود برسید
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
              className="my-house-swiper w-full moveItRight"
            >
              {stateCategories.map((category) => (
                <SwiperSlide className="group" key={category.label}>
                  <CardContainer
                    cavity="round"
                    labelBackground="group-hover:bg-primary-accent-green bg-dark-860"
                    labelContent={
                      <span className="w-14 rounded-2xl p-2.5 group-hover:bg-dark-700-transparent-81">
                        <Image
                          src={category.icon}
                          alt="icon"
                          width={32}
                          height={32}
                        />
                      </span>
                    }
                    labelSize="md"
                    mainContent={
                      <span className="flex-center justify-between gap-3 whitespace-nowrap">
                        <span className="text-white-pure group-hover:text-dark-700  text-20-regular">
                          ✦
                        </span>
                        <p className="text-white-pure text-20-regular group-hover:text-dark-700">
                          {category.label}
                        </p>
                        <span className=" text-white-pure group-hover:text-dark-700 text-20-regular">
                          ✦
                        </span>
                      </span>
                    }
                    width="w-[200px]"
                    labelExtraStyle={{ height: "48px" }}
                    curveColor="var(--color-dark-860 )"
                    mainExtraStyle="group-hover:bg-primary-accent-green bg-dark-860 p-6"
                  />
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
