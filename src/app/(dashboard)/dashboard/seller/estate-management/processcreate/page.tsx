import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import blueTriangle from "@/src/assets/icons/blueTringle.svg"



export default function processCreate () {
    // ;
    return(
        <div className='w-[1238px]'>
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
            <div className="flex flex-col gap-9 items-end">
            
            </div>
            
        </DashboardContentContainer> 
        </div>
    )
}

