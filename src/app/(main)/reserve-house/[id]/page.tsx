import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import Button from "@/src/components/common/button/page";
import HouseMainInformation from "@/src/components/common/houseMainInformation";
import ToolTip from "@/src/components/common/tooltip";
import Image from "next/image";
import deaf from "@/src/assets/images/imagePlaceHolder (2).png";
import { ITab } from "@/src/core/types/ITab";
import SelectedTab from "@/src/components/reserveHouse/SelectedTab";
import {
  FaRegCommentDots,
  FaRegSave,
  FaRegFileAlt,
  FaStar,
} from "react-icons/fa";
import { FiCopy, FiHeart } from "react-icons/fi";
import AboutHouseContainer from "@/src/components/reserveHouse/aboutHouseContainer";
import HouseItemsComponent from "@/src/components/reserveHouse/houseItemsComponent";
import SimilarHouses from "@/src/components/reserveHouse/similarHouse/SimilarHousesNavbar";
import CommentSection from "@/src/components/reserveHouse/comments/commentSection";
import { FC } from "react";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import { notFound } from "next/navigation";
import ReserveBox from "@/src/components/reserveHouse/reserveBox";
import { getHousesComment } from "@/src/utils/sevices/api/comments/reserveHouseDetailComment/getComment";
import { Modal } from "@/src/components/common/modal";
import AddToFavorite from "@/src/components/reserveHouse/addToFavorite/AddToFavorite";

interface IProps {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ tab?: string }>;
}
export const revalidate = 30;
const SingleReserveHousePage: FC<IProps> = async ({ searchParams, params }) => {
  const { id } = await params;
  const house = await getHousesDetail(id);
  const param = await searchParams;
  const activeTab = param.tab || "about";
  //get comments
  const commentsData = await getHousesComment(id);
  const comments = commentsData?.comments || [];

  // console.log("comments:", comments);

  if (!house) {
    return notFound();
  }
  const items: BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رزرو ملک",
    },
    {
      href: "/reserve-house",

      label: `رزرو  ${house.location}`,
    },
    {
      label: `رزرو  ${house.title}`,
    },
  ];
  const tabs: ITab[] = [
    {
      value: "comment",
      label: "نظرات کاربران",
      icon: <FaRegCommentDots className="w-4 h-4" />,
    },
    {
      value: "facilities",
      label: " امکانات اقامتگاه",
      icon: <FaRegSave className="w-4 h-4" />,
    },

    {
      value: "about",
      label: "درباره ملک",
      icon: <FaRegFileAlt className="w-4 h-4" />,
    },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <AboutHouseContainer
            caption={house?.caption}
            title={house?.caption}
          />
        );
      case "comment":
        return <CommentSection houseId={house.id} comments={comments} />;
      case "facilities":
        return (
          <HouseItemsComponent
            bathrooms={house.bathrooms}
            capacity={house.capacity}
            parking={house.parking}
            rooms={house.rooms}
            yard_type={house.yard_type}
          />
        );
      default:
        return (
          <AboutHouseContainer
            caption={house?.caption}
            title={house?.caption}
          />
        );
    }
  };
  return (
    <div className="flex-center bg-dark-900 w-full">
      <div className="flex items-end flex-col gap-6 w-4/5 xl:w-[1340px]  2xl:w-[1444px]  lg:w-[95%]  lg:px-8 mt-17 ">
        <Breadcrumb items={items} twClassname="lg:mt-14 mt-6" />
        <div className="flex  flex-col gap-8 md:gap-4 lg:flex-row-reverse lg:items-end justify-between  w-full mt-4 p-4">
          <HouseMainInformation
            houseTitle={house?.title || "نام اقامتگاه"}
            houseAddress={house?.address || "ادرسی وجود ندارد"}
          />
          <div className="flex items-center gap-4 justify-between " dir="rtl">
            <Button
              text={`${house?.rate} ستاره `}
              icon={<FaStar className="text-white h-4 w-4" />}
              buttonStyle={{
                background: "var(--color-blue-purple-500)",
                width: 92,
                height: 32,
                borderRadius: 10,
              }}
            />
            <div className="w-1 h-4 border-white border-1 bg-white hidden lg:block " />
            <div className="flex gap-4">
              <ToolTip
                mainContent={
                  <div className="flex-center w-10 h-10 bg-dark-700 rounded-xl hover:bg-primary-accent-green">
                    <FiCopy className="w-4 h-4 text-gray-300 hover:text-black" />
                  </div>
                }
                tooltipText="کپی کردن"
              />
              <AddToFavorite
                houseId={Number(house?.id)}
                isFavorite={house.isFavorite}
                favoriteId={Number(house.favoriteId)}
              />
            </div>
          </div>
        </div>

        <div className="flex gap-15 lg:gap-5 lg:flex-row lg:p-2 lg:justify-between lg:items-start p-4 flex-col-reverse  items-end w-full">
          <div className="flex gap-3 md:flex md:flex-wrap md:justify-between lg:grid lg:grid-cols-2 lg:w-[228px]">
            {house.photos && house.photos.length > 0
              ? house.photos.map((photo, index) => (
                  <div
                    key={index}
                    className="w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border overflow-hidden"
                  >
                    <Image
                      src={photo}
                      alt={`تصویر ${index + 1}`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))
              : [...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className=" hidden lg:block w-24 h-24 bg-dark-700 rounded-4xl cursor-pointer hover:border-primary-accent-green hover:border"
                  />
                ))}
          </div>
          <Image
            alt="house picture"
            src={house?.photos?.[0] || deaf}
            width={1100}
            height={420}
            className="md:w-full lg:w-[80%] xl:max-w-[1100px] lg:h-[420px] rounded-[40px] border border-dark-800"
          />
        </div>
        <section className=" relative flex flex-row-reverse justify-between gap-4 w-full items-start">
          <section className=" lg:w-[1000px] flex flex-col w-full gap-8">
            <SelectedTab
              options={tabs}
              twClassname="w-full"
              buttonWidth="p-2 md:p-4"
            />

            {renderContent()}
          </section>
          <div className="hidden lg:block">
            <ReserveBox
              price={house.price}
              id={house.id}
              discounted_price={house.discounted_price}
            />
          </div>
          <div className="block lg:hidden fixed z-10 bottom-5 right-5">
            <Modal
              contentClassName="bg-dark-900 block lg:hidden h-fit"
              modalBtn={
                <Button
                  text={"همین حالا رزرو کن"}
                  buttonStyle={{
                    background: "var(--color-primary-accent-green)",
                    color: "black",
                    width: 100,
                    height: 50,
                    cursor: "pointer",
                  }}
                />
              }
              mainContent={
                <ReserveBox
                  price={house.price}
                  id={house.id}
                  discounted_price={house.discounted_price}
                />
              }
            />
          </div>
        </section>
        <SimilarHouses />
      </div>
    </div>
  );
};

export default SingleReserveHousePage;
