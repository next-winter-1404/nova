import Image from 'next/image'
import React from 'react'
import Button from '../../common/button/page'

const BuyHouse = () => {
    return (
        <div className ='bg-dark-700 w-full h-[1600px] rounded-bl-[64px] rounded-br-[64px] gap-12 items-center justify-center flex relative'>
            <div className ='absolute top-[80px] w-[1440px] gap-7 flex flex-col text-right'>
                <Image width ={20} height={20} src={"/src/assets/images/Group 34.svg"} alt='.'></Image>
                <h2 className='text-primary-accent-green text-[16px]' >!خونه از خودت میخوای </h2>
                <div className='flex justify-between'>
                <Button text=" مشاهده همه" width='w-[137px]' height='h-[36px]' buttonStyle={{backgroundColor : "dark-700",
                    border: "border-white-pure"
                }}></Button>
                <span className='text-[32px] text-white-pure'>خرید و فروش ملک در دلتا</span>
                </div>
            </div>  
            <div className='w-[1440px] h-5 flex border border-amber-50'></div>      
        </div>
    )
}

export default BuyHouse