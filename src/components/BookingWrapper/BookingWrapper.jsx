import { Typography } from "@mui/material";

import "./BookingWrapper.css";
import { WithTransLate } from "../../components/helpers/translating";
import Button from "../../components/Shared/Button/Button.jsx";
import useBreakpoints from "../../Styles/useBreakpoints.js";

const BookingWrapper = () => {
  const { isMobile, isTablet } = useBreakpoints();
  return (
    <div className="BookingWrapper_container">
      {!!(isMobile || isTablet) && (
        <div style={{ width: "100%" }}>
          <Typography
            gutterBottom
            variant="h2"
            sx={{
              display: "flex",
              fontSize: "20px",
              fontFamily: "Oblik",
            }}
          >
            <WithTransLate sx={{}} text="BOOK YOUR ROOM" />
          </Typography>
          <form style={{ display: "flex", flexDirection: "column", width: "100%", margin: "auto" }}>
            <input
              style={{
                borderColor: "#1D3967",
                borderRadius: "0px",
                borderBottom: "none",
                height: "50px",
              }}
              placeholder="Check in - Check out"
            />
            <input
              style={{ borderColor: "#1D3967", borderRadius: "0px", height: "50px" }}
              placeholder="Travellers"
            />
            <div style={{ marginTop: "5%", display: "flex", justifyContent: "center" }}>
              <Button text="Search" btnClass="btnDark" />
            </div>
          </form>
        </div>
      )}

      {/* TODO - This component shoud be refactored and moved to a different section */}
      {/* <div className="buttons">
        <a href="https://beds24.com/booking2.php?propid=3578&layout=1">
          <Button text="BOOK YOUR ROOM" btnClass="btnDark" width="218px" />
        </a>
        <div className="ordial">
          <hr />
          <p style={{ color: "#1d3967" }}>
            <WithTransLate text="OR" />
          </p>
          <hr />
        </div>
        <a href="https://bluehouse.tourdesk.is/Tour">
          <Button text="Book Day Tours" btnClass="btnLight" width="218px" />
        </a>
      </div> */}
    </div>
  );
};

export default BookingWrapper;
