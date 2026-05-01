import Image from 'next/image'
import React from 'react'
import Button from '../../common/button/page'
import CardContainer from '../../common/card/page'

const BuyHouse = () => {
    return (
        <div className ='bg-dark-700 w-full h-[1600px] rounded-bl-[64px] rounded-br-[64px] gap-12 items-center justify-center flex relative'>
            <div className ='absolute top-[80px] w-[1440px] gap-8 flex flex-col text-right'>
                <Image width ={20} height={20} src={"/src/assets/images/Group 34.svg"} alt='.'></Image>
                <h2 className='text-primary-accent-green text-[16px]' >!خونه از خودت میخوای </h2>
                <div className='flex justify-between'>
                <Button text=" مشاهده همه" width='w-[137px]' height='h-[36px]' buttonStyle={{backgroundColor : "dark-700",
                    border: "2px solid #FFF"
                }}></Button>
                <span className='text-[32px] text-white-pure'>خرید و فروش ملک در دلتا</span>
                </div>
                <div className ='w-[1440px] flex h-[450px] items-center justify-between'>                    
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-[8px]'></div>}
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>}
                            width='329px'
                            
                        ></CardContainer>
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-[8px]'></div>}
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>}
                            width='329px'
                            
                        ></CardContainer>
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-[8px]'></div>}
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>}
                            width='329px'
                            
                        ></CardContainer>
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>
                    <div className=' h-[430px] text-white-pure flex flex-col gap-4'>
                    <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-[8px]'></div>}
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>}
                            width='329px'
                            
                        ></CardContainer>
                        <span className='text-[20px]'>آپارتمان لوکس زعفرانیه</span>
                        <div><h2 className='text-[16px] text-gray-300'>گیلان ، رشت</h2></div>
                        <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
                            <div className=' w-[70px] text-[13px]'> حیاط</div>                            
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'>2 حمام </div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> 1 پارکینگ</div>
                            <div className='border-l border-gray-300 w-[70px] text-[13px]'> خوابه 4</div>                           
                        </div>
                        <div className='w-full h-[36px] bg-dark-600 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
                            <h2 className='text-[16px]'>ت 5.000.000 </h2>
                            <h2 className='text-gray-300 text-[16px]'>:قیمت خرید </h2>
                        </div>
                    </div>                   
                </div>                      
            </div>  
            <div></div>
        </div>
    )
}

export default BuyHouse