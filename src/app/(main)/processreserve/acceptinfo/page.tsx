import { getServerSideCookie } from '@/src/utils/helper/cookies/serverCookie/serverSideCookie'
import { getBookingsById } from '@/src/utils/sevices/api/processReserve/getTravelerInfo'
import React from 'react'
import AcceptInfoData from './acceptinfodata/page'

const AcceptInfo = async() => {
    const id = getServerSideCookie("BookingId")
    const data = await getBookingsById(id)
  return (
    <AcceptInfoData data = {data} />
  )
}
export default AcceptInfo
