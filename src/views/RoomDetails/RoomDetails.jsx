import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../../components/ServicesRoom/ServicesRoomData";
import PhotoSlider from "../../components/Shared/SliderSlick/SliderSlick";
import PartDetails from "./PartDetails/PartDetails";
import Support from "../../components/SuportComponent/support";
import s from "./RoomDetails.module.scss";

const RoomDetails = () => {
  const { room } = useParams();
  const roomData = items.find((item) => item.links.href.includes(room));

  return (
    <div className={s.roomdetails}>
      <div className={s.container}>
        <PhotoSlider photos={roomData.photos} width="100%" height="550px" />
        <div className={s.mainPart}>
          <div className={s.partDetails}>
            <PartDetails data={roomData} />
          </div>
          <div className={s.partCalendar}></div>
        </div>

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
      <Support />
    </div>
  );
};

export default RoomDetails;
