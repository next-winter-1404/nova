'use client'
import { redirect, useSearchParams } from 'next/navigation'
import React, { FC, ReactNode } from 'react'
import hotel  from '@/src/assets/icons/hotel.svg'
import Image from 'next/image';
import payment  from '@/src/assets/icons/payment.svg'
import accept  from '@/src/assets/icons/accept.svg'
import userAlt  from '@/src/assets/icons/usersAlt.svg'
import ticketBill  from '@/src/assets/icons/ticeitbill.svg'


interface IProps  {
    children : ReactNode;
}
const stepIcons =[
    userAlt,
    accept,
    payment,
    ticketBill,   
];
const Layout = ({children} : IProps) => {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') ||"travelerinfo";

    const steps = [
        {id : 'travelerinfo', label : "مشخصات مسافران"},
        {id : 'acceptInfo', label : 'تایید اطلاعات'},
        {id : 'payment', label : 'پرداخت انلاین'},
        {id : 'ticket', label : 'صدور بلیط'}
    ];

    const currentIndex = steps.findIndex(s => s.id === currentStep)
  return (
    <div className='flex flex-col justify-center items-center mt-[172px] border border-amber-50' dir='rtl'>
        <div className='w-[1465px] h-[68px] border border-amber-50 rounded-3xl flex items-center justify-center bg-dark-700'>
            <div className='w-11/12 border h-[45px] border-amber-50 flex items-center justify-between relative'>
                <div className='flex gap-4 border border-amber-50 items-center'>
                    <div className ='w-9 h-9 rounded-full bg-primary-accent-green flex items-center justify-center'>
                        {<Image src={hotel} alt='hotel'/>}
                    </div>
                    <span className='text-[20px] text-primary-accent-green'>انتخاب هتل</span>
                </div>
                <div className='border-b-3 w-[112px] border-dashed border-primary-accent-green'></div>    
                {steps.map((step, index) => {
                    const isCompleted = currentIndex > index ;
                    const isActive = currentIndex === index;
                    return(
                        <div key={step.id} className='flex items-center gap-4'>
                            <div className ={`w-9 h-9 rounded-full bg-primary-accent-green flex items-center justify-center ${
                                isCompleted ? 'bg-primary-accent-green' : isActive ? 'border border-white-pure bg-transparent' : 'border border-gray-300 bg-transparent'
                                }`}
                                >
                                <Image src={stepIcons[index]} alt={step.label} width={16} height={16}/>
                            </div>
                            <span className ={`text-[20px] ${
                                isCompleted ? 'text-primary-accent-green' : isActive ? 'text-white-pure' : 'text-gray-300'
                            }`}>
                                {step.label}
                            </span>
                            {index < steps.length -1 && (
                                <div className={`border-b-3 w-[112px] border-dashed ${
                                    isCompleted ? 'border-primary-accent-green' : isActive ? 'border-white-pure' : 'border-gray-300'
                                }`}>
                                </div>
                            )}
                        </div>
                    );
                })}            
            </div>            
        </div>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout
