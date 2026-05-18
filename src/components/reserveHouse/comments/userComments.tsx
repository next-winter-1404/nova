"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardContainer from "../../common/card/page";
import Button from "../../common/button/page";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { FC } from "react";
import { ICommentsProps } from "./commentSection";
import { Modal } from "../../common/modal";
import line from "@/src/assets/icons/replyLine.svg";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const UserComments: FC<ICommentsProps> = ({ comments, houseId }) => {
  const router = useRouter();
  const getReply = (commentId: number | string) => {
    return comments.filter((comment) => comment.parent_comment_id == commentId);
  };

  return (
    <div className="w-full overflow-hidden flex-center gap-8">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          390: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {comments?.map((comment) => {
          const replies = getReply(comment.id);
          if (!comment.parent_comment_id)
            return (
              <SwiperSlide key={comment.id}>
                <CardContainer
                  cavity="round"
                  labelContent={
                    <div className="w-[50px] h-[30px] mt-[5px] flex-center text-dark-800 gap-1 bg-white-pure rounded-[8px]">
                      <FaStar className="w-4 h-4" />
                      <span>{comment.rating}</span>
                    </div>
                  }
                  labelSize="lg"
                  mainContent={
                    <div className=" w-[90%] md:w-full md:h-full h-[90%] lg:max-w-[480px] md:p-4 py-8 flex flex-col items-center justify-between gap-1 text-right">
                      <div className=" w-full flex flex-col gap-1 md:text-[20px] text-[14px]  text-white-pure">
                        <h2 className="text-32-semibold">{comment.title}</h2>
                        <p>{comment.caption}</p>
                      </div>

                      <div className="flex-col flex gap-4 items-end w-full ">
                        <div className="w-full flex-center gap-6 ">
                          <div className="w-full">
                            <Image alt="icon" src={line} />
                          </div>
                          {replies.length > 0 ? (
                            <Modal
                              contentClassName="bg-dark-900"
                              mainContent={
                                <div
                                  className="flex flex-col gap-5 text-white overflow-y-auto max-h-[500px]"
                                  dir="rtl"
                                >
                                  پاسخ ها برای این نظر :
                                  {replies.map((reply) => (
                                    <div key={reply.id}>
                                      <div className="flex items-start gap-3 bg-dark-800 p-3 rounded-2xl">
                                        <div className="w-10 h-10 bg-dark-600 rounded-3xl"></div>
                                        <div className="flex flex-col gap-4">
                                          <h1 className="mt-2 font-bold text-[18px]">
                                            {`${reply.user?.firstName || ""} ${
                                              reply.user?.lastName || ""
                                            }`.trim() || "کاربر ناشناس"}
                                          </h1>
                                          <div className="flex flex-col gap-1">
                                            <h2 className="font-semibold">
                                              {reply.title}
                                            </h2>
                                            <p>{reply.caption}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              }
                              modalBtn={
                                <Button
                                  width="w-[112px]"
                                  buttonStyle={{
                                    background: "var(--color-blue-purple-500)",
                                    borderRadius: 16,
                                    cursor: "pointer",
                                  }}
                                  text={`(${replies.length})  پاسخ کاربران `}
                                />
                              }
                            />
                          ) : (
                            <span className="text-gray-400 text-sm md:text-2xl whitespace-nowrap">
                              پاسخی وجود ندارد
                            </span>
                          )}
                        </div>

                        {replies.length > 0 && (
                          <div className=" w-full gap-6 flex flex-col">
                            <div className="flex justify-end gap-2">
                              <div className="flex-center gap-2 text-gray-300">
                                <span className="text-[13px]">
                                  {replies[0].created_at?.slice(0, 10)}
                                </span>
                                <FaCalendarAlt className="w-3 h-3" />
                              </div>
                              <div className="w-0.5 h-4 bg-white" />
                              <h2 className="text-white">
                                {`${replies[0].user?.firstName || ""} ${
                                  replies[0].user?.lastName || ""
                                }`.trim() || "کاربر ناشناس"}
                              </h2>
                            </div>
                            <div className="flex flex-col gap-2 text-white">
                              <h2 className="font-semibold">
                                {replies[0].title}
                              </h2>
                              <p>{replies[0].caption}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="w-full p-4 md:h-[80px] h-[50px] rounded-3xl flex items-center bg-dark-600 justify-between md:gap-4 gap-2">
                        <Button
                          backgroundColor=""
                          width="w-[112px]"
                          className=""
                          buttonStyle={{
                            background: "transparent",
                            border: "1px solid white",
                            borderRadius: 12,
                            cursor: "pointer",
                          }}
                          text={"ثبت پاسخ"}
                          icon={<FiChevronLeft />}
                          onClick={() =>
                            router.push(`?tab=comment&replyTo=${comment.id}`, {
                              scroll: false,
                            })
                          }
                        />
                        <div className="w-full flex items-center justify-end gap-4">
                          <div className="h-full md:w-[180px] md:gap-2.5 gap-1.5 flex flex-col justify-center items-end text-[12px] md:text-[16px]">
                            <h2 className="text-white-pure">
                              {`${comment.user?.firstName || ""} ${
                                comment.user?.lastName || ""
                              }`.trim() || "کاربر ناشناس"}
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
                  labelBackground="bg-dark-700"
                  curveColor="#393939"
                  mainExtraStyle="bg-dark-700 md:h-[480px] h-[380px]"
                  labelExtraStyle={{ height: "40px" }}
                  width="md:w-[480px] w-full"
                />
              </SwiperSlide>
            );
        })}
      </Swiper>
    </div>
  );
};

export default UserComments;
