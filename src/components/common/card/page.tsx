import { FC, ReactNode,CSSProperties } from "react";
interface CardContainerProps {
  labelSize: "md" | "lg";
  cavity: "sharp" | "round";
  labelContent:ReactNode
  mainContent:ReactNode
  width:string,
  mainBackground:string,
  labelBackground:string,
  parentExtraStyle?:CSSProperties,
  mainExtraStyle?:CSSProperties,
  labelExtraStyle?:CSSProperties,
}

const CardContainer: FC<CardContainerProps> = ({
  labelSize,  //md or lg
  cavity, //sharp or round
  labelContent, 
  mainContent,
  width, //tailwind
  labelBackground, //tailwind
  mainBackground, //tailwind
  parentExtraStyle, //inline css ==> {{}},
  labelExtraStyle, //inline css ==> {{}},
  mainExtraStyle //inline css ==> {{}},
}) => {
  return (
    <div className={`flex  items-end  relative justify-center flex-col ${width}`} style={parentExtraStyle}  >
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
            } ${mainBackground}`,
          }}
        ></div>
        
        {cavity == "sharp" && (
          <div
            className={`w-5 h-15  z-10 absolute bottom-2 rotate-45
  left-[-18px] `}
            style={{ boxShadow: `25px 10px 0px 0px ${mainBackground}` }}
          ></div>
        )}

        <div className={`${labelBackground} flex-center    rounded-se-[30px]  rounded-ss-[60px]  w-full p-2`} style={labelExtraStyle}>
         {labelContent}
        </div>

      </div>

      <div className={`${mainBackground} rounded-ss-[30px] rounded-b-[30px]  w-full  flex-center p-6 `} style={mainExtraStyle}>
      {mainContent}
      </div>
    </div>
  );
};

export default CardContainer;
