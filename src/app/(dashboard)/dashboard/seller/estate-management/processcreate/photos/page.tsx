'use client'
import Button from '@/src/components/common/button/page'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'
import useStepNavigation from '../navigation';
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import Plus from "@/src/assets/icons/plus.svg"
import { useHouse } from '@/src/context/page';
import { forthStepSchema } from '../validation';

const Photos = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'photos'
  const {goToNext, goToPrev} = useStepNavigation();
  const { photos, setPhotos } = useHouse();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files) return;
  
    const files = Array.from(e.target.files);
  
    if (photos.length + files.length > 10) {
      setErrors(prev => ({
        ...prev,
        photos: 'حداکثر ۱۰ عکس مجاز است',
      }));
      return;
    }
  
    setPhotos(prev => [...prev, ...files]);
  
    if (errors.photos) {
      setErrors(prev => ({
        ...prev,
        photos: '',
      }));
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev =>
      prev.filter((_, i) => i !== index)
    );
  };

  const handleNext = () => {
    const result = forthStepSchema.safeParse({
      photos,
    });
  
    if (!result.success) {
      const fieldErrors =
        result.error.flatten().fieldErrors;
  
      setErrors({
        photos: fieldErrors.photos?.[0] || "",
      });
  
      return;
    }
  
    goToNext("photos");
  };


  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <h2 className='text-gray-300'>تصویر ملک</h2>
      <div className='flex text-[20px] gap-1.5 text-gray-300'>
        <h2 className='text-primary-accent-green'>یک تصویر بهتر از هزار کلمه</h2>
        <h2>با قرار دادن عکس شانس دیده شدن ملک‌تان را ۵ برابر کنید.</h2>
      </div>
      <div>
        <div className="flex items-center flex-wrap gap-4 justify-center"> 
          <div>     
            <label className="w-[189px] h-[189px] border-3 border-dashed border-primary-accent-green rounded-[18px] flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-200 transition group">
              <Image src={Plus} alt='Plus'/>
              <span className="text-primary-accent-green text-[16px]">
                افزودن عکس
              </span>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {errors.photos && <span className="text-red-500 text-[15px] block mt-2">{errors.photos}</span>}
          </div> 
          {photos.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {photos.map((photo, index) => (
                <div key={index} className="relative ">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`photo-${index}`}
                    className="w-[189px] h-[189px] object-cover rounded-[18px]"
                  />

                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-500 transition text-xs"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex gap-4' dir='ltr'>            
            <Button 
              text={"مرحله بعد"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
              textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
              onClick={handleNext}
              type='button'
            /> 
            <Button
              text={"مرحله قبل"} icon={<Image src={rightArrow} alt='rightArrow' style={{marginBottom:"-2px", width:"8px"}}/>}
              textStyle={{color: "#FFFFFF", fontSize:"16px"}} buttonStyle={{border:"2px solid #FFFFFF", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"rtl"}}
              onClick={() => goToPrev(currentStep)}
              type='button'
            /> 
      </div>
      </div>
    </div>
  )
}

export default Photos