import React, { useEffect } from "react";
import iconChat from "../../../images/zoho_chat.svg";
import s from "./ZohoChat.module.scss";

function ZohoChat() {
  useEffect(() => {
    const widgetCode =
      "siqaa731a3a595d02e3f97bec52294ab4c3a000b2363e8ae346cec7d551e3d959b6";
    const url = "https://salesiq.zohopublic.eu/widget";

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      widgetcode: widgetCode,
      values: {},
    };

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "zsiqscript";
    script.defer = true;
    script.src = url;

    script.onerror = () => {
      console.error("Error loading Zoho SalesIQ script.");
    };

    document.body.appendChild(script);
    return () => {
      const existingScript = document.getElementById("zsiqscript");
      if (existingScript) {
        existingScript.remove();
      }

      const zohoWidget = document.getElementById("zsiq_float");
      if (zohoWidget) {
        zohoWidget.remove();
      }
    };
  }, []);

  const handleClick = () => {
    const customMain = document.querySelector(".zsiq_custommain");
    if (customMain) {
      customMain.click();
    } else {
      console.error("Zoho widget not found.");
    }
  };

  return (
    <div className={s.chatContainer}>
      <button className={s.chatButton} onClick={handleClick}>
        <img src={iconChat} alt="Zoho Chat" className={s.icon} />
      </button>
      <style>
        {`
          .zsiq_custommain {
            display: none !important; /* Ховаємо віджет */
          }
        `}
      </style>
    </div>
  );
}

export default ZohoChat;

// <!-- script for Zoho sales iq chatbot-->
//     <!-- New -->

// <script type="text/javascript" id="zsiqchat">
//       var $zoho = $zoho || {};
//       $zoho.salesiq = $zoho.salesiq || {
//         widgetcode:
//           "siqaa731a3a595d02e3f97bec52294ab4c3a000b2363e8ae346cec7d551e3d959b6",
//         values: {},
//         ready: function () {},
//       };
//       var d = document;
//       s = d.createElement("script");
//       s.type = "text/javascript";
//       s.id = "zsiqscript";
//       s.defer = true;
//       s.src = "https://salesiq.zohopublic.eu/widget";
//       t = d.getElementsByTagName("script")[0];
//       t.parentNode.insertBefore(s, t);
//     </script>

//     <!-- Old -->
//     <script type="text/javascript" id="zsiqchat">
//       var $zoho = $zoho || {};
//       $zoho.salesiq = $zoho.salesiq || {
//         widgetcode:
//           "236d0143c49f99cdf97753a9549f998343c5f8567f9ae57f81609ac692c05d019ecdf000a2657288d49303b03396fe4f",
//         values: {},
//         ready: function () {},
//       };
//       var d = document;
//       s = d.createElement("script");
//       s.type = "text/javascript";
//       s.id = "zsiqscript";
//       s.defer = true;
//       s.src = "https://salesiq.zoho.eu/widget";
//       t = d.getElementsByTagName("script")[0];
//       t.parentNode.insertBefore(s, t);
//     </script>
