import React, { useState } from "react";
import CookieConsent from "../CookieConsent";

const ManagePreferences = () => {
  const [showConsentModal, setShowConsentModal] = useState(false);

  const handleClose = () => {
    setShowConsentModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowConsentModal(true)} style={{backgroundColor:"#3B5998", color:"white", border: "none", borderRadius: "4px", padding: "8px 12px",
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