import React from "react";
import { useParams } from "react-router-dom";
import { items } from "../roombooking/ServicesRoom/ServicesRoomData";

const RoomDetails = () => {
  const { room } = useParams(); // Отримуємо параметр кімнати з URL
  const roomData = items.find((item) => item.links.href.includes(room)); // Знаходимо дані кімнати за параметром

  if (!roomData) {
    return <h1>Room not found</h1>; // Якщо кімната не знайдена
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{roomData.title}</h1>
      <img
        src={roomData.mainImage}
        alt={roomData.title}
        style={{ width: "100%", height: "auto" }}
      />
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
