import DashboardContentContainer from '@/src/components/common/dashboardcontentcontainer/container';
import ItemNavbar from '@/src/components/common/dashboardItemNavbar/ItemNavbar';
import Input from '@/src/components/common/input/Input';
import ReservationItem from '@/src/components/dashboard/ReservationItem/ReservationItem';
import { getSellerHouses } from '@/src/utils/sevices/api/seller/houses/getHouses';
import Image from 'next/image';
import React, { FC } from 'react'
import Add from "@/src/assets/icons/Add.svg"
import Link from 'next/link';


interface IProps {
  searchParams: Promise<IFilters>;
}
interface IFilters {
  order?: string;
  sort?: string;
  page?: string | number;
  limit?: string | number;
}

const SellerEstatesPage : FC<IProps> = async({searchParams}) => {
  // const limit = 5;
  // const params = await searchParams;
  // const order = params.order;
  // const sort = params.sort;
  // const currentPage = Number(params.page) || 1;
  // const filters: IFilters = {};
  // if (order) filters.order = order;
  // if (sort) filters.sort = sort;
  // if (currentPage) filters.page = currentPage;
  // if (limit) filters.limit = limit;
  const result = await getSellerHouses();
  const house = result?.houses || []

  const items = [
    "نام اقامتگاه",
    "قیمت",
    "ادرس",
    "امتیاز",
    "ظرفیت",

  ];
  return (
    <div>
      <DashboardContentContainer
        title="لیست  املاک من"
        twTopContent="w-1/2"
        topSectionContent={
          <div className="flex gap-4 w-full">
            <Input
              placeHolder="ترتیب نمایش"
              labelText="ترتیب نمایش"
              tagBgStyle={{background :"var(--color-dark-600)"}}
              parentWidth="w-1/2"
              InputHeight='h-[50px]'
            />
          </div>
        }
      >
        <div className="flex flex-col gap-9 items-end">
          <div className="flex flex-col gap-5 w-full">
            <ItemNavbar colsNumber={5} items={items} />
            <div className="flex text-white mt-5 items-center">
              {house?.length > 0 ? (
                <div className="w-full flex flex-col gap-5">
                  <>
                    {house?.map((item) => (
                      <div
                        className="flex justify-between w-full items-center"
                        key={item.id}
                      >
                        <div className="grid grid-cols-5 w-full  items-center">
                          <div className="flex gap-4 items-center w-[300px] ">
                            <div className="w-[100px] h-[72px] rounded-xl bg-gray-600"></div>
                            <div className="whitespace-nowrap">
                              {item?.title || "عنوانی وجود ندارد"}
                            </div>
                          </div>
                          <div
                            className="flex-center gap-1 "
                            dir="rtl"
                          >
                            <span>{item?.price || "--"}</span>
                            <span>تومان</span>
                          </div>
                          <div className="ml-[105px] text-center">
                            {item?.location|| "--"}
                          </div>
                          
                          <div className=" text-center ml-[195px]">
                            {item?.rate|| "--"}
                          </div>
                          <div className=" ml-[265px]">
                            {item?.capacity|| "--"}
                          </div>
                        </div>

                        {/* <ReservationItem item={item} /> */}
                      </div>
                    ))}
                  </>
                </div>
              ) : (
                <div className="text-4xl text-gray-300">رزوری وجود ندارد</div>
              )}
            </div>
          </div>
          <div className='flex justify-start w-full'>
            {/* <PaginationClient
              totalPages={totalPages}
              totalCount={Number(result.totalCount)}
            /> */}
            <Link href={"/dashboard/seller/estate-management/processcreate"}>
              <button className='w-[146px] rounded-[12px] h-10 bg-primary-accent-green text-black text-[16px] flex items-center justify-center gap-2'>
                افرودن ملک
                <Image src={Add} alt='Add'/>
              </button>
            </Link>
          </div>
        </div>
        
      </DashboardContentContainer>
    </div>
  )
}

export default SellerEstatesPage
