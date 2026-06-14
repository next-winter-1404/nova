export const getWeather = async (query: string) => {
    try {
            const res = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${query}&aqi=no`,
                {
                    next: {
                        revalidate: 1800,
                    },
                }
            );
            if (!res.ok) {
            return null;
        }
        return await res.json();
        } catch (error) {
            console.log(error);
            return null;
        }
};