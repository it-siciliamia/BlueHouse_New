import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { items } from "../../components/ServicesRoom/ServicesRoomData";
import { WithTransLate } from "../../components/helpers/translating/index";
import PhotoSlider from "../../components/Shared/SliderSlick/SliderSlick";
import PartDetails from "./PartDetails/PartDetails";
import PartCalendar from "./PartCalendar/PartCalendar";
import AdditionalServices from "../../components/AdditionalServices/AdditionalServices";
import Support from "../../components/SuportComponent/support";
import Button from "../../components/Shared/Button/Button";
import { IoIosArrowBack } from "react-icons/io";
import s from "./RoomDetails.module.scss";

const RoomDetails = () => {
  const { room } = useParams();
  const history = useHistory();

  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  const roomData = items.find((item) => item.links.href.includes(room));

  const handleBackClick = () => {
    history.push("/beds24");
  };

  const calculatedWidth = isLaptop ? `calc(100% - 50px)` : `calc(100% - 70px)`;

  return (
    <div className={s.roomdetails}>
      <div className={s.container}>
        <div className={s.sliderPart}>
          <div className={s.backButton}>
            <Button
              text="Back"
              icon={<IoIosArrowBack />}
              size="24px"
              width={isLaptop ? "95px" : "115px"}
              btnClass="btnLightWithOut"
              handleClick={handleBackClick}
            />
          </div>
          {(isDesktop || isLaptop) && (
            <PhotoSlider
              photos={roomData.photos}
              width={calculatedWidth}
              height={isLaptop ? "400px" : "510px"}
            />
          )}
        </div>

        <div className={s.mainPart}>
          <div className={s.partDetails}>
            <PartDetails data={roomData} />
          </div>
          <div className={s.partCalendar}>
            <PartCalendar />
          </div>
        </div>
      </div>
      <div className={s.addInfoContent}>
        <p className={s.titleText}>
          <WithTransLate text="Need more information? Contact us on WhatsApp. Our admins will help you." />
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
          target="_blank"
          rel="noreferrer"
          className={s.addInfoLink}
        >
          <WithTransLate text="GO TO WHATSAPP" />
        </a>
      </div>
      <AdditionalServices />
      <Support />
    </div>
  );
};

export default RoomDetails;
