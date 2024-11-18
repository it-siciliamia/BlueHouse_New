import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import { AiOutlineFullscreen } from "react-icons/ai";
import location from "../images/location.svg";

const NewMap = () => {
  const [weather, setWeather] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Fetch weather data
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

  const handleDirectionsClick = () => {
    window.open(
      "https://www.google.com/maps?cid=1655029609091171155",
      "_blank"
    );
  };

  return (
    <div
      style={{
        position: "relative",
        margin: isMobile ? "10px 0 60px 0" : "40px 0 -20px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "12%",
          backgroundColor: "white",
          zIndex: 1,
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
                zIndex: 2,
              }}
            >
              <AiOutlineFullscreen style={{ width: "30px", height: "30px" }} />
            </button>
          )}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        {!isMobile ? (
          <>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/d/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&ehbc=2E312F"
              width="100%"
              height="500"
              style={{ position: "relative", zIndex: 0 }}
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            {weather && (
              <div
                style={{
                  position: "absolute",
                  marginBottom: "10px",
                  bottom: "10px",
                  right: 0,
                  zIndex: 1,
                }}
              >
                <WeatherCard temperature={weather.main.temp} />
              </div>
            )}
          </>
        ) : (
          <button
            onClick={handleDirectionsClick}
            style={{
              position: "relative",
              top: "1px",
              width: "289px",
              height: "80px",
              margin: "0 auto",
              backgroundColor: "#073762",
              display: "flex",
              alignItems: "center",
              justifyContent:"center",
              paddingRight:'47px',
              gap: "8px",
            }}
          >
            <img
              src={location}
              alt="Logo"
              style={{ width: "47px", height: "46px" }}
            />
            <div
              style={{
                color: "white",
                textDecoration: "underline 1px",
                textUnderlineOffset: "2px",
                fontFamily:'Josefin Sans',
                fontSize: "16px",
                fontWeight: 300,
                marginTop: "5px",
              }}
            >
              DIRECTION TO <br /> BLUE HOUSE B&B
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default NewMap;
