import RowProductCard from "@/src/components/common/productCard/RowProductCard";
import CardContainer from "@/src/components/common/card/page";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import { IProductCard } from "@/src/core/types/IProductCard";
import FilterSection from "@/src/components/mortgageAndRentPageContainer/FilterSection";
import { IMortgagePageFilter } from "./../../../core/types/IMortgagePageFilter";
import ProductCard from "@/src/components/common/productCard/ProductCard";
import FadeIn from "@/src/components/animations/FadeIn";
import ScrollSlide from "@/src/components/animations/GoingFromRight";
import Slide from "@/src/components/animations/Slide";

const MortgageAndHouseRent = async ({
  searchParams,
}: {
  searchParams: Promise<IMortgagePageFilter>;
}) => {
  const params = await searchParams;
  const minRent = params.minPrice;
  const maxRent = params.maxPrice;
  const propertyType = params.propertyType;
  const sort = params.sort;
  const location = params.address;
  const search = params.search;
  const transactionType = params.transactionType;
  const minMortgage = params.minMortgage;
  const maxMortgage = params.maxMortgage;
  const minArea = params.minArea;
  const maxArea = params.maxArea;
  const order = params.order;

  const filter: IMortgagePageFilter = {
    transactionType: "mortgrage",
  };
  if (minRent) filter.minRent = minRent;
  if (maxRent) filter.maxRent = maxRent;
  if (propertyType) filter.propertyType = propertyType;
  if (sort) filter.sort = sort;
  if (location) filter.location = location;
  if (search) filter.search = search;
  if (transactionType) filter.transactionType = transactionType;
  if (minMortgage) filter.minMortgage = minMortgage;
  if (maxMortgage) filter.maxMortgage = maxMortgage;
  if (minArea) filter.minArea = minArea;
  if (maxArea) filter.maxArea = maxArea;
  if (order) filter.order = order;

  const result: any = await getHouses({
    minRent: minRent ? Number(minRent) : undefined,
    maxRent: maxRent ? Number(maxRent) : undefined,
    propertyType,
    search,
    location,
    sort,
    transactionType,
    minMortgage,
    maxMortgage,
    minArea,
    maxArea,
    order,
  });

  const houses = result?.houses || [];
  const totalCount = result?.totalCount || 0;
  // const mortgageAndRentHouses = houses.filter(
  //   (state) => state.transaction_type === "mortgage" || state.transaction_type === "rent"
  // );

  return (
    <Slide direction="right">
      <div className="w-full flex-col-center sm:gap-49 bg-dark-900 mt-28 w-full ">
        {/* <Breadcrumb items={{}} /> */}
        <div className="w-full padding-section flex-col-center gap-10">
          <FilterSection totalCount={totalCount} />

          <div className="w-full sm:flex-center flex-wrap gap-6">
            {houses.length > 0 ? (
              houses.map((item: IProductCard) => [
                <div className="hidden sm:block group" key={item.id}>
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
                      <div className="flex-col-center mx-auto ">
                        <RowProductCard
                          id={item.id}
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
                <div
                  key={item.title}
                  className="w-full mx-auto flex flex-col justify-center items-center sm:hidden mt-6"
                >
                  <ProductCard
                    title={item.title}
                    address={item.address}
                    price={item.price}
                    rooms={item.rooms}
                    parking={item.parking}
                    bathrooms={item.bathrooms}
                    rate={item.rate}
                    href={`/mortgageandhouserent/${item.id}`}
                    buttonText="رزرو ملک"
                  />
                </div>,
              ])
            ) : (
              <i className="text-[56px] text-white">! اطلاعاتی یافت نشد</i>
            )}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default MortgageAndHouseRent;
