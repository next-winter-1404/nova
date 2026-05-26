import React, { FC } from 'react'
interface IItem{
    items:string[],
    colsNumber:number,
    twClassName?:string
}
const ItemNavbar:FC<IItem> = ({items,colsNumber,twClassName="lg:px-[125px] lg:text-[20px]  "}) => {
  return (
    <div  className={`bg-gray-500 w-full gap-5 sm:gap-15  grid grid-cols-${colsNumber} ${twClassName} whitespace-nowrap text-white md:text-[16px] text-[10px] rounded-xl  p-2 px-5 items-center `}> 
          {items.map((item)=>(
            <div key={item}>{item}</div>
          ))}</div>
  )
}

export default ItemNavbar
