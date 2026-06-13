import { getWeatherText } from "@/src/utils/helper/weatherQuery/weatherQuery";
import Image from "next/image";

interface WeatherCardProps {
    weather: any;
}

const WeatherCard = ({ weather}: WeatherCardProps) => {
    if (!weather?.current) return null;

    const condition =
        weather.current.condition?.text?.toLowerCase() || "";

    const weatherBg = condition.includes("sun")
        ? "from-amber-500/20 to-orange-500/10"
        : condition.includes("cloud")
        ? "from-slate-500/20 to-slate-700/10"
        : condition.includes("rain")
        ? "from-blue-500/20 to-cyan-500/10"
        : "from-purple-500/20 to-slate-700/10";

    const temp = weather.current.temp_c;

    const climateLabel =
        temp >= 30 ? "🔥 گرم" : temp <= 10 ? "❄️ سرد" : "🌤 معتدل";

        const conditionText = getWeatherText(
            weather.current.condition.text
        );

    return (
        <div
        className={`
            w-full
            rounded-[32px]
            p-6
            border
            border-white/10
            backdrop-blur-xl
            bg-gradient-to-br
            ${weatherBg}
            shadow-[0_8px_32px_rgba(0,0,0,0.25)]
            text-white
            mt-6
        `}
        >
        <div className="flex flex-col lg:flex-row items-center justify-between md:gap-6 gap-3"> 
            <div className="flex md:gap-3 gap-1.5 flex-col items-end text-right" dir="ltr">
                <h2 className="md:text-xl text-[14px] font-bold">
                    آب و هوای منطقه ملک
                </h2>
                <span className=" md:px-3 px-2 py-1 rounded-full bg-white/10 text-[10px] md:text-sm">
                    {climateLabel}
                </span>
            </div>

            <div className="flex gap-1.5 flex-col items-center">
                <span className="md:text-6xl text-[40px] font-bold">
                    {weather.current.temp_c}°
                </span>
                <span className="text-gray-300 md:text-sm text-[12px] ">
                    {conditionText}
                </span>
                <span className="md:text-xs text-[10px] text-gray-400 ">
                    دمای احساس‌ شده: °{weather.current.feelslike_c}
                </span>
            </div>

            <div className="flex flex-col items-center gap-3">
                <Image
                className="hidden md:block "
                    src={`https:${weather.current.condition.icon}`}
                    alt={conditionText}
                    width={96}
                    height={96}
                />
                <div className="flex flex-col gap-1 text-sm">
                    <span className="flex gap-1">
                        باد 💨 :  <h2 dir="ltr"> {weather.current.wind_kph} km/h </h2>
                    </span>

                    <span className="flex gap-1">
                        رطوبت 💧 : <h2 dir="ltr"> {weather.current.humidity} %</h2>
                    </span>

                    <span className="flex gap-1">
                        دید 👁 : <h2 dir="ltr"> {weather.current.vis_km} km </h2>
                    </span>
                </div>
            </div>
        </div>

        <div className="w-full h-px bg-white/10 my-5" />

        <div className="flex justify-between text-xs text-gray-400">
            <span className="flex md:gap-1">
            بروزرسانی :
            {" "}
            <h2 dir="ltr">{weather.current.last_updated}</h2>
            </span>

            <span className="hidden md:block">
            {weather.location.region}
            </span>
        </div>
        </div>
    );
};

export default WeatherCard;