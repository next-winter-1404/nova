import { getBookingsById } from '@/src/utils/sevices/api/processReserve/getTravelerInfo'
import React from 'react'
import AcceptInfo from './acceptinfo/page';
import { getClientCookie } from '@/src/utils/helper/cookies/clientCookie/clientSideCookie';
import { getServerSideCookie } from '@/src/utils/helper/cookies/serverCookie/serverSideCookie';

const AcceptInfoData = async () => {
    const id = await getServerSideCookie("BookingId");

console.log("Cookie BookingId =", id);

const BookingId = Number(id);

console.log("BookingId Number =", BookingId);

const data = await getBookingsById(BookingId);
    return <AcceptInfo data={data} bookingId ={BookingId}/>; 
    
};
export default AcceptInfoData;