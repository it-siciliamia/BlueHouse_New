import React, { useState } from "react";
import CookieConsentFooter from "./CookieConsentFooter";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "#fff", 
    color: "black", 
    border: "1px solid #3B5998", 
    borderRadius: "4px", 
    padding: "5px 12px",
    [theme.breakpoints.down("sm")]: {
      padding:'2px',
      fontSize:'14px',
      width:"60%"
    },
  }
})) 

const ManagePreferencesFooter = () => {
    const classes = useStyles();
    const [showConsentModal, setShowConsentModal] = useState(false);

    const handleOpenModal = () => {
        setShowConsentModal(true);
    };

    const handleCloseModal = () => {
        setShowConsentModal(false);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button onClick={handleOpenModal} className={classes.button}>
                Manage Cookies
            </button>
            {showConsentModal && (
                <CookieConsentFooter onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default ManagePreferencesFooter;


