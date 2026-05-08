'use client'
import { useSearchParams } from 'next/navigation'
import React, {ReactNode } from 'react'
import hotel  from '@/src/assets/icons/hotel.svg'
import Image from 'next/image';
import payment  from '@/src/assets/icons/payment.svg'
import accept  from '@/src/assets/icons/accept.svg'
import usersAlt  from '@/src/assets/icons/usersAlt.svg'
import ticketBill  from '@/src/assets/icons/ticeitbill.svg'
import { steps } from './steps';


interface IProps  {
    children : ReactNode;
}
const stepIcons =[
    usersAlt,
    accept,
    payment,
    ticketBill,   
];
const Layout = ({children} : IProps) => {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') ||"travelerinfo";

    const currentIndex = steps.findIndex(s => s.id === currentStep)
  return ( 
    <div className='bg-dark-900 w-full'>
        <div className='flex flex-col w-full justify-center items-center mt-[172px] ' dir='rtl'>
            <div className='w-11/12 h-[68px]  border-amber-50 rounded-3xl flex items-center justify-center bg-dark-700'>
                <div className='w-22/23 h-[45px] flex items-center justify-between relative'>
                    <div className='flex gap-4 items-center'>
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
    </div>
  )
}

export default Layout
