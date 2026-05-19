import React, { FC } from 'react'
interface IItem{
    items:string[]
}
const ItemNavbar:FC<IItem> = ({items}) => {
  return (
    <div  className="bg-gray-500 w-full flex justify-evenly text-[20px] text-white rounded-xl p-2 items-center"> 
          {items.map((item)=>(
            <div key={item}>{item}</div>
          ))}</div>
  )
}

export default ItemNavbar
