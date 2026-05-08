'use client'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import whiteStar from "@/src/assets/icons/whiteStar.svg"
import Location from "@/src/assets/icons/Location.svg"
import CalendarTime from "@/src/assets/icons/calendarclock.svg"
import greenhotel from "@/src/assets/icons/greenhotel.svg"
import usersAlt from "@/src/assets/icons/usersAlt.svg"
import timepast from "@/src/assets/icons/timepast.svg"
import arrowUp from "@/src/assets/icons/arrowUp.svg"
import arrowDown from "@/src/assets/icons/arrowDown.svg"
import useradd from "@/src/assets/icons/useradd.svg"
import users2 from "@/src/assets/icons/users2.svg"
import checkCircle from "@/src/assets/icons/checkCircle.svg"
import ticket from "@/src/assets/icons/ticket.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import UseStepNavigation from '../navigation'


const Traveler = () => {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') || 'travelerinfo'
    const [isOpen, setIsOpen] = useState(true);
    const toggleShow = async () => {
      setIsOpen ((prev) => (!prev));
    };
    const {goToNext} = UseStepNavigation();
    
  return (
    <div className='flex flex-col items-center gap-[36px] w-[1683px] h-[950px]' dir='rtl'>
        <div className='flex items-center justify-center w-11/12 h-[142px] bg-dark-700 rounded-3xl '>
          <div className='w-22/23 flex'>
            <div className ='w-[630px] h-[110px] border-l border-gray-200 flex gap-4'>
              <div className='w-[160px] bg-gray-250 rounded-[20px]'></div>
              <div className='w-[385px] gap-4 flex flex-col'>
                <div className='w-[83px] items-center gap-1 justify-center flex h-[29px] text-white-pure text-[13px] bg-blue-purple-500 rounded-[8px]'><Image src={whiteStar} alt='whiteStar'/> 5 ستاره</div>
                <h2 className='text-2xl text-white-pure'>هتل سراوان رانین رشت</h2>
                <div className='flex text-[16px] gap-0.5'>
                  <h2 className='text-gray-300 flex gap-2'><Image src={Location} alt='Location'/> ادرس: </h2>
                  <h2 className='text-[16px] text-white-pure'> گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ....</h2>
                </div>
              </div>
            </div>
            <div className ='w-[470px] flex flex-col gap-4 items-center justify-center h-[110px] border-l border-gray-200'>
              <div className='w-[350px] h-[21px] flex text-[16px] gap-0.5 items-center'>
                <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ ورود :</h2>
                <h2 className='text-primary-accent-green'> 12 / 05 / 1403 - ساعت 15:30 ب.ظ</h2>
              </div>
              <div className='w-[350px] h-[21px] flex text-[16px] gap-0.5 items-center'>
                <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ خروج :</h2>
                <h2 className='text-primary-accent-green'> 12 / 05 / 1403 - ساعت 15:30 ب.ظ</h2>
              </div>
            </div>
            <div className ='w-[370px] h-[110px] flex flex-col items-end justify-center'>
              <div className='w-[335px] h-[83px] flex-col items-end flex gap-4'>
                <div className='w-full flex h-[30px] justify-end gap-[9px]'>
                  <h2 className='text-[16px] text-gray-300'>25.000.000 ت</h2>
                  <div className='w-[42px] h-[24px] rounded-[46px] bg-tomato-red text-[13px] text-white-pure flex items-center justify-center'>%22</div>
                  <h2 className='text-2xl text-primary-accent-green'>15.000.000 ت</h2>               
                </div>
                <Button text={"تغییر هتل"} icon={<Image src={greenhotel} alt='greenhotel'/>} width='w-[120px]' height='h-[36px]' textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent"}}/>
              </div>
            </div>
          </div>
        </div>
        <div className='w-11/12 flex flex-col items-center justify-center h-[250px] bg-dark-700 rounded-3xl gap-5'>
          <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
            <div className='w-[1417px] items-center flex justify-between'>
              <div className='w-[160px] h-[21px] flex gap-3 items-center text-[16px] text-white-pure'><Image src={usersAlt} alt='usersAlt'/>مشخصات مسافران </div>
              <Button text={"انتخاب مسافران سابق"} icon={<Image src={timepast} alt='timepast'/>} textStyle={{fontSize:"16px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"170px", background:"#F550"}}/>
            </div>        
          </div>
          <div className='w-22/23 flex flex-col items-center h-[100px] border-b-3 border-gray-300 border-dashed'>
            <div className='flex gap-5 w-full flex-col justify-end items-center relative h-[75px]'>
            <Button buttonStyle={{width :"16px", height:"10px", backgroundColor:"transparent", position:"absolute", left:"35px", top:"0px"}} onClick={toggleShow} icon= {isOpen ? <Image src={arrowUp} alt='arrowUp'/> : <Image src={arrowDown} alt='arrowDown'/>}/>            
            {isOpen && (
            <form className='w-[1410px] h-[60px] flex justify-between items-center'>              
              <Input
                labelText='نام شما :'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'name'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'name'}
              />
              <Input
                labelText='نام خانوادگی :'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'family'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'family'}
              />
              <Input
                labelText=' کد ملی:'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'national'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'national'}
              />
              <Input
                labelText=' کد ملی:'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'national'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'national'}
              />
              <Input
                labelText=' کد ملی:'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'national'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'national'}
              />
            </form>
            )}
            </div>
          </div>
          <div className='w-[1410px] flex flex-col items-end justify-center h-[50px]'> 
          <Button text={"افزودن مسافر"} icon={<Image src={useradd} alt='useradd'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"142px"}}/>
          </div>
        </div>
        <div className='w-11/12 flex flex-col items-center justify-center h-[166px] bg-dark-700 rounded-3xl gap-5'>
          <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
            <div className='w-[1417px] flex justify-between'>
              <div className='w-[460px] h-[21px] gap-3 flex items-center text-[16px] text-white-pure'><Image src={users2} alt='users2'/> 
                <div className='flex'>
                  <h2 >ارسال بلیط به دیگری</h2> <h2 className='text-primary-accent-green'>( ارسال بلیط به ایمیل و شماره همراه دیگر )</h2>
                </div>
              </div>
              <Button text={"انتخاب مسافران سابق"} icon={<Image src={timepast} alt='timepast'/>} textStyle={{fontSize:"16px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"170px", background:"#F550"}}/>
            </div>        
          </div>
          <div className='w-[1410px] justify-between flex items-center h-[70px] '>                   
            <form className='h-[50px] flex gap-5 items-center'>              
              <Input
                labelText='شماره تلفن :'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'name'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'name'}
              />
              <Input
                labelText='ایمیل :'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='md:text-[13px] text-[9px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'family'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'family'}
              />
            </form>            
            <Button text={"افزودن مسافر"} icon={<Image src={checkCircle} alt='checkCircle'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"142px"}}/>          
          </div>          
        </div>
        <div className='h-[84px] w-11/12 flex items-center justify-center border-3 border-dashed rounded-4xl border-gray-300'>
            <div className='h-9 w-[1410px] flex justify-between' dir='ltr'>
            <Button text={" تایید و ادامه فرایند"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"165px"}}
              onClick={() => goToNext(currentStep)}
            />          
              <div className='w-[300px] h-[30px] gap-3 flex items-center text-[24px] text-white-pure' dir='rtl'>
                <Image src={ticket} alt='ticket'/> 
                <div className='flex gap-0.5'>
                  <h2 > قیمت بلیط : </h2> <h2 className='text-primary-accent-green'> 1.500.000ت </h2>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Traveler