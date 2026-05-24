import DashboardContentContainer from '@/src/components/common/dashboardcontentcontainer/container'
import ItemNavbar from '@/src/components/common/dashboardItemNavbar/ItemNavbar'
import SimpleDropdown from '@/src/components/common/dropDown'
import PaginationClient from '@/src/components/common/pagination/page'
import Pagination from '@/src/components/common/pagination/page'
import StatusLabel from '@/src/components/common/statusLabel/StatusLabel'
import { getBuyerPayment } from '@/src/utils/sevices/api/buyerPayment/getBuyerPayment'
import React, { FC, Suspense } from 'react'
const items = ["تاریخ" ,"مبلغ","وضعیت پرداخت","بابت ",]

interface IProps {
  searchParams: Promise<IFilter>;
}
interface IFilter {
  status? : string,
  orders? : string,
  page ? : number,
  limit? : number,
}

const BuyerPaymentPage : FC<IProps> = async({ searchParams }) => {    
  const params = await searchParams;
  
  const status = params.status;
  const orders = params.orders;
  const filter : IFilter = {};
  if (status) filter.status = status;
  if (orders) filter.orders = orders;
  filter.page = params.page ? parseInt(params.page, 10) : 1;
  filter.limit = params.limit ? parseInt(params.limit, 10) : 10;
  
  const paymentList = await getBuyerPayment(filter);
  const totalPages = Math.ceil(paymentList.totalCount / filter.limit);
  const result = paymentList?.payments || []
  const payStatus = [
    {value : "completed", label : "تایید شده"},
    {value : "cancelled", label : "تایید نشده"},
    {value : "pending", label : " در انتظار"}
  ]
  const orderItem = [
    { value: "ASC", label: "صعودی" },
    { value: "DESC", label: "نزولی" },
  ];
  return (
    <div className='flex flex-col'>
      <DashboardContentContainer
      twTopContent='w-1/2'
      title='لیست تراکنش های شما'
      topSectionContent = {
        <div className='w-full flex py-2 gap-4'>
          <SimpleDropdown
            options={payStatus}
            paramKey='status'
            placeholder='انتخاب کنید'
            labelText='وضعیت پرداخت'
            tagBg="bg-dark-600"
            triggerClassName="w-1/2 h-[50px]"
          />
          <SimpleDropdown
            options={orderItem}
            paramKey='orders'
            placeholder='انتخاب کنید'
            labelText=' ترتیب نمایش'
            tagBg="bg-dark-600"
            triggerClassName="w-1/2 h-[50px]"   
          />
        </div>
      }
    >
      <div className="flex flex-col gap-5 w-full">
        <ItemNavbar colsNumber={4} items={items} />
        <div className="flex text-white mt-5 items-center">
          {result?.length > 0 ? (
            <div className="w-full flex flex-col gap-5">
              <>
                {result?.map((item) => (
                  <div
                    className="flex justify-between w-full items-center"
                    key={item.id}
                  >
                  <div className ="grid grid-cols-5 w-full h-[50px] items-center">
                    <div className="flex-center whitespace-nowrap">
                      {item.createdAt || "- -"}
                    </div>                              
                    <div
                      className="flex-center gap-1 text-center "
                      dir="rtl"
                    >
                      <span>{item.amount || "  --"}</span>
                      <span>تومان</span>
                    </div>
                    <div className="text-center mr-[140px]">
                      {item.description} 
                    </div>
                    <div className=' mr-[140px] flex-center'>
                      <StatusLabel status={item.status} />
                    </div>
                  </div>
                </div>
                ))}
              </>
              </div>
            ) : (
              <div className="text-4xl text-gray-300">رزوری وجود ندارد</div>
            )}
          </div>
        </div>
        
    </DashboardContentContainer>
    
    <PaginationClient 
      totalPages={totalPages} 
      totalCount={paymentList.totalCount} 
    />
    </div>
    
  )
}

export default BuyerPaymentPage
