'use client'
import Button from '@/src/components/common/button/page'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React from 'react'
import UseStepNavigation from '../navigation';
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"

const Photos = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'photos'
  const {goToNext, goToPrev} = UseStepNavigation();
  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <h2 className='text-gray-300'>تصویر ملک</h2>
      <div className='flex text-[20px] gap-1.5 text-gray-300'>
        <h2 className='text-primary-accent-green'>یک تصویر بهتر از هزار کلمه</h2>
        <h2>با قرار دادن عکس شانس دیده شدن ملک‌تان را ۵ برابر کنید.</h2>
      </div>
      <div></div>
      <div className='flex gap-4' dir='ltr'>            
            <Button 
              text={"مرحله بعد"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
              textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
              onClick={() => goToNext(currentStep)}
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

export default Photos