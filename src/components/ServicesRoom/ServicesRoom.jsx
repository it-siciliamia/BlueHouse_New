import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import useBreakpoints from "../../Styles/useBreakpoints";
import { WithTransLate } from "..//helpers/translating/index";
import SliderPreviewPhoto from "./SliderPreviewPhoto/SliderPreviewPhoto";
import SliderPreviewPhotoM from "./SliderPreviewPhotoM/SliderPreviewPhotoM";
import Button from "../Shared/Button/Button";
import { items, price } from "./ServicesRoomData";
import {
  getDayDifference,
  getAddParams,
} from "../../redux/dataSearch/dataSearch-selectors";

import s from "./ServicesRoom.module.scss";

const ServicesRoom = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useBreakpoints();
  const { room: roomNumber } = useSelector(getAddParams);
  const days = useSelector(getDayDifference);

  const history = useHistory();

  const handleNavigation = (href) => {
    const relativePath = href.replace(`${window.location.origin}`, "");
    history.push(relativePath);
  };

  const roomItems = items.filter((item) => item.type === "room");
  const houseItems = items.filter((item) => item.type === "house");

  const splitServices = (services) => {
    const middleIndex = Math.ceil(services.length / 2);
    return [services.slice(0, middleIndex), services.slice(middleIndex)];
  };

  const getPriceForRoom = (roomTitle) => {
    return price.find((p) => p.name === roomTitle);
  };

  return (
    <section className={s.services}>
      <div className={s.servicesPart}>
        <div className={s.titleWrapper}>
          <h2 className={s.titleFirst}>
            <WithTransLate text="ROOMS" />
          </h2>
        </div>
        <ul className={s.roomsList}>
          {roomItems.map((room, index) => {
            const [firstColumn, secondColumn] = splitServices(room.services);
            const roomPrice = getPriceForRoom(room.title);

            return (
              <li key={index} className={s.roomItem}>
                <div className={s.roomImage}>
                  {isDesktop && (
                    <SliderPreviewPhoto
                      mainImage={room.mainImage}
                      photos={room.photos}
                    />
                  )}
                  {(isMobile || isTablet || isLaptop) && (
                    <SliderPreviewPhotoM
                      mainImage={room.mainImage}
                      photos={room.photos}
                    />
                  )}
                </div>
                <div className={s.roomInfo}>
                  <h4 className={s.roomInfoTitle} style={{ marginTop: "10px" }}>
                    <WithTransLate text={room.title} />
                  </h4>
                  <div className={s.roomServicesWrapper}>
                    <div className={s.roomServices}>
                      <div className={s.servicesColumn}>
                        {firstColumn.map((service, idx) => (
                          <div key={idx} className={s.serviceItem}>
                            <img
                              src={service.icon}
                              alt={service.name}
                              style={{ width: "24px", height: "24px" }}
                            />
                            <span className={s.servicesText}>
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
                              style={{ width: "24px", height: "24px" }}
                            />
                            <span className={s.servicesText}>
                              <WithTransLate text={service.name} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.pricePart}>
                  <div className={s.priceWrapperPlus}>
                    {(isMobile || isTablet || isLaptop) && (
                      <div className={s.priceWrapper}>
                        <strong>
                          <WithTransLate
                            text={`from € ${(
                              roomPrice.price1 *
                              (roomNumber === 0 ? 1 : roomNumber) *
                              (days === 0 ? 1 : days)
                            ).toFixed(0)}`}
                          />
                        </strong>
                        <span style={{ fontWeight: "300" }}>
                          <WithTransLate
                            text={`${
                              roomNumber === 1
                                ? "1 room"
                                : `${roomNumber} rooms`
                            } for ${days <= 1 ? "a night" : `${days} nights`}`}
                          />
                        </span>
                      </div>
                    )}
                    {isDesktop && (
                      <div className={s.priceWrapper}>
                        <div className={s.pricePartWrapper}>
                          <span>
                            <WithTransLate text={`${roomPrice.type1}:`} />
                          </span>
                          <strong>
                            <WithTransLate
                              text={`from € ${(
                                roomPrice.price1 *
                                (roomNumber === 0 ? 1 : roomNumber) *
                                (days === 0 ? 1 : days)
                              ).toFixed(0)}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate
                              text={`${
                                roomNumber === 1
                                  ? "1 room"
                                  : `${roomNumber} rooms`
                              } for ${
                                days <= 1 ? "a night" : `${days} nights`
                              }`}
                            />
                          </span>
                        </div>
                        <div className={s.pricePartWrapper}>
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
                          <strong>
                            <WithTransLate
                              text={`from € ${(
                                roomPrice.price2 *
                                (roomNumber === 0 ? 1 : roomNumber) *
                                (days === 0 ? 1 : days)
                              ).toFixed(0)}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate
                              text={`${
                                roomNumber === 1
                                  ? "1 room"
                                  : `${roomNumber} rooms`
                              } for ${
                                days <= 1 ? "a night" : `${days} nights`
                              }`}
                            />
                          </span>
                        </div>
                      </div>
                    )}
                    <Button
                      text="Book"
                      btnClass="btnDark"
                      width="218px"
                      handleClick={() => handleNavigation(room.links.href)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={s.servicesPart}>
        <div className={s.titleWrapper}>
          <h2 className={s.titleSecond}>
            <WithTransLate text="HOUSES" />
          </h2>
        </div>
        <ul className={s.roomsList}>
          {houseItems.map((room, index) => {
            const [firstColumn, secondColumn] = splitServices(room.services);
            const roomPrice = getPriceForRoom(room.title);

            return (
              <li key={index} className={s.roomItem}>
                <div className={s.roomImage}>
                  {isDesktop && (
                    <SliderPreviewPhoto
                      mainImage={room.mainImage}
                      photos={room.photos}
                    />
                  )}
                  {(isMobile || isTablet || isLaptop) && (
                    <SliderPreviewPhotoM
                      mainImage={room.mainImage}
                      photos={room.photos}
                    />
                  )}
                </div>
                <div className={s.roomInfo}>
                  <h4 style={{ marginTop: "10px" }}>
                    <WithTransLate text={room.title} />
                  </h4>
                  <div className={s.roomServicesWrapper}>
                    <div className={s.roomServices}>
                      <div className={s.servicesColumn}>
                        {firstColumn.map((service, idx) => (
                          <div key={idx} className={s.serviceItem}>
                            <img
                              src={service.icon}
                              alt={service.name}
                              style={{ width: "20px", height: "auto" }}
                            />
                            <span className={s.servicesText}>
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
                            <span className={s.servicesText}>
                              <WithTransLate text={service.name} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.pricePart}>
                  <div className={s.priceWrapperPlus}>
                    {!isDesktop && (
                      <div className={s.priceWrapper}>
                        <strong>
                          <WithTransLate
                            text={`from € ${(
                              roomPrice.price1 *
                              (roomNumber === 0 ? 1 : roomNumber) *
                              (days === 0 ? 1 : days)
                            ).toFixed(0)}`}
                          />
                        </strong>
                        <span style={{ fontWeight: "300" }}>
                          <WithTransLate
                            text={`${
                              roomNumber === 1
                                ? "1 room"
                                : `${roomNumber} rooms`
                            } for ${days <= 1 ? "a night" : `${days} nights`}`}
                          />
                        </span>
                      </div>
                    )}
                    {isDesktop && (
                      <div className={s.priceWrapper}>
                        <div className={s.pricePartWrapper}>
                          <span>
                            <WithTransLate text={`${roomPrice.type1}:`} />
                          </span>
                          <strong>
                            <WithTransLate
                              text={`from € ${(
                                roomPrice.price1 *
                                (roomNumber === 0 ? 1 : roomNumber) *
                                (days === 0 ? 1 : days)
                              ).toFixed(0)}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate
                              text={`${
                                roomNumber === 1
                                  ? "1 room"
                                  : `${roomNumber} rooms`
                              } for ${
                                days <= 1 ? "a night" : `${days} nights`
                              }`}
                            />
                          </span>
                        </div>
                        <div className={s.pricePartWrapper}>
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
                          <strong>
                            <WithTransLate
                              text={`from € ${(
                                roomPrice.price2 *
                                (roomNumber === 0 ? 1 : roomNumber) *
                                (days === 0 ? 1 : days)
                              ).toFixed(0)}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate
                              text={`${
                                roomNumber === 1
                                  ? "1 room"
                                  : `${roomNumber} rooms`
                              } for ${
                                days <= 1 ? "a night" : `${days} nights`
                              }`}
                            />
                          </span>
                        </div>
                      </div>
                    )}
                    <Button
                      text="Book"
                      btnClass="btnDark"
                      width="218px"
                      handleClick={() => handleNavigation(room.links.href)}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ServicesRoom;
