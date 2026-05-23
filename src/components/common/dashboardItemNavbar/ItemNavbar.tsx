import React, { FC } from 'react'
interface IItem{
    items:string[],
    colsNumber:number,
    twClassName?:string
}
const ItemNavbar:FC<IItem> = ({items,colsNumber,twClassName="px-[125px] text-[20px] "}) => {
  return (
    <div  className={`bg-gray-500 w-full gap-15 grid grid-cols-${colsNumber} ${twClassName}  text-white rounded-xl  p-2 items-center `}> 
          {items.map((item)=>(
            <div key={item}>{item}</div>
          ))}</div>
  )
}

export default ItemNavbar
