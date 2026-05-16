"use client"

import { useSearchParams } from "next/navigation";
import HouseItemsComponent from "../reserveHouse/houseItemsComponent";
import CommentSection from "../reserveHouse/comments/commentSection";
import { IComment } from "@/src/core/types/IComment";

interface MortgageTabContentProps {
  comments:IComment[];
  id?: number;
  caption?:string;
  rooms?: number | null;
  parking?: number | null;
  bathrooms?: number | null;
  yard_type?: string | null;
  address?: string | null;
  capacity?: number | null;
}

const MortgageTabContent = ({address,bathrooms,caption,parking,rooms,yard_type,capacity,comments,id}:MortgageTabContentProps) => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "about";
  
  const renderContent = () => {
    switch(activeTab) {
        case "about":
            return <p className="text-right sm:text-[16px] text-[10px] text-gray-300 leading-8">{caption}</p>
        case "facilities":
            return <HouseItemsComponent
            bathrooms={bathrooms}
            capacity={capacity}
            parking={parking}
            rooms={rooms}
            yard_type={yard_type}
          />
        case "address":
            return (
                <div className="w-full flex items-start justify-between gap-5">  
                    <div className="flex-center justify-end flex-1 sm:text-[16px] text-[10px] text-gray-300 leading-8">{address}</div>
                    <p className="h-[324px] flex-center flex-1 rounded-[48px] bg-dark-800">TODO:IMPLEMENTING MAP</p>
                </div>
            )
        case "comment":
            return <CommentSection houseId={id} comments={comments}/>
    }
  }
  
  return (
    <div className="flex-center justify-end">
      {renderContent()}
    </div>
  )
}

export default MortgageTabContent
