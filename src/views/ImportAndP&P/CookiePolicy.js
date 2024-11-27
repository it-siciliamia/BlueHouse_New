import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    fontFamily: "Josefin Sans",
    marginTop: "-20px",
    flexDirection: "column",
  },

  title: {
    fontFamily: "Oblik",
    fontSize: "40px",
    fontWeight: "700",
    lineHeight: "50px",

    "@media (max-width: 743px)": {
      fontSize: "30px",
      lineHeight: "40px",
    },
  },
  titleInfo: {
    margin: "4px 0 ",
  },

  titleContainer: {
    fontFamily: "Josefin sans",
    display: "flex",
    flexDirection: "column",
    textAling: "left",
    justifyContent: "space-between",
    marginTop: "20px",
  },

  textClass: {
    marginTop: "5px",
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: 300,
    letterSpacing: "0em",
    "@media (max-width: 743px)": {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },

  articleWrapper: {
    marginBottom: "44px",
  },
  "@media (max-width: 743px)": {
    marginBottom: "24px",
  },

  definitionList: {
    paddingLeft: "15px",

    "& li": {
      paddingBottom: "10px",
    },
    "& li:last-child": {
      paddingBottom: 0,
    }
  },

  definition: {
    fontWeight: 600,
  },

  link: {
    color: "#3b5998",
    fontWeight: 600,
    textDecoration: "underline",
  },

  linkWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #e5e5e5",
    color: "#3b5998",
  },

  subtitle: {
    marginBottom: "10px",
    fontWeight: 400,
    fontSize: "18px",

    "@media (max-width: 743px)": {
      fontSize: "16px",
    },
  },

  typesOfDataItem: {
    marginBottom: "20px",
  },
}));

const COOKIES_ADVERTISEMENT = [
  {id: 1, text: "TAUnique", link: ".tripadvisor.com"},
  {id: 2, text: "TACds", link: ".tripadvisor.com"},
  {id: 3, text: "b3e783bb62", link: "salesiq.zoho.eu"},
];

const COOKIES_ANALITICS = [
  {id: 1, text: "_ga", link: ".bluehouse.is"},
  {id: 2, text: "_gid", link: ".bluehouse.is"},
  {id: 3, text: "_gat_UA-223879896-1", link: ".bluehouse.is"},
  {id: 4, text: "_ga_6QGX4YP9SF", link: ".bluehouse.is"},
  {id: 5, text: "LaVisitorNew", link: ".bluehouse.is"},
  {id: 6, text: "LaSID", link: ".bluehouse.is"},
  {id: 7, text: "_ga_WYRZ6Q7MDE", link: ".bluehouse.is"},
  {id: 8, text: "TADCID", link: "www.tripadvisor.com"},
];

const COOKIES_FUNCTIONAL = [
  {id: 1, text: "TASession", link: ".tripadvisor.com"},
  {id: 2, text: "ServerPool", link: ".tripadvisor.com"},
  {id: 3, text: "_zcsr_tmp", link: "salesiq.zoho.eu"},
];

const COOKIES_NECESSARY = [
  {id: 1, text: "LS_CSRF_TOKEN", link: "salesiq.zoho.eu"},
  {id: 2, text: "zfccn", link: "pagesense-collect.zoho.eu"},
  {id: 3, text: "JSESSIONID", link: "maillist-manage.eu"},
];

export default function CookiePolicy() {
  const {
    root,
    title,
    textClass,
    titleInfo,
    definitionList,
    definition,
    articleWrapper,
    link,
    linkWrapper,
    subtitle,
    typesOfDataItem,
  } = useStyles();
  return (
    <Box className={root}>
      <h1 className={title}>
        <WithTransLate text="COOKIE POLICY" />
      </h1>

      <div className={titleInfo}>
        <p className={textClass}>
          <WithTransLate text="In order to provide you with a more personalized and responsive service we need to remember and store information about how you use this website. This is done using small text files called cookies. Cookies contain small amounts of information and are downloaded to your computer or other device by a server for this website. Your web browser then sends these cookies back to this Website on each subsequent visit so that it can recognise you and remember things like your user preferences. A cookie is a small file of letters and numbers that we store on your browser and hard drive of your computer. Cookies contain information that is transferred to your computer’s hard drive. By browsing our sites you are accepting our use of cookies. You can close the cookie notification by clicking “OK” button." />
        </p>

        <p className={textClass}>
          <ul className={definitionList}>
            <li>
              <span className={definition}>
                <WithTransLate text="Necessary cookies " />
              </span>

              <span>
                <WithTransLate text="These are cookies that are required for the operation of our website. They include cookies that enable you to log into secure areas of our website as well as placing products in your cart." />
              </span>
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Preference settings cookies " />
              </span>

              <WithTransLate text="These are cookies that are required for the operation of some features our website. They include cookies that enable changes of some settings on our websites." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Statistics, analytical and performance cookies " />
              </span>

              <WithTransLate text="They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it." />
            </li>

            <li>
              <span className={definition}>
                <WithTransLate text="Marketing cookies " />
              </span>

              <WithTransLate text="These cookies can be connected to your social accounts to display advertisements to your social accounts." />
            </li>
          </ul>
        </p>

        <p className={textClass}>
          <WithTransLate text="Most browsers will allow you to see what cookies you have and delete them on an individual basis or block cookies from particular or all websites. Be aware that any preference you have set will be lost if you delete all cookies, including your preference to close the cookie notification." />
        </p>

        <p className={textClass}>
          <span className={definition}>
            <WithTransLate text="Our cookies and 3rd party cookies used on our sites" />
          </span>
        </p>
      </div>

      <div className={articleWrapper}>
        <div className={typesOfDataItem}>
          <p className={`${textClass} ${subtitle}`}>
            <WithTransLate text="Advertisement" />
          </p>

          {COOKIES_ADVERTISEMENT.map(data => (
            <p key={data.id} className={`${textClass} ${subtitle} ${linkWrapper}`}>
              <WithTransLate text={data.text} />

              <a href={data.link} className={link}>{data.link}</a>
            </p>
          ))}
        </div>

        <div className={typesOfDataItem}>
          <p className={`${textClass} ${subtitle}`}>
            <WithTransLate text="Analytics" />
          </p>

          {COOKIES_ANALITICS.map((data) => (
            <p key={data.id} className={`${textClass} ${subtitle} ${linkWrapper}`}>
              <WithTransLate text={data.text} />

              <a href={data.link} className={link}>{data.link}</a>
            </p>
          ))}
        </div>

        <div className={typesOfDataItem}>
          <p className={`${textClass} ${subtitle}`}>
            <WithTransLate text="Functional" />
          </p>

          {COOKIES_FUNCTIONAL.map((data) => (
            <p key={data.id} className={`${textClass} ${subtitle} ${linkWrapper}`}>
              <WithTransLate text={data.text} />

              <a href={data.link} className={link}>{data.link}</a>
            </p>
          ))}
        </div>

        <div className={typesOfDataItem}>
          <p className={`${textClass} ${subtitle}`}>
            <WithTransLate text="Necessary" />
          </p>

          {COOKIES_NECESSARY.map((data) => (
            <p key={data.id} className={`${textClass} ${subtitle} ${linkWrapper}`}>
              <WithTransLate text={data.text} />

              <a href={data.link} className={link}>{data.link}</a>
            </p>
          ))}
        </div>
      </div>

      <p className={textClass}>
        <span className={definition}>
          <WithTransLate text="For further information on how we handle your data please read our privacy policy." />
        </span>
      </p>
    </Box>
  );
}
