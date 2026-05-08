'use client'
import {useSearchParams } from 'next/navigation';
import UseStepNavigation from '../navigation';
import Button from '@/src/components/common/button/page';
import Image from 'next/image';
import Input from '@/src/components/common/input/Input';
import usersAlt from "@/src/assets/icons/usersAlt.svg"
import checkCircle from "@/src/assets/icons/checkCircle.svg"
import ticket from "@/src/assets/icons/ticket.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import edit from "@/src/assets/icons/edit.svg"
import doller from "@/src/assets/icons/doller.svg"
import megaphone from "@/src/assets/icons/megaphone.svg"
import star25 from "@/src/assets/icons/Star25.svg"
import badgepercent from "@/src/assets/icons/badgepercent.svg" 
import rightArrow from "@/src/assets/icons/rightArrow.svg"


const AcceptInfo = () => {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') || 'acceptinfo'
    const {goToNext, goToPrev} = UseStepNavigation();
        
      return (
        <div className='flex flex-col items-center gap-[36px] w-[1683px] h-[1150px]' dir='rtl'>           
            <div className='w-11/12 flex flex-col items-center justify-center h-[185px] bg-dark-700 rounded-3xl gap-6 relative'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='w-[1417px] items-center flex justify-between'>
                  <div className='w-[160px] h-[21px] flex gap-3 items-center text-[16px] text-white-pure'><Image src={usersAlt} alt='usersAlt'/>مشخصات مسافران </div>
                  <Button text={"ویرایش مسافران"} icon={<Image src={edit} alt='edit'/>} textStyle={{fontSize:"16px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"170px", background:"#F550"}}/>
                </div>        
              </div>
              <div className='absolute top-[130px] w-22/23 border border-gray-150'></div>
              <div className='w-22/23 flex items-center justify-between h-[100px] gap-5'>
                <div className='flex flex-col items-center w-[74px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>بازه سنی</h2>
                  <h2 className='text-white-pure'> بزرگسال</h2>
                </div>
                <div className='flex flex-col items-center w-[149px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'> نام و نام خانوادگی</h2>
                  <h2 className='text-white-pure'> محمد رضا ساداتی</h2>
                </div>
                <div className='flex flex-col items-center w-[70px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>جنسیت</h2>
                  <h2 className='text-white-pure'> مرد</h2>
                </div>
                <div className='flex flex-col items-center w-[217px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>کدملی / شماره یا پاسپورت</h2>
                  <h2 className='text-primary-accent-green'> 09229167194</h2>
                </div>
                <div className='flex flex-col items-center w-[100px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>تاریخ تولد</h2>
                  <h2 className='text-white-pure'> 1350 / 5 / 12</h2>
                </div>
                <div className='flex items-center flex-col w-[60px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>خدمات</h2>
                  <h2 className='text-white-pure'> -</h2>
                </div>
                <div className='flex flex-col items-center w-[100px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>مبلغ خدمات</h2>
                  <h2 className='text-white-pure'> -</h2>
                </div>
                <div className='flex flex-col items-center w-[100px] text-[16px] gap-[40px]'>
                  <h2 className='text-gray-300'>قیمت</h2>
                  <h2 className='text-white-pure'> 1.520.000 ت</h2>
                </div>
                {/* <div className='h-[25px] w-full flex justify-between text-[20px] text-gray-300 items-center'>
                  <h2 className='w-[74px]'>بازه سنی</h2>
                  <h2 className='w-[149px]'> نام و نام خانوادگی</h2>
                  <h2 className='w-[62px]'> جنسیت</h2>
                  <h2 className='w-[217px]'> کدملی / شماره یا پاسپورت </h2>
                  <h2 className='w-[80px]'> تاریخ تولد</h2>
                  <h2 className='w-[58px]'> خدمات</h2>
                  <h2 className='w-[100px]'> مبلغ خدمات</h2>
                  <h2 className='w-[60px]'> قیمت </h2>
                </div> */}                
                {/* <div className='h-[25px] w-full flex justify-between text-[20px] text-white-pure items-center'>
                  <h2 className='w-[74px]'> بزرگسال</h2>
                  <h2 className='w-[149px]'> محمد رضا ساداتی </h2>
                  <h2 className='w-[62px]'> مرد</h2>
                  <h2 className='w-[217px]'> 09229167194 </h2>
                  <h2 className='w-[80px]'> 1350 / 5 / 12 </h2>
                  <h2 className='w-[58px]'> -</h2>
                  <h2 className='w-[100px]'> -</h2>
                  <h2 className='w-[110px]'> 1.520.000 ت </h2>
                </div> */}
              </div>
            </div>
            <div className='w-11/12 flex flex-col items-center justify-center h-[240px] bg-dark-700 rounded-3xl gap-5'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='w-[1417px] flex justify-between'>
                  <div className='w-[460px] h-[21px] gap-3 flex items-center text-[16px] text-white-pure'><Image src={doller} alt='doller'/>                     
                    <h2 className='text-16px'>هزینه جانبی </h2> 
                  </div>
                </div>                     
              </div>
              <div className='w-[1410px] text-[16px] h-[150px] leading-[30px] text-white-pure'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص 
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص 
              </div>                       
            </div>
            <div className='w-11/12 flex flex-col items-center justify-center h-[120px] bg-dark-700 rounded-3xl gap-5'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='w-[1417px] flex justify-between'>
                  <div className='w-[600px] h-[21px] gap-3 flex items-center text-[16px] text-white-pure'><Image src={megaphone} alt='megaphone'/> 
                    <div className='flex'>
                      <h2 > اطلاع رسانی سفر </h2> <h2 className='text-primary-accent-green'>  ( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود . )</h2>
                    </div>
                  </div>
                </div>                        
              </div>
              <div className='w-[1410px] flex gap-4 items-center h-[40px] '> 
                <div className='w-[230px] h-[15px] items-center gap-2 border-l border-gray-150 flex text-[16px]'>
                  <Image src={star25} alt='star25'/>
                  <h2 className='text-white-pure'>شماره تماس : </h2>
                  <h2 className='text-primary-accent-green'>09229167194</h2>
                </div> 
                <div className='w-[230px] h-[15px] items-center gap-2 flex text-[16px]'>
                  <Image src={star25} alt='star25'/>
                  <h2 className='text-white-pure'>ایمیل : </h2>
                  <h2 className='text-primary-accent-green'>Example@gmail.com</h2>
                </div>                  
              </div>          
            </div>
            <div className='w-11/12 flex flex-col items-center justify-center h-[166px] bg-dark-700 rounded-3xl gap-5'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='w-[1417px] flex justify-between'>
                  <div className='w-[460px] h-[21px] gap-3 flex items-center text-[16px] text-white-pure'><Image src={badgepercent} alt='badgepercent'/>                     
                      کد تخفیف 
                  </div>
                </div>        
              </div>
              <div className='w-[1410px] gap-6 flex items-center h-[70px] '>                   
                <form className='h-[50px] flex gap-5 items-center'>              
                  <Input
                    labelText='کد تخفیف :'
                    parentWidth='w-[296px]'
                    InputHeight={'h-[50px]'}
                    labelTextSize='md:text-[13px] text-[9px]'
                    textSize='md:text-[16px] text-[12px]'
                    borderColor='border-gray-300'
                    textColor='text-gray-300'
                    labelTextColor='text-gray-300'
                    id={'offer'}
                    placeHolder='وارد کنید ...'
                    type='text'
                    htmlFor={'offer'}
                  />                          
                </form>            
                <Button text={" اعمال کد تخفیف"} icon={<Image src={checkCircle} alt='checkCircle'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"156px"}}/>          
              </div>          
            </div>
            <div className='h-[84px] w-11/12 flex items-center justify-center border-3 border-dashed rounded-4xl border-gray-300'>
                <div className='h-9 w-[1410px] flex justify-between'>
                  <div className='w-[300px] h-[30px] gap-3 flex items-center text-[24px] text-white-pure'>
                      <Image src={ticket} alt='ticket'/> 
                      <div className='flex gap-0.5'>
                        <h2 > قیمت بلیط : </h2> <h2 className='text-primary-accent-green'> 1.500.000ت </h2>
                      </div>
                  </div>
                  <div className='flex gap-4'>
                    <Button 
                      text={"مرحله قبل"} icon={<Image src={rightArrow} alt='rightArrow' style={{marginBottom:"-2px", width:"8px"}}/>}
                      textStyle={{color: "#FFFFFF", fontSize:"16px"}} buttonStyle={{border:"2px solid #FFFFFF", borderRadius:"12px", background:"transparent", height:"36px", width:"136px"}}
                      onClick={() => goToPrev(currentStep)}
                    /> 
                    <Button 
                      text={"پرداخت آنلاین"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen' style={{marginBottom:"-2px", width:"8px"}}/>} 
                      textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"136px", direction:"ltr"}}
                      onClick={() => goToNext(currentStep)}
                    />  
                  </div>                                                      
                </div>
            </div>
        </div>
      )
}

export default AcceptInfo