"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardContainer from "../common/card/page";
import Button from "../common/button/page";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { FC } from "react";
import { ICommentsProps } from "./commentSection";
import { Modal } from "../common/modal";
import line from "@/src/assets/icons/replyLine.svg"
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
const UserComments: FC<ICommentsProps> = ({ comments }) => {
  return (
    <div className="w-full overflow-hidden flex-center gap-8 ">
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
        {comments?.map((comment) => {
          if (!comment.parent_comment_id)
            return (
              <SwiperSlide key={comment.id}>
                <CardContainer
                  cavity="round"
                  labelContent={
                    <div className="w-[50px] h-[30px] mt-[5px] flex-center text-dark-800 gap-1 bg-white-pure rounded-[8px] ">
                      <FaStar className="w-4 h-4" />
                      <span>{comment.rating}</span>
                    </div>
                  }
                  labelSize="lg"
                  mainContent={
                    <div className=" w-full md:h-full lg:max-w-[480px] p-4 py-8 flex flex-col items-center justify-between  gap-1 text-right brder">
                      <div className=" w-full flex flex-col gap-1  md:text-[20px] text-[14px] leading-10 text-white-pure">
                        <h2 className="font-bold">{comment.title}</h2>
                        <p>{comment.caption}</p>
                      </div>
                    <div className="flex-col flex gap-6 items-end">
                    <div className="w-full  flex-center gap-6">
                        <Image alt="icon" src={line}/>
                        <Modal

                          mainContent={<div>salam</div>}
                          modalBtn={
                            <Button
                              width="w-[112px] "
                              buttonStyle={{
                                background: "var(--color-blue-purple-500)",
                                borderRadius: 16,
                                cursor:"pointer"
                              }}
                              text={"پاسخ کاربران"}
                              icon={<FiChevronLeft />}
                            />
                          }
                        />
                      </div>
                      <div className="flex-center gap-4">
                        <div className="flex-center gap-2 text-gray-300">
                        <span className="text-[13px] ">12 مرداد - 1401 / 12:33</span>
                        <FaCalendarAlt className="w-3 h-3"/>
                        </div>
                        <div className="w-0.5 h-4 bg-white"/>
                        <h2 className="text-white">محمد رضا ساداتی</h2>
                      </div>
                      <p className="text-white">” لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گ...</p>
                    </div>
                      <div className="w-full p-4 md:h-[80px] h-[50px] rounded-3xl flex items-center bg-dark-600 justify-between  md:gap-4 gap-2">
                        <Button
                          backgroundColor=""
                          width="w-[112px]"
                          className=""
                          buttonStyle={{
                            background: "transparent",
                            border: "1px solid white",
                            borderRadius: 12,
                          }}
                          text={"ثبت پاسخ"}
                          icon={<FiChevronLeft />}
                        />
                        <div className=" w-full flex  items-center  justify-end gap-4">
                          <div className="h-full md:w-[180px] md:gap-2.5 gap-1.5 flex flex-col justify-center items-end text-[12px] md:text-[16px]">
                            <h2 className=" text-white-pure">
                              {`${comment.user?.firstName || ""} ${
                                comment.user?.lastName || ""
                              }` || "کاربر ناشناس"}
                            </h2>
                            <h2 className="text-gray-300 flex gap-2">
                              {comment.created_at?.slice(0, 10)}
                            </h2>
                          </div>
                          <div className="md:w-[57px] w-[50px] h-[50px] rounded-2xl bg-[#D9D9D9]"></div>
                        </div>
                      </div>
                    </div>
                  }
                  labelBackground="bg-dark-700 "
                  curveColor="#393939"
                  mainExtraStyle="bg-dark-700 h-[480px] "
                  labelExtraStyle={{ height: "40px" }}
                  width="md:w-[480px] w-[380px]"
                />
              </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
};

export default UserComments;
