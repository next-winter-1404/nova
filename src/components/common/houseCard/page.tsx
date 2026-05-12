'use client'
import React, { FC } from 'react'
import InnerHouseCard from '../innerHouseCard/page'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { IHouse } from '@/src/core/types/IHouse'

interface HouseCardProps {
  houses : IHouse[];
}
const HouseCard: FC<HouseCardProps> = ({houses}) => { 
  // console.log("houses in HouseCard:", houses);
  // console.log("is array?", Array.isArray(houses));
  if (!houses || ! Array.isArray(houses)){
    return(
      <p>در حال بارگذاری</p>
    )
  }
  // const houses = result?.houses || []
  return ( 
    <>   
    <style jsx global>
      {`
      .my-house-swiper{
        padding-bottom :50px !important
      }
        .my-house-swiper .swiper-pagination .swiper-pagination-bullet {
        background: #D9D9D9 !important;
        opacity: 1 !important;
        }
        .my-house-swiper .swiper-pagination .swiper-pagination-bullet-active{
  background: #8CFF45 !important;
}
      `}
    </style> 
    <div className ='md:w-[1440px] w-[380px] flex h-[495px] items-center justify-between overflow-hidden'>     
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
      {houses.map((house:IHouse) => (
        <SwiperSlide key={house.id}>
        <InnerHouseCard 
          address={house.address}
          bathrooms={house.bathrooms}
          rooms={house.rooms}
          rate={house.rate}
          photos={house.photos}
          price={house.price}
          parking={house.parking}
          title={house.title}
        />
      </SwiperSlide>   
      ))}    
                        
      </Swiper>
    </div> 
    </>
  )
}

export default HouseCard