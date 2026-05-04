import React from "react";
import Triangle from "../../common/triangle/page";
import CardContainer from "../../common/card/page";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full items-center gap-6 h-[800px] bg-dark-900 rounded-br-[64px] rounded-bl-[64px] text-white-pure">
      <Triangle text="درباره ما" />
      <span className=" text-[32px]">!دلتا رو بیشتر بشناس </span>
      <h2 className="text-[16px]">
        .تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی دارد تا
        بتواند در تمام لحظات کنار شما باشد
      </h2>
      <div className="flex w-full border items-center justify-center gap-5 h-[500px] border-amber-50">
        <div className="flex flex-col w-[445px] border h-[470px] border-amber-50 justify-center">
          <CardContainer
            mainExtraStyle={{ background: "var(--color-dark-700)"}}
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-9"></div>}
            labelBackground="bg-dark-700"
            curveColor="var(--color-dark-700)"
            mainContent={
              <div className="w-[421px] h-[100px]">
                <CardContainer
                  cavity="sharp"
                  labelSize="md"
                  labelBackground="bg-dark-900"
                  curveColor="var(--color-dark-900)"
                  mainExtraStyle={{ background: "var(--color-dark-900)"}}
                  mainContent={
                    <div className="">
                      <h2>
                        7 / 24 ساعت شبانه روز تیم پشتیبانی در تمام طول روز همراه
                        شما هستن
                      </h2>
                    </div>
                  }
                  labelContent={<div className="h-9"></div>}
                  />
              </div>
            }
            
            />
            <CardContainer
            mainExtraStyle={{ background: "var(--color-dark-700)" }}
            cavity="sharp"           
            labelSize="md"
            labelContent={<div className="h-9"></div>}
            labelBackground="bg-dark-700"
            curveColor="var(--color-dark-700)"
            mainContent={
              <div className="w-[421px] h-[100px]">
                <CardContainer
                  cavity="sharp"
                  labelSize="md"
                  labelBackground="bg-dark-900"
                  curveColor="var(--color-dark-900)"
                  mainExtraStyle={{ background: "var(--color-dark-900)" }}
                  
                  
                  mainContent={
                    <div className="">
                      <h2>
                        7 / 24 ساعت شبانه روز تیم پشتیبانی در تمام طول روز همراه
                        شما هستن
                      </h2>
                    </div>
                  }
                  labelContent={<div className="h-5"></div>}
                  />
              </div>
            }
            
            />
        </div>
        <div className="flex w-[445px] border h-[470px] border-amber-50 items-center justify-center">
          
        </div>
        <div className="flex w-[445px] border h-[470px] border-amber-50"></div>
      </div>
    </div>
  );
};

export default AboutUs;
