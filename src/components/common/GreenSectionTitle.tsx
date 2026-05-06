import Image from "next/image";

import arrowRight from "@/public/icons/Group34.svg"
import arrowLeft from "@/public/icons/Group33.svg"

interface GreenSectionTitle {
    title: string;
}

const GreenSectionTitle = ({title} : GreenSectionTitle) => {
  return (
    <div className='sm:w-[280px] flex-center gap-4'>
      <span className='flex-1'>
        <Image src={arrowRight} alt="icon" className="sm:w-12 w-10"/>
      </span>
      <span className='flex-1 text-16-medium text-primary-accent-green'>{title}</span>
      <span className='flex-1'>
        <Image src={arrowLeft} alt="icon" className="sm:w-12 w-10"/>
      </span>
    </div>
  )
}

export default GreenSectionTitle
