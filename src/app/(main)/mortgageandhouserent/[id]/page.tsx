import Image from "next/image";
import Container from "@/src/components/common/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import HousePicture from "@/src/assets/images/singleHouse.png";
import Location from "@/src/assets/icons/Location.svg";
import { FiHelpCircle, FiPhoneCall } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import dolor from "@/public/icons/grayDollor.svg";
import Vector from "@/public/icons/Vector.svg";
import moneyCheck from "@/public/icons/money-check-edit1.svg";
import InfoCardContainer from "@/src/components/reserveHouse/InfoCardContainer";
import Button from "@/src/components/common/button/page";
import { getHousesDetail } from "@/src/utils/sevices/api/houses/getHousesDetail";
import {
  FaRegCommentDots,
  FaRegSave,
  FaRegFileAlt,
  FaStar,
} from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { ITab } from "@/src/core/types/ITab";
import SelectedTab from "@/src/components/reserveHouse/SelectedTab";
import MortgageTabContent from "@/src/components/mortgageAndRentPageContainer/MortgageTabContent";
import { getHousesComment } from "@/src/utils/sevices/api/comments/reserveHouseDetailComment/getComment";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import SliderSection from "@/src/components/mortgageAndRentPageContainer/SliderSection";
import { Modal } from "@/src/components/common/modal";
import Chat from "@/src/components/mortgageAndRentPageContainer/Chat";
import { getServerSideCookie } from "@/src/utils/helper/cookies/serverCookie/serverSideCookie";
import HousesPicturesSlider from "@/src/components/mortgageAndRentPageContainer/HousesPicturesSlider";
import VisitAppointment from "@/src/components/mortgageAndRentPageContainer/VisitAppointment/VisitApointment";
import { getVisitAppointments } from "@/src/utils/sevices/api/visitAppointment/getVisitAppointment";
import { formatPrice } from "@/src/utils/hooks/formatPrice";
import DepositRentCalculator from "@/src/components/common/depositRentCalculater/DepositRentCalculator";
import { getWeatherQuery } from "@/src/utils/helper/weatherQuery/weatherQuery";
import { getWeather } from "@/src/utils/sevices/api/weather/getWeather";
import WeatherCard from "@/src/components/common/weatherCard/WeatherCard";

interface IProps {
  params: Promise<{ id: number }>;
  searchParams: Promise<{ tab?: string }>;
}

