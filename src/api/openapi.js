export const getWeatherDataAuto = async (city) => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=95f8f33c978a4985bb4195036242305&q=${city}&aqi=yes`);
    return await response.json();
}

export const getCityGeoInfo = async(city) => {
    const cityData = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=bb235055d21de0efa29eedacd0777b1b`);
    return await cityData.json();
}