'use client'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import React from 'react'
import UseStepNavigation from '../navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"


const FirstInfo = () => {
      const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'firstinfo'
  const {goToNext} = UseStepNavigation();
  return (
    <div className='w-[1200px] flex flex-col items-center md:gap-[36px] gap-[26px] border' dir='rtl'>
      <form className='w-full flex flex-col gap-9'>
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='نام ملک :'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'tittle'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'tittle'}
                // value={sharedMobile}
                // onChange={(e) => setSharedMobile(e.target.value)}
              />
              <Input
                dir='rtl'
                tagBgStyle={{background :"var(--color-dark-600)"}}
                labelText='ظرفیت(نفر) :'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'cap'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'cap'}
                // value={sharedEmail}
                // onChange={(e) => setSharedEmail(e.target.value)}
              />
        </div> 
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='نوع معامله:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'tittle'}
                placeHolder='انتخاب کنید'
                type='text'
                htmlFor={'tittle'}
                // value={sharedMobile}
                // onChange={(e) => setSharedMobile(e.target.value)}
              />
              <Input
                dir='rtl'
                tagBgStyle={{background :"var(--color-dark-600)"}}
                labelText='قیمت:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'cap'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'cap'}
                // value={sharedEmail}
                // onChange={(e) => setSharedEmail(e.target.value)}
              />
        </div>
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='نوع معامله:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'tittle'}
                placeHolder='انتخاب کنید'
                type='text'
                htmlFor={'tittle'}
                // value={sharedMobile}
                // onChange={(e) => setSharedMobile(e.target.value)}
              />
              <Input
                dir='rtl'
                tagBgStyle={{background :"var(--color-dark-600)"}}
                labelText='قیمت:'
                parentWidth='w-[535px]'
                InputHeight={'h-[60px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'cap'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'cap'}
                // value={sharedEmail}
                // onChange={(e) => setSharedEmail(e.target.value)}
              />
        </div>
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='توضیحات  ملک:'
                parentWidth='w-full'
                InputHeight={'h-[200px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'tittle'}
                placeHolder='انتخاب کنید'
                type='text'
                htmlFor={'tittle'}
                // value={sharedMobile}
                // onChange={(e) => setSharedMobile(e.target.value)}
              />
        </div>
        <div className='w-full' dir='ltr'>
        <Button text={"مرحله بعد "} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"165px"}}
              onClick={() => goToNext(currentStep)}
            /> 
        </div>
      </form>
    </div>
  )
}

export default FirstInfo