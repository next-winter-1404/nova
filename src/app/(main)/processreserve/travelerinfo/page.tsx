'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import whiteStar from "@/src/assets/icons/whiteStar.svg"
import Location from "@/src/assets/icons/Location.svg"
import CalendarTime from "@/src/assets/icons/calendarclock.svg"
import greenhotel from "@/src/assets/icons/greenhotel.svg"
import timepast from "@/src/assets/icons/timepast.svg"
import users2 from "@/src/assets/icons/users2.svg"
import checkCircle from "@/src/assets/icons/checkCircle.svg"
import ticket from "@/src/assets/icons/ticket.svg"
import arrowLeftGreen from "@/src/assets/icons/arrowLeftGreen.svg"
import imagePlaceHolder from "@/src/assets/images/imagePlaceHolder (2).png"
import Image from 'next/image'
import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import useStepNavigation from '../navigation'
import PassengerSection from './passengerSection/page'
import toast from 'react-hot-toast'
import { postTravelerInfo } from '@/src/utils/sevices/api/processReserve/postTravelerInfo'
import { getHousesDetail } from '@/src/utils/sevices/api/houses/getHousesDetail'
import { useQuery } from '@tanstack/react-query'
import { IPassengerInfo } from '@/src/core/types/IPassengerInfo'
import { computingDiscount } from '@/src/utils/helper/computingDiscount'
import OldPriceComponent from '@/src/components/common/productCard/OldPrice'


