import React, { FC } from 'react'
interface IItem{
    items:string[],
    colsNumber:number
}
const ItemNavbar:FC<IItem> = ({items,colsNumber}) => {
  return (
    <div  className={`bg-gray-500 w-full gap-15 grid grid-cols-${colsNumber} text-[20px] text-white rounded-xl px-[125px] p-2 items-center `}> 
          {items.map((item)=>(
            <div key={item}>{item}</div>
          ))}</div>
  )
}

export default ItemNavbar
