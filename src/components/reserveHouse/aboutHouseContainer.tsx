import React, { FC } from "react";
import { IHouse } from "@/src/core/types/IHouse";
import WeatherCard from "../common/weatherCard/WeatherCard";
interface IProp {
  title: string;
  caption: string;
  weather: any;
}
const AboutHouseContainer: FC<IProp> = ({title,caption,weather}) => {
  return (
    <div dir="rtl" className="text-white-pure  flex flex-col gap-3 ">
      <h2 className="text-3xl">{title}</h2>
      <p className="text-gray-300">{caption}</p>
      <div className="w-full" dir="rtl">
        {weather && (
          <div className="w-full ">
            <WeatherCard weather={weather} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutHouseContainer;
