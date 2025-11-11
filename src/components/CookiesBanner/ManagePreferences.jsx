import React, { useState } from "react";
import CookieConsent from "../CookieConsent.jsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button:{
    textTransform:"uppercase",
    padding : "8px 12px ",
    width:"250px",
    [theme.breakpoints.down("sm")]: {
      padding:'4px 0px !important',
      fontSize:'14px !important',
      width:"107px !important",
      lineHeight: "15px",
      textTransform: "uppercase" 
    },
  },
})) 

const ManagePreferences = () => {
  const [showConsentModal, setShowConsentModal] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setShowConsentModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowConsentModal(true)} style={{backgroundColor:"#fff", color:"#1d3967", border: "1px solid #1d3967"
       }} className={classes.button}>
        Manage Preferences
      </button>
      {showConsentModal && (
        <CookieConsent onClose={handleClose} />
      )}
    </div>
  );
};

export default ManagePreferences;
