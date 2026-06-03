import { getBookingsById } from '@/src/utils/sevices/api/processReserve/getTravelerInfo'
import React from 'react'
import AcceptInfo from './acceptinfo/page';


const AcceptInfoData = async ({
    searchParams,
  }: {
    searchParams: Promise<{ bookingId?: string }>;
  }) => {
    const params = await searchParams;
  
    const bookingId = Number(params.bookingId);
const data = await getBookingsById(bookingId);
console.log("PARAM BOOKING ID:", bookingId);
console.log("PARAMS =", params);
console.log("BOOKING DATA:", data);
    return <AcceptInfo data={data} bookingId ={bookingId}/>; 
    
};
export default AcceptInfoData;