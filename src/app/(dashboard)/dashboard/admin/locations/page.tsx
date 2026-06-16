import FadeIn from "@/src/components/animations/FadeIn";
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
    

    const items = ["ایدی", "موقعیت","عملیات"]

    return (
        <FadeIn>
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

            <div className="flex flex-col gap-9 items-end w-full">

  {/* TABLE */}
  <div className="flex flex-col gap-5 w-full">

    <ItemNavbar colsNumber={3} items={items} />

    <div className="flex flex-col gap-3 w-full">

      {location?.map((loc) => (
        <div
          key={loc.id}
          className="
            grid
            grid-cols-3
            items-center

            w-full
            bg-dark-800
            rounded-xl

            px-4 md:px-6
            py-3

            text-white-pure
            text-[12px] md:text-[15px]

            transition-all
            duration-200

            hover:bg-dark-700
          "
        >

          {/* ID */}
          <p className="truncate">
            {loc.id || "ایدی وجود ندارد"}
          </p>

          {/* NAME */}
          <p className="truncate text-center">
            {loc.areaName || "موقعیت وجود ندارد"}
          </p>

          {/* ACTIONS */}
          <div className="flex justify-end">
            <LocationItemsManagement
              locationId={loc.id}
              areaName={loc.areaName}
              lat={loc.lat}
              lng={loc.lng}
            />
          </div>

        </div>
      ))}

    </div>
  </div>

  {/* FOOTER */}
  <div className="flex justify-between w-full items-center">

    <Link
      href="/dashboard/admin/locations/create"
      className="
        bg-primary-accent-green
        text-black
        md:w-[150px] w-[120px]
        md:h-[43px] h-[35px]
        rounded-[16px]
        flex items-center justify-center
      "
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
        </FadeIn>
    )
}

export default SocialMedia