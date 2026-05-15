"use client";
import CardContainer from "@/src/components/common/card/page";
import Button from "../common/button/page";
import { MdAccessTime } from "react-icons/md";
import Image from "next/image";
import arrowRight from "@/public/icons/Group34.svg";
import { BsChevronLeft } from "react-icons/bs";
import Container from "../common/Container";
import ProductCard from "@/src/components/common/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import useSWR from "swr";
import instance from "@/src/utils/sevices/interseptor";
import { IHouse } from "@/src/core/types/IHouse";
import { IProductCard } from "@/src/core/types/IProductCard";

const SpecialOfferSection = () => {
 const { data, error, isLoading } = useSWR("/api/houses", async (url) => {
  const res = await instance.get(url);
  return res;   // ← because res is already the data object
});
  const houses = data?.houses ?? [];
  console.log("my-houses", data?.houses);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!houses.length) return <div>No houses found</div>;

  return (
    <div className="relative padding-section">
      <CardContainer
        cavity="sharp"
        labelBackground="bg-dark-860"
        labelContent={
          <Button
            text="12 : 56 : 17"
            icon={
              <span>
                <MdAccessTime />
              </span>
            }
            buttonStyle={{ padding: "12px 24px" }}
          />
        }
        labelExtraStyle={{ padding: "24px", height: "50px" }}
        mainExtraStyle="bg-dark-860 p-6"
        curveColor="var(--color-dark-860)"
        labelSize="lg"
        width="w-full"
        //  mainBackground='bg-dark-860'
        mainContent={
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "end",
                justifyContent: "start",
              }}
            >
              <span className="flex-center justify-end gap-4">
                <Image src={arrowRight} alt="icon" width={48} height={16} />
                <p className="text-16-medium text-primary-accent-green">
                  بهترین تخفیف
                </p>
              </span>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button
                  text="مشاهده همه"
                  icon={
                    <span>
                      <BsChevronLeft className="w-3 h-3" />
                    </span>
                  }
                  buttonStyle={{
                    height: "36px",
                    border: "1px solid #fff",
                    borderRadius: "12px",
                    background: "#2D2D2D",
                    padding: "8px 16px",
                  }}
                />
                <h3 className="flex-center justify-end text-32-medium">
                  پیشنهادا ویژه دلتا
                </h3>
              </div>
            </div>

            <Container>
              <div className="w-full overflow-hidden flex-center gap-8">
                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={20}
                  slidesPerView={4}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  breakpoints={{
                    390: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  className="my-house-swiper"
                >
                  {houses.map((item:IProductCard) => (
                    <SwiperSlide key={item.id}>
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
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </Container>
          </div>
        }
      />
    </div>
  );
};

export default SpecialOfferSection;
