import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import { WithTransLate } from "../helpers/translating/index";
import { AiOutlineFullscreen } from "react-icons/ai";
import "./WeatherMap.css";

const NewMap = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  const location = useLocation();
  const [mapType, setMapType] = useState("roadmap");
  const [isOverlayVisible, setOverlayVisible] = useState(false);
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
            margin: isMobile || isTablet ? "50px 0 50px 0" : "90px 0",
            padding: "-2px",
            paddingBottom: "-1px",
            width: "100%",
            height: !isDesktop ? "490px" : "590px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: !isMobile ? 30 : 20,
              left: !isMobile ? 55 : 25,
              display: "flex",
              flexDirection: !isMobile ? "row" : "column",
              gap: "5px",
              zIndex: 2,
            }}
          >
            <button
              onClick={() => handleButtonClick("roadmap")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "38px",
                cursor: "pointer",
                border:
                  mapType === "roadmap"
                    ? "1px solid white"
                    : "1px solid #314a6f6b",
                borderRadius: "10px",
                backgroundColor:
                  mapType === "roadmap" ? "rgba(0, 0, 0, 0.28)" : "#fff",
                color: mapType === "roadmap" ? "#fff" : "#000",
                outline: "none",
              }}
            >
              <span className="btnText">
                <WithTransLate text="Roadmap" />
              </span>
            </button>
            <button
              onClick={() => handleButtonClick("satellite")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "38px",
                cursor: "pointer",
                border:
                  mapType === "satellite"
                    ? "1px solid white"
                    : "1px solid #314a6f6b",
                borderRadius: "10px",
                backgroundColor:
                  mapType === "satellite" ? "rgba(0, 0, 0, 0.28)" : "#fff",
                color: mapType === "satellite" ? "#fff" : "#000",
                outline: "none",
              }}
            >
              <span className="btnText">
                <WithTransLate text="Satellite" />
              </span>
            </button>
          </div>

          {!isMobile && (
            <button
              onClick={handleFullScreen}
              aria-label={
                !isFullScreen
                  ? "Map full screen mode"
                  : "Close map full screen mode"
              }
              style={{
                position: "absolute",
                top: "30px",
                right: "50px",
                width: "60px",
                backgroundColor: "rgba(0, 0, 0, 0.28)",
                color: "white",
                border: "1px solid white",
                borderRadius: "10px",
                zIndex: 2,
                outline: "none",
                cursor: "pointer",
              }}
            >
              <AiOutlineFullscreen style={{ width: "30px", height: "30px" }} />
            </button>
          )}

          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "20px" : "30px",
              ...(isMobile ? { left: "10px" } : { left: "50px" }),
              zIndex: 1,
            }}
          >
            <WeatherCard />
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 1,
              backgroundColor: "rgba(0, 0, 0, 0)",
              cursor: "pointer",
              display: isOverlayVisible ? "none" : "block",
            }}
            onClick={() => setOverlayVisible(true)}
          ></div>
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
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            onMouseLeave={() => setOverlayVisible(false)}
          ></iframe>
        </div>
      )}
      {isFullScreen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleCloseFullScreen}
            aria-label={
              !isFullScreen
                ? "Map full screen mode"
                : "Close map full screen mode"
            }
            style={{
              position: "absolute",
              top: "30px",
              right: "50px",
              width: "60px",
              backgroundColor: "rgba(0, 0, 0, 0.28)",
              color: "white",
              border: "1px solid white",
              borderRadius: "10px",
              zIndex: 2,
              outline: "none",
              cursor: "pointer",
            }}
          >
            <AiOutlineFullscreen style={{ width: "30px", height: "30px" }} />
          </button>

          <div
            style={{
              position: "absolute",
              bottom: isMobile ? "20px" : "30px",
              ...(isMobile ? { left: "10px" } : { left: "50px" }),
              zIndex: 1,
            }}
          >
            <WeatherCard />
          </div>

          <div
            style={{
              position: "absolute",
              top: !isMobile ? 30 : 20,
              left: !isMobile ? 55 : 25,
              display: "flex",
              flexDirection: !isMobile ? "row" : "column",
              gap: "5px",
              zIndex: 2,
            }}
          >
            <button
              onClick={() => handleButtonClick("roadmap")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "38px",
                cursor: "pointer",
                border:
                  mapType === "roadmap"
                    ? "1px solid white"
                    : "1px solid #314a6f6b",
                borderRadius: "10px",
                backgroundColor:
                  mapType === "roadmap" ? "rgba(0, 0, 0, 0.28)" : "#fff",
                color: mapType === "roadmap" ? "#fff" : "#000",
                outline: "none",
              }}
            >
              <span className="btnText">
                <WithTransLate text="Roadmap" />
              </span>
            </button>
            <button
              onClick={() => handleButtonClick("satellite")}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100px",
                height: "38px",
                cursor: "pointer",
                border:
                  mapType === "satellite"
                    ? "1px solid white"
                    : "1px solid #314a6f6b",
                borderRadius: "10px",
                backgroundColor:
                  mapType === "satellite" ? "rgba(0, 0, 0, 0.28)" : "#fff",
                color: mapType === "satellite" ? "#fff" : "#000",
                outline: "none",
              }}
            >
              <span className="btnText">
                <WithTransLate text="Satellite" />
              </span>
            </button>
          </div>

          <iframe
            ref={iframeRef}
            title="Google Maps"
            src={mapSrc}
            style={{
              position: "fixed",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "109%",
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
    </>
  );
};

export default NewMap;
