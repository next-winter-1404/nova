'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import whiteStar from "@/src/assets/icons/whiteStar.svg"
import Location from "@/src/assets/icons/Location.svg"
import CalendarTime from "@/src/assets/icons/calendarclock.svg"
import greenhotel from "@/src/assets/icons/greenhotel.svg"
import usersAlt from "@/src/assets/icons/usersAlt.svg"
import timepast from "@/src/assets/icons/timepast.svg"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'


const Traveler = () => {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step')
    
    
  return (
    <div className='flex flex-col items-center w-full gap-[39px]' dir='rtl'>
        <div className='w-[1465px] flex items-center justify-center h-[142px] bg-dark-700 rounded-3xl '>
          <div className ='w-[570px] h-[110px] border-l border-gray-200 flex gap-4'>
            <div className='w-[160px] bg-gray-250 rounded-[20px]'></div>
            <div className='w-[345px] gap-4 flex flex-col'>
              <div className='w-[83px] items-center gap-1 justify-center flex h-[29px] text-white-pure text-[13px] bg-blue-purple-500 rounded-[8px]'><Image src={whiteStar} alt='whiteStar'/> 5 ستاره</div>
              <h2 className='text-2xl text-white-pure'>هتل سراوان رانین رشت</h2>
              <div className='flex text-[16px] gap-0.5'>
                <h2 className='text-gray-300 flex gap-2'><Image src={Location} alt='Location'/> ادرس: </h2>
                <h2 className='text-[16px] text-white-pure'> گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....</h2>
              </div>
            </div>
          </div>
          <div className ='w-[436px] flex flex-col gap-4 items-center justify-center h-[110px] border-l border-gray-200'>
            <div className='w-[330px] h-[21px] flex text-[16px] gap-0.5 items-center'>
              <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ ورود :</h2>
              <h2 className='text-primary-accent-green'> 12 / 05 / 1403 - ساعت 15:30 ب.ظ</h2>
            </div>
            <div className='w-[330px] h-[21px] flex text-[16px] gap-0.5 items-center'>
              <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ خروج :</h2>
              <h2 className='text-primary-accent-green'> 12 / 05 / 1403 - ساعت 15:30 ب.ظ</h2>
            </div>
          </div>
          <div className ='w-[340px] h-[110px] flex flex-col items-center justify-center'>
            <div className='w-[335px] h-[83px] flex-col items-end flex gap-4'>
              <div className='w-full flex h-[30px] justify-end gap-[9px]'>
                <h2 className='text-[16px] text-gray-300'>25.000.000 ت</h2>
                <div className='w-[42px] h-[24px] rounded-[46px] bg-tomato-red text-[13px] text-white-pure flex items-center justify-center'>%22</div>
                <h2 className='text-2xl text-primary-accent-green'>15.000.000 ت</h2>               
              </div>
              <Button text={"تغییر هتل"} icon={<Image src={greenhotel} alt='greenhotel'/>} width='w-[120px]' height='h-[36px]' textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"#393939"}}/>
            </div>
          </div>
        </div>
        <div className='w-[1465px] flex flex-col items-center justify-center h-[250px] border bg-dark-700 rounded-3xl gap-6'>
          <div className=' w-[1449px] h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
            <div className='w-[1417px] h flex justify-between '>
              <div className='w-[145px] h-[21px] flex gap-3 items-center text-[16px] text-white-pure'><Image src={usersAlt} alt='usersAlt'/>مشخصات مسافران </div>
              <Button text={"انتخاب مسافران سابق"} icon={<Image src={timepast} alt='timepast'/>} textStyle={{fontSize:"16px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"160px", background:"#F550"}}/>
            </div>        
          </div>
          <div className='w-[1440px] h-[90px] border'>
            <div className='w-[1410ps] h-[66px] border flex justify-between items-center'>
              {/* <Input/> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Traveler