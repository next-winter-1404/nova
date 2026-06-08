import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ToolTip from "@/src/components/common/tooltip";
import AdminEstateManagement from "@/src/components/dashboard/adminEstateManagementFilters.tsx/adminEstateManagementFilters";
import EstateItems from "@/src/components/dashboard/estateItems/EstateItems";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import ImageFallback from "@/src/utils/helper/imageFallBack/ImageFallBack";
import { deleteHouses } from "@/src/utils/sevices/api/admin/houses/deleteHouses/deleteHouses";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import imagePlaceHolder from "@/src/assets/images/imagePlaceHolder (2).png";
import Link from "next/link";
import PaginationClient from "@/src/components/common/pagination/page";
import { IFilters } from "@/src/core/types/IFilters";
import { getDiscounts } from "@/src/utils/sevices/api/admin/discount/getDiscount";

const EstateManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<IFilters>;
}) => {
  const limit = 5;

  const navItems = ["نام", "ادرس", "قیمت", "نوع ملک", "ظرفبت"];
  const role = await getServerSideCookie("userRole");
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const minRent = params.minPrice;
  const maxRent = params.maxPrice;
  const propertyType = params.propertyType;
  const sort = params.sort;
  const location = params.address;
  const search = params.search;
  const filters: IFilters = {};
  if (minRent) filters.minRent = minRent;
  if (maxRent) filters.maxRent = maxRent;
  if (propertyType) filters.propertyType = propertyType;
  if (sort) filters.sort = sort;
  if (location) filters.location = location;
  if (search) filters.search = search;
  if (currentPage) filters.page = currentPage;
  if (limit) filters.limit = limit;
  const result = await getHouses(filters);
  const houses = result?.houses || [];
  const totalPages = Math.ceil(Number(result?.totalCount) / limit);
  const discounts = await getDiscounts();
  return (
    <DashboardContentContainer
      title={`لیست املاک ( ${result.totalCount})`}
      topSectionContent={<AdminEstateManagement />}
    >
      <div className="flex flex-col items-end gap-5">
        <div className="flex flex-col gap-5">
          <ItemNavbar colsNumber={5} items={navItems} />
          <div>
            {houses.length > 0 ? (
              houses.map((house) => (
                <div
                  className="flex justify-between w-full items-center"
                  key={house.id}
                >
                  <div className="grid grid-cols-5 gap-10  lg:text-[18px] md:text-[14px] text-white text-[8px]  w-full items-center">
                    <ToolTip
                      mainContent={
                        <div className="flex gap-2 whitespace-nowrap items-center py-2">
                          <ImageFallback
                            src={house.photos?.[0] || imagePlaceHolder}
                            fallbackSrc={imagePlaceHolder}
                            alt="house pic"
                            width={100}
                            height={50}
                            className="rounded-xl lg:block hidden"
                          />
                          <span className="truncate">
                            {house.title || "عنوانی وجود ندارد"}
                          </span>
                        </div>
                      }
                      tooltipText={`${house.title}`}
                    />
                    <ToolTip
                      tooltipText={`${house.address}`}
                      mainContent={
                        <p
                          className="overflow-hidden xl:w-[200px]   text-center truncate "
                          dir="rtl"
                        >
                          {house.address || "ادرسی وجود ندارد"}
                        </p>
                      }
                    />

                    <span>{house.price || "--"}</span>
                    <span>{house.transaction_type || "--"}</span>
                    <span className="lg:-mr-8">{house.capacity || "--"}</span>
                  </div>
                  <EstateItems
                    houseId={Number(house.id)}
                    role={role}
                    deleteFunction={deleteHouses}
                    discounts={discounts.data||[]}
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
        <div className="flex justify-between w-full items-center">
          <Link
            href={"/"}
            className="cursor-pointer bg-primary-accent-green w-[150px] h-[43px] rounded-[16px] flex-center"
          >
            ساخت ملک +
          </Link>

          <PaginationClient
            totalPages={totalPages}
            totalCount={Number(result?.totalCount)}
          />
        </div>
      </div>
    </DashboardContentContainer>
  );
};

export default EstateManagementPage;
