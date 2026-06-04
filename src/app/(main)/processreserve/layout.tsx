"use client"
import Image from "next/image";
import { steps } from "./steps";
import { ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Hotel from "@/src/assets/icons/hotel.svg"
import User from "@/src/assets/icons/usersAlt.svg"
import Accept from "@/src/assets/icons/accept.svg"
import Payment from "@/src/assets/icons/payment.svg"
import Ticket from "@/src/assets/icons/ticeitbill.svg"

interface IProps  {
    children : ReactNode;
}
const stepIcons =[
    User,
    Accept,
    Payment,
    Ticket
];

 const Layout =   ({children} : IProps) =>  {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step') ||"travelerinfo";

    const currentIndex = steps.findIndex(s => s.id === currentStep)
    return(
            <div>
            <div className='flex flex-col w-full justify-center items-center mt-[180px] ' dir='rtl'>
                <div className='md:w-11/12 w-[340px] h-[68px] rounded-3xl flex items-center justify-center bg-dark-700'>
                    <div className='w-20/23 h-[45px] flex items-center justify-between relative'> 
                        <div className='flex items-center gap-1.5 md:gap-4'>
                            <div className ='md:w-9 w-6 md:h-9 h-6 rounded-full bg-primary-accent-green flex items-center justify-center'>
                                <Image src={Hotel} alt="Hotel"/>
                            </div>
                            <span className ='text-[12px] text-primary-accent-green md:text-[20px] '>
                                انتخاب هتل
                            </span>
                            <div className='hidden border-primary-accent-green md:block border-b-3 w-[112px] border-dashed'>
                            </div>
                        </div>
                        {steps.map((step, index) => {
                            const isCompleted = currentIndex > index ;
                            const isActive = currentIndex === index;
                            return(
                                <div key={step.id} className='flex items-center gap-1.5 md:gap-4'>
                                    <div className ={`md:w-9 w-6 md:h-9 h-6 rounded-full bg-primary-accent-green flex items-center justify-center ${
                                        isCompleted ? 'bg-primary-accent-green' : isActive ? 'border border-white-pure bg-transparent' : 'border border-gray-300 bg-transparent'
                                        }`}
                                        >
                                        <Image src={stepIcons[index]} alt={step.label} />
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
            </div>
    )
}

export default Layout