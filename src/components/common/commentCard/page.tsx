import Image from 'next/image'
import React from 'react'
import CardContainer from '../card/page'
import leftArrow from "@/src/assets/icons/leftArrow.svg"
import Star from "@/src/assets/icons/Star.svg"
import calandar from "@/src/assets/icons/calendar.svg"

const CommentCard = () => {
    return (
        <>
                <div className='w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700'>
                    <Image src={leftArrow} alt='leftArrow' />
                </div>
                <CardContainer
                    cavity="round"
                    labelContent={<div className='w-[67px] h-[30px] mt-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] '><Image src={Star} alt='star'/> 4.5</div>}
                    labelSize="lg"
                    mainContent={<div className='md:w-[665px] w-[370px] md:h-[220px] h-[210px] flex flex-col items-center justify-center md:gap-6 gap-1 text-right'>
                        <h2 className='md:text-[20px] text-[14px] leading-10 text-white-pure'>” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد.... “</h2>
                        <div className='md:w-[646px] w-[351px] md:h-[81px]  bg-dark-600 md:rounded-3xl rounded-2xl flex justify-center items-center'>
                            <div className='w-12/13 md:h-[57px] h-[50px] flex justify-end md:gap-4 gap-2'>
                                <div className='h-full md:w-[180px] md:gap-2.5 gap-1.5 flex flex-col justify-center text-[12px] md:text-[16px]'>
                                    <h2 className=' text-white-pure'>محمد رضا ساداتی</h2>
                                    <h2 className='text-gray-300 flex gap-2'>12 مرداد - 1401 / 12:33 <Image src={calandar} alt='calandar'/></h2>
                                </div>
                                <div className='md:w-[57px] w-[50px] h-full rounded-2xl bg-[#D9D9D9]'></div>
                            </div>
                        </div>
                    </div>                   
                    }                            
                    labelBackground="bg-[#393939] "
                    curveColor='#393939'
                    mainExtraStyle={{background:"#393939"}}
                    labelExtraStyle={{height:'40px'}}
                    width='md:w-[678px] w-[380px]'
                /> 
        </>
    )
}

export default CommentCard