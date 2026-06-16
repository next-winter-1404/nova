'use client'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import React, { ChangeEvent, useState } from 'react'
import useStepNavigation from '../navigation';
import Image from 'next/image';
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import { loadFromLocalStorage, saveToLocalStorage } from '@/src/utils/helper/storage/storage';
import {HouseFormDraft, houseFormSchema } from '../validation';


const FirstInfo = () => {
  const {goToNext} = useStepNavigation();
  const [houseData, setHouseData] =
  useState<HouseFormDraft>(
    () => loadFromLocalStorage()
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setHouseData(prev => ({
      ...prev,
      [name]:
        name === "capacity"
          ? Number(value)
          : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNext = () => {
    const result = houseFormSchema
      .pick({
        title: true,
        capacity: true,
        price: true,
        transaction_type: true,
        categories: true,
        caption: true,
      })
      .safeParse(houseData);
  
    if (!result.success) {
      const fieldErrors =
        result.error.flatten().fieldErrors;
  
      setErrors({
        title: fieldErrors.title?.[0] || "",
        capacity: fieldErrors.capacity?.[0] || "",
        price: fieldErrors.price?.[0] || "",
        transaction_type:
          fieldErrors.transaction_type?.[0] || "",
        categories:
          fieldErrors.categories?.[0] || "",
        caption:
          fieldErrors.caption?.[0] || "",
      });
  
      return;
    }
  
    setErrors({});
  
    saveToLocalStorage(houseData);
    goToNext("firstinfo");
  };

  return (
    <div className='w-[1200px] flex flex-col items-center md:gap-[36px] gap-[26px]' dir='rtl'>
      <form className='w-full flex flex-col gap-9' >
        <div className='flex justify-between w-full' >   
          <div>          
            <Input
              name='title'
              tagBgStyle={{background :"var(--color-dark-600)"}}
              dir='rtl'
              labelText='نام ملک :'
              parentWidth={`w-[535px] ${errors.title ? 'border-red-500' : ''}`}
              InputHeight={'h-[60px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'title'}
              placeHolder='وارد کنید ...'
              type='text'
              htmlFor={'title'}
              value={houseData.title || ''}
              onChange={handleChange}
            />
            {errors.title && <span className="text-red-500 text-[15px]">{errors.title}</span>}
          </div>  
          <div>
            <Input
              name='capacity'
              dir='rtl'
              tagBgStyle={{background :"var(--color-dark-600)"}}
              labelText='ظرفیت(نفر) :'
              parentWidth={`w-[535px] ${errors.capacity ? 'border-red-500' : ''}`}
              InputHeight={'h-[60px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'capacity'}
              placeHolder='وارد کنید ...'
              type='text'
              htmlFor={'capacity'}
              value={houseData.capacity ?? ''}
              onChange={handleChange}
            />
            {errors.capacity && <span className="text-red-500 text-[15px]">{errors.capacity}</span>}
          </div>
        </div> 
        <div className='flex relative justify-between w-full' >
          <div className='flex flex-col gap-1.5'>
            <label className={"absolute text-[18px] -top-3 text-gray-300  bg-dark-600 right-5 h-5 p-2 flex-center whitespace-nowrap"}
            >
              نوع معامله :
            </label>
            <select
              className ={`text-gray-300 w-[535px] pr-3 h-[60px] md:text-[16px] text-[12px] border rounded-2xl border-gray-300 ${errors.transaction_type ? 'border-red-500' : ''}`}       
              value={houseData.transaction_type || ''}
              onChange={handleChange}
              name='transaction_type'
            >
              <option value="" disabled>انتخاب کنید</option>
              <option value="rental">اجاره</option>
              <option value="mortgage">رهن</option>
              <option value="reservation">رزرو</option>
              <option value="direct purchase">خرید مستقیم</option>
            </select>
            {errors.transaction_type && <span className="text-red-500 text-[15px]">{errors.transaction_type}</span>}
          </div>
          <div>
            <Input
              name='price'
              dir='rtl'
              tagBgStyle={{background :"var(--color-dark-600)"}}
              labelText='قیمت:'
              parentWidth={`w-[535px] ${errors.price ? 'border-red-500' : ''}`}
              InputHeight={'h-[60px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'price'}
              placeHolder='وارد کنید ...'
              htmlFor={'price'}
              value={houseData.price || ''}
              onChange={handleChange}
            />
            {errors.price && <span className="text-red-500 text-[15px]">{errors.price}</span>}
          </div>
        </div>
        <div className='flex justify-between w-full relative' >  
          <div className='flex flex-col gap-1.5'>
            <label className={"absolute text-[18px] -top-3 text-gray-300  bg-dark-600 right-5 h-5 p-2 flex-center whitespace-nowrap"}
            >
              نوع ملک :
            </label>
            <select
              className ={`text-gray-300 w-[535px] pr-3 h-[60px] md:text-[16px] text-[12px] border rounded-2xl border-gray-300 ${errors.categories ? 'border-red-500' : ''}`}       
              value={houseData.categories || ''}
              onChange={handleChange}
              name='categories'
            >
              <option value="" disabled>انتخاب کنید</option>
              <option value="apartment">آپارتمان</option>
              <option value="villa">ویلا</option>
              <option value="house">خانه</option>
              <option value="land">زمین</option>
              <option value="commercial">تجاری</option>
            </select>
            {errors.categories && <span className="text-red-500 text-[15px]">{errors.categories}</span>}
          </div>
        </div>
        <div className='flex flex-col gap-1.5 justify-between w-full' >               
          <Input
            name='caption'
            tagBgStyle={{background :"var(--color-dark-600)"}}
            dir='rtl'
            labelText='توضیحات ملک:'
            parentWidth={`w-full ${errors.caption ? 'border-red-500' : ''}`}
            InputHeight={'h-[200px]'}
            labelTextSize='text-[18px]'
            textSize='md:text-[16px] text-[12px]'
            borderColor='border-gray-300'
            textColor='text-gray-300'
            labelTextColor='text-gray-300'
            id={'caption'}
            placeHolder='وارد کنید ...'
            type='text'
            htmlFor={'caption'}
            value={houseData.caption || ''}
            onChange={handleChange}
          />
          {errors.caption && <span className="text-red-500 text-[15px]">{errors.caption}</span>}
        </div>
        
      </form>
      <div className='w-full' dir='ltr'>
          <Button text={"مرحله بعد "} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"165px"}}
            type='button'
            onClick={handleNext}
          /> 
        </div>
    </div>
  )
}

export default FirstInfo