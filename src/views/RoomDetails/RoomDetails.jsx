import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../roombooking/ServicesRoom/ServicesRoomData";
import PhotoSlider from "../../components/Shared/SliderSlick/SliderSlick";
import s from "./RoomDetails.module.scss";

const RoomDetails = () => {
  const { room } = useParams();
  const roomData = items.find((item) => item.links.href.includes(room));

  return (
    <div className={s.roomdetails}>
      <div>
        <PhotoSlider photos={roomData.photos} width="92%" height="550px" />
      </div>

      <h1>{roomData.title}</h1>
      <p>{roomData.description}</p>
      <h3>Services:</h3>
      <ul>
        {roomData.services.map((service, idx) => (
          <li key={idx}>
            <img
              src={service.icon}
              alt={service.name}
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomDetails;
