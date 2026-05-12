import Image from 'next/image'
import React from 'react'
import Button from '../../common/button/page'
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg"
import smallLeftArrowWhite from "@/src/assets/icons/smallLeftArrowWhite.svg"
import HouseCard from '../../common/houseCard/page'
import AmusementCard from '../../common/amusementCard/page'

const BuyHouse = () => {
    return (
        <div className='bg-dark-850 md:w-full w-[390px] md:h-[1600px] h-[1350px] md:items-center  rounded-bl-[64px] rounded-br-[64px] flex-col  justify-center flex overflow-hidden'>
            <div className=' md:w-[1440px] w-[390px] items-center md:gap-12 gap-7 flex flex-col text-right'>
                <div className='md:w-full w-[389px] flex gap-6 flex-col'>
                    <div className='flex justify-end gap-4'>
                        <Image src={LeftTriangle} alt='.'/>
                        <h2 className='text-primary-accent-green md:text-[16px] text-[14px]' >!خونه از خودت میخوای </h2>
                    </div>
                    <div className='flex flex-row items-center justify-between'>
                        <Button 
                            text=" مشاهده همه" width='md:w-[137px]' textStyle={{color:"#FFFFFF"}}  height='h-[36px]'  buttonStyle={{display: "flex", justifyContent:"center", alignItems:"center",fontSize :"16px",gap:"20px" , backgroundColor : "dark-700",border: "2px solid #FFF"}} 
                            icon={<Image src={smallLeftArrowWhite} alt='smallLeftArrow'/>}>
                        </Button>                  
                        <span className='md:text-[32px] text-[24px] text-white-pure'>خرید و فروش ملک در دلتا</span>
                    </div>
                </div>
                <HouseCard/>             
            </div>  
            <div className='md:mt-28 mt-20 w-[390px] md:w-[1440px] md:h-[551px]'>
                <AmusementCard/>
            </div>
        </div>
    )
}

export default BuyHouse