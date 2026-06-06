'use client'
import {useRouter, useSearchParams } from 'next/navigation';
import useStepNavigation from '../../navigation';
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
import GetAgeCategory, { AgeCategory } from '@/src/utils/helper/ageHelper/page';
import { getHousesDetail } from '@/src/utils/sevices/api/houses/getHousesDetail';
import { useQuery } from '@tanstack/react-query';
import { steps } from '../../steps';



const AcceptInfo = ({data , bookingId}: {data:any, bookingId : number} ) => {
  const router = useRouter();
  console.log("get api :", data)
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') || 'acceptinfo'
    const { goToPrev} = useStepNavigation();
    const houseId = data.booking?.houseId
    const {data : houseDetails} =useQuery({
      queryKey : ["houseDetails", houseId],
      queryFn : () => getHousesDetail(Number(houseId)),
    })
    console.log("data in component :", data)
  if (!data) {
    return (
      <div className="p-8 text-center text-red-600 bg-red-50 rounded-lg border border-red-200">
        <h3 className="text-xl font-bold mb-2"> اطلاعات مسافر پیدا نشد!</h3>
      </div>
    );
  }
  console.log("houseid", houseId)
  console.log("housedetail:", houseDetails)
  const amount = houseDetails?.price

  const handleGoToNextWithParams = () => {
    const currentIndex = steps.findIndex(s => s.id === 'acceptinfodata');
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
    const params = new URLSearchParams({
      bookingId : bookingId.toString(),
      amount : amount.toString(),
    })
    router.push(`/processreserve/${nextStep.id}?step=${nextStep.id}&${params.toString()}`)
  }
}
  const bookingsData = data.booking || data;
  const travelers = bookingsData?.traveler_details || [];
  
  console.log(" لیست مسافران:", travelers);

  if (travelers.length === 0) {
    return (
      <div className="p-8 text-center text-yellow-600 bg-yellow-50 rounded-lg border border-yellow-200">
        <h3 className="text-xl font-bold mb-2"> هیچ مسافری یافت نشد!</h3>
      </div>
    );
  }
  const category: AgeCategory = GetAgeCategory(travelers[0]?.birthDate)


      return (
        <div className='flex flex-col mt-[130px] items-center md:gap-[36px] gap-[30px] w-[1683px] md:h-[1150px]' dir='rtl'>           
            <div className='md:w-11/12 w-[340px] flex flex-col items-center justify-center md:h-[185px] h-[730px] bg-dark-700 rounded-3xl md:gap-6 gap-3 relative'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-3 md:gap-6'>
                <div className='md:w-[1417px] w-[300px] items-center flex md:justify-between'>
                  <div className='w-[160px] h-[21px] flex gap-3 items-center md:text-[16px] text-[12px] text-white-pure'><Image src={usersAlt} alt='usersAlt'/>مشخصات مسافران </div>
                  <Button text={"ویرایش مسافران"} icon={<Image src={edit} alt='edit'/>} textStyle={{fontSize:"16px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"170px", background:"#F550"}}/>
                </div>        
              </div>
              <div className='hidden md:block absolute top-[130px] w-22/23 border border-gray-150'></div>
              
                <div className='w-22/23 flex md:flex-row flex-col items-center justify-between h-[650px] md:h-[100px] md:gap-5' >           
                {/* {travelers.map((traveler: any, index: number) => { */}                                         
                  
                <div className='flex flex-col items-center w-[74px] text-[16px] md:gap-[40px] gap-3 '>
                  <h2 className='text-gray-300'>بازه سنی</h2>
                  <h2 className='text-white-pure'> {category}</h2>
                </div>
                <div className='flex flex-col items-center w-[149px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'> نام و نام خانوادگی</h2>
                  <h2 className='text-white-pure'> {travelers[0].firstName || "نامشخص"} {travelers[0].lastName}</h2>
                </div>
                <div className='flex flex-col items-center w-[70px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'>جنسیت</h2>
                  <h2 className='text-white-pure'> {travelers[0].gender === "male" ? "مرد" : "زن"}</h2>
                </div>
                <div className='flex flex-col items-center w-[217px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'>کدملی / شماره یا پاسپورت</h2>
                  <h2 className='text-primary-accent-green'> {travelers[0].nationalId}</h2>
                </div>
                <div className='flex flex-col items-center w-[100px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'>تاریخ تولد</h2>
                  <h2 className='text-white-pure'>{travelers[0].birthDate} </h2>
                </div>
                <div className='flex items-center flex-col w-[60px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'>خدمات</h2>
                  <h2 className='text-white-pure'> -</h2>
                </div>
                <div className='flex flex-col items-center w-[100px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'>مبلغ خدمات</h2>
                  <h2 className='text-white-pure'> -</h2>
                </div>
                <div className='flex flex-col items-center w-[100px] text-[16px] md:gap-[40px] gap-3'>
                  <h2 className='text-gray-300'>قیمت</h2>
                  <h2 className='text-white-pure'> {amount} ت</h2>
                </div>
                
              </div>
            </div>
            <div className='md:w-11/12 w-[340px] flex flex-col items-center justify-center md:h-[240px] h-[550px] bg-dark-700 rounded-3xl gap-5'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='md:w-[1417px] flex'>
                  <div className='md:w-[460px] w-[300px] h-[21px] gap-3 flex items-center text-[16px] text-white-pure'>
                    <Image src={doller} alt='doller'/>                     
                    <h2 className='md:text-16px text-[12px]'>هزینه جانبی </h2> 
                  </div>
                </div>                     
              </div>
              <div className='md:w-[1410px] w-[300px] md:text-[16px] text-[12px] md:h-[150px] h-[450px] leading-[30px] text-white-pure'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص 
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
                متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص 
              </div>                       
            </div>
            <div className='md:w-11/12 w-[340px] flex flex-col items-center justify-center h-[150px] md:h-[120px] bg-dark-700 rounded-3xl gap-5'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='md:w-[1417px] flex md:justify-between'>
                  <div className='md:w-[600px] w-[300px] h-[21px] md:gap-3 gap-2 flex items-center text-[14px] md:text-[16px] text-white-pure'><Image src={megaphone} alt='megaphone'/> 
                    <div className='flex'>
                      <h2 > اطلاع رسانی سفر </h2> <h2 className='hidden md:block text-primary-accent-green'>  ( اطلاعات بلیط و اطلاع رسانی بعدی به این آدرس ارسال می شود . )</h2>
                    </div>
                  </div>
                </div>                        
              </div>
              <div className='md:w-[1410px] w-[300px] flex md:gap-4 gap-2 items-center h-[60px] md:h-[40px] '> 
                <div className='md:w-[230px] w-[150px] md:h-[15px] md:flex-row flex-col items-center md:gap-2 gap-0.5 border-l border-gray-150 flex text-[12px] md:text-[16px]'>
                <div className='hidden md:block'><Image src={star25} alt='star25'/></div>
                <h2 className='text-white-pure'>شماره تماس : </h2>
                  <h2 className='text-primary-accent-green'>{data.booking?.sharedMobile}</h2>
                </div> 
                <div className='md:w-[230px] w-[150px] md:h-[15px] md:flex-row flex-col items-center md:gap-2 gap-0.5 flex text-[12px] md:text-[16px]'>
                  <div className='hidden md:block'><Image src={star25} alt='star25'/></div>
                  <h2 className='text-white-pure'>ایمیل : </h2>
                  <h2 className='text-primary-accent-green'>{data.booking?.sharedEmail}</h2>
                </div>                  
              </div>          
            </div>
            <div className='md:w-11/12 w-[340px] flex flex-col items-center justify-center h-[180px] md:h-[166px] bg-dark-700 rounded-3xl gap-5'>
              <div className=' w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-6'>
                <div className='md:w-[1417px] flex justify-between'>
                  <div className='md:w-[460px] w-[300px] h-[21px] gap-3 flex items-center text-[12px] md:text-[16px] text-white-pure'><Image src={badgepercent} alt='badgepercent'/>                     
                      کد تخفیف 
                  </div>
                </div>        
              </div>
              <div className='md:w-[1410px] md:flex-row flex-col md:gap-6 gap-3 flex items-center h-[100px] md:h-[70px] '>                   
                <form className='h-[50px] flex gap-5 items-center'>              
                  <Input
                    dir='rtl'
                    tagBgStyle={{background :"var(--color-dark-700)"}}
                    labelText='کد تخفیف :'
                    parentWidth='md:w-[296px] w-[250px]'
                    InputHeight={'h-[50px]'}
                    labelTextSize='text-[13px]'
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
            <div className='h-[84px] md:w-11/12 w-[340px] flex items-center justify-center border-3 border-dashed rounded-4xl border-gray-300'>
                <div className='md:h-9 md:w-[1410px] md:flex-row flex-col gap-1.5 md:gap-0 h-full flex md:justify-between'>
                  <div className='md:w-[300px] h-[30px] md:gap-3 gap-2 flex justify-center items-center md:text-[24px] text-[18px] text-white-pure'>
                      <Image src={ticket} alt='ticket'/> 
                      <div className='flex gap-0.5'>
                        <h2 > قیمت بلیط : </h2> <h2 className='text-primary-accent-green'> {amount}ت </h2>
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
                      onClick={handleGoToNextWithParams}
                    />  
                  </div>                                                      
                </div>
            </div>
        </div>
      )
}

export default AcceptInfo