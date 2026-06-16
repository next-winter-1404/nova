import Button from "../common/button/page";
import { MdAccessTime } from "react-icons/md";
import Image from "next/image";
import arrowRight from "@/public/icons/Group34.svg";
import { BsChevronLeft } from "react-icons/bs";
import Container from "../common/Container";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import SpecialOfferSlider from "./SpecialOfferSlider";
import ContentContainerShape from "../common/shape/ContentContainerShape";
import BlureLightCircle from "../common/BlureLightCircle";
import smallLeftArrowWhite from "@/src/assets/icons/smallLeftArrowWhite.svg";
import StarBorder from "../animations/StarBorder/StarBorder";
import ArrowAnimation from "../animations/GoInfiniteLeft";

const SpecialOfferSection = async () => {
  const result = await getHouses();
  const houses = result?.houses || [];

  return (
    <div className="relative">
      <BlureLightCircle position="sm:right-8 top-5" />
      <div className=" flex-center items-start padding-section z-10">
        <svg
          viewBox="0 0 1376 744"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[744px] text-dark-700"
        >
          <path
            d="M1118.91 76.3199C1132.93 76.3199 1145.93 68.98 1153.16 56.97C1153.16 56.97 1175.84 19.35 1175.84 19.35C1183.07 7.33997 1196.07 0 1210.09 0C1210.09 0 1336 0 1336 0C1358.09 0 1376 17.91 1376 40C1376 40 1376 704 1376 704C1376 726.09 1358.09 744 1336 744C1336 744 40 744 40 744C17.9086 744 0 726.09 0 704C0 704 0 116.32 0 116.32C0 94.23 17.9086 76.3199 40 76.3199C40 76.3199 1118.91 76.3199 1118.91 76.3199Z"
            fill="currentColor"
          />
        </svg>
        <div className="md:w-[96%] w-[86%] absolute flex flex-col gap-6 p-4 md:p-8">
          <div className="w-full hidden sm:flex-center sm:justify-end ">
            <Button
              text="12 : 56 : 17"
              icon={
                <span>
                  <MdAccessTime />
                </span>
              }
              buttonStyle={{ padding: "12px 24px", whiteSpace: "nowrap" }}
            />
          </div>
          <div className="w-full flex flex-col gap-6 items-end justify-start">
            <div className="w-full flex flex-col gap-6 items-end justify-start sm:mt-0 mt-20">
              <span className="w-full flex-center justify-end gap-4">
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
                <StarBorder
                  as="button"
                  className="custom-class"
                  color="#7569ff"
                  speed="5s"
                >
                  <Button
                    text=" مشاهده همه"
                    width="w-[137px]"
                    height="h-[36px]"
                    buttonStyle={{
                      display: "flex",
                      justifyItems: "center",
                      alignItems: "center",
                      fontSize: "16px",
                      gap: "20px",
                      backgroundColor: "#393939",
                      border: "2px solid #FFF",
                    }}
                    icon={
                      <ArrowAnimation duration={1.5} distance={2}><Image src={smallLeftArrowWhite} alt="smallLeftArrow" /></ArrowAnimation>
                    }
                  />
                </StarBorder>
                <h3 className="flex-center justify-end text-32-medium">
                  پیشنهادا ویژه دلتا
                </h3>
              </div>
            </div>
            <Container>
              <div className="w-full overflow-hidden flex-center gap-8">
                <SpecialOfferSlider houses={houses} />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSection;
