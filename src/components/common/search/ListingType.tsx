import React from 'react'
import Divider from '../Divider'
import bookingIcon from "@/public/icons/booking.svg"
import houseBuildingIcon from "@/public//icons/house-building.svg"
import moneyCheckEdit from "@/public/icons/money-check-edit.svg"
import Image from 'next/image'

const types = [
    { labelName: 'رهن و اجاره', iconSrc: moneyCheckEdit , current: false },
    { labelName: 'خرید و فروش', iconSrc: houseBuildingIcon, current: false },
    { labelName: 'رزرو ملک', iconSrc: bookingIcon, current: true },
]

const ListingType = () => {
  return (
    <div className='flex items-center justify-end cursor-pointer gap-3'>
      {types.map((listType) => {
        return (
            <div className='flex items-center gap-3' key={listType.labelName}>
                <span><Divider color='#fff' height='16'/></span>
                <div className='flex-center gap-2'>
                    <span className='cursor-pointer text-20-medium'>{listType.labelName}</span>
                    <span><Image src={listType.iconSrc} alt='icon' width={16} height={16} /> </span>
                </div>
            </div>

        )
      })}
    </div>
  )
}

export default ListingType