export const revalidate = 30;
const SingleHousePage = async ({ params }: IProps) => {
  const { id } = await params;
  const getHouseInfo = await getHousesDetail(id);
//   console.log( "location", getHouseInfo.location);
// console.log("address",getHouseInfo.address);
  const tags = Array.isArray(getHouseInfo?.tags)
    ? getHouseInfo.tags
    : typeof getHouseInfo?.tags === "string"
    ? getHouseInfo.tags.split(",")
    : [];

  const commentsData = await getHousesComment(id);
  const comments = commentsData?.comments || [];
//   const resultff = await getLocationCoordinates("ساری مازندران");
// console.log("resultff",resultff);

  const getAllHouse = await getHouses();
  const result = getAllHouse?.houses || [];
  // console.log("result", result);
  if (!getHouseInfo) {
  return <div>داده بارگذاری نشد</div>;
}

  const token = await getServerSideCookie("ServerAccessToken");
  const isLoggedIn = !!token;

  const weatherQuery = getWeatherQuery(
    getHouseInfo?.location,
    getHouseInfo?.address
  );
  
  const weather = weatherQuery
    ? await getWeather(weatherQuery)
    : null;

    console.log("location =", getHouseInfo.location);
    console.log("address =", getHouseInfo.address);
    console.log("weatherQuery =", weatherQuery);
    console.log("weather =", weather);

  const userId = await getServerSideCookie("userId");
  const getAppointments = await getVisitAppointments(id);
  const items: BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رهن و اجاره",
    },
    {
      href: "/reserve-house",
      label: "رهن و اجاره آپارتمان",
    },
    {
      href: "/reserve-house",
      label: `رهن و اجاره ${getHouseInfo?.address}`,
    },
    {
      label: `${getHouseInfo?.title}`,
    },
  ];
  const tabs: ITab[] = [
    {
      value: "comment",
      label: "نظرات کاربران",
      icon: <FaRegCommentDots className="w-4 h-4" />,
    },
    {
      value: "address",
      label: "موقعیت ملک",
      icon: <Image src={Location} alt="Location" className="w-4 h-4" />,
    },
    {
      value: "facilities",
      label: " امکانات ملک",
      icon: <FaRegSave className="w-4 h-4" />,
    },

    {
      value: "about",
      label: "توضیحات ملک",
      icon: <FaRegFileAlt className="w-4 h-4" />,
    },
  ];
  return (
    <div className="padding-section flex-col-center sm:mt-24 mt-15">
      <div className="flex-col-center sm:gap-6 gap-3">
        <Breadcrumb
          items={items}
          twClassname="w-full flex-center justify-start"
        />
        <div className="flex-center h-[600px] justify gap-7 border">
          <div className="flex-col-center gap-6 mt-4 sm:mt-0 ">
            <div className="sm:hidden flex-col-center gap-3 ">
              <div className="sm:hidden block">
                <HousesPicturesSlider imagesSrc={getHouseInfo?.photos} />
              </div>
              <div className="sm:hidden flex-center gap-4">
                <span className="w-[82px] flex-center gap-1 px-3 py-1.5 whitespace-nowrap text-white bg-blue-purple-500 rounded-lg">
                  ستاره
                  <span
                    style={{ 
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                    className=""
                  >
                    {getHouseInfo?.rate}
                    <FaStar className="w-4 h-4" />
                  </span>
                </span>
                <i className="h-[21px] w-0.5 bg-gray-300"></i>
                <div className="flex-center gap-4">
                  {tags?.map((tag) => {
                    return (
                      <div
                        key={tag}
                        className="text-gray-300 text-[16px] bg-dark-700 border border-gray-200 rounded-xl p-8-16"
                      >
                        {tag}#
                      </div>
                    );
                  })}
                </div>
              </div>
              <span className="sm:hidden w-full text-right text-semibold-28 text-white-pure">
                {getHouseInfo?.title}
              </span>
              <div className="sm:hidden w-full flex justify-end gap-1.5">
                <h2 className="text-[16px] text-gray-300 text-right  whitespace-nowrap">
                  {getHouseInfo?.address || "ادرسی وجود ندارد"}
                </h2>
                <Image src={Location} alt="Location" className="w-4 h-4" />
                
              </div>
              
            </div>
            <div className="flex flex-1">
              <InfoCardContainer
                icon={<FiPhoneCall />}
                labelText="اطلاعات تماس"
              >
                <div className="w-full flex-col-center gap-5">
                  <div className="relative flex flex-col w-full gap-6">
                    <div className="flex-col-center gap-3">
                      <span className="w-12 h-12 rounded-2xl bg-gray-200"></span>
                      <span className="flex-col-center">
                        <span className="text-16-medium text-white">
                          {getHouseInfo?.sellerName}
                        </span>
                        <span className="flex-center gap-2 text-gray-300">
                          <p>{getHouseInfo?.last_updated?.split("T")[0]}</p>
                          <FiCalendar />
                        </span>
                      </span>
                    </div>
                    <div className="flex-col-center gap-4">
                      <div className="w-full flex-center justify-between">
                        <div className="flex-center gap-0.5 text-16-medium text-primary-accent-green">
                          <span>ت</span>
                          <span>{formatPrice(Number(getHouseInfo?.discounted_price))}</span>
                        </div>
                        <div className="flex-center gap-2 text-16-medium text-gray-300">
                          <span>: قیمت رهن از</span>
                          <Image alt="icon" src={dolor} className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="w-full flex-center justify-between">
                        <div className="flex-center gap-0.5 text-16-medium text-primary-accent-green">
                          <span>ت</span>
                          <span>{formatPrice(Number(getHouseInfo?.price))}</span>
                        </div>
                        <div className="flex-center gap-2 text-16-medium text-gray-300">
                          <span>: قیمت اجاره از</span>
                          <Image
                            alt="icon"
                            src={moneyCheck}
                            className="w-4 h-4"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col-center gap-4">
                    <DepositRentCalculator/>
                    <VisitAppointment
                      houseId={Number(getHouseInfo?.id)}
                      userId={Number(userId)}
                      getAppointments={getAppointments}
                    />

                    <Modal
                      modalBtn={
                        <button className="flex-center w-full rounded-[10px] text-16-semibold text-white-pure border boreder-white-pure px-4 py-2">
                          گفت و گو با فروشنده
                        </button>
                      }
                      mainContent={
                        <div className="w-full flex-col-center gap-6">
                          {isLoggedIn ? (
                            <Chat senderId={Number(userId)} sellerId={Number(getHouseInfo?.sellerId)} sellerName={getHouseInfo?.sellerName} />
                          ) : (
                            <div className="text-center text-white p-6">
                              <p>
                                برای گفت‌وگو با فروشنده، لطفاً ابتدا وارد حساب
                                کاربری خود شوید.
                              </p>
                              <a
                                href="/login"
                                className="inline-block bg-primary-accent-green text-dark-800 px-4 py-2 rounded-xl mt-7"
                              >
                                <i>ورود به حساب کاربری</i>
                              </a>
                            </div>
                          )}
                        </div>
                      }
                      contentClassName="bg-dark-900"
                    />
                  </div>
                </div>
              </InfoCardContainer>
            </div>
          </div>
          <div className="hidden sm:flex">
            <div className="flex-col-center gap-2.5 max-w-[350px] rounded rounded-[32px]">
              <div className="rounded rounded-[32px]">
                <Image
                  src={HousePicture}
                  className="h-[172px]"
                  alt="home pic"
                />
              </div>
              <div className="relative flex-center h-[172px] w-full">
                <div
                  style={{
                    background: `url(${HousePicture.src})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100%",
                  }}
                  className="relative min-h-[172px] w-full bg-contain bg-center  brightness-60"
                ></div>
                <span className="absolute text-semibold-24 z-1 whitespace-nowrap">
                  {" "}
                  +12 عکس دیگر{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-2 rounded rounded-[32px] shadow-000-8">
              <Image src={HousePicture} alt="home pic" />
            </div>
          </div>
        </div>
        
        <div className="flex-center justify-between w-full" dir="rtl">
          
          <div className="flex flex-col gap-11">
            <div className="hidden sm:flex-center gap-4">
              <span className="w-[82px] flex-center gap-1 px-3 py-1.5 whitespace-nowrap text-white bg-blue-purple-500 rounded-lg">
                ستاره
                <span
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                  className=""
                >
                  {getHouseInfo?.rate}
                  <FaStar className="w-4 h-4" />
                </span>
              </span>
              <i className="h-[21px] w-0.5 bg-gray-300"></i>
              <div className="flex-center gap-4">
                {tags?.map((tag) => {
                  return (
                    <div
                      key={tag}
                      className="text-gray-300 text-[16px] bg-dark-700 border border-gray-200 rounded-xl p-8-16"
                    >
                      {tag}#
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="sm:block hidden w-full text-right text-semibold-28 text-white-pure">
                {getHouseInfo?.title}
              </span>
              <div className="hidden w-full sm:flex gap-1.5">
              <h2 className="text-[16px] text-gray-300 text-right  whitespace-nowrap">
                {getHouseInfo?.address || "ادرسی وجود ندارد"}
              </h2>
              <Image src={Location} alt="Location" className="w-4 h-4" />
              </div>
            </div>
          </div>
          {weather && (
            <div className="w-1/2  mt-6">
              <WeatherCard weather={weather} />
            </div>
          )}
        </div>
        
      </div>
      <Container>
        <div className="w-full shadow-000-8">
          <SelectedTab options={tabs} twClassname="w-full" buttonWidth="p-4" />
        </div>
        <div className="w-full py-6">
          <MortgageTabContent
            caption={getHouseInfo.caption}
            bathrooms={getHouseInfo.bathrooms}
            capacity={getHouseInfo.capacity}
            parking={getHouseInfo.parking}
            rooms={getHouseInfo.rooms}
            yard_type={getHouseInfo.yard_type}
            address={getHouseInfo.address}
            comments={comments}
            id={getHouseInfo.id}
            location={getHouseInfo.location}
          />
        </div>
        <div className="flex-center justify-between w-full bg-dark-700 rounded-xl px-4 py-3 shadow-000-8">
          <span>
            <span className="flex-center gap-2 text-primary-accent-green ">
              <BsChevronLeft />
              <i className="sm:text-[16px] text-[10px]">مشاهده همه</i>
            </span>
          </span>
          <span className="flex-center gap-2">
            <i className="sm:text-[16px] text-[10px] text-white-pure ">
              آگهی های مشابه
            </i>
            <span className="pb-1">
              <Image src={Vector} alt="Vector" />
            </span>
          </span>
        </div>
        <SliderSection cardData={result} />
      </Container>
    </div>
  );
};

export default SingleHousePage;
