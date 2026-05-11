import Image from "next/image";
import Container from "@/src/components/common/Container";
import {
  Breadcrumb,
  BreadcrumbItem,
} from "@/src/components/common/breadCrumbs";
import HousePicture from "@/src/assets/images/singleHouse.png";
import { FiPhoneCall } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import dolor from "@/public/icons/grayDollor.svg";
import moneyCheck from "@/public/icons/money-check-edit1.svg";
import comment from "@/public/icons/commentwhite.svg";
import InfoCardContainer from "@/src/components/reserveHouse/InfoCardContainer";
import Button from "@/src/components/common/button/page";

const SingleHousePage = () => {
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
      label: "رهن و اجاره آپارتمان رشت",
    },
    {
      label: `خونه 400 متری درسا در${"تهران"}`,
    },
  ];
  return (
    <div className="padding-section flex-col-center sm:mt-24 mt-15">
      <div className="flex-col-center sm:gap-6 gap-3">
        <Breadcrumb
          items={items}
          twClassname="w-full flex-center justify-start"
        />
        <div className="flex-center justify gap-5 bg-amber-200">
          <div className="flex flex-1">
            <InfoCardContainer icon={<FiPhoneCall />} labelText="اطلاعات تماس">
              <div className="w-full flex-col-center gap-8">
                <div className="relative flex flex-col w-full gap-6">
                  <div className="flex-col-center gap-3">
                    <span className="w-12 h-12 rounded-2xl bg-gray-200"></span>
                    <span className="flex-col-center">
                      <span className="text-16-medium text-white">
                        محمد رضا ساداتی
                      </span>
                      <span className="flex-center gap-2 text-gray-300">
                        <p>12 مرداد - 1401 / 12:33</p>
                        <FiCalendar />
                      </span>
                    </span>
                  </div>
                  <div className="flex-col-center gap-4">
                    <div className="w-full flex-center justify-between">
                      <div className="flex-center gap-0.5 text-16-medium text-primary-accent-green">
                        <span>ت</span>
                        <span>40000000</span>
                      </div>
                      <div className="flex-center gap-2 text-16-medium text-gray-300">
                        <span>: قیمت رهن از</span>
                        <Image alt="icon" src={dolor} className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="w-full flex-center justify-between">
                      <div className="flex-center gap-0.5 text-16-medium text-primary-accent-green">
                        <span>ت</span>
                        <span>40000000</span>
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
                  <Button
                    text="تماس با 0933****9"
                    icon={<FiPhoneCall />}
                    buttonStyle={{
                      background: "var(--color-primary-accent-green)",
                      width: "100%",
                      fontSize: "13px",
                      color: "var(--color-dark-800)",
                      borderRadius: "10px",
                    }}
                  />
                  <Button
                    text="گفتگو با فروشنده"
                    icon={
                      <Image alt="icon" src={comment} className="w-4 h-4" />
                    }
                    buttonStyle={{
                      background: "transparent",
                      width: "100%",
                      fontSize: "13px",
                      color: "var(--color-white-pure)",
                      border: "1px solid var(--color-white-pure)",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </InfoCardContainer>
          </div>
          <div className="flex-col-center gap-2.5 max-w-[350px] rounded rounded-[32px]">
            <div className="rounded rounded-[32px]">
              <Image src={HousePicture} className="h-[172px]" alt="home pic" />
            </div>
            <div className="relative flex-center h-[172px] w-full">
              <div
              style={{
                background: `url(${HousePicture.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
              }}
              className="relative min-h-[172px] w-full bg-contain bg-center  brightness-60"
            >
            </div>
            <span className="absolute text-semibold-24 z-1 whitespace-nowrap"> +12 عکس دیگر </span>
            </div>
          </div>
          <div className="flex flex-2 rounded rounded-[32px] shadow-000-8">
            <Image src={HousePicture} alt="home pic" />
          </div>
        </div>
      </div>

      {/* <Container>
      </Container> */}
    </div>
  );
};

export default SingleHousePage;
