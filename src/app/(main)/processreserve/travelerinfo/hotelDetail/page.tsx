// 'use client'
// import Button from '@/src/components/common/button/page'
// import Image from 'next/image'
// import { useRouter, useSearchParams } from 'next/navigation'
// import React from 'react'
// import whiteStar from "@/src/assets/icons/whiteStar.svg"
// import Location from "@/src/assets/icons/Location.svg"
// import CalendarTime from "@/src/assets/icons/calendarclock.svg"
// import greenhotel from "@/src/assets/icons/greenhotel.svg"
// import imagePlaceHolder from "@/src/assets/images/imagePlaceHolder (2).png"


// const HotelDetail = ({houseDetail}) => {
//   const router = useRouter()
//       const searchParams = useSearchParams();
//       const checkInDate = searchParams.get("checkInDate")
//       const checkOutDate = searchParams.get("checkOutDate") 
//       const handleNavigate = () => {
//         router.push("/reserve-house")
//       }
//       return(
//   <div className='flex items-center justify-center md:w-11/12 w-[340px] md:h-[142px] h-[400px] bg-dark-700 rounded-3xl '>
//           <div className='w-22/23 flex md:flex-row flex-col'>
//             <div className ='md:w-[630px] md:h-[110px] h-[120px] items-center md:border-l md:border-gray-200 flex gap-2 md:gap-4'>
//               <div className='md:w-[160px] md:h-full h-[70px] w-[100px] bg-gray-250 rounded-[20px]'>{houseDetail.photos || <Image src={imagePlaceHolder} alt='imagePlaceHolder' className='w-full h-full rounded-2xl'/>}</div>
//               <div className='w-[385px] md:gap-4 gap-2 flex flex-col'>
//                 <div className='md:w-[83px] w-[73px] items-center gap-1 justify-center flex md:h-[29px] h-[20px] text-white-pure md:text-[13px] text-[11px] bg-blue-purple-500 rounded-[8px]'><Image src={whiteStar} alt='whiteStar'/> {houseDetail?.rate} ستاره</div>
//                 <h2 className='md:text-2xl text-[20px] text-white-pure'> {houseDetail?.title || "عنوانی وجو ندارد"}</h2>
//                 <div className='flex md:text-[16px] text-[12px] gap-1 md:gap-3'>
//                   <h2 className='text-gray-300 flex md:gap-2 gap-0.5'><Image src={Location} alt='Location'/> ادرس: </h2>
//                   <h2 className='md:w-[370px] w-[170px] text-white-pure'> {houseDetail?.address || "ادرس وجود ندارد"}</h2>
//                 </div>
//               </div>
//             </div>
//             <div className ='md:w-[470px] flex flex-col gap-4 items-center justify-center h-[110px] md:border-l md:border-gray-200'>
//               <div className='md:w-[350px] h-[21px] flex md:text-[16px] text-[12px] gap-0.5 items-center'>
//                 <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ ورود :</h2>
//                 <h2 className='text-primary-accent-green'> {checkInDate}</h2>
//               </div>
//               <div className='md:w-[350px] h-[21px] flex md:text-[16px] text-[12px] gap-0.5 items-center'>
//                 <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ خروج :</h2>
//                 <h2 className='text-primary-accent-green'> {checkOutDate}</h2>
//               </div>
//             </div>
//             <div className ='md:w-[370px] h-[110px] flex flex-col items-end justify-center'>
//               <div className='md:w-[335px] h-[83px] flex-col items-end flex gap-4'>
//                 <div className='w-full flex h-[30px] items-center justify-end gap-[9px]'>
//                   <h2 className='md:text-[16px] text-[12px] text-gray-300'>{houseDetail?.price} ت</h2>
//                   <div className='w-[42px] h-[24px] rounded-[46px] bg-tomato-red text-[13px] text-white-pure flex items-center justify-center'>%{houseDetail?.discount_id}</div>
//                   <h2 className='md:text-2xl text-[16px] text-primary-accent-green'>{houseDetail?.discounted_price} ت</h2>               
//                 </div>
//                 <Button text={"تغییر هتل"} 
//                   icon={<Image src={greenhotel} alt='greenhotel'/>} width='w-[120px]' height='h-[36px]' textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent"}}
//                   onClick={ handleNavigate}                  
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )
// }

// export default HotelDetail