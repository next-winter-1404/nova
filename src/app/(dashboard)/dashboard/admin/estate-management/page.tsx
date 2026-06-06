import ItemNavbar from "@/src/components/common/dashboardItemNavbar/ItemNavbar";
import DashboardContentContainer from "@/src/components/common/dashboardcontentcontainer/container";
import ToolTip from "@/src/components/common/tooltip";
import AdminEstateManagement from "@/src/components/dashboard/adminEstateManagementFilters.tsx/adminEstateManagementFilters";
import EstateItems from "@/src/components/dashboard/estateItems/EstateItems";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import { deleteHouses } from "@/src/utils/sevices/api/admin/houses/deleteHouses/deleteHouses";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";

const EstateManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<IFilters>;
}) => {
  const navItems = ["نام", "ادرس", "قیمت", "نوع ملک", "ظرفبت"];
  const role = await getServerSideCookie("userRole");
  const params = await searchParams;
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
  const result = await getHouses(filters);
  const houses = result?.houses || [];
  return (
    <DashboardContentContainer
      title={`لیست املاک ( ${result.totalCount})`}
      topSectionContent={
       <AdminEstateManagement/>
      }
    >
      <div className="flex flex-col gap-5">
        <ItemNavbar colsNumber={5} items={navItems} />
        <div>
          {houses.length > 0 ? (
            houses.map((house) => (
              <div
                className="flex justify-between w-full items-center"
                key={house.id}
              >
                <div className="grid grid-cols-5 gap-10 lg:text-[18px] md:text-[14px] text-white text-[8px]  w-full">
                  <span>{house.title || "عنوانی وجود ندارد"}</span>
                  <ToolTip
                    tooltipText={`${house.address}`}
                    mainContent={
                      <p
                        className="overflow-hidden xl:w-[200px]  truncate text-start"
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
  );
};

export default EstateManagementPage;
