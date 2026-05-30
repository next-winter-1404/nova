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
    <div className='w-[1200px] flex flex-col items-center md:gap-[36px] gap-[26px]' dir='rtl'>
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
        <div className='flex relative justify-between w-full' >
          <label className={"absolute text-[18px] -top-3 text-gray-300  bg-dark-600 right-5 h-5 p-2 flex-center whitespace-nowrap"}
          >
            نوع معامله :
          </label>
          <select
            className ='text-gray-300 w-[535px] pr-3 h-[60px] md:text-[16px] text-[12px] border rounded-2xl border-gray-300'         
          >
            <option value="">انتخاب کنید</option>
            <option value="rental">اجاره</option>
            <option value="mortgage">رهن</option>
            <option value="reservation">رزرو</option>
            <option value="direct purchase">خرید مستقیم</option>
          </select>
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
            id={'price'}
            placeHolder='وارد کنید ...'
            type='text'
            htmlFor={'price'}
            // value={sharedEmail}
            // onChange={(e) => setSharedEmail(e.target.value)}
          />
        </div>
        <div className='flex justify-between w-full' >               
          <Input
            tagBgStyle={{background :"var(--color-dark-600)"}}
            dir='rtl'
            labelText='نوع ملک:'
            parentWidth='w-[535px]'
            InputHeight={'h-[60px]'}
            labelTextSize='text-[18px]'
            textSize='md:text-[16px] text-[12px]'
            borderColor='border-gray-300'
            textColor='text-gray-300'
            labelTextColor='text-gray-300'
            id={'growType'}
            placeHolder='وارد کنید ...'
            type='text'
            htmlFor={'growType'}
            // value={sharedMobile}
            // onChange={(e) => setSharedMobile(e.target.value)}
          />
        </div>
        <div className='flex justify-between w-full' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-600)"}}
                dir='rtl'
                labelText='توضیحات ملک:'
                parentWidth='w-full'
                InputHeight={'h-[200px]'}
                labelTextSize='text-[18px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'describe'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'describe'}
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