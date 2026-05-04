'use client'
import React from 'react'
import InnerHouseCard from '../innerHouseCard/page'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';


const HouseCard = () => {
  
  return (  
    
    <div className ='w-[1440px] flex h-[495px] items-center justify-between overflow-hidden'>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay = {{delay : 3000,
          disableOnInteraction : false
        }}
        breakpoints={{
          640 : {slidesPerView:2},
          1024 : {slidesPerView:4}
        }}
        className='w-full h-full'
      >        
        <SwiperSlide>
          <InnerHouseCard/>
        </SwiperSlide>            
        <SwiperSlide>
          <InnerHouseCard/>
        </SwiperSlide>  
        <SwiperSlide>
          <InnerHouseCard/>
        </SwiperSlide>
        <SwiperSlide>
          <InnerHouseCard/>
        </SwiperSlide>
        <SwiperSlide>
          <InnerHouseCard/>
        </SwiperSlide>
      </Swiper>
    </div> 
  )
}

export default HouseCard