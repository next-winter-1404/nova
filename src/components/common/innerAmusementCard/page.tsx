import Image from 'next/image'
import React from 'react'
import CardContainer from '../card/page'
import leftArrow from "@/src/assets/icons/leftArrow.svg"
import Star from "@/src/assets/icons/Star.svg"

const InnerAmusementCard = () => {
    return (
        <div className='h-[332px] relative items-center flex flex-col gap-6'>
            <div className='w-[45px] absolute md:left-5 left-12 flex justify-center rounded-[8px] h-[22px] bg-dark-700'>
                <Image src={leftArrow} alt='leftArrow' />
            </div>
            <CardContainer
                curveColor='bg-dark-700'
                cavity="round"
                labelContent={<div className='w-[67px] h-[30px] mt-[9px] ml-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] z-20 '><Image src={Star} alt='star'/> 4.5</div>}
                labelSize="md"
                mainContent={<div className='w-[274px] h-[156px] bg-dark-600 rounded-2xl'></div>                    
                }                            
                labelBackground="bg-dark-700 "
                mainExtraStyle="bg-dark-700 p-6" 
                
                labelExtraStyle={{height:'45px'}}
                width='w-[306px]'
            />
            <div className='h-[30px] items-center flex'>
                <h2 className='text-[15px] text-gray-300' > ( 11.000 نفر بازدید کننده )</h2>
                <span className='text-[19px] text-white-pure'>اقمتگاه دال در قشم</span>
            </div>
        </div>
    )
}

export default InnerAmusementCard