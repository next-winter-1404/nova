"use client"
import Image from "next/image";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import building from "@/src/assets/icons/house-building.svg";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import ProductCard from "../common/productCard/ProductCard";

const SimilarHouses = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className=" w-full  bg-dark-700 rounded-2xl h-[52px] mt-4 flex justify-between gap-6 px-5 ">
        <div className="flex-center text-primary-accent-green gap-4 cursor-pointer hover:opacity-70">
          <FiChevronLeft className="w-4 h-4" />
          <span className="cursor-pointer">مشاهده همه</span>
        </div>
        <div className="flex-center text-white gap-4">
          <span>اگهی های مشابه</span>
          <Image alt="icon" src={building} className="w-4 h-4" />
        </div>
      </div>
      <div className="flex border w-full">
      <div className="w-full overflow-hidden flex-center gap-8">
                            <Swiper
                                modules={[Navigation, Autoplay,Pagination]}
                                spaceBetween={20}
                                slidesPerView={4}
                                
                                autoplay = {{delay : 3000,
                                disableOnInteraction : false
                                }}
                                breakpoints={{
                                390 : {slidesPerView:1},
                                640 : {slidesPerView:2},
                                1024 : {slidesPerView:4}
                                }}
                                pagination ={{
                                clickable : true,
                                }}
                                
                                className='my-house-swiper'
                            >        
                                <SwiperSlide>
                                <ProductCard
                                    title='آپارتمان لوکس زعفرانیه'
                                    location='گیلان ، رشت'
                                    rate='4.5'
                                    buttonText="eifjoie"
                                    offer="15"
                                    capacity={5}
                                    address=" سقلظسلظس"
                                   parking={4}
                                   
                                    />
                                </SwiperSlide> 
                                <SwiperSlide>
                                <ProductCard
                                    mode='col'
                                    title='آپارتمان لوکس زعفرانیه'
                                    location='گیلان ، رشت'
                                    rate='4.5'
                                    oldPrice="2500000"
                                    />
                                </SwiperSlide> 
                                <SwiperSlide>
                                <ProductCard
                                    mode='col'
                                    title='آپارتمان لوکس زعفرانیه'
                                    location='گیلان ، رشت'
                                    rate='4.5'
                                    oldPrice="2500000"
                                    />
                                </SwiperSlide> 

                                <SwiperSlide>
                                <ProductCard
                                    mode='col'
                                    title='آپارتمان لوکس زعفرانیه'
                                    location='گیلان ، رشت'
                                    rate='4.5'
                                    oldPrice="2500000"
                                    />
                                </SwiperSlide> 
                                <SwiperSlide>
                                <ProductCard
                                    mode='col'
                                    title='آپارتمان لوکس زعفرانیه'
                                    location='گیلان ، رشت'
                                    rate='4.5'
                                    oldPrice="2500000"
                                    />
                                </SwiperSlide> 
                                <SwiperSlide>
                                <ProductCard
                                    mode='col'
                                    title='آپارتمان لوکس زعفرانیه'
                                    location='گیلان ، رشت'
                                    rate='4.5'
                                    oldPrice="2500000"
                                    />
                                </SwiperSlide> 
                            </Swiper>
                            
                        </div>
      </div>
    </div>
  );
};

export default SimilarHouses;
