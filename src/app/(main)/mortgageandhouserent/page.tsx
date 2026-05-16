import { Breadcrumb } from "@/src/components/common/breadCrumbs";
import Button from "@/src/components/common/button/page";
import Container from "@/src/components/common/Container";
import Input from "@/src/components/common/input/Input";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BsChevronDown } from "react-icons/bs";

import RowProductCard from "@/src/components/common/productCard/RowProductCard";
import CardContainer from "@/src/components/common/card/page";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import { IProductCard } from "@/src/core/types/IProductCard";
import FilterSection from "@/src/components/mortgageAndRentPageContainer/FilterSection";

const MortgageAndHouseRent = async ({
  searchParams,
}: {
  searchParams: Promise<{
    minPrice?: string;
    maxPrice?: string;
    propertyType?: string;
    sort?: string;
    address?: string;
    search?: string;
    transactionType?:string;
    minRent?:number;
    maxRent?:number;

  }>;
}) => {
  const params = await searchParams;
  const minRent = params.minPrice;
  const maxRent = params.maxPrice;
  const propertyType = params.propertyType;
  const sort = params.sort;
  const location = params.address;
  const search = params.search;

  const result: any = await getHouses({
    minRent,
    maxRent,
    propertyType,
    search,
    location,
    sort,
    transactionType: "mortgage" , //just rental house will show on this page
  });

  const houses = result?.houses || [];
  const totalCount = result?.totalCount || 0;
  // const mortgageAndRentHouses = houses.filter(
  //   (state) => state.transaction_type === "mortgage" || state.transaction_type === "rent"
  // );
  

  return (
    <div className="w-full flex-col-center gap-49 bg-dark-900 mt-28 w-full ">
      {/* <Breadcrumb items={{}} /> */}
      <div className="w-full padding-section flex-col-center gap-10">
        <FilterSection totalCount={totalCount}/>
        <div className="w-full sm:flex-center justify-end flex-wrap gap-6">
          {houses.length > 0 ? 
           houses.map((item:IProductCard) => [
            <div className="group" key={item.id}>
              <CardContainer
                parentExtraStyle={{ width: "740px" }}
                curveColor="#393939"
                cavity="round"
                labelContent={
                  <div className="w-[67px] h-[10px] flex items-center  text-dark-800 justify-center gap-1 ">
                    {/* <Image src={Star} alt='star'/>  */}
                    {/* {rate} */}
                  </div>
                }
                labelSize="lg"
                mainContent={
                  <div className="mx-auto flex flex-col items-center">
                    <RowProductCard
                      title={item.title}
                      address={item.address}
                      price={item.price}
                      rooms={item.rooms}
                      parking={item.parking}
                      bathrooms={item.bathrooms}
                      rate={item.rate}
                      href={`/mortgageandhouserent/${item.id}`}
                    />
                  </div>
                }
                labelBackground="bg-[#393939]"
                labelExtraStyle={{ minHeight: "10px" }}
                mainExtraStyle="p-6 bg-dark-700"
              />
            </div>,
          ]):
          <i className="text-[56px] text-white">! اطلاعاتی یافت نشد</i>}
        </div>
      </div>
    </div>
  );
};

export default MortgageAndHouseRent;
