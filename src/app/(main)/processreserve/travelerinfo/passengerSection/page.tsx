import Button from '@/src/components/common/button/page'
import Input from '@/src/components/common/input/Input'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import arrowUp from "@/src/assets/icons/arrowUp.svg"
import arrowDown from "@/src/assets/icons/arrowDown.svg"
import useradd from "@/src/assets/icons/useradd.svg"
import usersAlt from "@/src/assets/icons/usersAlt.svg"
import timepast from "@/src/assets/icons/timepast.svg"
import { IPassengerInfo } from '@/src/core/types/IPassengerInfo'
import toast from 'react-hot-toast'
import SimpleDropdown from '@/src/components/common/dropDown'

const STORAGE_KEY = "past_passengers";

const PassengerSection = ({onPassengersChange} : {onPassengersChange : (data : IPassengerInfo[]) => void}) => {
    const [passengers, setPassengers ] = useState([
        { firstName: '', lastName: '', birthDay: '', nationalId : '', gender : ''}
    ]);

    const [savedPassengers, setSavedPassengers] = useState<IPassengerInfo[]>([]);
    const [showModal, setShowModal] = useState(false)

    const SelectGender = [
        {value : "male", label : "مرد"},
        {value : "female", label : "زن"}
    ]
    useEffect (() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved){
            try {
                setSavedPassengers(JSON.parse(saved));               
            } catch (e) {
                console.error("Error loading passengers", e);
            }
        }
    }, []);

    useEffect(() => {
        onPassengersChange(passengers);
    },[passengers,onPassengersChange])

    const addPassengers = () => {
        setPassengers([...passengers, {firstName:"", lastName:"", birthDay:"", gender:"" , nationalId:""}])
    }

    const handleChange = (index : number, field: keyof IPassengerInfo, value: string) => {
        const updated = [...passengers];
        updated[index][field] = value;
        setPassengers(updated)
    }

    const openPassengerList = () => {
        if (savedPassengers.length === 0){
            toast("هنوز مسافری ذخیره نشده است.")
            return
        }
        setShowModal(true)
    }

    const loadSelectedPassenger = (selected : IPassengerInfo) => {
        const isFormEmpty = passengers.length === 1 && passengers[0].firstName === "";
        if (isFormEmpty) {
            setPassengers([selected])
        } else {
            setPassengers([...passengers, selected])
        }
        setShowModal(false)
    }
    const [isOpen, setIsOpen] = useState(true);
    const toggleShow = async () => {
        setIsOpen ((prev) => (!prev));
    };
  return (
    <>
        <div className='w-22/23 h-[44px] rounded-2xl bg-gray-250 flex justify-center items-center gap-3 md:gap-6'>
            <div className='md:w-[1417px] items-center flex md:justify-between'>
                <div className='md:w-[160px] w-[140px] h-[21px] flex md:gap-3 gap-2 items-center md:text-[16px] text-[12px] text-white-pure'><Image src={usersAlt} alt='usersAlt'/>مشخصات مسافران </div>
                <Button text={"انتخاب مسافران سابق"} 
                    icon={<Image src={timepast} alt='timepast'/>} 
                    textStyle={{fontSize:"15px", color:"#8CFF45"}} buttonStyle={{height:"20px", width:"170px", background:"#F550"}}
                    onClick={openPassengerList}
                />
            </div>        
        </div>
        <div className='w-22/23 flex flex-col items-center p-2 border-b-3 border-gray-300 border-dashed'>
            {passengers.map((p,index) => (
                <div className='flex md:gap-5 w-full flex-col justify-end items-center relative ' key={index}>
                    <h3 className='text-gray-300'>مسافر شماره {index + 1}</h3>
                {/* <Button buttonStyle={{width :"16px", height:"10px", backgroundColor:"transparent", position:"absolute", left:"35px", top:"0px"}} onClick={toggleShow} icon= {isOpen ? <Image src={arrowUp} alt='arrowUp'/> : <Image src={arrowDown} alt='arrowDown'/>}/>                             */}
                    <form className='md:w-[1410px] md:h-[60px] h-[350px] flex md:flex-row flex-col justify-between items-center'>              
                    <Input
                        labelText='نام شما :'
                        parentWidth='w-[250px]'
                        InputHeight={'h-[50px]'}
                        labelTextSize='text-[13px]'
                        textSize='md:text-[16px] text-[12px]'
                        borderColor='border-gray-300'
                        textColor='text-gray-300'
                        labelTextColor='text-gray-300'
                        id={'name'}
                        placeHolder='وارد کنید...'
                        type='text'
                        htmlFor={'name'}
                        tagBgStyle={{background :"var(--color-dark-700)"}}
                        value={p.firstName}
                        onChange={(e) => handleChange(index, "firstName" , e.target.value)}
                    />
                    <Input
                        tagBgStyle={{background :"var(--color-dark-700)"}}
                        labelText='نام خانوادگی :'
                        parentWidth='w-[250px]'
                        InputHeight={'h-[50px]'}
                        labelTextSize='text-[13px]'
                        textSize='md:text-[16px] text-[12px]'
                        borderColor='border-gray-300'
                        textColor='text-gray-300'
                        labelTextColor='text-gray-300'
                        id={'family'}
                        placeHolder='وارد کنید ...'
                        type='text'
                        htmlFor={'family'}
                        value={p.lastName}
                        onChange={(e) => handleChange(index, "lastName" , e.target.value)}
                    />
                    <SimpleDropdown
                        options={SelectGender}
                        labelText=' :جنسیت'
                        triggerClassName='w-[250px] md:text-[16px] text-[12px] h-[50px] text-gray-300 border-gray-300'
                        placeholder='وارد کنید'
                        paramKey='gender'
                        tagBg='bg-dark-700'
                    />
                    {/* <Input
                        tagBgStyle={{background :"var(--color-dark-700)"}}
                        labelText=''
                        parentWidth=''
                        InputHeight={''}
                        labelTextSize='text-[13px]'
                        textSize=''
                        borderColor=''
                        textColor=''
                        labelTextColor='text-gray-300'
                        id={'national'}
                        placeHolder='وارد کنید ...'
                        type='text'
                        htmlFor={'national'}
                        value={p.gender}
                    /> */}
                    <Input
                        tagBgStyle={{background :"var(--color-dark-700)"}}
                        labelText=' کد ملی:'
                        parentWidth='w-[250px]'
                        InputHeight={'h-[50px]'}
                        labelTextSize='text-[13px]'
                        textSize='md:text-[16px] text-[12px]'
                        borderColor='border-gray-300'
                        textColor='text-gray-300'
                        labelTextColor='text-gray-300'
                        id={'national'}
                        placeHolder='وارد کنید ...'
                        type='text'
                        htmlFor={'national'}
                        value={p.nationalId}
                        onChange={(e) => handleChange(index, "nationalId" , e.target.value)}
                    />
                    <Input
                        tagBgStyle={{background :"var(--color-dark-700)"}}
                        labelText='تاریخ تولد :'
                        parentWidth='w-[250px]'
                        InputHeight={'h-[50px]'}
                        labelTextSize='text-[13px]'
                        textSize='md:text-[16px] text-[12px]'
                        borderColor='border-gray-300'
                        textColor='text-gray-300'
                        labelTextColor='text-gray-300'
                        id={'national'}
                        placeHolder='وارد کنید ...'
                        type='text'
                        htmlFor={'national'}
                        onChange={(e) => handleChange(index, "birthDay" , e.target.value)}
                        value={p.birthDay}
                    />
                    </form>
                
                </div>
            ))}
            
        </div>
        <div className='md:w-[1410px] flex flex-col items-end justify-center h-[50px]'> 
        <Button text={"افزودن مسافر"} 
            icon={<Image src={useradd} alt='useradd'/>} 
            textStyle={{color: "#8CFF45", fontSize:"16px"}} buttonStyle={{border:"2px solid #8CFF45", borderRadius:"12px", background:"transparent", height:"36px", width:"142px"}}
            onClick={addPassengers}
        />
        </div>
        {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-dark-700 rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
                <h3 className="text-xl font-bold text-white-pure mb-4">انتخاب مسافر از لیست ذخیره شده</h3>
                <div className="space-y-3">
                    {savedPassengers.map((p, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => loadSelectedPassenger(p)} 
                        className="bg-dark-600 p-3 rounded-lg cursor-pointer hover:bg-dark-500 transition-colors flex justify-between items-center border border-gray-600"
                    >
                        <div>
                        <p className="text-white-pure font-bold">{p.firstName} {p.lastName}</p>
                        <p className="text-gray-400 text-sm">کد ملی: {p.nationalId}</p>
                        </div>
                        <span className="text-green-400 text-sm">انتخاب</span>
                    </div>
                    ))}
                </div>
                <button onClick={() => setShowModal(false)} className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-500">
                    بستن
                </button>
                </div>
            </div>
        )}
    </>
  )
}

export default PassengerSection