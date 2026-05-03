import React from 'react'
import Triangle from '../../common/triangle/page'
import CommentCard from '../../common/commentCard/page'

const UserComment = () => {
    return (
        <div className='w-full h-[793px] gap-12 flex-col items-center justify-center flex '>
            <div className='h-[176px] flex items-center flex-col gap-6'>
                <Triangle
                    text='نظرات کاربران'
                />
                <span className =' text-[32px] text-white-pure'> !رضایت شما اعتبار و ارزش دلتا را می سازد </span>
                <h2 className='text-[16px] text-white-pure'> .تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد </h2>
            </div>
            <div className =' w-[1376px] flex gap-5 h-[310px]'>  
                <div><CommentCard></CommentCard></div>                         
                <div><CommentCard></CommentCard></div>
            </div>
        </div>
    )
}

export default UserComment