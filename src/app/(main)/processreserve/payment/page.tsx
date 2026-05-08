'use client'
import React from 'react'
import checkMarkCorrect from "@/src/assets/icons/checkMarkCorrect.svg"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import { useRouter, useSearchParams } from 'next/navigation'
import UseStepNavigation from '../navigation'


const Payment = () => {
    const searchParams = useSearchParams();  
    const currentStep = searchParams.get('step') || 'payment'
    const {goToNext, goToPrev} = UseStepNavigation();
    const router = useRouter();
    const handleGoHome = () => {
        router.push("/processreserve")
    }
    return (
        <div className='flex flex-col items-center gap-[36px] w-[1683px] h-[600px]' dir='rtl'>  
            <div className='w-[590px] h-[700px] flex flex-col border items-center gap-8'>
                <Image src={checkMarkCorrect} alt='checkMarkCorrect'/>
                <h2 className='h-[50px] text-white-pure text-[40px]' >رزرو بلیط شما با موفقیت انجام شد !</h2>
                <div className='flex gap-4'>
                        <Button
                        text={"بازگشت به صفحه اصلی"} icon={<Image src={rightArrow} alt='rightArrow' style={{marginBottom:"-2px", width:"8px"}}/>}
                        textStyle={{color: "#FFFFFF", fontSize:"16px"}} buttonStyle={{border:"2px solid #FFFFFF", borderRadius:"12px", background:"transparent", height:"36px", width:"190px"}}
                        onClick={handleGoHome}
                        /> 
                        <Button 
                        text={"بلیط های من"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
                        textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"133px", direction:"ltr"}}
                        onClick={() => goToNext(currentStep)}
                        />  
                </div> 
            </div>         
        </div>
    )
}

export default Payment