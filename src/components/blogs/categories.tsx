"use client"
import React, { FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardContainer from '../common/card/page';
import {  ICategoryResponse } from '@/src/core/types/ICategory';
const BlogCategories:FC<ICategoryResponse> = ({data}) => {
  return (
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
      className="w-full"
    >
      {data?.map((category) => (
        <SwiperSlide className="group" key={category.name}>
          <CardContainer
            cavity="round"
            labelBackground="group-hover:bg-primary-accent-green bg-dark-860"
            labelContent={
             <></>
            }
            labelSize="md"
            mainContent={
              <span className="flex-center justify-between gap-3 whitespace-nowrap">
                <span className="text-white-pure group-hover:text-dark-700  sm:text-[20px] text-[16px]">
                  ✦
                </span>
                <p className="text-white-pure text-[20px] group-hover:text-dark-700">
                  {category.name}
                </p>
                <span className=" text-white-pure group-hover:text-dark-700 sm:text-[20px] text-[16px]">
                  ✦
                </span>
              </span>
            }
            width="w-[300px]"
            labelExtraStyle={{ height: "48px" }}
            curveColor="var(--color-dark-860 )"
            mainExtraStyle="group-hover:bg-primary-accent-green bg-dark-860 p-6"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

export default BlogCategories
