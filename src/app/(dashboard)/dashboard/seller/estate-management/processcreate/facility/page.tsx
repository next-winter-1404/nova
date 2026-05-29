'use client'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import UseStepNavigation from '../navigation'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"

const Facility = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'facility'
  const {goToNext, goToPrev} = UseStepNavigation();
  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <form className='w-full flex flex-col gap-9'>
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='تعداد اتاق:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'room'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'room'}
                // value={sharedMobile}
                // onChange={(e) => setSharedMobile(e.target.value)}
              />
              <Input
                dir='rtl'
                tagBgStyle={{background :"var(--color-dark-600)"}}
                labelText='تعداد حمام:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'bathroom'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'bathroom'}
                // value={sharedEmail}
                // onChange={(e) => setSharedEmail(e.target.value)}
              />
        </div> 
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='تعداد پارکینگ:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'parking'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'parking'}
                // value={sharedMobile}
                // onChange={(e) => setSharedMobile(e.target.value)}
              />
              <Input
                dir='rtl'
                tagBgStyle={{background :"var(--color-dark-600)"}}
                labelText='نوع حیاط:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'yard'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'yard'}
                // value={sharedEmail}
                // onChange={(e) => setSharedEmail(e.target.value)}
              />
        </div>
      </form>
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

export default Facility