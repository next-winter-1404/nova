import Image from 'next/image'
import React from 'react'
import CardContainer from '@/src/components/common/card/page'
import Location from "@/src/assets/icons/Location.svg"
import bed from "@/src/assets/icons/bed.svg"
import houseTree from "@/src/assets/icons/houseTree.svg"
import car from "@/src/assets/icons/car.svg"
import bathroom from "@/src/assets/icons/bathroom.svg"
import leftArrow from "@/src/assets/icons/leftArrow.svg"
import Star from "@/src/assets/icons/Star.svg"

const InnerHouseCard = () => {
  return (
    <div className='h-[430px] relative overflow-hidden text-white-pure flex flex-col gap-4'>                   
        <div className='w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700'>
            <Image src={leftArrow} alt='leftArrow' />
        </div>
        <CardContainer  curveColor='#393939'
            cavity="round"
            labelContent={<div className='w-[67px] h-[30px] mt-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] z-20 '><Image src={Star} alt='star'/> 4.5</div>}
            labelSize="md"
            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'></div>
                
            }                            
            labelBackground="bg-[#393939]"
            labelExtraStyle={{height:'50px'}}
            mainExtraStyle="bg-dark-700"
        />
        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
        <div className='flex justify-end gap-3'><h2 className='text-[16px] text-gray-300'> گیلان ، رشت</h2><Image src={Location} alt='Location'/></div>
        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
            <div className=' w-[63px] text-[13px] justify-center flex gap-2.5'> حیاط <Image src={houseTree} alt='houseTree'/></div>                            
            <div className='border-l border-gray-300 w-[85px] text-[13px] justify-center flex gap-2.5'>2 حمام <Image src={bathroom} alt='bathroom'/></div>
            <div className='border-l border-gray-300 w-[91px] text-[13px] justify-center flex gap-2.5'> 1 پارکینگ  <Image src={car} alt='car'/></div>
            <div className='border-l border-gray-300 w-[77px] text-[13px] justify-end flex gap-2.5'> خوابه 4 <Image src={bed} alt='bed'/></div>                           
        </div>
        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
            <h2 className='text-[16px]'>ت 5.000.000 </h2>
            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
        </div>
    </div>
  )
}

export default InnerHouseCard