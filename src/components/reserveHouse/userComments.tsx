"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardContainer from "../common/card/page";
import Button from "../common/button/page";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
const UserComments = () => {
  return (
    <div className="w-full overflow-hidden flex-center gap-8 border h-[500px]">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          390: { slidesPerView: 1 },
          //   640: { slidesPerView: },
          1024: { slidesPerView: 2 },
        }}
        pagination={{
          clickable: true,
        }}
        className=" w-full"
      >
        <SwiperSlide className="w-full border border-amber-100">
          <CardContainer
            cavity="round"
            labelContent={
              <div className="w-[50px] h-[30px] mt-[5px] flex-center text-dark-800 gap-1 bg-white-pure rounded-[8px] ">
                <FaStar className="w-4 h-4" />
                <span>4.5</span>
              </div>
            }
            labelSize="lg"
            mainContent={
              <div className=" w-full md:h-[220px] h-[310px] flex flex-col items-center justify-center md:gap-6 gap-1 text-right border">
                <h2 className="md:text-[20px] text-[14px] leading-10 text-white-pure">
                  ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربرد.... “
                </h2>
                <div className="md:w-full w-[351px] md:h-[310px] p-2  bg-dark-600 md:rounded-3xl rounded-2xl flex justify-center items-center">
                  <div className="w-12/13 md:h-[57px] h-[50px] flex items-center justify-between  md:gap-4 gap-2">
                    <Button backgroundColor="" width="w-[112px]" className="" buttonStyle={{background:"transparent",border:"1px solid white",borderRadius:12}} text={"ثبت پاسخ"} icon={<FiChevronLeft/>}/>
                    <div className=" w-full flex  items-center gap-4">
                    <div className="h-full md:w-[180px] md:gap-2.5 gap-1.5 flex flex-col justify-center items-end text-[12px] md:text-[16px]">
                      <h2 className=" text-white-pure">محمد رضا ساداتی</h2>
                      <h2 className="text-gray-300 flex gap-2">
                        12 مرداد - 1401 / 12:33{" "}
                      </h2>
                    </div>
                    <div className="md:w-[57px] w-[50px] h-[50px] rounded-2xl bg-[#D9D9D9]"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
            labelBackground="bg-dark-700 "
            curveColor="#393939"
            mainExtraStyle="bg-dark-700 h-[500px]"
            labelExtraStyle={{ height: "40px" }}
            width="md:w-[480px] w-[380px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardContainer
            cavity="round"
            labelContent={
              <div className="w-[50px] h-[30px] mt-[5px] flex-center text-dark-800 gap-1 bg-white-pure rounded-[8px] ">
                <FaStar className="w-4 h-4" />
                <span>4.5</span>
              </div>
            }
            labelSize="lg"
            mainContent={
              <div className=" w-full md:h-[220px] h-[210px] flex flex-col items-center justify-center md:gap-6 gap-1 text-right">
                <h2 className="md:text-[20px] text-[14px] leading-10 text-white-pure">
                  ” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                  با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربرد.... “
                </h2>
                <div className="md:w-full w-[351px] md:h-fit p-2  bg-dark-600 md:rounded-3xl rounded-2xl flex justify-center items-center">
                  <div className="w-12/13 md:h-[57px] h-[50px] flex items-center justify-between  md:gap-4 gap-2">
                    <Button backgroundColor="" width="w-[112px]" className="" buttonStyle={{background:"transparent",border:"1px solid white",borderRadius:12}} text={"ثبت پاسخ"} icon={<FiChevronLeft/>}/>
                    <div className=" w-full flex  items-center gap-4">
                    <div className="h-full md:w-[180px] md:gap-2.5 gap-1.5 flex flex-col justify-center items-end text-[12px] md:text-[16px]">
                      <h2 className=" text-white-pure">محمد رضا ساداتی</h2>
                      <h2 className="text-gray-300 flex gap-2">
                        12 مرداد - 1401 / 12:33{" "}
                      </h2>
                    </div>
                    <div className="md:w-[57px] w-[50px] h-[50px] rounded-2xl bg-[#D9D9D9]"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
            labelBackground="bg-dark-700 "
            curveColor="#393939"
            mainExtraStyle="bg-dark-700"
            labelExtraStyle={{ height: "40px" }}
            width="md:w-[480px] w-[380px]"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default UserComments;
