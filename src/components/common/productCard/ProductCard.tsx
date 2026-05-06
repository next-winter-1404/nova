import CardContainer from "@/src/components/common/card/page";
import ProductCardWrapper from "./ProductCardWrapper";
import Button from "../button/page";
import { FaStar } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';

import Image from 'next/image'
import Location from "@/src/assets/icons/Location.svg"
import bed from "@/src/assets/icons/bed.svg"
import houseTree from "@/src/assets/icons/houseTree.svg"
import car from "@/src/assets/icons/car.svg"
import bathroom from "@/src/assets/icons/bathroom.svg"
import leftArrow from "@/src/assets/icons/leftArrow.svg"
import Star from "@/src/assets/icons/Star.svg"
import Divider from "../Divider";

interface ProductCardProps {
    mode: "row" | "col";
    seeMore?: boolean;
    title: string;
    offer?: string;
    rate?: string;
    location?: string;
    capacityAndRoom?: string;
    price?:string;
    oldPrice?: string;
    stayingLength?: string;
    buttonText?:string
}

const ProductCard = ({
    title, capacityAndRoom,
    location, offer, price,
    rate, mode, seeMore, oldPrice,
    stayingLength, buttonText

}:ProductCardProps) => {
  return (
    <div className={`group h-[430px] text-white-pure flex ${mode === "col" ? "flex-col gap-4" : "w-full w-[730px] flex-row-reverse items-center justify-between gap-4"}`}>                   
      {seeMore && (
        <div className='group-hover:bg-primary-accent-green w-[45px] absolute flex justify-center rounded-[8px] h-[22px] bg-dark-700'>
          <Image src={leftArrow} alt='leftArrow' />
        </div>
      )}
      <CardContainer  
          curveColor='#393939'
          cavity="round"
          labelContent={
            mode == "col" &&
              <div className='w-[67px] h-[30px] mt-[5px] flex items-center  text-dark-800 justify-center gap-1 bg-white-pure rounded-[8px] z-20 '>
              <Image src={Star} alt='star'/> 
              {rate}
            </div>
          }
          labelSize="md"
          mainContent={<div className='w-[297px] h-[156px] bg-dark-600 rounded-2xl'></div>}                            
          labelBackground="group-hover:bg-[#8cff45] bg-[#393939]"
          labelExtraStyle={{height:'50px'}}
          mainExtraStyle={{background:"var(--color-dark-700)"}}
      />
      
    {mode === "col" && 
      <div className='flex-col-center gap-3'>
      <span className={`flex ${offer ? "justify-between" : "justify-end" } items-center`}>
        { offer && <span className="text-16-semibold px-3 py-1.5 w-14 h-9 rounded-xl bg-tomato-red whitespace-nowrap">%{offer}</span> }
        <span className='text-[20px] flex justify-end'>{title}</span>
      </span>
      
      {capacityAndRoom && 
        <>
        
          <div className='flex justify-end gap-3'><h2 className='text-[16px] text-gray-300'>{location}</h2><Image src={Location} alt='Location'/></div>
      <div className='w-full h-[16px] flex items-center justify-end text-gray-300 gap-0.5'>
            <div className=' w-[63px] text-[13px] justify-center flex gap-2.5'> حیاط <Image src={houseTree} alt='houseTree'/></div>                            
            <div className='border-l border-gray-300 w-[85px] text-[13px] justify-center flex gap-2.5'>2 حمام <Image src={bathroom} alt='bathroom'/></div>
            <div className='border-l border-gray-300 w-[91px] text-[13px] justify-center flex gap-2.5'> 1 پارکینگ  <Image src={car} alt='car'/></div>
            <div className='border-l border-gray-300 w-[77px] text-[13px] justify-end flex gap-2.5'> خوابه 4 <Image src={bed} alt='bed'/></div>                           
      </div>
        <div className='w-full h-[36px] group-hover:bg-primary-accent-green bg-dark-600 text-white-pure group-hover:text-dark-800 rounded-[12px] flex items-center justify-between pl-3 pr-3'>                            
          <h2 className='text-[16px]'> {price} </h2>
          <h2 className='text-gray-300 text-[16px]'>
            {offer ? <span className="flex-center gap-2 relative text-gray-300 text-16-semibold">
                        <i>تومان</i>
                        <span className="flex-center gap-1">
                          <span className="absolute top-2 -right-1 -rotate-12 w-20 h-0.5 bg-gray-300"></span>
                          {oldPrice}
                        </span>
                      </span> 
                      : <span>{buttonText}</span>}
          </h2>
      </div>
        
        </>
      }
      </div>
    }

    {mode === "row" && 
      <div className='group w-full flex-col-center gap-4'>
        {offer && 
          <div className="flex justify-between items-center ">
            <span className="flex-center gap-4">
              <span className="text-16-semibold px-3 py-1.5 w-14 h-9 rounded-xl bg-tomato-red whitespace-nowrap">%{offer}</span>
              <span className="relative text-gray-300 text-16-semibold">
                <span className="absolute top-2 -right-2 -rotate-12 w-20 h-0.5 bg-gray-300"></span>
                {oldPrice}
              </span>
            </span>
            <span className="flex-center gap-1 px-3 py-1.5 whitespace-nowrap text-white bg-blue-purple-500 rounded-lg">
              ستاره
              <span style={{display:"flex", alignItems:"center", gap:"4px"}} className="">
              {rate}
              <FaStar className="w-4 h-4"/> 
            </span>
            </span>
          </div>
        }
        <div className="flex justify-between items-center">
          <span className="flex-center gap-2 px-3 py-1.5 whitespace-nowrap text-semibold-28 text-primary-accent-green">
            <i>ت</i>
            <span>{  price }</span>
            
          </span>
          <span className='text-[20px] flex justify-end text-semibold-24'>{title}</span>
        </div>
        <span className="flex-center justify-between">
          <span className="flex-center gap-2.5 text-primary-accent-green group-hover:text-dark-800 whitespace-nowrap px-6 py-3 border border-primary-accent-green rounded-[14px] group-hover:bg-primary-accent-green inset-shadow-fff-24 text-16-semibold">
            <FaBuilding />
          همین الان رزرو کن 
          </span>
        <div>
          <div className='flex justify-end gap-3'>
          <h2 className='text-[16px] text-gray-300'>{location}</h2>
          <Image src={Location} alt='Location'/>                                                 
        </div>
        {stayingLength && (
          <span className="flex-center gap-2 whitespace-nowrap text-[16px]">
             <span className="flex-center gap-1">
              {stayingLength}
              <i className="text-gray-300">: مدت زمان</i>
             </span>
              
              <MdAccessTime className="text-gray-300"/>
            
          </span>
        )}
        </div>
        </span>
      </div>
    }
    </div>
  )
}

export default ProductCard