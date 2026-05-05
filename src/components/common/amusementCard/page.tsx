'use client'
import React from 'react'
import CardContainer from '../card/page'
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg"
import smallLeftArrowWhite from "@/src/assets/icons/smallLeftArrowWhite.svg"
import Image from 'next/image'
import Button from '../button/page'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import InnerAmusementCard from '../innerAmusementCard/page'
const AmusementCard = () => {
  return (
    <CardContainer
                    cavity='sharp'
                    labelContent={<div className='h-[35px]'></div>}
                    labelSize='lg'
                    mainContent={<div className='flex gap-12 flex-col md:w-[1376px] w-[390px] md:h-[535px]'>
                        <div className='md:w-full w-[389px] flex gap-6 flex-col'>
                            <div className='flex justify-end gap-4'>
                                <Image src={LeftTriangle} alt='LeftTriangle'/>
                                <h2 className='md:text-[16px] text-[14px] text-primary-accent-green'>جدید ترین نقاط</h2>
                            </div>
                            <div className='flex flex-row items-center justify-between'>
                                <Button 
                                    text=" مشاهده همه" width='w-[137px]' height='h-[36px]' buttonStyle={{display: "flex", justifyItems:"center", alignItems:"center",fontSize :"16px",gap:"20px" , backgroundColor : "dark-700",border: "2px solid #FFF"}} 
                                    icon={<Image src={smallLeftArrowWhite} alt='smallLeftArrow'/>}>
                                </Button>
                                <span className='md:text-[32px] text-[24px] text-white-pure'> جدید ترین مناقط تفریحی</span>
                            </div>
                        </div>
                        <div className ='md:w-full w-[390px] flex h-[295px] items-center justify-between overflow-hidden'>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
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
                                    <InnerAmusementCard/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <InnerAmusementCard/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <InnerAmusementCard/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <InnerAmusementCard/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <InnerAmusementCard/>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>}
                mainExtraStyle={{background:"#232323"}}
                    labelBackground='bg-[#232323]'     
                    curveColor='#232323'           
                />
  )
}

export default AmusementCard