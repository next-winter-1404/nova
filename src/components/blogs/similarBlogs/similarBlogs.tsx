"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from '../../common/productCard/ProductCard'
import { FC } from "react";
import { IHousesResponse } from "@/src/core/types/IHouse";
import { IBlogsResponse } from "@/src/core/types/IBogs";
import BlogCard from "../../common/blogCard/blogCard";

const SimilarBlogItems:FC<IBlogsResponse> = ({data}) => {
  return (
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
            className="w-full flex gap-4 justify-start "
          >
            {data?.map((blog) => (
              <SwiperSlide >
                <BlogCard
                caption={blog.caption}
                title={blog.title}
                estimated_reading_time={blog.estimated_reading_time}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  )
}

export default SimilarBlogItems
