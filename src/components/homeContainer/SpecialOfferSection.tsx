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

const SpecialOfferSection = async () => {
  const result = await getHouses();
  const houses = result?.houses || [];

  return (
    <div className="relative flex-center items-start padding-section w-full h-186">
      <BlureLightCircle position="sm:right-8 top-5"/>
      <ContentContainerShape />
      <div className="w-344 absolute flex flex-col gap-6 p-8">
        <div className="w-full flex-center justify-end ">
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
          <div className="w-full flex flex-col gap-6 items-end justify-start">
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
              <SpecialOfferSlider houses={houses} />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferSection;
