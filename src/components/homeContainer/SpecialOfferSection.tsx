import CardContainer from "@/src/components/common/card/page";
import Button from "../common/button/page";
import { MdAccessTime } from "react-icons/md";
import Image from "next/image";
import arrowRight from "@/public/icons/Group34.svg";
import { BsChevronLeft } from "react-icons/bs";
import Container from "../common/Container";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";
import SpecialOfferSlider from "./SpecialOfferSlider";


const SpecialOfferSection = async () => {
 const result = await getHouses();
 const houses = result?.houses || [];

  return (
    <div className="relative padding-section">
      <CardContainer
        cavity="sharp"
        labelBackground="bg-dark-860"
        labelContent={
          <Button
            text="12 : 56 : 17"
            icon={
              <span>
                <MdAccessTime />
              </span>
            }
            buttonStyle={{ padding: "12px 24px",whiteSpace:"nowrap" }}
          />
        }
        labelExtraStyle={{ padding: "24px", height: "50px" }}
        mainExtraStyle="bg-dark-860 p-6"
        curveColor="var(--color-dark-860)"
        labelSize="lg"
        width="w-full"
        //  mainBackground='bg-dark-860'
        mainContent={
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "48px",
              alignItems: "end",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "end",
                justifyContent: "start",
              }}
            >
              <span className="flex-center justify-end gap-4">
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
                <SpecialOfferSlider houses={houses}/>
              </div>
            </Container>
          </div>
        }
      />
    </div>
  );
};

export default SpecialOfferSection;
