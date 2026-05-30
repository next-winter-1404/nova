'use client'
import Button from '@/src/components/common/button/page'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react'
import UseStepNavigation from '../navigation';
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import Plus from "@/src/assets/icons/plus.svg"

interface IPhotoUpload {
  onPhotosChange: (photos: File[]) => void;
}

const Photos = ({ onPhotosChange }: IPhotoUpload) => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'photos'
  const {goToNext, goToPrev} = UseStepNavigation();
  const [photos, setPhotos] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      const updatedPhotos = [...photos, ...newPhotos];
      setPhotos(updatedPhotos);
      onPhotosChange(updatedPhotos);
    }
  };

  const handleRemovePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
    onPhotosChange(updatedPhotos);
  };

  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <h2 className='text-gray-300'>تصویر ملک</h2>
      <div className='flex text-[20px] gap-1.5 text-gray-300'>
        <h2 className='text-primary-accent-green'>یک تصویر بهتر از هزار کلمه</h2>
        <h2>با قرار دادن عکس شانس دیده شدن ملک‌تان را ۵ برابر کنید.</h2>
      </div>
      <div>
        <div className="flex flex-wrap gap-4 justify-center">       
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
        {photos.map((photo, index) => (
          <div key={index} className="relative w-[189px] h-[189px] rounded-[18px] overflow-hidden border border-gray-200 shadow-sm">           
            <img
              src={URL.createObjectURL(photo)}
              alt={`preview-${index}`}
              className="w-full h-full object-cover"
            />            
            <button
              onClick={() => handleRemovePhoto(index)}
              className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-500 transition text-xs"
            >
              ✕ 
            </button>
          </div>
        ))}
        </div>
      </div>
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