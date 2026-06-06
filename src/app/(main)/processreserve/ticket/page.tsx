'use client'
import checkMarkCorrect from "@/src/assets/icons/checkMarkCorrect.svg"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import rightArrow from "@/src/assets/icons/rightArrow.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const Ticket = () => { 
    const router = useRouter();
    const handleGoHome = () => {
        router.push("/processreserve")
    }
    return (
        <div className='flex flex-col mt-[130px] items-center gap-[36px] w-[1683px] h-[650px]' dir='rtl'>  
            <div className='md:w-[590px] md:h-[700px] w-[400px] h-[600px] flex flex-col items-center md:gap-8 gap-4'>
                <Image src={checkMarkCorrect} alt='checkMarkCorrect'/>
                <h2 className='h-[50px] text-white-pure md:text-[40px] text-[25px]' >رزرو بلیط شما با موفقیت انجام شد !</h2>
                <div className='flex md:gap-4 gap-2'>
                    <Button
                        text={"بازگشت به صفحه اصلی"} icon={<Image src={rightArrow} alt='rightArrow' style={{marginBottom:"-2px", width:"8px"}}/>}
                        textStyle={{color: "#FFFFFF", fontSize:"16px"}} buttonStyle={{border:"2px solid #FFFFFF", borderRadius:"12px", background:"transparent", height:"36px", width:"190px"}}
                        onClick={handleGoHome}
                    /> 
                    <Button 
                        text={"بلیط های من"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
                        textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"133px", direction:"ltr"}}                    
                    />  
                </div> 
            </div>         
        </div>
    )
}

export default Ticket