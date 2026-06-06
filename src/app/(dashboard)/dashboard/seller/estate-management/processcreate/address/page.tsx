'use client'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useState } from 'react'
import useStepNavigation from '../navigation'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import { loadFromLocalStorage, saveToLocalStorage } from '@/src/utils/helper/storage/storage'
import { HouseFormData, secondStepSchema } from '../validation'


const Address = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'address'
  const {goToNext, goToPrev} = useStepNavigation();
  const [houseData, setHouseData] =
  useState<Partial<HouseFormData>>(
    () => loadFromLocalStorage()
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});  
  
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      
      setHouseData(prev => ({ ...prev, [name]: value }));
      
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
      }
    };
  
    const handleNext = () => {
      const result = secondStepSchema.safeParse(houseData);
    
      if (!result.success) {
        const fieldErrors =
          result.error.flatten().fieldErrors;
    
        setErrors({
          address: fieldErrors.address?.[0] || "",
        });
    
        return;
      }
    
      saveToLocalStorage({
        ...loadFromLocalStorage(),
        ...houseData,
      });
    
      goToNext("address");
    };
  
  return (
    <>
      <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
        <div className='flex flex-col gap-1.5 justify-between w-full' >               
            <Input
              name='address'
              tagBgStyle={{background :"var(--color-dark-600)"}}
              dir='rtl'
              labelText='نشانی ملک:'
              parentWidth='w-full'
              InputHeight={'h-[80px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'address'}
              placeHolder='وارد کنید ...'
              type='text'
              htmlFor={'address'}
              value={houseData.address ?? ''}
              onChange={handleChange}
            />
            {errors.address && <span className="text-red-500 text-[15px]">{errors.address}</span>}
          </div>
          <div className='w-[389px] text-gray-300 text-[20px]'>
            <h2 >
              با انتخاب موقعیت مکانی ملک خود از روی نقشه به راحتی            
            </h2>
            <div className='flex gap-1.5'>
              <h2 className='text-primary-accent-green '> موقعیت ملک </h2>
              <h2>راتعیین کنید.</h2>
            </div>
          </div>
      </div>
      <div dir='ltr'>
        <div className='flex gap-4'>            
            <Button 
              text={"مرحله بعد"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
              textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
              onClick={handleNext}
              type="button"
            /> 
            <Button
              text={"مرحله قبل"} icon={<Image src={rightArrow} alt='rightArrow' style={{marginBottom:"-2px", width:"8px"}}/>}
              textStyle={{color: "#FFFFFF", fontSize:"16px"}} buttonStyle={{border:"2px solid #FFFFFF", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"rtl"}}
              onClick={() => goToPrev(currentStep)}
            /> 
          </div>
        </div>
    </>
  )
}

export default Address