import { ITriangleProps } from '@/src/core/types/ITriangleProps'
import Image from 'next/image'
import React, { FC } from 'react'
import LeftTriangle from "@/src/assets/images/LeftTriangle.svg"
import RightTriangle from "@/src/assets/images/RightTriangle.svg"
import ScrollFloat from '../../animations/ScrollFloat/ScrollFloat'

const Triangle: FC<ITriangleProps> = ({
    text,
}) => {
  return (
    <div className='flex flex-row items-center justify-center gap-3 p-4 h-5 w-[178px]'>
        <div >
           <Image src={LeftTriangle} alt='.' className='max-w-none'/>
        </div>
        <div className='text-center flex-shrink-0 px-3'>
            <h2 className='text-[16px] font-bold text-primary-accent-green whitespace-nowrap'>
               <ScrollFloat
                animationDuration={1}
                ease="back.inOut(2)"
                scrollStart="center bottom+=50%"
                scrollEnd="bottom bottom-=40%"
                stagger={0.1}
              >
               {text}
               </ScrollFloat>
               
            </h2>
        </div>
        <div >
           <Image src={RightTriangle} alt='.' className='max-w-none'/>
        </div>
    </div>
  )
}

export default Triangle