'use client'
import Button from '@/src/components/common/button/page'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react'
import UseStepNavigation from '../navigation';
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import Plus from "@/src/assets/icons/plus.svg"
import { loadFromLocalStorage, saveToLocalStorage } from '@/src/utils/helper/storage/storage';
import { HouseFormData } from '../validation';
import { postHouses } from '@/src/utils/sevices/api/houses/postHouses';

const STORAGE_KEY = 'houseFormData';

const Photos = () => {
  const searchParams = useSearchParams();
  const currentStep = searchParams.get('step') || 'photos'
  const {goToNext, goToPrev} = UseStepNavigation();
  const [houseData, setHouseData] = useState<Partial<HouseFormData>>(loadFromLocalStorage());
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    saveToLocalStorage(houseData);
  }, [houseData]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      
      setHouseData(prev => ({
        ...prev,
        photos: [...(prev.photos || []), ...newPhotos]
      }));

      if (errors.photos) {
        setErrors(prev => ({ ...prev, photos: '' }));
      }
    }
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = houseData.photos?.filter((_, i) => i !== index);
    setHouseData(prev => ({ ...prev, photos: updatedPhotos }));
  };

  const handleNext = async() => {
    try {
         
          const result = await postHouses({
            ...houseData,
          });
    
          console.log('آگهی با موفقیت ثبت شد:', result);
          alert('آگهی شما ثبت شد!');
          
          setHouseData({ title: '', price: '' }); 
    
        } catch (err: any) {
          console.error('خطا در ثبت آگهی:', err);
          setErrors(err.response?.data?.message || 'خطایی رخ داد. لطفاً دوباره تلاش کنید.');
        } finally {
          setLoading(false);
        }
    const newErrors: { [key: string]: string } = {};

    if (!houseData.photos || houseData.photos.length === 0) {
      newErrors.photos = 'لطفاً حداقل یک عکس آپلود کنید';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    goToNext('photos');
  };


  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <h2 className='text-gray-300'>تصویر ملک</h2>
      <div className='flex text-[20px] gap-1.5 text-gray-300'>
        <h2 className='text-primary-accent-green'>یک تصویر بهتر از هزار کلمه</h2>
        <h2>با قرار دادن عکس شانس دیده شدن ملک‌تان را ۵ برابر کنید.</h2>
      </div>
      <form>
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
            {errors.photos && <span className="text-red-500 text-xs block mt-2">{errors.photos}</span>}
          </div> 
          {houseData.photos && houseData.photos.length > 0 && (
        <div className="grid grid-cols-2 gap-2 mt-4">
          {houseData.photos.map((photo: File, index: number) => (
          <div key={index} className="relative w-[189px] h-[189px] rounded-[18px] overflow-hidden border border-gray-200 shadow-sm">           
            <img
              src={URL.createObjectURL(photo)}
              alt={`preview-${index}`}
              className="w-full h-full object-cover"
            />            
            <button
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

export default Photos