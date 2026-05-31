'use client'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React, { ChangeEvent, useEffect, useState } from 'react'
import UseStepNavigation from '../navigation'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import { loadFromLocalStorage, saveToLocalStorage } from '@/src/utils/helper/storage/storage'
import { HouseFormData } from '../validation'

const STORAGE_KEY = 'houseFormData';
const Facility = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'facility'
  const {goToNext, goToPrev} = UseStepNavigation();
  const [houseData, setHouseData] = useState<Partial<HouseFormData>>(loadFromLocalStorage());
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  useEffect(() => {
    saveToLocalStorage(houseData);
  }, [houseData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setHouseData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
    const handleNext = () => {
      const newErrors: { [key: string]: string } = {};
      if (!houseData.rooms?.trim()) newErrors.rooms = 'تعداد اتاق الزامی است';
      if (!houseData.bathrooms?.trim()) newErrors.bathrooms = 'تعداد حمام الزامی است';
      if (!houseData.parking?.trim()) newErrors.parking = 'تعداد پارکینگ الزامی است';
      if (!houseData.yard_type) newErrors.yardType = 'نوع حیاط را انتخاب کنید';
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return; 
      }     
      goToNext('facility'); 
    };
  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <form className='w-full flex flex-col gap-9'>
        <div className='flex justify-between w-full' >  
          <div>            
            <Input
              tagBgStyle={{background :"var(--color-dark-600)"}}
              name='rooms'
              dir='rtl'
              labelText='تعداد اتاق:'
              parentWidth={`w-[535px] ${errors.rooms ? 'border-red-500' : ''}`}
              InputHeight={'h-[60px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'rooms'}
              placeHolder='وارد کنید ...'
              type='number'
              htmlFor={'rooms'}
              value={houseData.rooms || ''}
              onChange={handleChange}
            />
            {errors.rooms && <span className="text-red-500 text-xs">{errors.rooms}</span>}
          </div> 
          <div>
            <Input
              dir='rtl'
              name='bathrooms'
              tagBgStyle={{background :"var(--color-dark-600)"}}
              labelText='تعداد حمام:'
              parentWidth={`w-[535px] ${errors.bathrooms ? 'border-red-500' : ''}`}
              InputHeight={'h-[60px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'bathrooms'}
              placeHolder='وارد کنید ...'
              type='number'
              htmlFor={'bathrooms'}
              value={houseData.bathrooms || ''}
              onChange={handleChange}
              
            />
            {errors.bathrooms && <span className="text-red-500 text-xs">{errors.bathrooms}</span>}
          </div>
        </div> 
        <div className='flex justify-between w-full' >  
          <div>        
            <Input
              tagBgStyle={{background :"var(--color-dark-600)"}}
              dir='rtl'
              name='parking'
              labelText='تعداد پارکینگ:'
              parentWidth={`w-[535px] ${errors.parking ? 'border-red-500' : ''}`}
              InputHeight={'h-[60px]'}
              labelTextSize='text-[18px]'
              textSize='md:text-[16px] text-[12px]'
              borderColor='border-gray-300'
              textColor='text-gray-300'
              labelTextColor='text-gray-300'
              id={'parking'}
              placeHolder='وارد کنید ...'
              type='number'
              htmlFor={'parking'}
              value={houseData.parking || ''}
              onChange={handleChange}
            />
            {errors.parking && <span className="text-red-500 text-xs">{errors.parking}</span>}
          </div>  
          <div>
            <label className={"absolute text-[18px] -top-3 text-gray-300  bg-dark-600 right-5 h-5 p-2 flex-center whitespace-nowrap"}
            >
              نوع حیاط :
            </label>
            <select
              className ={`text-gray-300 w-[535px] pr-3 h-[60px] md:text-[16px] text-[12px] border rounded-2xl border-gray-300 ${errors.yard_type ? 'border-red-500' : ''}`}    
              value={houseData.yard_type || ''}
              onChange={handleChange}
              name='yard_type'
            >
              <option value="">انتخاب کنید</option>
              <option value="garden">حیاط</option>
              <option value="terrace">تراس</option>
              <option value="none">بدون حیاط</option>
            </select>
            {errors.yard_type && <span className="text-red-500 text-xs">{errors.yard_type}</span>}
          </div>
        </div>
      </form>
      <div className='flex gap-4' dir='ltr'>            
            <Button 
              text={"مرحله بعد"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
              textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
              onClick={handleNext}
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