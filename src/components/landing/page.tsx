import React from "react";
import AboutUs from "./aboutus/page";
import BuyHouse from "./buyhouse/page";
import UserComment from "./usercomment/page";
import ScrollSlide from "@/src/components/animations/GoingFromRight";
const Landing = () => {
  return (
    <>
      <ScrollSlide direction="left">
        <AboutUs></AboutUs>
      </ScrollSlide>

      <BuyHouse />

      <ScrollSlide direction="right">
        <div className="flex-col-center">
          <UserComment></UserComment>
        </div>
      </ScrollSlide>
    </>
  );
};

export default Landing;
