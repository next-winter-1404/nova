'use server'
import { getServerSideCookie } from '@/src/utils/helper/cookies/serverCookie/serverSideCookie'
import { getBookingsById } from '@/src/utils/sevices/api/processReserve/getTravelerInfo'
import React from 'react'
import AcceptInfo from './acceptinfo/page';

const AcceptInfoData = async () => {
    const id = await getServerSideCookie("BookingId");
    const BookingId = Number(id);
    const data = await getBookingsById(BookingId);
    return <AcceptInfo data={data} />; 
    
};
export default AcceptInfoData;