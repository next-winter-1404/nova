'use client'
import React from 'react'
import Location from "@/src/assets/icons/marker 1.svg"
import House from "@/src/assets/icons/house-building(1).svg"
import Transaction from "@/src/assets/icons/transaction.svg"
import Yard from "@/src/assets/icons/yard.svg"
import Price from "@/src/assets/icons/dollerprice.svg"
import Masconi from "@/src/assets/icons/masconi.svg"
import AcceptIcon from "@/src/assets/icons/AcceptIcon.svg"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import { useSearchParams } from 'next/navigation'
import UseStepNavigation from '../navigation'

const FinalAccept = () => {
  const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') || 'photos'
    const {goToPrev} = UseStepNavigation();
  return (
    <div className='w-[1200px] flex flex-col md:gap-[36px] gap-[26px]' dir='rtl'>
      <div className='flex items-center justify-center'>
        <div className='rounded-3xl border border-[#8888884D] flex flex-col items-center justify-center w-[1170] md:gap-[36px] gap-[26px]'>
          <div className='w-full h-[230px] flex border'>
            <div className='w-[465px] h-full'>image</div>
            <div className='w-[490px] h-full flex flex-col'>
              <span className='text-[24px] text-white-pure'></span>
              <h2 className='text-[15px] text-gray-300'></h2>
            </div>
          </div>
          <div className='w-full flex border gap-5 text-gray-300 text-[20px]'>
            <div className='w-[465px] flex flex-col gap-5'>
              <h2 className='flex gap-4'> <Image src={Location} alt='Location'/></h2>
              <h2 className='flex gap-4'> <Image src={Masconi} alt='Masconi'/></h2>
              <h2 className='flex gap-4'> <Image src={Transaction} alt='Transaction'/></h2>            
            </div>
            <div className='w-[465px] flex flex-col gap-5'>
              <h2 className='flex gap-4'> <Image src={Yard} alt='Yard'/></h2>           
              <h2 className='flex gap-4'> <Image src={House} alt='House'/></h2>
              <h2 className='flex gap-4 text-[24px] text-primary-accent-green'> <Image src={Price} alt='Price'/> تومان</h2>
            </div>
          </div>
        </div>
      </div>      
      <div className='flex gap-4' dir='ltr'>            
            <Button 
              text={"ثبت آگهی"} icon={<Image src={AcceptIcon} alt='AcceptIcon' style={{marginBottom:"-2px", width:"18px"}}/>} 
              textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
              // onClick={() => goToNext(currentStep)}
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

export default FinalAccept
