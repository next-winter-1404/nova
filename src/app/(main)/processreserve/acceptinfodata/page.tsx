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
console.log("Parm Booking Id:", bookingId);
console.log("Params =", params);
console.log("Booking Data:", data);
    return <AcceptInfo data={data} bookingId ={bookingId}/>; 
    
};
export default AcceptInfoData;