import { useState, useRef, useEffect } from "react";
import { FiMaximize, FiX } from "react-icons/fi";

import WeatherCard from "./WeatherCard.jsx";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";
import "./WeatherMap.css";

const NewMap = () => {
  const { isMobile, isTablet, isDesktop } = useBreakpoints();
  const [mapType, setMapType] = useState("roadmap");
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);
  const iframeRef = useRef(null);

  // ✅ FIX: Add error handling for async response errors
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      if (
        event.reason &&
        event.reason.message &&
        event.reason.message.includes("message channel closed")
      ) {
        // Suppress this specific error from browser extensions
        event.preventDefault();
        console.warn("Suppressed message channel error (likely from browser extension)");
      }
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  // Deactivate map on scroll/click outside to prevent zoom while scrolling page
  useEffect(() => {
    const handleInteraction = (event) => {
      if (isMapActive) {
        const mapContainer = document.getElementById("MAP");
        if (mapContainer && !mapContainer.contains(event.target)) {
          setIsMapActive(false);
        }
      }
    };

    const handleScroll = () => {
      if (isMapActive) {
        setIsMapActive(false);
      }
    };

    document.addEventListener("click", handleInteraction);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleInteraction);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMapActive]);

  const handleButtonClick = (newMapType) => {
    setMapType(newMapType);
  };

  // ✅ FIX 1: Added &loading=async to all map URLs
  const mapSrc =
    !isMobile && mapType === "roadmap"
      ? "https://www.google.com/maps/d/u/0/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&output=embed&ll=64.15066066039589%2C-21.95341584912111&z=13&loading=async"
      : isMobile && mapType === "roadmap"
        ? "https://www.google.com/maps/d/u/0/embed?mid=1rJb5xtEAOs1UJpXOanRKSOKsj1DWeaA&output=embed&ll=64.14332483909587%2C-21.983799912841814&z=12&loading=async"
        : !isMobile && mapType === "satellite"
          ? "https://www.google.com/maps/d/u/0/embed?mid=15LpDDItfBNP1Bo9lK9bPlP8PYblE1nw&ehbc=2E312F&ll=64.15066066039589%2C-21.95341584912111&z=13&loading=async"
          : "https://www.google.com/maps/d/u/0/embed?mid=15LpDDItfBNP1Bo9lK9bPlP8PYblE1nw&ehbc=2E312F&ll=64.14332483909587%2C-21.983799912841814&z=12&loading=async";

  const handleFullScreen = () => {
    setIsFullScreen(true);
    iframeRef.current.focus();
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  const handleMapClick = () => {
    setIsMapActive(true);
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

  // Get weather card positioning based on screen size (keeping your settings)
  const getWeatherCardPosition = () => {
    if (window.innerWidth <= 599) {
      // Mobile: align with MAP button left edge
      return {
        bottom: "20px",
        left: "20px", // Same as MAP button left position
      };
    } else if (window.innerWidth <= 1279) {
      // Tablet: align with MAP button left edge
      return {
        bottom: "30px",
        left: "20px", // Same as MAP button left position
      };
    } else {
      // Desktop: position next to legend area
      return {
        bottom: "30px",
        left: "70px", // Position after legend area (your setting)
      };
    }
  };

  return (
    <>
      {!isFullScreen && (
        <div
          id="MAP"
          style={{
            position: "relative",
            margin: isMobile || isTablet ? "50px 0" : "0 0 2.5rem 0",
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

          {/* Fullscreen Button - show on all screen sizes */}
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
            <FiMaximize style={{ width: "22px", height: "22px", color: "#0c0c31ff" }} />
          </button>

          {/* Weather Card (keeping your positioning) */}
          <div
            style={{
              position: "absolute",
              ...getWeatherCardPosition(),
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

          {/* Overlay to prevent scroll zoom / click to activate map */}
          <div
            onClick={handleMapClick}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              cursor: isMapActive ? "default" : "pointer",
              backgroundColor: "transparent",
              pointerEvents: isMapActive ? "none" : "auto",
            }}
            title={isMapActive ? "" : "Click to interact with map"}
          />
        </div>
      )}

      {/* Fullscreen Mode */}
      {!!isFullScreen && (
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
            <FiX style={{ width: "22px", height: "22px", color: "#202030ff" }} />
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

          {/* Weather Card in fullscreen (keeping your positioning) */}
          <div
            style={{
              position: "absolute",
              bottom: "30px",
              left: "60px", // Your setting
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
