import React, { useState } from "react";
import CookieConsent from "../CookieConsent";

const ManagePreferences = () => {
  const [showConsentModal, setShowConsentModal] = useState(false);

  const handleClose = () => {
    setShowConsentModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowConsentModal(true)} style={{backgroundColor:"#fff", color:"#1d3967", border: "1px solid #1d3967", padding: "8px 12px", width:"200px", height:"46px"
       }}>
        Manage Preferences
      </button>
      {showConsentModal && (
        <CookieConsent onClose={handleClose} />
      )}
    </div>
  );
};

export default ManagePreferences;