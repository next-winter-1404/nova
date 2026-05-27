import TopReserveHouseSection from "@/src/components/reserveHouse/topSection";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import RowProductCard from "@/src/components/common/productCard/RowProductCard";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import { IHouse } from "@/src/core/types/IHouse";
import BottomNavbarFilter from "@/src/components/reserveHouse/bottomNavbarFilter";
import ProductCard from "@/src/components/common/productCard/ProductCard";

export const revalidate = 30;
const HouseReservePage = async ({
  searchParams,
}: {
  searchParams: Promise<IFilters>;
}) => {
  const params = await searchParams;
  const minRent = params.minPrice;
  const maxRent = params.maxPrice;
  const propertyType = params.propertyType;
  const sort = params.sort;
  const location = params.address;
  const search = params.search;
  const filters: IFilters = {
    transactionType: "reservation",
  };
  if (minRent) filters.minRent = minRent;
  if (maxRent) filters.maxRent = maxRent;
  if (propertyType) filters.propertyType = propertyType;
  if (sort) filters.sort = sort;
  if (location) filters.location = location;
  if (search) filters.search = search;
  const result = await getHouses(filters);
  const houses = result?.houses || [];
  const totalCount = result?.totalCount || 0;

  const items: BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رزرو هتل",
    },
    {
      label: `رزرو هتل ${location || ""}`,
    },
  ];
  return (
    <div className="flex-center bg-dark-900 ">
      <div className="items-end flex mt-15 flex-col lg:max-w-[1375px] w-[97%] ">
        <Breadcrumb items={items} twClassname="mt-14  " />
        <TopReserveHouseSection totalCount={totalCount} />
        <div className="bg-dark-800 flex justify-between  mt-6 p-1 lg:p-6  w-full rounded-[40px] ">
          <div className="xl:w-[40%] lg:w-[35%] lg:block rounded-[40px] h-[1032px] bg-dark-900  hidden"></div>
          <div className="lg:w-[65%]  xl:w-[60%] w-full flex flex-col gap-6 items-center ">
            <BottomNavbarFilter />
            <div className="w-[90%] border-2 border-[#4E4E4E] lg:block hidden " />
            <div className="flex flex-col gap-12 p-5 lg:p-1  items-center max-h-[911px] overflow-y-auto overflow-x-hidden  xl:w-[95%] lg:w-full">
              {houses.length > 0 ? (
                houses.map((house: IHouse) => (
                  <div key={house.id} className="flex-col-center gap-6  ">
                    <div className="w-full hidden md:block ">
                      <RowProductCard
                        address={house.address}
                        bathrooms={house.bathrooms}
                        price={house.price}
                        parking={house.parking}
                        title={house.title}
                        rate={house.rate}
                        rooms={house.rooms}
                        href={`reserve-house/${house.id}`}
                      />
                    </div>
                    <div className="w-full block md:hidden">
                      <ProductCard
                        address={house.address}
                        bathrooms={house.bathrooms}
                        price={house.price}
                        parking={house.parking}
                        title={house.title}
                        rate={house.rate}
                        rooms={house.rooms}
                        capacity={house.capacity}
                        href={`reserve-house/${house.id}`}
                      />
                    </div>

                    <div className="w-[100%] border-2 border-[#4E4E4E]" />
                  </div>
                ))
              ) : (
                <div className="text-center w-full lg:text-4xl text-gray-400 py-20">
                  هیچ داده‌ای وجود ندارد
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseReservePage;
