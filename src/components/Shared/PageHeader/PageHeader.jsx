import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { WithTransLate } from "../../translating";
import languagesAndCodes from "../../../translating/languagesAndCodes.json";
import s from "./PageHeader.module.scss";

const pagesData = {
  "/": {
    title: "Home Page",
    description: "Welcome to our home page.",
    keywords: "home, welcome, main page",
  },
  "/house-rules": {
    title: "House Rules",
    description: "Learn about our house rules.",
    keywords: "house rules, guidelines, regulations",
  },
  "/view-gallery": {
    title: "View Gallery",
    description: "View our gallery.",
    keywords: "gallery, photos, images",
  },
  "/about-us": {
    title: "About Us",
    description: "Learn more about us.",
    keywords: "about, company, information",
  },
  "/privacy-and-policy": {
    title: "Privacy and Policy",
    description: "Read our privacy and policy.",
    keywords: "privacy, policy, terms, conditions",
  },
  "/slider-photo": {
    title: "Slider Photo",
    description: "Check out our slider photos.",
    keywords: "slider, photos, gallery",
  },
  "/book": {
    title: "Book",
    description: "Book with us.",
    keywords: "book, reservation, appointment",
  },
  "/enquire": {
    title: "Enquire",
    description: "Enquire with us.",
    keywords: "enquire, contact, questions",
  },
  "/beds24": {
    title: "Beds24",
    description: "Beds24 information.",
    keywords: "beds24, information, details",
  },
  default: {
    title: "Page Not Found",
    description: "This page does not exist.",
    keywords: "404, not found, error",
  },
};

const PageHeader = () => {
  const location = useLocation();
  const pageData = pagesData[location.pathname] || pagesData["default"];
  const languageIndex = localStorage.getItem("languageIndex");
  const languageCode = languagesAndCodes.languages[languageIndex]?.code || "en";

  return (
    <>
      <Helmet>
        <html lang={languageCode} />
        <title>
          <WithTransLate text={pageData.title} />
        </title>
        <meta
          name="description"
          content={<WithTransLate text={pageData.description} />}
        />
        <meta
          name="keywords"
          content={<WithTransLate text={pageData.keywords} />}
        />
        <link
          rel="canonical"
          href={`https://bluehouse.is${location.pathname}`}
        />
      </Helmet>
      <h1 className={s.mainTitle}>
        <WithTransLate text={pageData.title} />
      </h1>
    </>
  );
};

export default PageHeader;
