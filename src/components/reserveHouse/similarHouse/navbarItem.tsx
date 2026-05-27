import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import building from "@/src/assets/icons/house-building.svg";
interface IProp{
    similarTitle?:string,
    href:string
}
const SimilarNavbarItem:FC<IProp> = ({similarTitle,href}) => {
  return (
    <div className=" w-full  bg-dark-700 rounded-2xl h-[52px] mt-4 flex justify-between gap-6 px-5 ">
        <div className="flex-center text-primary-accent-green gap-4 cursor-pointer hover:opacity-70">
          <FiChevronLeft className="w-4 h-4" />
          <Link href={href} className="cursor-pointer">مشاهده همه</Link>
        </div>
        <div className="flex-center text-white gap-4">
          <span>{similarTitle}</span>
          <Image alt="icon" src={building} className="w-4 h-4" />
        </div>
      </div>
  )
}

export default SimilarNavbarItem
