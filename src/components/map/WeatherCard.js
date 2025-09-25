import React, { useEffect, useState } from "react";
import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";
import "./WeatherMap.css";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [iconError, setIconError] = useState(false);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const apiKey = "1828ad4fcb19ab8b229ab979593d6cc7";
      const city = "Reykjavik";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (data) {
        setWeather(data);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return <WiDaySunny />;
      case "Clouds":
        return <WiCloud />;
      case "Rain":
        return <WiRain />;
      case "Snow":
        return <WiSnow />;
      case "Thunderstorm":
        return <WiThunderstorm />;
      case "Mist":
      case "Fog":
        return <WiFog />;
      default:
        return <WiDaySunny />;
    }
  };

  if (!weather) return null;

  const { main } = weather.weather[0];
  const temperature = weather.main.temp;
  const iconStatic = getWeatherIcon(main);
  const iconGoogle = `https://openweathermap.org/img/wn/${weather.weather[0]["icon"]}@2x.png`;

  return (
    <div className="weather-wrapper">
      <div className="weather-card">
        <p className="weather-temp">{Math.round(temperature)} C</p>
        {iconError ? (
          <div className="weather-icon-static">{iconStatic}</div>
        ) : (
          <img
            className="weather-icon"
            src={iconGoogle}
            alt="weather icon"
            onError={() => setIconError(true)}
          />
        )}
        <p className="weather-location">Reykjavik, Iceland</p>
      </div>
    </div>
  );
};

export default WeatherCard;
