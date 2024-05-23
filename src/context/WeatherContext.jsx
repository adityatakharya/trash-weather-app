import React, {createContext, useState} from "react";
import { getCityGeoInfo, getWeatherDataAuto } from "../api/openapi";

export const weatherContext = createContext(null);

export const WeatherContextProvider = (props) => {
    const [fetchedData, setFetchedData] = useState({});
    const [city, setCity] = useState("");


    const fetchData = async (city) => {
        const weatherData = await getWeatherDataAuto(city);
        console.log(weatherData);
        setFetchedData(weatherData);
    }

    return(
        <weatherContext.Provider value={{fetchedData, city, setCity, fetchData}}>
            {props.children}
        </weatherContext.Provider>
    )
}