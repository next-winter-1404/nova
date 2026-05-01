import Image from 'next/image'
import React from 'react'
import Button from '../../common/button/page'
import CardContainer from '../../common/card/page'

const BuyHouse = () => {
    return (
        <div className ='bg-dark-700 w-full h-[1600px] rounded-bl-[64px] rounded-br-[64px] gap-12 items-center justify-center flex relative'>
            <div className ='absolute top-[80px] w-[1440px] gap-7 flex flex-col text-right'>
                <Image width ={20} height={20} src={"/src/assets/images/Group 34.svg"} alt='.'></Image>
                <h2 className='text-primary-accent-green text-[16px]' >!خونه از خودت میخوای </h2>
                <div className='flex justify-between'>
                <Button text=" مشاهده همه" width='w-[137px]' height='h-[36px]' buttonStyle={{backgroundColor : "dark-700",
                    border: "2px solid #FFF"
                }}></Button>
                <span className='text-[32px] text-white-pure'>خرید و فروش ملک در دلتا</span>
                </div>
                <div className='w-[1440px] flex border border-amber-50 h-[450px] items-center justify-center'>
                    <div className='w-11/10 h-5/6 border border-amber-50 flex justify-between'>
                        <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-2xl'></div>}
                            mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'>gfkfponkxf gkhkhl.k vil</div>}
                            width='329px'
                            
                        ></CardContainer>
                        <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-2xl'></div>}
                            mainContent={<div className='w-[297px] h-[156px]'>gfkfponkxf</div>}
                            width='329px'
                        ></CardContainer>
                       <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-2xl'></div>}
                            mainContent={<div className='w-[297px] h-[156px]'>gfkfponkxf</div>}
                            width='329px'
                        ></CardContainer>
                        <CardContainer 
                            color='bg-dark-700'
                            cavity='sharp'
                            labelSize='md'
                            labelContent={<div className='w-[67px] h-[32px] bg-white-pure rounded-2xl'></div>}
                            mainContent={<div className='w-[297px] h-[156px]'>gfkfponkxf</div>}
                            width='329px'
                        ></CardContainer>
                    </div>
                </div>      
            </div>  
        </div>
    )
}

export default BuyHouse