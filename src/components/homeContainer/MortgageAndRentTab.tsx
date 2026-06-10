"use client";

import { useSearchParams } from "next/navigation";
import { IHouse } from "@/src/core/types/IHouse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../common/productCard/ProductCard";
import Container from "../common/Container";

interface MortgageAndRentTabProps {
  cardData: IHouse[];
}

const MortgageAndRentTab = ({ cardData }: MortgageAndRentTabProps) => {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "rent";

  const getMortgageHouses = cardData.filter(
    (house) => house.transaction_type === "mortgage",
  );
  const getRentHouses = cardData.filter(
    (house) => house.transaction_type === "rental",
  );

  const renderContent = () => {
    switch (activeTab) {
      case "rent":
        return (
          <Container>
            <div className="w-full overflow-hidden flex-center gap-8 justify-end">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  390: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                className="w-full"
              >
                {getRentHouses.length > 0 ? (
                  getRentHouses.map((item: IHouse) => (
                    <SwiperSlide className="flex justify-center" key={item.id}>
                      <ProductCard
                        seeMore
                        offer="15"
                        title={item.title}
                        rooms={item.rooms}
                        location={item.address}
                        discounted_price={item.discounted_price}
                        rate={item.rate}
                        price={item.price}
                        buttonText="قیمت خرید :"
                        bathrooms={item.bathrooms}
                        capacity={item.capacity}
                        photos={item.photos}
                        href={`/resreve-house/${item.id}`}
                      />
                    </SwiperSlide>
                  ))
                ) : (
                  <span>اطلاعاتی یافت نشد</span>
                )}
              </Swiper>
            </div>
          </Container>
        );
      case "Mortgage":
        return (
          <Container>
            <div className="w-full overflow-hidden flex-center gap-8 justify-end">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  390: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 4 },
                }}
                className="w-full"
              >
                {getMortgageHouses.map((item: IHouse) => (
                  <SwiperSlide className="flex justify-center" key={item.id}>
                    <ProductCard
                      seeMore
                      offer="15"
                      title={item.title}
                      rooms={item.rooms}
                      location={item.address}
                      discounted_price={item.discounted_price}
                      rate={item.rate}
                      price={item.price}
                      buttonText="قیمت خرید :"
                      bathrooms={item.bathrooms}
                      capacity={item.capacity}
                      photos={item.photos}
                      href={`/mortgageandhouserent/${item.id}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        );
    }
  };
  return (
    <div className="w-full overflow-hidden flex-center justify-end gap-8">
      {renderContent()}
    </div>
  );
};

export default MortgageAndRentTab;
