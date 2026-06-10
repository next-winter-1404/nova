import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import SimpleDropdown from "@/src/components/common/dropDown";
import PaginationClient from "@/src/components/common/pagination/page";
import LocationItemsManagement from "@/src/components/dashboard/locationItemsManagement/locationItemsManagement";
import SearchLocation from "@/src/components/dashboard/locationSearch/LocationSearch";
import { getAllLocation } from "@/src/utils/sevices/api/locations/getAllLocations/getAllLocation";
import Link from "next/link";
import { FC } from "react";


interface IProps {
    searchParams: Promise<IFilters>;
}
interface IFilters {
    order?: string;
    page?: string | number;
    limit?: string | number;
    area_name ? : string
}
const SocialMedia : FC<IProps> = async({searchParams}) => {
    const limit = 5;

    const params = await searchParams;
    const order = params.order;
    const currentPage = Number(params.page) || 1;
    const area_name = params.area_name;
    const filters: IFilters = {};
    if (order) filters.order = order;
    if (currentPage) filters.page = currentPage;
    if (limit) filters.limit = limit;
    if (area_name) filters.area_name = area_name;
    console.log(filters);
// const result = await getAllLocation(filters);
    const result = await getAllLocation(filters)
    const location = result.data || []
    console.log(result.data);

    const totalPages = Math.ceil(Number(result?.totalCount) / limit);

    const orderItem = [
        { value: "ASC", label: "صعودی" },
        { value: "DESC", label: "نزولی" },
    ];
    

    const items = ["ایدی", "موقعیت"]

    return (
        <DashboardContentContainer 
            title={`لیست موقعیت ها  (${result.totalCount})`}
                twTopContent="w-1/2"
                topSectionContent={
                <div className="flex gap-4 w-full py-2">
                    <div className="w-1/2"><SearchLocation/></div>
                    
                    <SimpleDropdown
                        options={orderItem}
                        paramKey="order"
                        placeholder="ترتیب نمایش"
                        labelText="ترتیب نمایش"
                        tagBg="bg-dark-600"
                        triggerClassName="w-1/2 h-[50px]"
                    />
                </div>
            }
        >

            <div className="flex flex-col gap-9 items-end">
                <div className="flex flex-col gap-5 w-full">
                    <ItemNavbar colsNumber={2} items={items} />
                    <div>
                        {location?.map((location) => (
                        <div
                            key={location.id}
                            className="flex justify-between w-full items-center"
                        >
                            <div className="grid grid-cols-2 text-white w-full md:px-10 items-center">
                                <p className="h-15 md:mr-[80px] mr-4 text-[12px] md:text-[16px] flex items-center">
                                    {location.id || "ایدی وجود ندارد"}
                                </p>
                                <p className="md:mr-[40px] text-[12px] md:text-[16px]">
                                    {location.areaName || "موقعیت وجود ندارد"}
                                </p>
                            </div>
                            <LocationItemsManagement locationId={location.id} areaName = {location.areaName} lat= {location.lat} lng = {location.lng}/>
                        </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between w-full items-center">
                <Link
                    href={"/dashboard/admin/locations/create"}
                    className="cursor-pointer bg-primary-accent-green md:w-[150px] w-[120px] md:h-[43px] h-[33px] rounded-[16px] flex-center"
                >
                    ساخت موقعیت +
                </Link>

                <PaginationClient
                    totalPages={totalPages}
                    totalCount={Number(result?.totalCount)}
                />
                </div>
            </div>
        </DashboardContentContainer>
    )
}

export default SocialMedia