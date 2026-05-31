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
import imagePlaceHolder from "@/src/assets/images/imagePlaceHolder (2).png"
import { useSearchParams } from 'next/navigation'
import UseStepNavigation from '../navigation'
import { clearLocalStorage, loadFromLocalStorage } from '@/src/utils/helper/storage/storage'
import { HouseFormData } from '../validation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import toast from 'react-hot-toast'
import { postHouses } from '@/src/utils/sevices/api/houses/postHouses'
import { getHouses } from '@/src/utils/sevices/api/houses/getHouses'

const STORAGE_KEY = 'houseFormData';
const FinalAccept = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'finalaccept'
  const {goToPrev} = UseStepNavigation();
  const [houseData, setHouseData] = useState<Partial<HouseFormData>>(loadFromLocalStorage());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estateList, setEstateList] = useState<any[]>([]);

  // const handlePrev = () => {
  //   goToPrev('');
  // };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const savedData = houseData;
  
      if (!savedData || Object.keys(savedData).length === 0) {
        toast.error('اطلاعات آگهی یافت نشد. لطفاً مراحل را از اول پر کنید.');
        return;
      }
  
      const formDataToSend = new FormData();
  
      Object.keys(savedData).forEach(key => {
        if (key !== 'photos') {
          formDataToSend.append(key, String(savedData[key]));
        }
      });
      if (savedData.photos && Array.isArray(savedData.photos)) {
        savedData.photos.forEach((photo: File | Blob) => {
          formDataToSend.append('photos', photo);
        });
      }
  
      
      const result = await postHouses(formDataToSend);
      console.log("result :" ,result)
      if (result && result.data) {
        setHouseData({
          title: '',
          description : '',
          price: '',
          transaction_type: 'rental',
          categories: 'apartment',
          photos: [],
          address: '',
          capacity : '',
          yard_type: 'none',
          rooms : '',
          bathrooms : '',
          parking : '',

        });;
      }
      toast.success('آگهی شما با موفقیت ثبت شد!');
      
      clearLocalStorage();

      const updatedList = await getHouses();
        setEstateList(updatedList.houses);
      
      // setTimeout(() => {
      //   window.location.href = '/dashboard/seller/estate-management';
      // }, 1500);
  
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'خطایی رخ داد. لطفاً دوباره تلاش کنید.');
      console.error(error);
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
                {houseData.photos && houseData.photos.length > 0 ? (
                  <div className="relative w-full h-[226px] rounded-lg overflow-hidden bg-gray-200">
                    <Swiper
                      modules={[ Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation
                      pagination={{ clickable: true }}
                      className="w-full h-full"
                    >
                  {houseData.photos.map((photo: any, index: number) => {
                    if (!photo || !(photo instanceof File)) {
                      return null;
                    }

                  return (
                    <SwiperSlide key={index}>
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`final-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          ) : (
            <p className="text-gray-500 text-sm text-center py-4">تصویری آپلود نشده است.</p>
          )}

              </div>
              <div className='w-[490px] gap-5 h-full flex flex-col'>
                <span className='text-[26px] text-white-pure'>{houseData.title}</span>
                <h2 className='text-[20px] text-gray-300'>{houseData.description}</h2>
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
                  خوابه {houseData.rooms} ,
                  پارکینگ {houseData.parking},
                  حمامه{houseData.bathrooms} ,
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
              disabled={isSubmitting}
              //  {isSubmitting ? 'در حال ثبت...' : 'ثبت آگهی'}
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
