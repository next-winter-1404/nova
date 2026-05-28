"use client"
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import Image from "next/image";
import Link from "next/link";
import blueTriangle from "@/src/assets/icons/blueTringle.svg"
import { steps } from "./steps";
import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Info from "@/src/assets/icons/Info.svg"
import Location from "@/src/assets/icons/Location.svg"
import Photos from "@/src/assets/icons/photos.svg"
import Facility from "@/src/assets/icons/facility.svg"
import Stroke from "@/src/assets/icons/Stroke.svg"

interface IProps  {
    children : ReactNode;
}
const stepIcons =[
    Info,
    Location,
    Facility,
    Photos,
    Stroke
];

 const Layout =   ({children} : IProps) =>  {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') ||"firstinfo";

    const currentIndex = steps.findIndex(s => s.id === currentStep)
    return(
        <div>
        <DashboardContentContainer
            title=" ساخت آگهی ملک جدید"
            twTopContent="w-1/"
            topSectionContent={
            <div className="flex gap-4 w-1/2">
                <Link href={"/dashboard/seller/estate-management"}>
                    <button className='w-[153px] flex items-center justify-center gap-2 text-[#0059FF] text-[16px]'>
                        لیست املاک من 
                        <Image src={blueTriangle} alt='blueTriangle'/>
                    </button>
                </Link>
            </div>
            }
        >
         <div className='flex flex-col w-full justify-center items-center  ' dir='rtl'>
            <div className='md:w-11/12 w-[340px] h-[68px] rounded-3xl flex items-center justify-center bg-dark-700'>
                <div className='w-22/23 h-[45px] flex items-center justify-between relative'>  
                    {steps.map((step, index) => {
                        const isCompleted = currentIndex > index ;
                        const isActive = currentIndex === index;
                        return(
                            <div key={step.id} className='flex items-center gap-1.5 md:gap-4'>
                                <div className ={`md:w-9 w-6 md:h-9 h-6 rounded-full bg-primary-accent-green flex items-center justify-center ${
                                    isCompleted ? 'bg-primary-accent-green' : isActive ? 'border border-white-pure bg-transparent' : 'border border-gray-300 bg-transparent'
                                    }`}
                                    >
                                    <Image src={stepIcons[index]} alt={step.label} width={16} height={16}/>
                                </div>
                                <span className ={`text-[12px] md:text-[20px] ${
                                    isCompleted ? 'text-primary-accent-green' : isActive ? 'text-white-pure' : 'text-gray-300'
                                }`}>
                                    {step.label}
                                </span>
                                {index < steps.length -1 && (
                                    <div className={`hidden md:block border-b-3 w-[112px] border-dashed ${
                                        isCompleted ? 'border-primary-accent-green' : isActive ? 'border-white-pure' : 'border-gray-300'
                                    }`}>
                                    </div>
                                )}
                            </div>
                        );
                    })}            
                </div>            
            </div>
            <main>
                {children}
            </main>
        </div>   
        </DashboardContentContainer> 
        </div>
    )
}

export default Layout