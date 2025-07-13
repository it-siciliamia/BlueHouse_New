import React, { useState, useRef } from "react";
import useBreakpoints from "../../Styles/useBreakpoints";
import { useLocation } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import { FiMaximize, FiX } from "react-icons/fi";
import "./WeatherMap.css";

const NewMap = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();

  const location = useLocation();
  const [mapType, setMapType] = useState("roadmap");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const iframeRef = useRef(null);

  const handleButtonClick = (newMapType) => {
    setMapType(newMapType);
  };

  const mapSrc =
    !isMobile && mapType === "roadmap"
      ? "https://www.google.com/maps/d/u/0/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&output=embed&ll=64.15066066039589%2C-21.95341584912111&z=13"
      : isMobile && mapType === "roadmap"
      ? "https://www.google.com/maps/d/u/0/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&output=embed&ll=64.14332483909587%2C-21.983799912841814&z=12"
      : !isMobile && mapType === "satellite"
      ? "https://www.google.com/maps/d/u/0/embed?mid=15LpDDItfBNP1Bo9lK9bPlP8PYblE1nw&ehbc=2E312F&ll=64.15066066039589%2C-21.95341584912111&z=13"
      : "https://www.google.com/maps/d/u/0/embed?mid=15LpDDItfBNP1Bo9lK9bPlP8PYblE1nw&ehbc=2E312F&ll=64.14332483909587%2C-21.983799912841814&z=12";

  const handleFullScreen = () => {
    setIsFullScreen(true);
    iframeRef.current.focus();
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const buttonStyles = (active) => ({
    backgroundColor: active ? "#f0f0f0" : "#fff",
    color: "#222",
    border: "none",
    borderRadius: "0px",
    padding: "10px 24px",
    fontSize: "15px",
    fontWeight: 500,
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  });

  return (
    <>
      {!isFullScreen && (
        <div
          id="MAP"
          style={{
            display:
              location.pathname === "/" ||
              location.pathname.startsWith("/beds24")
                ? "block"
                : "none",
            position: "relative",
            margin: isMobile || isTablet ? "50px 0" : "90px 0",
            width: "100%",
            height: !isDesktop ? "490px" : "590px",
            overflow: "hidden",
          }}
        >
          {/* Map Type Buttons */}
          <div
            style={{
              position: "absolute",
              top: "30px",
              left: "20px",
              display: "flex",
              gap: "10px",
              zIndex: 1,
            }}
          >
            <button
              onClick={() => handleButtonClick("roadmap")}
              style={buttonStyles(mapType === "roadmap")}
            >
              Map
            </button>
            <button
              onClick={() => handleButtonClick("satellite")}
              style={buttonStyles(mapType === "satellite")}
            >
              Satellite
            </button>
          </div>

          {/* Fullscreen Button */}
          {!isMobile && (
            <button
              onClick={handleFullScreen}
              aria-label="Map full screen mode"
              style={{
                position: "absolute",
                top: "30px",
                right: "20px",
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "0px",
                padding: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              <FiMaximize
                style={{ width: "22px", height: "22px", color: "#0c0c31ff" }}
              />
            </button>
          )}

          {/* Weather Card */}
          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "20px" : "30px",
              left: isMobile ? "10px" : "-200px",
              zIndex: 1,
            }}
          >
            <WeatherCard />
          </div>

          {/* Map Iframe */}
          <iframe
            ref={iframeRef}
            title="Google Maps"
            src={mapSrc}
            width="100%"
            height="662px"
            style={{
              position: "absolute",
              top: "-70px",
              left: 0,
              outline: "none",
              border: "none",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      )}

      {/* Fullscreen Mode */}
      {isFullScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            backgroundColor: "#fff",
          }}
        >
          {/* Exit fullscreen */}
          <button
            onClick={handleCloseFullScreen}
            aria-label="Close full screen mode"
            style={{
              position: "absolute",
              top: "80px",
              right: "20px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              zIndex: 10000,
              cursor: "pointer",
            }}
          >
            <FiX
              style={{ width: "22px", height: "22px", color: "#202030ff" }}
            />
          </button>

          {/* Map Type Buttons */}
          <div
            style={{
              position: "absolute",
              top: "80px",
              left: "20px",
              display: "flex",
              gap: "10px",
              zIndex: 10000,
            }}
          >
            <button
              onClick={() => handleButtonClick("roadmap")}
              style={buttonStyles(mapType === "roadmap")}
            >
              Map
            </button>
            <button
              onClick={() => handleButtonClick("satellite")}
              style={buttonStyles(mapType === "satellite")}
            >
              Satellite
            </button>
          </div>

          {/* Weather Card */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "-200px",
              zIndex: 10000,
            }}
          >
            <WeatherCard />
          </div>

          {/* Map Iframe */}
          <iframe
            ref={iframeRef}
            title="Google Maps Fullscreen"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: "none",
              outline: "none",
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default NewMap;
