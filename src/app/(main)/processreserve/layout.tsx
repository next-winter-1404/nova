'use client'
import { useSearchParams } from 'next/navigation'
import React, { FC, ReactNode } from 'react'

interface IProps  {
    children : ReactNode;
}
const Layout = ({children} : IProps) => {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') || 'traveler';

    const steps = [
        {id : 'traveler', label : "مشخصات مسافران"},
        {id : 'acceptInfo', label : 'تایید اطلاعات'},
        {id : 'payment', label : 'پرداخت انلاین'},
        {id : 'ticket', label : 'صدور بلیط'}
    ];

    const currentIndex = steps.findIndex(s => s.id === currentStep)
  return (
    <div className='flex justify-center' dir='rtl'>
        <div className='w-[1376px] h-[68px] rounded-3xl flex items-center justify-center bg-dark-700'>
            <div className='w-11/12 border h-[45px] border-amber-50 flex items-center justify-between relative'>
                <div className='flex gap-3 items-center'>
                    <div className='w-9 h-9 rounded-full bg-primary-accent-green flex items-center justify-center'>
                        {}
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Layout
