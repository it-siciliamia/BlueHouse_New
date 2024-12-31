import React, { useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import Advantages from "../Advantages/Advantages";
import PhotoSlider from "../../../components/Shared/SliderSlick/SliderSlick";
import { WithTransLate } from "../../../components/helpers/translating/index";
import Button from "../../../components/Shared/Button/Button";
import locationIcon from "../../../images/services_room/location.svg";
import { price } from "../../../components/ServicesRoom/ServicesRoomData";
import s from "./PartDetails.module.scss";

const PartDetails = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(data.links.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch((err) => console.error("Failed to copy link: ", err));
  };

  const splitAmenities = (amenities) => {
    const middleIndex = Math.ceil(amenities.length / 2);
    return [amenities.slice(0, middleIndex), amenities.slice(middleIndex)];
  };

  const getPriceForRoom = () => {
    return price.find((p) => p.name === data.title);
  };
  const roomPrice = getPriceForRoom();

  const [firstColumn, secondColumn] = splitAmenities(data.amenities);

  const navigateAndScroll = (to) => {
    setTimeout(() => {
      scroller.scrollTo(to, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -70,
      });
    }, 500);
  };

  return (
    <div className={s.partDetails}>
      <div className={s.titleWrapper}>
        <h3 className={s.partDetailsTitle}>
          <WithTransLate text={data.title} />
        </h3>
        <div onClick={handleCopyLink} style={{ cursor: "pointer" }}>
          <img
            src={data.links.icon}
            alt="Shared link"
            style={{ width: "30px", height: "auto" }}
          />
        </div>
        {copied && (
          <div className={s.copiedMessage}>
            <WithTransLate text="Link copied to clipboard!" />
          </div>
        )}
      </div>
      {(isMobile || isTablet) && (
        <PhotoSlider photos={data.photos} height="250px" />
      )}

      <div className={s.locationPart}>
        <h4>
          <WithTransLate text="Location" />
        </h4>
        <div className={s.locationWrapper}>
          <div
            className={s.addressWrapper}
            onClick={() => navigateAndScroll("MAP")}
          >
            <img
              src={locationIcon}
              alt="Go to Location"
              style={{
                width: "25px",
                height: "auto",
              }}
            />
            <span className={s.textWrapper} style={{ marginTop: "3px" }}>
              <WithTransLate text="Address" />
            </span>
          </div>
          {(isMobile || isTablet) && (
            <span
              className={s.textWrapperNavigate}
              onClick={() => navigateAndScroll("MAP")}
            >
              <WithTransLate text="Show on map" />
            </span>
          )}
        </div>
      </div>

      {(isMobile || isTablet) && (
        <div>
          <Advantages />
        </div>
      )}

      <div>
        <h4 style={{ marginBottom: isMobile ? "20px" : "10px" }}>
          <WithTransLate text="Description" />
        </h4>
        <p className={s.textWrapper}>
          <WithTransLate text={data.description} />
        </p>
      </div>
      <div>
        <h4>
          <WithTransLate text="Amenities" />
        </h4>
      </div>
      <div className={s.roomServices}>
        <div className={s.servicesColumn}>
          {firstColumn.map((service, idx) => (
            <div key={idx} className={s.serviceItem}>
              <img
                src={service.icon}
                alt={service.name}
                style={{ width: "20px", height: "auto" }}
              />
              <span>
                <WithTransLate text={service.name} />
              </span>
            </div>
          ))}
        </div>
        <div className={s.servicesColumn}>
          {secondColumn.map((service, idx) => (
            <div key={idx} className={s.serviceItem}>
              <img
                src={service.icon}
                alt={service.name}
                style={{ width: "20px", height: "auto" }}
              />
              <span>
                <WithTransLate text={service.name} />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>
          <WithTransLate text="Price" />
        </h4>
      </div>
      <div className={s.pricePart}>
        <div className={s.priceWrapper}>
          <span>
            <WithTransLate text={`${roomPrice.type1}:`} />
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <strong>
              <WithTransLate text={`from € ${roomPrice.price1}`} />
            </strong>
            <span style={{ fontWeight: "300" }}>
              <WithTransLate text="1 room for a night" />
            </span>
          </div>
          <Button
            text="Book Now"
            btnClass="btnDark"
            width="218px"
            // handleClick={() => {}}
          />
        </div>
        <div
          className={s.priceWrapper}
          style={{ borderBottom: "1px solid #1d39675d" }}
        >
          <span
            style={{
              color: "green",
              display: "inline-flex",
              alignItems: "flex-start",
            }}
          >
            <WithTransLate text={`${roomPrice.type2}:`} />
            <img
              src={roomPrice.icon}
              alt={roomPrice.type2}
              style={{
                width: "25px",
                height: "25px",
                marginLeft: "5px",
                position: "relative",
                top: "-3px",
              }}
            />
          </span>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <strong>
              <WithTransLate text={`from € ${roomPrice.price2}`} />
            </strong>
            <span style={{ fontWeight: "300" }}>
              <WithTransLate text="1 room for a night" />
            </span>
          </div>
          <Button
            text="Book Now"
            btnClass="btnDark"
            width="218px"
            // handleClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default PartDetails;
