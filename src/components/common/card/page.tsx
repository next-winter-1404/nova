import { FC, ReactNode } from "react";
interface CardContainerProps {
  color: string;
  labelSize: "md" | "lg";
  cavity: "sharp" | "round";
  labelContent:ReactNode
  mainContent:ReactNode
  width:string
}

const CardContainer: FC<CardContainerProps> = ({
  color,
  labelSize,
  cavity,
  labelContent,
  mainContent,
  width
}) => {
  return (
    <div className={`flex  items-end mt-60  relative justify-center flex-col `} style={{width:width}}>
       <div
        className={`flex items-end relative ${
          labelSize === "lg" ? "w-1/2 md:w-2/5 lg:w-1/6" : "w-1/2 md:w-1/3"
        }`}
      >
        <div
          className={`${
            cavity == "round"
              ? "w-5 h-5 bottom-0 left-[-18px]"
              : "w-5 h-14 -bottom-2  left-[-28px] rotate-41"
          }  rounded-br-full z-10 absolute 
             `}
          style={{
            boxShadow: `${
              cavity == "round" ? "5px 4px" : "10px 10px"
            } ${color}`,
          }}
        ></div>
        
        {cavity == "sharp" && (
          <div
            className={`w-5 h-15  z-10 absolute bottom-2 rotate-45
  left-[-18px] `}
            style={{ boxShadow: `25px 10px 0px 0px ${color}` }}
          ></div>
        )}

        <div className="flex-center bg-[#2D2D2D]   rounded-se-[30px]  rounded-ss-[60px]  w-full p-2 ">
         {labelContent}
        </div>

      </div>

      <div className="rounded-ss-[30px] rounded-b-[30px] bg-[#2D2D2D] w-full  flex-center p-6 ">
      {mainContent}
      </div>
    </div>
  );
};

export default CardContainer;
