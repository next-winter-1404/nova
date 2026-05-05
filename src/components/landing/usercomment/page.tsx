import React from 'react'
import Triangle from '../../common/triangle/page'
import CommentCard from '../../common/commentCard/page'

const UserComment = () => {
    return (
        <div className='md:w-full w-[390px] md:h-[793px] h-[910px] md:gap-12 gap-8 flex-col items-center justify-center flex '>
            <div className='h-[176px] flex items-center flex-col md:gap-6 gap-4'>
                <Triangle
                    text='نظرات کاربران'
                />
                <span className ='md:text-[32px] text-[22px] text-white-pure'> !رضایت شما اعتبار و ارزش دلتا را می سازد </span>
                <h2 className='md:text-[16px] text-[14px] text-right text-white-pure md:w-full w-[260px]'> .تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد </h2>
            </div>
            <div className ='w-[390px] md:w-[1376px] flex md:flex-row flex-col gap-5 md:h-[310px]'>  
                <div><CommentCard></CommentCard></div>                         
                <div><CommentCard></CommentCard></div>
            </div>
        </div>
    )
}

export default UserComment