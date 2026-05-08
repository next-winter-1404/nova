"use client";
import { useState } from "react";
import DropMenu from "@/src/components/common/dropMenu/DropMenu";
import TopReserveHouseSection from "@/src/components/reserveHouse/topSection";
import Input from "@/src/components/common/input/Input";
import { Breadcrumb, BreadcrumbItem } from "@/src/components/common/breadCrumbs";
import ProductCard from "@/src/components/common/productCard/ProductCard";

const HouseReservePage = () => {
  
  const [facil, setFacil] = useState("room");
  const Facilities = [
    {
      value: "room",
      label: "room",
    },
    {
      value: "bath",
      label: "bath",
    },
    {
      value: "balcony",
      label: "balcony",
    },
  ];
  const items:BreadcrumbItem[] = [
    {
      href: "/reserve-house",
      label: "رزرو هتل",
    },
    {
      label: `رزرو هتل ${"رشت"}`,
    },

  ];
  return (
   <div className="flex-center bg-dark-900">
     <div className="items-end flex mt-15 flex-col lg:max-w-[1375px] w-[90%] ">
        <Breadcrumb items={items} twClassname="mt-14  "/>
      <TopReserveHouseSection />
      <div className="bg-dark-800 flex  mt-6 p-6  w-full rounded-[40px] ">
        <div className="w-[40%] rounded-[40px] h-[1032px] bg-dark-900"></div>

        <div className="w-[60%] flex flex-col gap-6 items-center ">
          <div className="flex justify-evenly items-center  w-full">
            <DropMenu
              options={Facilities}
              dropDownLabel="امکانات هتل"
              onChange={setFacil}
              value={facil}
            />
            <Input
              labelText=":حداقل قیمت"
              tagBgStyle={{ background: "var(--color-dark-800)" }}
              InputHeight="h-[50]"
              placeHolder="تومان"
              textColor="text-[#AAAAAA]"
              textSize="indent-5"
              borderColor="border-[#DDDDDD]"
              labelTextSize="text-[#AAAAAA]"
              type="number"

            />
            <Input
              labelText=":حداکثر قیمت"
              tagBgStyle={{ background: "var(--color-dark-800)" }}
              InputHeight="h-[50]"
              placeHolder="تومان"
              textColor="text-[#AAAAAA]"
              textSize="indent-5"
              borderColor="border-[#DDDDDD]"
              labelTextSize="text-[#AAAAAA]"
              type="number"
            />
          </div>
          <div className="w-[90%] border-2 border-[#4E4E4E]"/>
          <div className="flex flex-col gap-12 p-6 items-center max-h-[911px] overflow-auto border w-[90%]">
            <div className="flex-col-center bg- gap-6">
              <ProductCard 
                mode="row"
                title="هتل سراوان رانین رشت"
                buttonText="بررسی و رزرو هتل"
                location="آدرس : گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ...."
                offer="15"
                oldPrice="25.000.000 "
                rate="5"
                price="15.000.000 "
                stayingLength="6"
              />
              <div className="w-[100%] border-2 border-[#4E4E4E]"/>
            </div>

            <div className="flex-col-center bg- gap-6">
              <ProductCard 
                mode="row"
                title="هتل سراوان رانین رشت"
                buttonText="بررسی و رزرو هتل"
                location="آدرس : گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ...."
                offer="15"
                oldPrice="25.000.000 "
                rate="5"
                price="15.000.000 "
                stayingLength="6"
              />
              <div className="w-[100%] border-2 border-[#4E4E4E]"/>
            </div>


            <div className="flex-col-center bg- gap-6">
              <ProductCard 
                mode="row"
                title="هتل سراوان رانین رشت"
                buttonText="بررسی و رزرو هتل"
                location="آدرس : گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ...."
                offer="15"
                oldPrice="25.000.000 "
                rate="5"
                price="15.000.000 "
                stayingLength="6"
              />
              <div className="w-[100%] border-2 border-[#4E4E4E]"/>
            </div>




            <div className="flex-col-center bg- gap-6">
              <ProductCard 
                mode="row"
                title="هتل سراوان رانین رشت"
                buttonText="بررسی و رزرو هتل"
                location="آدرس : گیلان ، رشت ، میدان آزادی ، جنب چهار راه عظ...."
                offer="15"
                oldPrice="25.000.000 "
                rate="5"
                price="15.000.000 "
                stayingLength="6"
              />
              <div className="w-[100%] border-2 border-[#4E4E4E]"/>
            </div>
            
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
            <div>salam</div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default HouseReservePage;
