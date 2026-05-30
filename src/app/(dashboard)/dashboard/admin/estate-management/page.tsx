import ItemNavbar from '@/src/components/common/dashboardItemNavbar/ItemNavbar'
import DashboardContentContainer from '@/src/components/common/dashboardcontentcontainer/container'
import ToolTip from '@/src/components/common/tooltip'
import EstateItems from '@/src/components/dashboard/estateItems/EstateItems'
import { getAllHouses } from '@/src/utils/sevices/api/admin/houses/getAllHouses/getAllHouses'
import React from 'react'

const EstateManagementPage = async() => {
    const navItems = ["نام","ادرس","قیمت","نوع ملک","ظرفبت"]
    const result = await getAllHouses()
    const houses = result.data||[]
  
  return (
    <DashboardContentContainer title={`لیست املاک ( ${result.totalCount})`}>
        <div className='flex flex-col gap-5'>
            <ItemNavbar colsNumber={5} items={navItems}/>
            <div>
          {houses.length > 0 ? (
            houses.map((house) => (
              <div
                className="flex justify-between w-full items-center"
                key={house.id}
              >
                <div className="grid grid-cols-5 gap-10 lg:text-[18px] md:text-[14px] text-white text-[8px]  w-full">
                  {/* <UserName userId={Number(payment.userId)} /> */}
                  <span>{house.title}</span>
                  <ToolTip tooltipText={`${house.address}`} mainContent={
                    <p className="overflow-hidden xl:w-[200px]  truncate text-start" dir='rtl'>{house.address}</p>

                  }/>

                  <span>{house.price}</span>
                  <span>{house.transaction_type}</span>
                  <span className='lg:-mr-8'>{house.capacity}</span>
                </div>
                <EstateItems
               houseId={Number(house.id)}
                />
              </div>
            ))
          ) : (
            <div className="w-full text-3xl text-center mt-4 text-gray-300">
              ملکی وجود ندارد
            </div>
          )}
        </div>
        </div>
    </DashboardContentContainer>
  )
}

export default EstateManagementPage
