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
import Image from "next/image";
import Add from "@/src/assets/icons/Add.svg";

import { getDiscounts } from "@/src/utils/sevices/api/admin/discount/getDiscount";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import FadeIn from "@/src/components/animations/FadeIn";

const EstateManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<IFilters>;
}) => {
  const limit = 5;

  const navItems = ["نام", "ادرس", "قیمت", "نوع ملک", "ظرفبت", "عملیات"];
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
  <FadeIn>
  <DashboardContentContainer
    title={`لیست املاک ( ${result.totalCount})`}
    topSectionContent={<AdminEstateManagement />}
  >
    <div className="flex flex-col gap-5 w-full">

      {/* NAVBAR */}
      <ItemNavbar colsNumber={6} items={navItems} />

      {/* LIST */}
      <div className="flex flex-col gap-3 w-full">

        {houses.length > 0 ? (
          houses.map((house) => (
            <div
              key={house.id}
              className="
                grid
                grid-cols-6
                items-center
                gap-4

                bg-dark-800
                rounded-xl

                px-4 md:px-6
                py-3

                text-white-pure
                text-[11px] md:text-[15px]

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-[1.01]
                hover:bg-dark-700
                hover:shadow-2xl
                hover:shadow-black/40

                border border-transparent
                hover:border-white/10
              "
            >

              {/* TITLE */}
              <ToolTip
                tooltipText={house.title || ""}
                mainContent={
                  <div className="flex items-center gap-2 min-w-0">
                    <ImageFallback
                      src={house.photos?.[0] || imagePlaceHolder}
                      fallbackSrc={imagePlaceHolder}
                      alt="house"
                      width={60}
                      height={50}
                      className="rounded-xl hidden lg:block"
                    />
                    <span className="truncate font-medium">
                      {house.title || "عنوانی وجود ندارد"}
                    </span>
                  </div>
                }
              />

              {/* ADDRESS */}
              <div className="text-center min-w-0">
                <p className="truncate">
                  {house.address || "آدرسی وجود ندارد"}
                </p>
              </div>

              {/* PRICE */}
              <div className="text-center font-medium">
                {formatPrice(Number(house.price)) || "--"}
              </div>

              {/* TYPE */}
              <div className="text-center">
                {house.transaction_type || "--"}
              </div>

              {/* CAPACITY */}
              <div className="text-center">
                {house.capacity || "--"}
              </div>

              {/* ACTIONS */}
              <div className="flex justify-center">
                <EstateItems
                  houseId={Number(house.id)}
                  role={role}
                  deleteFunction={deleteHouses}
                  discounts={discounts.data || []}
                />
              </div>

            </div>
          ))
        ) : (
          <div className="text-center text-3xl text-gray-300 py-10">
            ملکی وجود ندارد
          </div>
        )}

      </div>

      {/* FOOTER */}
      <div className="flex justify-between w-full items-center">

        <Link href="/dashboard/admin/estate-management/processcreate">
          <button className="
            w-[146px]
            h-10
            rounded-[12px]
            bg-primary-accent-green
            text-black
            text-[16px]

            flex items-center justify-center gap-2

            transition
            hover:scale-105
            active:scale-95
          ">
            افزودن ملک
            <Image src={Add} alt="Add" />
          </button>
        </Link>

        <PaginationClient
          totalPages={totalPages}
          totalCount={Number(result?.totalCount)}
        />

      </div>

    </div>
  </DashboardContentContainer>
</FadeIn>
  );
};

export default EstateManagementPage;
