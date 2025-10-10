import { useEffect } from "react";

const gtmLoaderSnippet = `(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f); })(window, document, 'script', 'dataLayer', 'GTM-5T6WNS3');`;

const gtmNoscriptHtml = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5T6WNS3" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

const zohoAutomationSnippet = `function removeTheZohoBanner() { var zc_notice = document.getElementById("zc_notice"); if (zc_notice) { zc_notice.style.display = "none"; } } window.onload = removeTheZohoBanner(); var w = window; var p = w.location.protocol; if (p.indexOf("http") < 0) { p = "http" + ":"; } var d = document; var f = d.getElementsByTagName("script")[0], s = d.createElement("script"); s.type = "text/javascript"; s.async = false; if (s.readyState) { s.onreadystatechange = function () { if (s.readyState == "loaded" || s.readyState == "complete") { s.onreadystatechange = null; try { loadwaprops("3zcfbb78daa2f57ae4183724232507848d", "3zd1496cbbb66a551e96ddc862269ae80d", "3zfaf00c698c4f844e7012826583c19c66022c7136a9791310c0cd5739277e1070", "3zbc76501958c4b0fe0b1da938f3c4bac1", "0.0"); } catch (e) {} } }; } else { s.onload = function () { try { loadwaprops("3zcfbb78daa2f57ae4183724232507848d", "3zd1496cbbb66a551e96ddc862269ae80d", "3zfaf00c698c4f844e7012826583c19c66022c7136a9791310c0cd5739277e1070", "3zbc76501958c4b0fe0b1da938f3c4bac1", "0.0"); removeTheZohoBanner(); } catch (e) {} }; } s.src = p + "//ma.zoho.com/hub/js/WebsiteAutomation.js"; f.parentNode.insertBefore(s, f);`;

const cookieBannerSnippet = `(function (w, s) { var e = document.createElement("script"); e.type = "text/javascript"; e.async = true; e.src = "https://cdn-eu.pagesense.io/js/siciliamia403/26af6a3146f4471ea09936a965b474fa.js"; var x = document.getElementsByTagName("script")[0]; x.parentNode.insertBefore(e, x); })(window, "script");`;

const heatmapSnippet = `window.smartlook || (function (d) { var o = (smartlook = function () { o.api.push(arguments); }), h = d.getElementsByTagName("head")[0]; var c = d.createElement("script"); o.api = new Array(); c.async = true; c.type = "text/javascript"; c.charset = "utf-8"; c.src = "https://web-sdk.smartlook.com/recorder.js"; h.appendChild(c); })(document); smartlook("init", "d3d4fdd3aed4b9d81b4ba8cfac0372571b079575", { region: "eu" });`;

const zohoFormSubmitSnippet = `function submitToZoho(formData) { const data = { CONTACT_EMAIL: formData.email, FIRSTNAME: formData.firstname, LASTNAME: formData.lastname, zc_trackCode: "ZCFORMVIEW", viewFrom: "URL_ACTION", submitType: "optinCustomView", lD: "1de8e62d757f2bf", zx: "14acf032a4", zcvers: "2.0", mode: "OptinCreateView", zcld: "1de8e62d757f2bf", zctd: "1de8e62d74f99d9" }; fetch("https://oqix-zcmp.maillist-manage.eu/weboptin.zc", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }).then((response) => response.json()).then((data) => { if (data.status === "success") { alert("Thank you for signing up!"); } else { alert("Failed to submit the form"); } }).catch((error) => { console.error("Error submitting the form:", error); alert("Error submitting the form"); }); }`;

const additionalZohoSnippet = `var script = document.createElement("script"); script.type = "text/javascript"; script.src = "https://oqix-zcmp.maillist-manage.eu/js/optin.min.js"; script.onload = function () { setupSF('sf3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a','ZCFORMVIEW',false,'acc',false,'2'); }; document.head.appendChild(script); function runOnFormSubmit_sf3zf5b83c701f03b01a7fdb0983b13eede0fa276bd78b1c824573c795f1545b492a(th) { }`;

const marketingScripts = [
  {
    id: "marketing-gtm",
    tag: "script",
    target: "head",
    text: gtmLoaderSnippet,
  },
  {
    id: "marketing-gtm-noscript",
    tag: "noscript",
    target: "body",
    html: gtmNoscriptHtml,
  },
  {
    id: "marketing-paypal",
    tag: "script",
    target: "body",
    src: "https://www.paypal.com/sdk/js?client-id=test&currency=EUR",
    async: true,
  },
  {
    id: "marketing-pagesense",
    tag: "script",
    target: "head",
    src: "https://cdn-eu.pagesense.io/js/siciliamia403/26af6a3146f4471ea09936a965b474fa.js",
    async: true,
  },
  {
    id: "marketing-zoho-automation",
    tag: "script",
    target: "head",
    text: zohoAutomationSnippet,
  },
  {
    id: "marketing-cookie-banner",
    tag: "script",
    target: "head",
    text: cookieBannerSnippet,
  },
  {
    id: "marketing-heatmap",
    tag: "script",
    target: "head",
    text: heatmapSnippet,
  },
  {
    id: "marketing-zoho-form-submit",
    tag: "script",
    target: "head",
    text: zohoFormSubmitSnippet,
  },
  {
    id: "marketing-zoho-additional",
    tag: "script",
    target: "head",
    text: additionalZohoSnippet,
  },
];

const scheduleIdle = (callback) => {
  if ("requestIdleCallback" in window) {
    const handle = window.requestIdleCallback(callback, { timeout: 1000 });
    return () => window.cancelIdleCallback(handle);
  }
  const handle = window.setTimeout(callback, 0);
  return () => window.clearTimeout(handle);
};

const injectDescriptor = (descriptor) => {
  if (document.getElementById(descriptor.id)) {
    return () => {};
  }

  const parent =
    descriptor.target === "body" ? document.body : document.head || document.body;
  if (!parent) {
    return () => {};
  }

  const element = document.createElement(descriptor.tag || "script");
  element.id = descriptor.id;

  if (descriptor.tag === "script") {
    element.type = "text/javascript";
    if (descriptor.src) {
      element.src = descriptor.src;
    }
    if (descriptor.async) {
      element.async = true;
    }
    if (descriptor.text) {
      element.text = descriptor.text;
    }
  } else if (descriptor.html) {
    element.innerHTML = descriptor.html;
  }

  parent.appendChild(element);
  return () => {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };
};

const ThirdPartyScriptsLoader = () => {
  useEffect(() => {
    const cleanups = [];
    const loadAll = () => {
      marketingScripts.forEach((descriptor) => {
        const cleanup = injectDescriptor(descriptor);
        if (cleanup) {
          cleanups.push(cleanup);
        }
      });
    };

    const cancelSchedule = scheduleIdle(loadAll);

    return () => {
      cancelSchedule();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
};

export default ThirdPartyScriptsLoader;
