'use client'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import React, { ChangeEvent, useEffect, useState } from 'react'
import UseStepNavigation from '../navigation';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import { loadFromLocalStorage, saveToLocalStorage } from '@/src/utils/helper/storage/storage';
import { HouseFormData } from '../validation';
import { postHouses } from '@/src/utils/sevices/api/houses/postHouses';


const FirstInfo = () => {
  // const searchParams = useSearchParams();
  // const currentStep = searchParams.get('step') || 'firstinfo'
  const {goToNext} = UseStepNavigation();
  const [houseData, setHouseData] = useState<Partial<HouseFormData>>(loadFromLocalStorage());
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    saveToLocalStorage(houseData);
  }, [houseData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    let newValue = value;

    if (['price', 'rooms', 'bathrooms', 'parking', 'capacity'].includes(name)) {
      newValue = value.replace(/[^0-9.,]/g, ''); 
    }

    setHouseData(prev => ({ ...prev, [name]: newValue }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleNext = () => {
    const newErrors: { [key: string]: string } = {};

    if (!houseData.title?.trim()) newErrors.title = 'عنوان الزامی است';
    if (!houseData.price?.trim()) newErrors.price = 'قیمت الزامی است';
    else if (isNaN(Number(houseData.price))) newErrors.price = 'قیمت باید عدد باشد';
    
    if (!houseData.transaction_type) newErrors.transactionType = 'نوع معامله را انتخاب کنید';
    if (!houseData.capacity) newErrors.capacity = ' ظرفیت الزامی است';
    if (!houseData.categories) newErrors.categories = 'نوع ملک را انتخاب کنید';   
    if (!houseData.description) newErrors.description = 'توضیح الزامی است';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; 
    }
    saveToLocalStorage(houseData);
    
    goToNext('firstinfo'); 
  };

  return (
    <div className='w-[1200px] flex flex-col items-center md:gap-[36px] gap-[26px]' dir='rtl'>
      <form className='w-full flex flex-col gap-9'>
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
            {errors.title && <span className="text-red-500 text-xs">{errors.title}</span>}
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
              value={houseData.capacity || ''}
              onChange={handleChange}
            />
            {errors.capacity && <span className="text-red-500 text-xs">{errors.capacity}</span>}
          </div>
        </div> 
        <div className='flex relative justify-between w-full' >
          <div>
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
              <option value="">انتخاب کنید</option>
              <option value="rental">اجاره</option>
              <option value="mortgage">رهن</option>
              <option value="reservation">رزرو</option>
              <option value="direct purchase">خرید مستقیم</option>
            </select>
            {errors.transaction_type && <span className="text-red-500 text-xs">{errors.transaction_type}</span>}
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
              type='number'
              htmlFor={'price'}
              value={houseData.price || ''}
              onChange={handleChange}
            />
            {errors.price && <span className="text-red-500 text-xs">{errors.price}</span>}
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
              <option value="">انتخاب کنید</option>
              <option value="apartment">آپارتمان</option>
              <option value="villa">ویلا</option>
              <option value="house">خانه</option>
              <option value="land">زمین</option>
              <option value="commercial">تجاری</option>
            </select>
            {errors.categories && <span className="text-red-500 text-xs">{errors.categories}</span>}
          </div>
        </div>
        <div className='flex justify-between w-full' >               
          <Input
            name='description'
            tagBgStyle={{background :"var(--color-dark-600)"}}
            dir='rtl'
            labelText='توضیحات ملک:'
            parentWidth={`w-full ${errors.description ? 'border-red-500' : ''}`}
            InputHeight={'h-[200px]'}
            labelTextSize='text-[18px]'
            textSize='md:text-[16px] text-[12px]'
            borderColor='border-gray-300'
            textColor='text-gray-300'
            labelTextColor='text-gray-300'
            id={'description'}
            placeHolder='وارد کنید ...'
            type='text'
            htmlFor={'description'}
            value={houseData.description || ''}
            onChange={handleChange}
          />
          {errors.description && <span className="text-red-500 text-xs">{errors.description}</span>}
        </div>
        <div className='w-full' dir='ltr'>
          <Button text={"مرحله بعد "} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"165px"}}
            type='button'
            onClick={handleNext}
          /> 
        </div>
      </form>
    </div>
  )
}

export default FirstInfo