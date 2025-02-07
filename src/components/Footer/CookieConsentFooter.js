import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    marginTop: "15px",
    marginBottom: "15px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  label: {
    fontSize: "14px",
    color: "#333",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "10px",
    },
  },
  button: {
    backgroundColor: "#1d3967",
    color: "#fff",
    border: "1px solid #1d3967",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#fff",
    color: "#1d3967",
    border: "1px solid #1d3967",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
}));

const CookieConsent = ({ onClose }) => {
  const classes = useStyles();

  const [consent, setConsent] = useState({
    necessary: true,
    analytical: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = JSON.parse(localStorage.getItem("cookieConsent"));
    if (savedConsent) {
      setConsent(savedConsent);
      loadScripts(savedConsent);
    }
  }, []);

  const loadScripts = (consent) => {
    const removeScript = (src) => {
      const script = document.querySelector(`script[src="${src}"]`);
      if (script) script.remove();
    };

    if (consent.analytical) {
      if (!document.querySelector(`script[src="https://www.google-analytics.com/analytics.js"]`)) {
        const gaScript = document.createElement("script");
        gaScript.src = "https://www.google-analytics.com/analytics.js";
        gaScript.async = true;
        document.body.appendChild(gaScript);
      }
    } else {
      removeScript("https://www.google-analytics.com/analytics.js");
    }

    if (consent.marketing) {
      if (!document.querySelector(`script[src="https://some-marketing-tool.com/script.js"]`)) {
        const marketingScript = document.createElement("script");
        marketingScript.src = "https://some-marketing-tool.com/script.js";
        marketingScript.async = true;
        document.body.appendChild(marketingScript);
      }
    } else {
      removeScript("https://some-marketing-tool.com/script.js");
    }
  };

  const handleConsentChange = (category) => {
    setConsent((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(consent));
    loadScripts(consent);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={classes.modal}>
      <form className={classes.form}>
        <label className={classes.label}>
          <input type="checkbox" checked={consent.necessary} disabled />
          Necessary (Required)
        </label>
        <label className={classes.label}>
          <input
            type="checkbox"
            checked={consent.analytical}
            onChange={() => handleConsentChange("analytical")}
          />
          Analytical
        </label>
        <label className={classes.label}>
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={() => handleConsentChange("marketing")}
          />
          Marketing
        </label>
      </form>
      <div className={classes.buttonContainer}>
        <button className={classes.button} onClick={savePreferences}>
          Save Preferences
        </button>
        <button className={classes.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
