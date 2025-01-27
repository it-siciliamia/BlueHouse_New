import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import FamilyRoomRoom01 from "../../../../images/Rooms/FamilyRoom/fr1.webp";
import FamilyRoomRoom02 from "../../../../images/Rooms/FamilyRoom/fr2.webp";
import FamilyRoomRoom03 from "../../../../images/Rooms/FamilyRoom/fr3.webp";
import FamilyRoomRoom04 from "../../../../images/Rooms/FamilyRoom/fr4.webp";
import FamilyRoomRoom05 from "../../../../images/Rooms/FamilyRoom/fr5.webp";

import TripleQuadrupleRoom02 from "../../../../images/Rooms/TripleQuadruple/t1.webp";
import TripleQuadrupleRoom01 from "../../../../images/Rooms/TripleQuadruple/t2.webp";

import DoubleTwinRoom01 from "../../../../images/Rooms/DoubleTwin/dt1.webp";
import DoubleTwinRoom02 from "../../../../images/Rooms/DoubleTwin/dt2.webp";

import ApartmentRoom02 from "../../../../images/Rooms/Apartment/a1.webp";
import ApartmentRoom01 from "../../../../images/Rooms/Apartment/a6.webp";
import ApartmentRoom03 from "../../../../images/Rooms/Apartment/a3.webp";
import ApartmentRoom04 from "../../../../images/Rooms/Apartment/a4.webp";
import ApartmentRoom05 from "../../../../images/Rooms/Apartment/a5.webp";
import ApartmentRoom06 from "../../../../images/Rooms/Apartment/a7.webp";

import BlueHouse05 from "../../../../images/Houses/BlueHouse/bh1.webp";
import BlueHouse02 from "../../../../images/Houses/BlueHouse/bh2.webp";
import BlueHouse04 from "../../../../images/Houses/BlueHouse/bh4.webp";
import BlueHouse01 from "../../../../images/Houses/BlueHouse/bh5.webp";
import BlueHouse06 from "../../../../images/Houses/BlueHouse/bh6.webp";
import BlueHouse07 from "../../../../images/Houses/BlueHouse/bh7.webp";

import GNL01 from "../../../../images/Houses/GNL/gnl1.webp";
import GNL02 from "../../../../images/Houses/GNL/gnl2.webp";
import GNL03 from "../../../../images/Houses/GNL/gnl3.webp";
import GNL04 from "../../../../images/Houses/GNL/gnl4.webp";
import GNL05 from "../../../../images/Houses/GNL/gnl5.webp";
import GNL06 from "../../../../images/Houses/GNL/gnl6.webp";
import GNL07 from "../../../../images/Houses/GNL/gnl7.webp";

import GreenHouse01 from "../../../../images/Houses/GreenHouse/Greenhouse_01.webp";
import GreenHouse02 from "../../../../images/Houses/GreenHouse/Greenhouse_02.webp";
import GreenHouse03 from "../../../../images/Houses/GreenHouse/Greenhouse_03.webp";
import GreenHouse04 from "../../../../images/Houses/GreenHouse/Greenhouse_04.webp";
import GreenHouse05 from "../../../../images/Houses/GreenHouse/Greenhouse_05.webp";
import GreenHouse06 from "../../../../images/Houses/GreenHouse/Greenhouse_06.webp";

import Activities from "../../../../images/MobileGalary/Activities.webp";
import Northernlights from "../../../../images/MobileGalary/NorthernLights.webp";
import NeighbourHood from "../../../../images/view-gallery/neighborhood.webp";

import s from "./ImageSlider.module.scss";

const getImagesByCategory = (category) => {
  switch (category) {
    case "Double/Twin":
      return [DoubleTwinRoom01, DoubleTwinRoom02];
    case "Triple/Quadruple Room":
      return [TripleQuadrupleRoom01, TripleQuadrupleRoom02];
    case "Family Room":
      return [
        FamilyRoomRoom01,
        FamilyRoomRoom02,
        FamilyRoomRoom03,
        FamilyRoomRoom04,
        FamilyRoomRoom05,
      ];
    case "Two-bedroom Appartment":
      return [
        ApartmentRoom01,
        ApartmentRoom02,
        ApartmentRoom03,
        ApartmentRoom04,
        ApartmentRoom05,
        ApartmentRoom06,
      ];
    case "Blue House":
      return [
        BlueHouse01,
        BlueHouse02,
        BlueHouse04,
        BlueHouse05,
        BlueHouse06,
        BlueHouse07,
      ];
    case "Green House":
      return [
        GreenHouse01,
        GreenHouse02,
        GreenHouse03,
        GreenHouse04,
        GreenHouse05,
        GreenHouse06,
      ];
    case "GNL":
      return [GNL01, GNL02, GNL03, GNL04, GNL05, GNL06, GNL07];
    case "Northern Lights":
      return [Northernlights];
    case "Neighbourhood":
      return [NeighbourHood];
    case "Activities":
      return [Activities];
    default:
      return [];
  }
};

const ImageSlider = ({ category }) => {
  const images = getImagesByCategory(category);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={false}
      scrollbar={{ draggable: true }}
      navigation={false}
      className={s.swiperContainer}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className={s.swiperSlide}>
          <img
            src={image}
            alt={`Slide ${index}`}
            className={s.swiperSlideImg}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
