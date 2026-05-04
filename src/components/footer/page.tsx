import React from 'react'
import CardContainer from '../common/card/page'
import phone from "@/src/assets/icons/phone.svg"
import text from "@/src/assets/images/text.svg"
import Image from 'next/image'
import leftBlackTriangle from "@/src/assets/images/leftBlackTriangle.svg"
import Input from '../common/input/Input'
import whiteTriangle from "@/src/assets/icons/whiteTriangle.svg"
import at from "@/src/assets/icons/at.svg"
import phoneGray from "@/src/assets/icons/phoneGray.svg"
import Location from "@/src/assets/icons/Location.svg"
import z2 from "@/src/assets/images/z2.svg"
import T1_1591355889268  from "@/src/assets/images/T1_1591355889268.svg"
import file_20191206_1550_36991  from "@/src/assets/images/file_20191206_1550_36991.svg"
import instagram from "@/src/assets/icons/instagram.svg"
import inI from "@/src/assets/icons/inl.svg"
import telegram from "@/src/assets/icons/telegram.svg"
import whatsApp from "@/src/assets/icons/whatsApp.svg"
import man from "@/src/assets/images/man.svg"
import Star15 from "@/src/assets/images/Star 15.svg"
import Star16 from "@/src/assets/images/Star 16.svg"
import Star17 from "@/src/assets/images/Star 17.svg"
import Star18 from "@/src/assets/images/Star 18.svg"
import Star19 from "@/src/assets/images/Star 19.svg"
import Star20 from "@/src/assets/images/Star 20.svg"

