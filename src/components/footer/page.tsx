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
    <div className='h-[1310px] bg-dark-900 relative w-full flex justify-center items-center '>
        <div className='md:w-[756px] w-[290px] absolute md:top-[-10px] top-[-1px] left-[20px] md:left-[65px] flex justify-center rounded-[8px] h-[140px] '>
          <Image src={text} alt='src'/>
        </div>
        <div className='w-11/12'>            
        <CardContainer
            cavity='sharp'
            labelSize='md'
            labelContent={<div className='md:w-[330px] w-[150px] z-40 md:h-[50px] h-[40px] pl-5 md:pl-0 mt-[5px] flex gap-2 items-center md:text-[16px] text-[12px] text-white-pure justify-center bg-dark-900 rounded-[16px] '><Image src={phone} alt='phone'/> 09229167194 - 09154569872 </div>}
            mainExtraStyle="bg-primary-accent-green"
            curveColor='var(--color-primary-accent-green)'
            labelBackground='bg-primary-accent-green'
            mainContent={<div className='h-[1100px] items-center md:gap-[66px] gap-4 md:w-full w-[340px] flex flex-col' dir='rtl'>
              <div className='md:h-[145px] md:w-full h-[200px] w-[330px] md:gap-6 gap-3 flex-col flex'>                
                  <div className='flex w-[160px] h-5 md:text-[16px] text-[12px] text-selectedButtonText md:gap-4 gap-2'>همیشه کنارتیم <Image src={leftBlackTriangle} alt='leftBlackTriangle'/></div>      
                  <h2 className='md:text-[32px] text-[20px] text-selectedButtonText'>24 ساعت روز و 7 روز هفته در اختیار شماییم !</h2>        
                  <h2 className='text-selectedButtonText md:text-[20px] text-[16px] w-[300px] md:w-full'>تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا بتواند در تمام لحظات کنار شما باشد .</h2>  
              </div> 
              <div className='flex md:w-full items-center w-[330px] relative'>
              <form className='md:h-[345px] h-[290px] md:w-[620px] w-[330px] flex flex-col items-center  md:gap-[42px] gap-8' >
                <div className='flex md:w-full w-[330px] h-[59px] gap-6'>     
                  <Input
                      labelText={'نام و نام خانوادگی :'} 
                      id={'name'} 
                      InputHeight={'h-[59px]'}
                      htmlFor={'name'}
                      type={'text'}
                      placeHolder={'وارد کنید ....'}
                      parentWidth='md:w-[297px] w-[150px]'
                      borderColor='border-selectedButtonText'               
                      labelTextSize='md:text-[16px] text-[12px]'
                      textSize='md:text-[20px] text-[16px]'
                    />            
                    <Input
                      labelText={'شماره یا ایمیل :'} 
                      id={'email'} 
                      InputHeight={'h-[59px]'}
                      htmlFor={'email'}
                      type={'text'}
                      placeHolder={'وارد کنید ....'}
                      parentWidth='md:w-[297px] w-[150px]'
                      borderColor='border-selectedButtonText'               
                      labelTextSize='md:text-[16px] text-[12px]'
                      textSize='md:text-[20px] text-[16px]'
                    />                    
                </div>
                <div className='md:w-full w-[330px] h-[156px]'>
                <Input
                      labelText={'پیام شما :'} 
                      id={'message'} 
                      InputHeight={'h-[156px]'}
                      htmlFor={'message'}
                      type={'message'}                      
                      parentWidth='md:w-full w-[322px]'
                      borderColor='border-selectedButtonText'               
                      labelTextSize='md:text-[16px] text-[12px]'
                      textSize='md:text-[20px] text-[16px]'
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
              <div className='w-full md:h-[460px] h-[560px] justify-center rounded-[56px] bg-dark-900 flex flex-col items-center' >
                <div className='border-b border-amber-50 md:h-[360px] h-[550px] flex flex-col w-11/12 gap-8 md:gap-6'>
                  <span className='md:text-[32px] text-[26px] text-white-pure'>پلتفرم دلتا</span>
                  <div className='w-full md:h-[180px] h-[340px] flex md:flex-row flex-col md:gap-0 gap-2.5 text-white-pure text-[12px] md:text-[16px]'>
                    <div className=' h-[200px] flex md:w-3/5 md:gap-14 gap-5'>
                    <h2 className='w-3/5 md:leading-9 leading-6'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ..</h2>
                    <div className='md:w-1/5 w-2/5 flex flex-col md:gap-5 gap-1'>
                      <h2 className='md:text-[20px] text-[18px]'>نحوه رزرو اقامتگاه</h2>
                      <div className='flex flex-col gap-1.5 md:gap-3'>
                        <h2 className='flex gap-2.5'><Image src={whiteTriangle} alt='whiteTriangle'/> راهنمای رزرو اقامتگاه</h2>
                        <h2 className='text-gray-300'>شیوه پرداخت</h2>
                        <h2 className='text-gray-300'>لغو رزرو اقامتگاه</h2>
                      </div>
                    </div>
                    </div>
                    <div className='flex md:w-3/5 gap-14'>
                      <div className='md:w-1/5 w-full flex flex-col md:gap-5 gap-1'>
                        <h2 className='md:text-[20px] text-[18px]'> خدمات مشتریان</h2>
                        <div className='flex flex-col gap-3 text-gray-300'>
                          <h2>پرسش های متداول مهمان</h2>                       
                          <h2>لغو رزرو اقامتگاه</h2>
                          <h2>چطور اقامتگاه ثبت کنم ؟</h2>
                          <h2>حریم شخصی کاربران</h2>
                        </div>
                      </div>
                      <div className='md:w-2/5 flex flex-col md:gap-5 gap-1.5'>
                        <h2 className='md:text-[20px] text-[18px]'> راه ارتباطی دلتا</h2>
                        <div className='flex flex-col gap-3 text-gray-300'>
                          <h2 className='flex gap-2.5'><Image src={phoneGray} alt='phoneGray'/> 09229167194 - 098541612310</h2>                     
                          <h2 className='flex gap-2.5'><Image src={at} alt='at'/>Delta@gmail.com </h2>
                          <h2 className='flex gap-2.5' ><Image src={Location} alt='Location'/> گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظیمی زاده</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='md:h-[56px] h-8 flex gap-2 md:gap-6 w-1/3 md:w-2/11'>
                    <div className='hover:cursor-pointer w-1/3 h-full md:rounded-2xl rounded-[10px] bg-white-pure border border-white-pure flex items-center justify-center'><Image src={z2} alt='z2'/></div>
                    <div className='hover:cursor-pointer w-1/3 h-full md:rounded-2xl rounded-[10px] border border-white-pure flex items-center justify-center'><Image src={T1_1591355889268} alt='T1_1591355889268'/></div>
                    <div className='w-1/3 h-full md:rounded-2xl rounded-[10px] hover:cursor-pointer border border-white-pure flex items-center justify-center'><Image src={file_20191206_1550_36991} alt='file_20191206_1550_36991'/></div>
                  </div>
                </div>
                <div className='h-20 flex items-center justify-between w-11/12'>
                  <h2 className='md:text-[16px] text-[12px] text-white-pure'>تمام حقوق مادی و معنوی این اثر برای دلتا محفوظ است .</h2>
                  <div className='md:h-10 md:w-1/6 w-1/2 flex md:gap-4 gap-1.5'>
                    <div className='hover:cursor-pointer border flex justify-center border-amber-50 md:h-full h-7 w-1/3 rounded-2xl bg-white-pure'><Image src={inI} alt='inI'/></div>
                    <div className='hover:cursor-pointer border border-amber-50 flex justify-center md:h-full h-7 w-1/3 rounded-2xl'><Image src={instagram} alt='instagram'/></div>
                    <div className='hover:cursor-pointer border border-amber-50 md:h-full h-7 w-1/3 flex justify-center rounded-2xl'><Image src={telegram} alt='telegram'/></div>
                    <div className='hover:cursor-pointer border border-amber-50 md:h-full h-7 w-1/3 rounded-2xl flex justify-center'><Image src={whatsApp} alt='whatsApp'/></div>
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