import BlureLightCircle from "../common/BlureLightCircle";
import Container from "../common/Container";

import Image from "next/image";
import arrowRight from "@/public/icons/Group34.svg";
import Button from "../common/button/page";
import { BsChevronLeft } from "react-icons/bs";
import SelectedTab from "../reserveHouse/SelectedTab";
import { ITab } from "@/src/core/types/ITab";
import MortgageAndRentTab from "./MortgageAndRentTab";
import { getHouses } from "@/src/utils/sevices/api/houses/getHouses";


const DepositAndRentSection = async () => {
  const getAllHouse = await getHouses()
  const result = getAllHouse?.houses || []
  const tabs: ITab[] = [
    {
      value: "Mortgage",
      label: "رهن خونه",
    },
    {
      value: "rent",
      label: "اجاره ملک",
    },
  ];

  return (
    <div className="w-full relative padding-section">
      <BlureLightCircle bgColor="#8CFF4552" />
      
        <div className="w-full flex flex-col items-end gap-12">
          <div className="w-full flex flex-col items-end gap-6 justify-start">
            <span className="flex-center justify-end gap-4">
              <Image src={arrowRight} alt="icon" width={48} height={16} />
              <p className="text-16-medium text-primary-accent-green">
                با هر مبلغی خونه دار شو
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
              <span className="flex-center flex-nowrap gap-6">
                <SelectedTab
                  options={tabs}
                  twClassname="w-[200px] h-[44px]"
                  buttonWidth="w-[94px]"
                />
                <i className="h-4 w-0.5 bg-gray-300"></i>
                <h3 className="flex-center justify-end text-32-medium">
                  رهن و اجاره ملک در دلتا
                </h3>
              </span>
            </div>
            <Container>
              <div className="w-full overflow-hidden flex-center gap-8 justify-end">
                <MortgageAndRentTab cardData={result}/>
              </div>
            </Container>
          </div>
        </div>
     
    </div>
  );
};

export default DepositAndRentSection;
