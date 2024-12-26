import React from "react";
import { useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { WithTransLate } from "..//helpers/translating/index";
import SliderPreviewPhoto from "./SliderPreviewPhoto/SliderPreviewPhoto";
import SliderPreviewPhotoM from "./SliderPreviewPhotoM/SliderPreviewPhotoM";
import Button from "../Shared/Button/Button";
import { items, price } from "./ServicesRoomData";

import s from "./ServicesRoom.module.scss";

const ServicesRoom = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

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
                    {(isMobile || isTablet || isLaptop) && (
                      <div className={s.priceWrapper}>
                        <strong>
                          <WithTransLate text={`from € ${roomPrice.price1}`} />
                        </strong>
                        <span style={{ fontWeight: "300" }}>
                          <WithTransLate text="1 room for a night" />
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
                              text={`from € ${roomPrice.price1}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate text="1 room for a night" />
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
                              text={`from € ${roomPrice.price2}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate text="1 room for a night" />
                          </span>
                        </div>
                      </div>
                    )}
                    <Button
                      text="Book"
                      btnClass="btnLightWithOut"
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
                          <WithTransLate text={`from € ${roomPrice.price1}`} />
                        </strong>
                        <span style={{ fontWeight: "300" }}>
                          <WithTransLate text="1 room for a night" />
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
                              text={`from € ${roomPrice.price1}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate text="1 room for a night" />
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
                              text={`from € ${roomPrice.price2}`}
                            />
                          </strong>
                          <span style={{ fontWeight: "300" }}>
                            <WithTransLate text="1 room for a night" />
                          </span>
                        </div>
                      </div>
                    )}
                    <Button
                      text="Book"
                      btnClass="btnLightWithOut"
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
