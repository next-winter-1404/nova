import React from 'react'
import CardContainer from '../common/card/page'
import phone from "@/src/assets/icons/phone.svg"
import text from "@/src/assets/images/text.svg"
import Image from 'next/image'
import leftBlackTriangle from "@/src/assets/images/leftBlackTriangle.svg"

const Footer = () => {
  return (
    <div className='h-[1440px] relative w-full border flex justify-center items-end border-amber-50 '>
        <div className='w-[756px] absolute top-[-27px] left-[65px] flex justify-center rounded-[8px] h-[140px] '>
          <Image src={text} alt='src'/>
        </div>
        <div className='w-11/12'>
            
        <CardContainer
            cavity='sharp'
            labelSize='md'
            labelContent={<div className='w-[330px] h-[50px] mt-[5px] flex gap-2 items-center text-[16px] text-white-pure justify-center gap-1 bg-dark-900 rounded-[16px] '><Image src={phone} alt='phone'/> 09229167194 - 09154569872 </div>}
            mainBackground='bg-primary-accent-green'
            labelBackground='bg-primary-accent-green'
            mainContent={<div className='h-[1278px] w-full flex flex-col items-end'>
              <div className='h-[145px] w-[825px] gap-6 flex-col flex items-end'>                
                  <div className='flex w-[150px] h-5 text-16-medium text-selectedButtonText gap-4 '><Image src={leftBlackTriangle} alt='leftBlackTriangle'/> همیشه کنارتیم</div>      
                  <h2 className='text-[32px] text-selectedButtonText'>!24 ساعت روز و 7 روز هفته در اختیار شماییم </h2>        
                  <h2 className='text-selectedButtonText text-[20px]'>.تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد </h2>  
              </div>
            </div>}
        />
        </div>
    </div>
  )
}

export default Footer