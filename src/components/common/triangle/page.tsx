import { ITriangleProps } from '@/src/core/types/ITriangleProps'
import Image from 'next/image'
import React, { FC } from 'react'

const Triangle: FC<ITriangleProps> = ({
    text,
}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-3 p-4 h-5 w-[178px]'>
        <div>
           <Image src='src/assets/images/Group 34.svg' alt='.' width={60} height={60}/>
        </div>
        <div className='text-center flex-shrink-0 px-3'>
            <h2 className='text-[16px] font-bold text-primary-accent-green whitespace-nowrap'> {text}</h2>
        </div>
        <div className='flex flex-row gap-[6px] items-center'>
            <div className ='w-0 h-0 border-t-[6px] border-b-[6px] border-r-[12px] border-b-transparent border-t-transparent border-r-primary-accent-green'></div>
            <div className ='w-0 h-0 border-t-[4px] border-b-[4px] border-r-[8px] border-b-transparent border-t-transparent border-r-primary-accent-green'></div>
            <div className ='w-0 h-0 border-t-[2px] border-b-[2px] border-r-[4px] border-b-transparent border-t-transparent border-r-primary-accent-green'></div>
        </div>
    </div>
  )
}

export default Triangle