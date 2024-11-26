import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { AiOutlineFullscreen } from "react-icons/ai";
import "./WeatherMap.css";

const NewMap = () => {
  const [weather, setWeather] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    fetchWeather();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchWeather = async () => {
    try {
      const apiKey = "1828ad4fcb19ab8b229ab979593d6cc7"; // Replace with your OpenWeatherMap API key
      const city = "Reykjavik";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        margin: isMobile ? "10px 0 60px 0" : "90px 0",
        padding: "-2px",
        paddingBottom: "-1px",
        width: "100%",
        height: !isMobile ? "590px" : "390px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -50,
          right: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: "80px",
          }}
        >
          {!isMobile && (
            <button
              onClick={() => {
                const iframe = document.querySelector("iframe");
                if (iframe.requestFullscreen) {
                  iframe.requestFullscreen();
                } else if (iframe.webkitRequestFullscreen) {
                  /* Safari */
                  iframe.webkitRequestFullscreen();
                } else if (iframe.msRequestFullscreen) {
                  /* IE11 */
                  iframe.msRequestFullscreen();
                }
              }}
              style={{
                width: "60px",
                marginRight: "20px",
                backgroundColor: "rgba(0, 0, 0, 0.28)",
                color: "white",
                border: "1px solid white",
                borderRadius: "10px",
                right: "10px",
                zIndex: 1,
              }}
            >
              <AiOutlineFullscreen style={{ width: "30px", height: "30px" }} />
            </button>
          )}
        </div>
      </div>
      {weather && (
        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "20px" : "30px",
            ...(isMobile ? { left: "10px" } : { right: "15px" }),
            zIndex: 1,
          }}
        >
          <WeatherCard temperature={weather.main.temp} />
        </div>
      )}
      <iframe
        title="Google Maps"
        src={
          !isMobile
            ? "https://www.google.com/maps/d/u/0/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&output=embed&ll=64.15066066039589%2C-21.95341584912111&z=13"
            : "https://www.google.com/maps/d/u/0/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&output=embed&ll=64.14332483909587%2C-21.983799912841814&z=12"
        }
        width="100%"
        height="662px"
        style={{
          position: "absolute",
          top: "-70px",
          left: 0,
          outline: "none",
        }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default NewMap;
