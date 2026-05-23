import DashboardContentContainer from '@/src/components/common/dashboardcontentcontainer/container'
import ItemNavbar from '@/src/components/common/dashboardItemNavbar/ItemNavbar'
import React from 'react'
const items = ["نوع تراکنش","وضعیت پرداخت","مبلغ" ,"شماره پیگیری","تاریخ"]

const BuyerPaymentPage = () => {
  return (
    <div className='flex w-full flex-col'>
    <DashboardContentContainer
      title='لیست تراکنش های شما'
    >
      
        <ItemNavbar colsNumber={5} items={items}/>
        <div className='flex items-center'>
          
        </div>
      

    </DashboardContentContainer>
    </div>
  )
}

export default BuyerPaymentPage