const Traveler = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const checkInDate = searchParams.get("checkInDate")
    const checkOutDate = searchParams.get("checkOutDate")
    const totalPrice = searchParams.get("totalPrice")
    const houseId = searchParams.get("houseId")
    const currentStep = searchParams.get('step') || 'travelerinfo'
    const [passengers, setPassengers] = useState<IPassengerInfo[]>([]);
    const [sharedEmail, setSharedEmail] = useState('')
    const [sharedMobile, setSharedMobile] = useState('')
    const [bookingId, setBookingId] = useState<number | null>(null);
    const handlePassengerChange = useCallback(
      (newPassengers: IPassengerInfo[]) => {
        setPassengers(newPassengers);
      },
      []
    );
    const {goToNext} = useStepNavigation();
    console.log("houseId: ", houseId)
    const reservedDates = [checkInDate, checkOutDate]
    const handleSubmit = async () => {
      if (passengers.length === 0) {
        toast.error("لطفا حداقل یک مسافر اضافه کنید")
        return;
      }

      passengers.forEach((p, index) => {
        console.log(`Passenger ${index}`, {
          firstName: p.firstName,
          lastName: p.lastName,
          nationalId: p.nationalId,
          nationalIdLength: p.nationalId?.length,
          gender: p.gender,
          birthDate: p.birthDate,
        });
      });
    console.log("Passengers:", passengers);

    const hasInvalidPassengers = passengers.some((p, index) => {
      console.log(`Passenger ${index}`, {
        firstName: p.firstName,
        lastName: p.lastName,
        nationalId: p.nationalId,
        gender: p.gender,
        birthDate: p.birthDate,
      });

    const invalid =
      !p.firstName?.trim() ||
      !p.lastName?.trim() ||
      !p.nationalId?.trim() ||
      !p.gender ||
      !p.birthDate;

    console.log("invalid =", invalid);
    return invalid;
});
      
      if (hasInvalidPassengers) {
        toast.error("لطفا مشخصات مسافر را کامل وارد کنید")
        return;
      }
      
      if (!sharedMobile?.trim()) {
        toast.error("شماره موبایل را وارد کنید")
        return;
      }
      
      if (!sharedEmail?.trim()) {
        toast.error("ایمیل را وارد کنید")
        return;
      }
      try{
        const payload = {
          houseId : houseId,
          reservedDates : reservedDates,
          traveler_details : passengers.map(p => ({
            firstName : p.firstName?.trim(),
            lastName : p.lastName?.trim(),
            nationalId : p.nationalId?.trim(),
            gender : p.gender,
            birthDate : p.birthDate
          })),
          sharedEmail : sharedEmail?.trim(),
          sharedMobile :sharedMobile?.trim()
        };
        const response = await postTravelerInfo(payload);
        const bookingId = response.data.id;
        router.push(
          `/processreserve/acceptinfodata?bookingId=${bookingId}&step=acceptinfodata`
        );
        toast.success("اطلاعات با موفقیت ثبت شد")
      }
      catch (error) {
        console.error("FULL ERROR:", error);
      }
      // goToNext('travel')
  }

  const handleNavigate = () => {
    router.push("/reserve-house")
  }

  const {data : housedetail} =useQuery({
    queryKey : ["houseDetail", houseId],
    queryFn : () => getHousesDetail(Number(houseId)),
    enabled: !!houseId,
  })
    const discounted_price = housedetail?.discounted_price
    const price = housedetail?.price
    const discountPercent = computingDiscount({discounted_price, price});
    const roundDiscountPercent = Math.round(discountPercent)

  return (
    <div className='flex mt-[20px] flex-col items-center md:gap-[36px] gap-[26px] w-[1683px] md:h-[950px] h-[1900px]' dir='rtl'>
        <div className='flex items-center justify-center md:w-11/12 w-[340px] md:h-[142px] h-[400px] bg-dark-700 rounded-3xl '>
          <div className='w-22/23 flex md:flex-row flex-col'>
            <div className ='md:w-[590px] md:h-[110px] h-[120px] items-center md:border-l md:border-gray-200 flex gap-2 md:gap-4'>
              <div className='md:w-[160px] md:h-full h-[70px] w-[100px] bg-gray-250 rounded-[20px]'>{housedetail?.photos || <Image src={imagePlaceHolder} alt='imagePlaceHolder' className='w-full h-full rounded-2xl'/>}</div>
              <div className='w-[385px] md:gap-4 gap-2 flex flex-col'>
                <div className='md:w-[83px] w-[73px] items-center gap-1 justify-center flex md:h-[29px] h-[20px] text-white-pure md:text-[13px] text-[11px] bg-blue-purple-500 rounded-[8px]'><Image src={whiteStar} alt='whiteStar'/> {housedetail?.rate} ستاره</div>
                <h2 className='md:text-2xl text-[20px] text-white-pure'> {housedetail?.title || "عنوانی وجو ندارد"}</h2>
                <div className='flex md:text-[16px] text-[12px] gap-1 md:gap-3'>
                  <h2 className='text-gray-300 flex md:gap-2 gap-0.5'><Image src={Location} alt='Location'/> ادرس: </h2>
                  <h2 className='md:w-[370px] w-[170px] text-white-pure'> {housedetail?.address || "ادرس وجود ندارد"}</h2>
                </div>
              </div>
            </div>
            <div className ='md:w-[450px] flex flex-col gap-4 items-center justify-center h-[110px] md:border-l md:border-gray-200'>
              <div className='h-[21px] flex md:text-[18px] text-[12px] gap-0.5 md:gap-4 items-center'>
                <h2 className='flex gap-3 text-gray-300'><Image src={CalendarTime} alt='CalendarTime'/> تاریخ ورود :</h2>
                <h2 className='text-primary-accent-green'> {checkInDate}</h2>
              </div>
              <div className ='h-[21px] flex md:text-[18px] text-[12px] gap-0.5 md:gap-4 items-center'>
                <h2 className='flex gap-3 text-gray-300 '><Image src={CalendarTime} alt='CalendarTime'/> تاریخ خروج :</h2>
                <h2 className='text-primary-accent-green'> {checkOutDate}</h2>
              </div>
            </div>
            <div className ='md:w-[430px] h-[110px] flex flex-col items-end justify-center'>
              <div className='md:w-[345px] h-[83px] flex-col items-end flex gap-4'>
                <div className='w-full flex h-[30px] items-center justify-end gap-3' dir='ltr'>
                  <h2 className='md:text-2xl text-[16px] text-primary-accent-green' dir='rtl'> {housedetail?.discounted_price} ت</h2>
                  <Button
                      text={`${roundDiscountPercent} %`} 
                      buttonStyle={{ height: 25, width: 40, borderRadius: 8 }}
                  />
                  <OldPriceComponent oldPrice={price || ""} /> 
                </div>
                <Button text={"تغییر هتل"} 
                  icon={<Image src={greenhotel} alt='greenhotel'/>} width='w-[120px]' height='h-[36px]' textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent"}}
                  onClick={ handleNavigate}                  
                />
              </div>
            </div>
          </div>
        </div>
        <div className='md:w-11/12 w-[340px] flex flex-col items-center justify-center p-3 bg-dark-700 rounded-3xl gap-5'>
          <PassengerSection onPassengersChange={handlePassengerChange}/>
        </div>
        <div className='md:w-11/12 w-[340px] flex flex-col items-center justify-center md:h-[166px] h-[300px] bg-dark-700 rounded-3xl gap-5'>
          <div className='w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-4 md:gap-6'>
            <div className='md:w-[1417px] flex justify-between'>
              <div className='md:w-[460px] w-[150px] h-[21px] gap-3 flex items-center md:text-[16px] text-[12px] text-white-pure'><Image src={users2} alt='users2'/> 
                <div className='flex'>
                  <h2 >ارسال بلیط به دیگری</h2> <h2 className='hidden md:block text-primary-accent-green'>( ارسال بلیط به ایمیل و شماره همراه دیگر )</h2>
                </div>
              </div>
              <Button text={"انتخاب مسافران سابق"} icon={<Image src={timepast} alt='timepast'/>} textStyle={{fontSize:"16px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"170px", background:"#F550"}}/>
            </div>        
          </div>
          <div className='md:w-[1410px] md:justify-between flex md:flex-row flex-col items-center h-[200px] md:h-[70px] '>                   
            <form className='md:h-[50px] h-[180px] flex md:flex-row flex-col gap-5 items-center' >               
              <Input
                tagBgStyle={{background :"var(--color-dark-700)"}}
                dir='rtl'
                labelText='شماره تلفن :'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='text-[16px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'name'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'name'}
                value={sharedMobile}
                onChange={(e) => setSharedMobile(e.target.value)}
              />
              <Input
                dir='rtl'
                tagBgStyle={{background :"var(--color-dark-700)"}}
                labelText='ایمیل :'
                parentWidth='w-[250px]'
                InputHeight={'h-[50px]'}
                labelTextSize='text-[16px]'
                textSize='md:text-[16px] text-[12px]'
                borderColor='border-gray-300'
                textColor='text-gray-300'
                labelTextColor='text-gray-300'
                id={'family'}
                placeHolder='وارد کنید ...'
                type='text'
                htmlFor={'family'}
                value={sharedEmail}
                onChange={(e) => setSharedEmail(e.target.value)}
              />
            </form>            
            {/* <Button text={"ثبت اطلاعات"} 
              icon={<Image src={checkCircle} alt='checkCircle'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"142px"}}
              onClick={handleSubmit}
            />           */}
          </div>          
        </div>
        <div className='md:h-[84px] h-[74px] w-[340px] md:w-11/12 flex items-center justify-center border-3 border-dashed rounded-4xl border-gray-300'>
            <div className='h-9 md:w-[1410px] flex md:justify-between gap-6 md:gap-0' dir='ltr'>
            <Button text={"تایید و ادامه فرایند"} icon={<Image src={arrowLeftGreen} alt='arrowLeftGreen'/>} textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"165px"}}
              onClick={handleSubmit}
              // disabled={!bookingId}
              type='button'
            />          
              <div className='md:w-[300px] h-[30px] md:gap-3 gap-2 flex items-center md:text-[24px] text-[18px] text-white-pure' dir='rtl'>
                <Image src={ticket} alt='ticket'/> 
                <div className='flex md:flex-row flex-col md:gap-0.5'>
                  <h2 > قیمت بلیط :</h2> <h2 className='text-primary-accent-green'> {totalPrice} </h2>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}


export default Traveler