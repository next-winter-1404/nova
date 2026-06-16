import React from "react";
import Triangle from "../../common/triangle/page";
import CommentCard from "../../common/commentCard/page";
import ScrollFloat from "../../animations/ScrollFloat/ScrollFloat";
import ScrollSlide from "../../animations/GoingFromRight";

const UserComment = () => {
  return (
    <div className="md:w-full w-[390px] md:h-[793px] h-[910px] md:gap-12 gap-8 flex-col-center flex ">
      <div className="h-[176px] flex items-center flex-col md:gap-6 gap-4">
        <Triangle text="نظرات کاربران" />
        <span className="md:text-[32px] text-[22px] text-white-pure">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.1}
          >
            !رضایت شما اعتبار و ارزش دلتا را می سازد
          </ScrollFloat>
        </span>
        <h2 className="md:text-[16px] text-[14px] text-right text-white-pure md:w-full w-[260px]">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.1}
          >
            .تیم دلتا با ارائه بهترین نیرو های خدماتی و سرویس های املاکی سعی
            دارد تا بتواند در تمام لحظات کنار شما باشد
          </ScrollFloat>
        </h2>
      </div>
      <ScrollSlide direction="right">
        <div className="w-[390px] gap-4 md:w-11/12 flex md:flex-row items-center justify-between flex-col md:h-[310px]">
          <div>
            <CommentCard></CommentCard>
          </div>
          <div>
            <CommentCard></CommentCard>
          </div>
        </div>
      </ScrollSlide>
    </div>
  );
};

export default UserComment;
