import React from 'react'
import { FaCommentDots } from 'react-icons/fa'

const SellerNewComments = () => {
  return (
    <div className="border border-dashed  w-full p-3 border-gray-500 flex items-center gap-4 rounded-[18px]">
    <FaCommentDots className="w-6 h-6 text-white" />
    <div className="flex-col flex  " dir="rtl">
      <h2 className="text-[20px] text-white">نظرات جدید</h2>
      <span className="text-gray-500 text-[14px]">0 نظر جدید</span>
    </div>
  </div>
  )
}

export default SellerNewComments
