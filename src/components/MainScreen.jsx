// MainScreen.js

import React, { useContext, useState } from 'react';
import { weatherContext } from '../context/WeatherContext';
import './MainScreen.css';

function MainScreen() {
    const weatherState = useContext(weatherContext);
    const [loading, setLoading] = useState(false); // Loading state

    const handleFindWeather = async () => {
        setLoading(true);
        await weatherState.fetchData(weatherState.city);
        setLoading(false);
    };

    return (
        <>
        <div className="container">
        {weatherState.fetchedData?.current?.temp_c && <h1>{weatherState.fetchedData?.current?.temp_c} °C</h1>}
            <input
                type="text"
                placeholder="Type Your City"
                value={weatherState.city}
                onChange={(e) => weatherState.setCity(e.target.value)}
            />
            <button onClick={handleFindWeather}>Find Weather</button>

            
        </div>
       
        {/* Loading overlay */}
        {loading && (
            <div className="overlay">
                <div className="loader"></div>
            </div>
        )}
    </>
    );
}

export default MainScreen;
