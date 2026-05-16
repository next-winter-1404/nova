import { Breadcrumb } from "@/src/components/common/breadCrumbs";
import ToolTip from "@/src/components/common/tooltip";
import React, { FC } from "react";
import { FiCopy } from "react-icons/fi";
import share from "@/src/assets/icons/share-square.svg";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import placeHolder from "@/src/assets/images/imagePlaceHolder (2).png";
import userPlaceHolder from "@/src/assets/images/userPlaceHolder.jpg";
import { getBlogsDetail } from "@/src/utils/sevices/api/blogs/getBlogDetail";
interface IBlogDetailProp {
  params: {
    id: string;
  };
}
const BlogDetailPage: FC<IBlogDetailProp> = async ({ params }) => {
  const { id } = await params;
  const BlogDetail = await getBlogsDetail(Number(id));
  const items = [
    { label: "مقالات", href: "/blog " },
    { label: `${BlogDetail?.title}` },
  ];

  return (
    <div className="w-full flex-center">
      <div className="mt-25 xl:w-[1376px] lg:w-[1090px]  w-[80%] flex items-end flex-col lg:gap-6 gap-10 ">
        <Breadcrumb items={items} />
        <div className="w-full flex flex-col gap-8 ">
          <div className="flex items-center  w-full justify-between  ">
            <div className="md:w-1/2 w-full ">
              <div className="max-w-100 rounded-[28px] bg-dark-860 flex justify-between p-4  items-center relative">
                <Image
                  alt="user photo"
                  src={userPlaceHolder}
                  className="rounded-[60px] w-[74px] h-[74px]  absolute -top-9 -right-8 shadow-[-6px_6px_0px_-1px__#232323]"
                />

                <div className="flex  flex-col gap-2">
                  <ToolTip
                    mainContent={
                      <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-white">
                        <FiCopy className="w-4 h-4 text-white hover:text-black" />
                      </div>
                    }
                    tooltipText="کپی کردن"
                  />
                  <ToolTip
                    mainContent={
                      <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-white">
                        <Image className="w-4 h-4" alt="icon" src={share} />
                      </div>
                    }
                    tooltipText="اشتراک گذاری"
                  />
                </div>
                <div>
                  <div className="flex flex-col mr-8 gap-3 " dir="rtl">
                    <h2 className="text-xl text-white">نویسنده</h2>
                    <div className="flex items-center gap-1 text-gray-300">
                      <FaCalendarAlt className="w-4 h-4 mb-1" />
                      <div className="flex gap-2">
                        <span>{BlogDetail?.created_at?.slice(0, 10)} </span>
                        <span>-</span>
                        <span>{BlogDetail?.estimated_reading_time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex flex-col w-1/2 hidden" dir="rtl">
              <h2 className="lg:text-32-semibold text-[18px] text-white">{BlogDetail?.title}</h2>
              <p className="text-white">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است .
              </p>
            </div>
          </div>
          <section className="flex flex-col gap-8">
            <Image
              alt="blog image"
              src={placeHolder}
              className="w-full  h-[356px]  rounded-[56px]"
            />

            <div className="flex flex-col gap-4 " dir="rtl">
              <h2 className="text-semibold-24">{BlogDetail?.title}</h2>
              <p className="text-white">{BlogDetail?.caption}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
