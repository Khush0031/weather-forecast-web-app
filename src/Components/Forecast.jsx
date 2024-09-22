/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import ReactAnimatedWeather from "react-animated-weather";

const apiKey = (import.meta.env.VITE_WEATHER_API_KEY)

function Forecast({ weatherData }) {
  const { data } = weatherData || {};
  const [forecastData, setForecastData] = useState([]);
  const [isCelsius, setIsCelsius] = useState(true);

  useEffect(() => {
    const fetchForecastData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${data?.name}&appid=${apiKey}&units=metric`;

      if (data?.name) {
        try {
          const response = await fetch(url);
          const jsonResponse = await response.json();
          setForecastData(jsonResponse?.list || []);
        } catch (error) {
          console.error("Error fetching forecast data:", error);
        }
      }
    };

    fetchForecastData();
  }, [data?.name]);

  const formatDay = (timestamp) => {
    const options = { weekday: "short" };
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", options);
  };

  const getCurrentDate = () => {
    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  const convertToFahrenheit = (temp) => Math.floor((temp * 9) / 5 + 32);

  const renderTemperature = (temp) => {
      {console.log("Temp : ",data?.main?.temp )}
    return isCelsius ? Math.floor(temp) : convertToFahrenheit(temp);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevUnit) => !prevUnit);
  };

  if (!weatherData || !data) return null; // Return early if no data is available

  return (
    <div>
      <div className="city-name">
        <h2>
          {data?.name}, <span>{data?.sys?.country}</span>
        </h2>
      </div>
      <div className="date">{getCurrentDate()}</div>
      <div className="temp">
        {data?.weather?.[0]?.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            alt={data?.weather[0]?.description}
            className="temp-icon"
          />
        )}
        {data?.main?.temp !== undefined && (
          
          <>
         
            {renderTemperature(data?.main?.temp)}
            <sup className="temp-deg" onClick={toggleTemperatureUnit}>
              {isCelsius ? "°C" : "°F"} | {isCelsius ? "°F" : "°C"}
            </sup>
          </>
        )}
      </div>
      {data?.weather?.[0]?.description && (
        <p className="weather-des">{data?.weather[0]?.description}</p>
      )}
      <div className="weather-info">
        <div className="col">
          <ReactAnimatedWeather icon="WIND" size={40} />
          <div>
            <p className="wind">{data?.wind?.speed} m/s</p>
            <p>Wind Speed</p>
          </div>
        </div>
        <div className="col">
          <ReactAnimatedWeather icon="RAIN" size={40} />
          <div>
            <p className="humidity">{data?.main?.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>

      <div className="forecast">
        <h3>5-Day Forecast:</h3>
        <div className="forecast-container">
          {forecastData.slice(0, 5).map((day) => (
            <div className="day" key={day?.dt}>
              <p className="day-name">{formatDay(day?.dt)}</p>
              {day?.weather?.[0]?.icon && (
                <img
                  className="day-icon"
                  src={`https://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png`}
                  alt={day?.weather[0]?.description}
                />
              )}
              <p className="day-temperature">
                {Math.round(day?.main?.temp_min)}° / <span>{Math.round(day?.main?.temp_max)}°</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forecast;
