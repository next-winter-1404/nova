'use client'
import React, { useState } from 'react'
import Location from "@/src/assets/icons/marker 1.svg"
import House from "@/src/assets/icons/house-building(1).svg"
import Transaction from "@/src/assets/icons/transaction.svg"
import Yard from "@/src/assets/icons/yard.svg"
import Price from "@/src/assets/icons/dollerprice.svg"
import Masconi from "@/src/assets/icons/masconi.svg"
import AcceptIcon from "@/src/assets/icons/AcceptIcon.svg"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import { useRouter, useSearchParams } from 'next/navigation'
import useStepNavigation from '../navigation'
import { clearLocalStorage, loadFromLocalStorage } from '@/src/utils/helper/storage/storage'
import {HouseFormDraft, houseFormSchema } from '../validation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import toast from 'react-hot-toast'
import { postHouses } from '@/src/utils/sevices/api/houses/postHouses'
import { useHouse } from '@/src/context/page'
import { getClientCookie } from '@/src/utils/helper/cookies/clientCookie/clientSideCookie'

const FinalAccept = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'finalaccept'
  const router = useRouter();
  const {goToPrev} = useStepNavigation();
  const [houseData] =
  useState<Partial<HouseFormDraft>>(
    loadFromLocalStorage()
  );

  const { photos, setPhotos } = useHouse();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sellerName = getClientCookie('userName')

  const handleSubmit = async () => {
    const validationData = {
      ...houseData,
      capacity: Number(houseData.capacity),
      rooms: Number(houseData.rooms),
      bathrooms: Number(houseData.bathrooms),
      parking: Number(houseData.parking),
      photos,
    };

    console.log(
      "VALIDATION DATA",
      JSON.stringify(validationData, null, 2)
    );
  
    const validation =
      houseFormSchema.safeParse(validationData);
  
      if (!validation.success) {
        console.log(
          JSON.stringify(
            validation.error.format(),
            null,
            2
          )
        );
      
        return;
      }
  
    setIsSubmitting(true);
  
    try {
      const { photos, ...payload } = validationData;
      
      const result = await postHouses({
        ...payload,
        sellerName,
      });
  
      if (result) {
        clearLocalStorage();
        setPhotos([]);
        toast.success("آگهی با موفقیت ثبت شد");
        router.push("/dashboard/admin/estate-management");
      }
    } catch (error: any) {
      console.log(error);
  
      toast.error(
        error?.response?.data?.message ||
        "خطایی رخ داد"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
        <div className='rounded-3xl h-[420px] border border-[#8888884D] flex flex-col items-center justify-center w-[1170] '>
          <div className='flex w-[1140px] flex-col md:gap-[20px] gap-[16px]'>
            <div className='w-full h-[230px] gap-6 flex'>
              <div className='w-[465px] h-full'>
                {photos.length > 0 ? (
                  <div className="relative w-full h-[226px] rounded-lg overflow-hidden bg-gray-200">
                    <Swiper
                      modules={[ Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      className="w-full h-full"
                    >
                  {photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`photo-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          ) : (
            <p className="text-gray-500 text-sm text-center py-4">تصویری آپلود نشده است.</p>
          )}

              </div>
              <div className='w-[490px] gap-5 h-full flex flex-col'>
                <span className='text-[26px] text-white-pure'>{houseData.title}</span>
                <h2 className='text-[20px] text-gray-300'>{houseData.caption}</h2>
              </div>
            </div>
            <div className='w-full flex gap-5 text-gray-300 text-[20px]'>
              <div className='w-[465px] flex flex-col gap-5'>
                <h2 className='flex gap-4'> <Image src={Location} alt='Location'/>{houseData.address}</h2>
                <h2 className='flex gap-4'> <Image src={Masconi} alt='Masconi'/>{houseData.categories === 'apartment' ? "اپارتمان" : houseData.categories === 'villa' ? 'ویلا' : houseData.categories === 'land' ? 'زمین' : houseData.categories === 'commercial'? 'تجاری' : "خانه"}</h2>
                <h2 className='flex gap-4'> <Image src={Transaction} alt='Transaction'/>{houseData.transaction_type === "rental" ? "اجاره" : houseData.transaction_type === "mortgage" ? "رهن" : houseData.transaction_type === "reservation" ? "رزرو" : "خرید مستقیم"}</h2>            
              </div>
              <div className='w-[465px] flex flex-col gap-5'>
                <h2 className='flex gap-4'> <Image src={Yard} alt='Yard'/>{houseData.yard_type === 'garden' ? 'حیاط' : houseData.yard_type === 'terrace' ? 'تراس' : "بدون حیاط"}</h2>           
                <h2 className='flex gap-4'> <Image src={House} alt='House'/>
                  {houseData.rooms} خوابه  ,
                  {houseData.parking} پارکینگ ,
                  {houseData.bathrooms} حمامه ,
                  نفر{houseData.capacity} ظرفیت 
                </h2>
                <h2 className='flex gap-4 text-[24px] text-primary-accent-green'> <Image src={Price} alt='Price'/> تومان {houseData.price}</h2>
              </div>
            </div>
          </div>
        </div>
      <div className='flex gap-4' dir='ltr'>            
            <Button 
              text={"ثبت آگهی"} icon={<Image src={AcceptIcon} alt='AcceptIcon' style={{marginBottom:"-2px", width:"18px"}}/>} 
              textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
              onClick={handleSubmit}
              // disabled={isSubmitting}
              //  {isSubmitting ? 'در حال ثبت...' : 'ثبت آگهی'}
              type='button'
            /> 
            <Button
              text={"مرحله قبل"} icon={<Image src={rightArrow} alt='rightArrow' style={{marginBottom:"-2px", width:"8px"}}/>}
              textStyle={{color: "#FFFFFF", fontSize:"16px"}} buttonStyle={{border:"2px solid #FFFFFF", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"rtl"}}
              onClick={() => goToPrev(currentStep)}
            /> 
      </div>
    </div>
  )
}

export default FinalAccept
