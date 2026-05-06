import React from 'react'
import BlureLightCircle from '../common/BlureLightCircle'
import Container from '../common/Container'

import Image from 'next/image';
import arrowRight from "@/public/icons/Group34.svg"
import Button from '../common/button/page';
import { BsChevronLeft } from "react-icons/bs";
import ProductCard from '../common/productCard/ProductCard';

const DepositAndRentSection = () => {
  return (
    <div className='relative padding-section'>
        <BlureLightCircle bgColor='#8CFF4552' />
        <Container >
            <div className='w-full flex flex-col items-end gap-12'>
                 <div className='w-full flex flex-col items-end gap-6 justify-start'>
                    <span className='flex-center justify-end gap-4'>
                        <Image src={arrowRight} alt='icon' width={48} height={16}/>
                        <p className='text-16-medium text-primary-accent-green'>با هر مبلغی خونه دار شو</p>
                    </span>
                    <div style={{
                            width:"100%",
                            display:"flex", justifyContent:"space-between",
                            alignItems:"center"
                        }}>
                            <Button
                            text="مشاهده همه"
                            icon={
                            <span>
                                <BsChevronLeft className='w-3 h-3' />
                            </span>
                            }
                            buttonStyle={{height:"36px", border:"1px solid #fff", borderRadius:"12px", background:"#2D2D2D", padding:"8px 16px"}}
                            />
                            <h3 className='flex-center justify-end text-32-medium'>رهن و اجاره ملک در دلتا</h3>
                    </div>
                    <Container>
                         <div className="flex-center gap-8">
                            <ProductCard
                         seeMore
                         mode='col'
                         title='آپارتمان لوکس زعفرانیه'
                         capacityAndRoom='2 خوابه ، 2 حمامه ، ظرفیت 6 نفر'
                         location='گیلان ، رشت'
                         price= "50000"
                         rate='4.5'
                         oldPrice="2500000"
                         stayingLength= "6 شب"
                         buttonText='قیمت خرید :'
                         />
                         <ProductCard
                         seeMore
                         mode='col'
                         title='آپارتمان لوکس زعفرانیه'
                         capacityAndRoom='2 خوابه ، 2 حمامه ، ظرفیت 6 نفر'
                         location='گیلان ، رشت'
                         price= "50000"
                         rate='4.5'
                         oldPrice="2500000"
                         stayingLength= "6 شب"
                         buttonText='قیمت خرید :'
                         />
                         <ProductCard
                         seeMore
                         mode='col'
                         title='آپارتمان لوکس زعفرانیه'
                         capacityAndRoom='2 خوابه ، 2 حمامه ، ظرفیت 6 نفر'
                         location='گیلان ، رشت'
                         price= "50000"
                         rate='4.5'
                         oldPrice="2500000"
                         stayingLength= "6 شب"
                         buttonText='قیمت خرید :'
                         />
                         <ProductCard
                         seeMore
                         mode='col'
                         title='آپارتمان لوکس زعفرانیه'
                         capacityAndRoom='2 خوابه ، 2 حمامه ، ظرفیت 6 نفر'
                         location='گیلان ، رشت'
                         price= "50000"
                         rate='4.5'
                         oldPrice="2500000"
                         stayingLength= "6 شب"
                         buttonText='قیمت خرید :'
                         />
                        </div>
                    </Container>
                 </div>
            </div>
        </Container>
    </div>
  )
}

export default DepositAndRentSection
