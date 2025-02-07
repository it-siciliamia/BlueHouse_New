import { useState, useEffect } from "react";

const styles = {
  modal: {
    backgroundColor: "#fff",
    marginTop: "10px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    marginBottom: "15px",
  },
  label: {
    alignItems: "center",
    fontSize: "14px",
    color: "#333",
    marginRight: "10px", // Space between checkboxes
  },
  buttonContainer: {
    display: "flex",
    gap : "10px"
  },
  button: {
    backgroundColor: "#3B5998",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "8px 12px",
    cursor: "pointer",
    fontSize: "14px",
  },
};

const removeScript = (src) => {
  const script = document.querySelector(`script[src="${src}"]`);
  if (script) {
    script.remove();
  }
};

const loadScripts = (consent) => {
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
      marketingScript.src = "https://some-marketing-tool.com/script.js"; // Replace with the link of marketing tool
      marketingScript.async = true;
      document.body.appendChild(marketingScript);
    }
  } else {
    removeScript("https://some-marketing-tool.com/script.js");
  }
};

const CookieConsent = ({onClose}) => {
  const [consent, setConsent] = useState({
    necessary: true,
    analytical: true,
    marketing: true,
  });

  useEffect(() => {
    const savedConsent = JSON.parse(localStorage.getItem("cookieConsent"));
    if (savedConsent) {
      setConsent(savedConsent);
      loadScripts(savedConsent);
    }
  }, []);

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
    <div style={styles.modal}>
      <form>
        <label style={styles.label}>
          <input type="checkbox" checked={consent.necessary} disabled />
          Necessary (Required)
        </label>
        <label style={styles.label}>
          <input
            type="checkbox"
            checked={consent.analytical}
            onChange={() => handleConsentChange("analytical")}
          />
          Analytical
        </label>
        <label style={styles.label}>
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={() => handleConsentChange("marketing")}
          />
          Marketing
        </label>
      </form>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={savePreferences}>
          Save Preferences
        </button>
        <button style={styles.cancelButton} onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;