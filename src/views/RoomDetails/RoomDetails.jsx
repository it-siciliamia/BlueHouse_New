import { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import PartCalendar from "./PartCalendar/PartCalendar.jsx";
import PartDetails from "./PartDetails/PartDetails.jsx";
import s from "./RoomDetails.module.scss";
import AdditionalServices from "../../components/AdditionalServices/AdditionalServices.jsx";
import { WithTransLate } from "../../components/helpers/translating/index.jsx";
import { items } from "../../components/ServicesRoom/ServicesRoomData.js";
import Button from "../../components/Shared/Button/Button.jsx";
import PhotoSlider from "../../components/Shared/SliderSlick/SliderSlick.jsx";
import Support from "../../components/SuportComponent/support.jsx";
import { setPaymentStage } from "../../redux/technitial/technical-slice.js";
import useBreakpoints from "../../Styles/useBreakpointsNew.js";

const RoomDetails = () => {
  const { room } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSmallScreen, isDesktop } = useBreakpoints();

  const roomData = items.find((item) => item.links.href.includes(room));

  useEffect(() => {
    dispatch(setPaymentStage(1));
  }, [dispatch]);

  const handleBackClick = () => {
    navigate("/beds24");
  };

  const calculatedWidth = isSmallScreen ? `calc(100% - 50px)` : `calc(100% - 70px)`;

  return (
    <div className={s.roomdetails}>
      <div className={s.container}>
        <div className={s.sliderPart}>
          <div className={s.backButton}>
            <Button
              text="Back"
              icon={<IoIosArrowBack />}
              size="24px"
              width={isSmallScreen ? "95px" : "115px"}
              btnClass="btnLightWithOut"
              handleClick={handleBackClick}
            />
          </div>
          {!!(isDesktop || isSmallScreen) && (
            <PhotoSlider
              photos={roomData.photos}
              width={calculatedWidth}
              height={isSmallScreen ? "400px" : "510px"}
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
