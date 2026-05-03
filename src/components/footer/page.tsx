import React from 'react'
import CardContainer from '../common/card/page'
import phone from "@/src/assets/icons/phone.svg"
import text from "@/src/assets/images/text.svg"
import Image from 'next/image'

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
            mainContent={<div className='h-[1278px] flex flex-col'>
              <div className='h-[135px] w-[]'></div>
            </div>}
        />
        </div>
    </div>
  )
}

export default Footer