const Footer = () => {
  return (
    <div className='h-[1310px] relative w-full flex justify-center items-center '>
        <div className='w-[756px] absolute top-[-10px] left-[65px] flex justify-center rounded-[8px] h-[140px] '>
          <Image src={text} alt='src'/>
        </div>
        <div className='w-11/12'>            
        <CardContainer
            cavity='sharp'
            labelSize='md'
            labelContent={<div className='w-[330px] h-[50px] mt-[5px] flex gap-2 items-center text-[16px] text-white-pure justify-center bg-dark-900 rounded-[16px] '><Image src={phone} alt='phone'/> 09229167194 - 09154569872 </div>}
            mainExtraStyle={{background:"var(--color-primary-accent-green)"}}
            curveColor='var(--color-primary-accent-green)'
            labelBackground='bg-primary-accent-green'
            mainContent={<div className='h-[1100px] gap-[66px] w-full flex flex-col' dir='rtl'>
              <div className='h-[145px] w-[825px] gap-6 flex-col flex'>                
                  <div className='flex w-[150px] h-5 text-16-medium text-selectedButtonText gap-4 '>همیشه کنارتیم <Image src={leftBlackTriangle} alt='leftBlackTriangle'/></div>      
                  <h2 className='text-[32px] text-selectedButtonText'>24 ساعت روز و 7 روز هفته در اختیار شماییم !</h2>        
                  <h2 className='text-selectedButtonText text-[20px]'>تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .</h2>  
              </div> 
              <div className='flex w-full relative'>
              <form className='h-[345px] w-[620px] flex flex-col items-center border border-amber-50 gap-[42px]' >
                <div className='flex w-full h-[59px] gap-6'>     
                  <Input
                      labelText={'نام و نام خانوادگی :'} 
                      id={'name'} 
                      InputHeight={'h-[59px]'}
                      htmlFor={'name'}
                      type={'name'}
                      placeHolder={'وارد کنید ....'}
                      parentWidth='w-[297px]'
                      borderColor='border-selectedButtonText'               
                      labelTextSize='text-16-regular'
                      textSize='text-[20px]'
                    />            
                    <Input
                      labelText={'شماره یا ایمیل :'} 
                      id={'email'} 
                      InputHeight={'h-[59px]'}
                      htmlFor={'email'}
                      type={'email'}
                      placeHolder={'وارد کنید ....'}
                      parentWidth='w-[297px]'
                      borderColor='border-selectedButtonText'               
                      labelTextSize='text-16-regular'
                      textSize='text-[20px]'
                    />                    
                </div>
                <div className='w-full h-[156px]'>
                <Input
                      labelText={'پیام شما :'} 
                      id={'message'} 
                      InputHeight={'h-[156px]'}
                      htmlFor={'message'}
                      type={'message'}                      
                      parentWidth='w-full'
                      borderColor='border-selectedButtonText'               
                      labelTextSize='text-16-regular'
                      textSize='text-[20px]'
                    />
                </div>
              {/* <LoginButton /> */}
              </form>
              <div className='hidden md:block'>
                <div className='absolute top-[-174px] left-[21px]'>
                  <Image src={man} alt='man' style={{height:"585px"}}/>
                </div>
                <div className='absolute left-[75px] top-[45px]'><Image src={Star15} alt='Star15'/></div>
                <div className='absolute left-[90px] top-[-70px]'><Image src={Star16} alt='Star16'/></div>
                <div className='absolute left-[180px] top-[-160px]'><Image src={Star17} alt='Star17'/></div>
                <div className='absolute left-[440px] top-[35px]'><Image src={Star18} alt='Star18'/></div>
                <div className='absolute left-[460px] top-[-140px]'><Image src={Star19} alt='Star19'/></div>
                <div className='absolute left-[300px] top-[-200px]'><Image src={Star20} alt='Star20'/></div>
              </div>
              </div>              
              <div className='w-full h-[460px] justify-center rounded-[56px] bg-dark-900 flex flex-col items-center' >
                <div className='border-b border-amber-50 h-[360px] flex flex-col w-11/12 gap-6'>
                  <span className='text-[32px] text-white-pure'>پلتفرم دلتا</span>
                  <div className='w-full h-[180px] flex gap-14 text-white-pure text-[16px]'>
                    <h2 className='w-2/5 leading-9'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ..</h2>
                    <div className='w-1/5 flex flex-col gap-5'>
                      <h2 className='text-[20px]'>نحوه رزرو اقامتگاه</h2>
                      <div className='flex flex-col gap-3'>
                        <h2 className='flex gap-2.5'><Image src={whiteTriangle} alt='whiteTriangle'/> راهنمای رزرو اقامتگاه</h2>
                        <h2 className='text-gray-300'>شیوه پرداخت</h2>
                        <h2 className='text-gray-300'>لغو رزرو اقامتگاه</h2>
                      </div>
                    </div>
                    <div className='w-1/5 flex flex-col gap-5'>
                      <h2 className='text-[20px]'> خدمات مشتریان</h2>
                      <div className='flex flex-col gap-3 text-gray-300'>
                        <h2>پرسش های متداول مهمان</h2>                       
                        <h2>لغو رزرو اقامتگاه</h2>
                        <h2>چطور اقامتگاه ثبت کنم ؟</h2>
                        <h2>حریم شخصی کاربران</h2>
                      </div>
                    </div>
                    <div className='w-2/5 flex flex-col gap-5'>
                      <h2 className='text-[20px]'> خدمات مشتریان</h2>
                      <div className='flex flex-col gap-3 text-gray-300'>
                        <h2 className='flex gap-2.5 '><Image src={phoneGray} alt='phoneGray'/> 09229167194 - 098541612310</h2>                     
                        <h2 className='flex gap-2.5'><Image src={at} alt='at'/>Delta@gmail.com </h2>
                        <h2 className='flex gap-2.5' ><Image src={Location} alt='Location'/> گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</h2>
                      </div>
                    </div>
                  </div>
                  <div className='h-[56px] flex gap-6 w-2/11'>
                    <div className='hover:cursor-pointer w-1/4 h-full rounded-2xl bg-white-pure border border-white-pure flex items-center justify-center'><Image src={z2} alt='z2'/></div>
                    <div className='hover:cursor-pointer w-1/4 h-full rounded-2xl border border-white-pure flex items-center justify-center'><Image src={T1_1591355889268} alt='T1_1591355889268'/></div>
                    <div className='w-1/4 h-full hover:cursor-pointer rounded-2xl border border-white-pure flex items-center justify-center'><Image src={file_20191206_1550_36991} alt='file_20191206_1550_36991'/></div>
                  </div>
                </div>
                <div className='h-20 flex items-center justify-between w-11/12'>
                  <h2 className='text-[16px] text-white-pure'>تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است .</h2>
                  <div className='h-10 w-1/6 flex gap-4'>
                    <div className='hover:cursor-pointer border flex justify-center border-amber-50 h-full w-1/3 rounded-2xl bg-white-pure'><Image src={inI} alt='inI'/></div>
                    <div className='hover:cursor-pointer border border-amber-50 flex justify-center h-full w-1/3 rounded-2xl'><Image src={instagram} alt='instagram'/></div>
                    <div className='hover:cursor-pointer border border-amber-50 h-full w-1/3 flex justify-center rounded-2xl'><Image src={telegram} alt='telegram'/></div>
                    <div className='hover:cursor-pointer border border-amber-50 h-full w-1/3 rounded-2xl flex justify-center'><Image src={whatsApp} alt='whatsApp'/></div>
                  </div>
                </div>
              </div>
            </div>}
        />
        </div>
    </div>
  )
}

export default Footer