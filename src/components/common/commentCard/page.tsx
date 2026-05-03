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
                    cavity="sharp"
                    labelContent={<div className='w-[67px] h-[30px] mt-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] '><Image src={Star} alt='star'/> 4.5</div>}
                    labelSize="lg"
                    mainContent={<div className='w-[665px] h-[220px] flex flex-col items-center justify-center gap-6 text-right'>
                        <h2 style={{fontSizeAdjust:"20px", color:"#fff", lineHeight:"40px"}}>” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد.... “</h2>
                        <div className='w-[646px] h-[81px] bg-dark-600 rounded-3xl flex justify-center items-center'>
                            <div className='w-12/13  h-[57px] flex justify-end gap-4'>
                                <div className='h-full w-[180px] gap-2.5 flex flex-col  text-[16px]'>
                                    <h2 className=' text-white-pure'>محمد رضا ساداتی</h2>
                                    <h2 className='text-gray-300 flex gap-2'>12 مرداد - 1401 / 12:33 <Image src={calandar} alt='calandar'/></h2>
                                </div>
                            <div className='w-[57px] h-full rounded-2xl bg-[#D9D9D9]'></div>
                            
                            </div>
                        </div>
                    </div>                   
                    }                            
                    labelBackground="bg-[#393939] "
                    mainBackground="bg-[#393939] "
                    labelExtraStyle={{height:'40px'}}
                    width='w-[678px]'
                /> 
        </>
    )
}

export default CommentCard