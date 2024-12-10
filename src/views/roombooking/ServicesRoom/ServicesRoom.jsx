import React from "react";
import { WithTransLate } from "../../../components/helpers/translating/index";
import Button from "../../../components/Shared/Button/Button";
import { items, price } from "./ServicesRoomData";

import s from "./ServicesRoom.module.scss";

const ServicesRoom = () => {
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
    <div className={s.services}>
      <div className={s.servicesPart}>
        <div className={s.servicesName}>
          <span className={s.servicesNameWrapper}>
            <WithTransLate text="ROOMS" />
          </span>
        </div>
        <ul className={s.roomsList}>
          {roomItems.map((room, index) => {
            const [firstColumn, secondColumn] = splitServices(room.services);
            const roomPrice = getPriceForRoom(room.title);

            return (
              <li key={index} className={s.roomItem}>
                <div className={s.roomImage}>
                  <img src={room.mainImage} alt={room.title} />
                </div>
                <div className={s.roomInfo}>
                  <h4 style={{ marginTop: "10px" }}>
                    <WithTransLate text={room.title} />
                  </h4>
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
                </div>
                <div className={s.pricePart}>
                  <div className={s.priceWrapperPlus}>
                    <div className={s.priceWrapper}>
                      <div className={s.pricePartWrapper}>
                        <span>
                          <WithTransLate text={`${roomPrice.type1}:`} />
                        </span>
                        <strong>
                          <WithTransLate text={`from € ${roomPrice.price1}`} />
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
                          <WithTransLate text={`from € ${roomPrice.price2}`} />
                        </strong>
                        <span style={{ fontWeight: "300" }}>
                          <WithTransLate text="1 room for a night" />
                        </span>
                      </div>
                    </div>
                    <Button
                      text="Book Now"
                      btnClass="btnDark"
                      width="218px"
                      handleClick={() =>
                        (window.location.href = room.links.href)
                      }
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={s.servicesPart}>
        <div className={s.servicesName}>
          <span className={s.servicesNameWrapper}>
            <WithTransLate text="HOUSES" />
          </span>
        </div>
        <ul className={s.roomsList}>
          {houseItems.map((room, index) => {
            const [firstColumn, secondColumn] = splitServices(room.services);
            const roomPrice = getPriceForRoom(room.title);

            return (
              <li key={index} className={s.roomItem}>
                <div className={s.roomImage}>
                  <img src={room.mainImage} alt={room.title} />
                </div>
                <div className={s.roomInfo}>
                  <h4 style={{ marginTop: "10px" }}>
                    <WithTransLate text={room.title} />
                  </h4>
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
                </div>
                <div className={s.pricePart}>
                  <div className={s.priceWrapperPlus}>
                    <div className={s.priceWrapper}>
                      <div className={s.pricePartWrapper}>
                        <span>
                          <WithTransLate text={`${roomPrice.type1}:`} />
                        </span>
                        <strong>
                          <WithTransLate text={`from € ${roomPrice.price1}`} />
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
                          <WithTransLate text={`from € ${roomPrice.price2}`} />
                        </strong>
                        <span style={{ fontWeight: "300" }}>
                          <WithTransLate text="1 room for a night" />
                        </span>
                      </div>
                    </div>
                    <Button
                      text="Book Now"
                      btnClass="btnDark"
                      width="218px"
                      handleClick={() =>
                        (window.location.href = room.links.href)
                      }
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ServicesRoom;
