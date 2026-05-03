import Image from 'next/image'
import React from 'react'
import CardContainer from '../card/page'
import leftArrow from "@/src/assets/icons/leftArrow.svg"
import Star from "@/src/assets/icons/Star.svg"

const InnerAmusementCard = () => {
    return (
        <div className='h-[232px] flex flex-col gap-6 '>
            <div className='w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700'>
                <Image src={leftArrow} alt='leftArrow' />
            </div>
            <CardContainer
                cavity="sharp"
                labelContent={<div className='w-[67px] h-[30px] mt-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] '><Image src={Star} alt='star'/> 4.5</div>}
                labelSize="md"
                mainContent={<div className='w-[274px]  h-[156px] bg-dark-600 rounded-2xl'></div>
                    
                }                            
                labelBackground="bg-[#393939] hover:bg-primary-accent-green"
                mainBackground="bg-[#393939] hover:bg-primary-accent-green"
                labelExtraStyle={{height:'40px'}}
                width='w-[306px]'
            />
            <div className='flex justify-end'>
                <h2 className='text-[16px] text-gray-300' > ( 11.000 نفر بازدید کننده )</h2>
                <span className='text-[20px] text-white-pure'>اقمتگاه دال در قشم</span>
            </div>
        </div>
    )
}

export default InnerAmusementCard