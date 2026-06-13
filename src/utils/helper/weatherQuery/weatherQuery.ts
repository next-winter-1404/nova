export const getWeatherQuery = (
    location: any,
    address?: string
    ) => {
        if (
            location &&
            typeof location === "object" &&
            location.lat &&
            location.lng
        ) {
            return `${location.lat},${location.lng}`;
        }
    
        if (
            typeof location === "string" &&
            location.trim() &&
            location !== "لوکیشن آبجکت نفرست استرینگ بده"
        ) {
            return location;
        }
    
        if (
            address &&
            address !== "آدرس ثبت نشده"
        ) {
            return address;
        }
    
        return null;
};

export const getWeatherText = (text: string) => {
    const map: Record<string, string> = {
        Sunny: "آفتابی",
        Clear: "صاف",
        "Partly cloudy": "نیمه ابری",
        Cloudy: "ابری",
        Overcast: "کاملاً ابری",
        Mist: "مه آلود",
        Fog: "مه",
        Rain: "بارانی",
        "Light rain": "باران سبک",
        "Moderate rain": "باران متوسط",
        "Heavy rain": "باران شدید",
        Snow: "برفی",
    };
        return map[text] || text;
};