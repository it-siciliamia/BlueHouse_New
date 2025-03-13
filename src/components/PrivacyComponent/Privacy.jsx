import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles } from "@material-ui/core";
import { WithTransLate } from "../helpers/translating/index";

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
    lineHeight: "45px",
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      lineHeight: "40px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      fontSize: "35px",
      lineHeight: "45px",
    },
  },
  titleInfo: {
    margin: "20px 0 20px 0",
    [theme.breakpoints.down("md")]: {
      margin: "20px 0 44px 0",
    },
    [theme.breakpoints.between(768, 1024)]: {
      margin: "20px 0 20px 0",
    },
  },
  subtitle: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "5px",
    margin: "0px 0px 20px 0px",
    letterSpacing: "0em",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      fontSize: "19px",
      lineHeight: "28px",
    },
  },
  titleContainer: {
    fontFamily: "Josefin sans",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  textClass: {
    marginTop: "5px",
    fontSize: "23px",
    lineHeight: "24px",
    fontWeight: 300,
    letterSpacing: "0em",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      fontSize: "17px",
      lineHeight: "23px",
    },
  },
  articleWrapper: {
    marginTop: "-30px",
    marginBottom: "44px",
    [theme.breakpoints.down("md")]: {
      marginBottom: "24px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      marginBottom: "34px",
    },
  },
  articleTitle: {
    marginBottom: "20px",
    fontSize: "22.5px",
    fontWeight: 600,
    lineHeight: "30px",
    [theme.breakpoints.down("md")]: {
      fontSize: "22px",
      lineHeight: "30px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
  },
  definitionList: {
    paddingLeft: "15px",
    "& li": {
      paddingBottom: "10px",
    },
    "& li:last-child": {
      paddingBottom: 0,
    },
  },
  definition: {
    fontWeight: 600,
  },
  link: {
    color: "#1D3967",
    fontWeight: 400,
    textDecoration: "underline",
  },
  additionSubtitle: {
    marginTop: "30px",
    marginBottom: "20px",
    fontSize: "22px",
    lineHeight: "24px",
    fontWeight: 600,
    letterSpacing: "0em",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      fontSize: "17px",
      lineHeight: "23px",
    },
  },
  subtitle2: {
    marginBottom: "25px",
    marginTop: "25px",
    fontSize: "22.5px",

  },
  personalDataList: {
    paddingTop: "8px",
    paddingLeft: "35px",
  },
  collectingAndUsingItem: {},
  typesOfDataItem: {},
  paddingList: {
    paddingLeft: "35px",
  },
  cookiesText: {
    marginTop: 0,
  },
  cookies: {
    fontWeight: 400,
    marginBottom: 0,
    paddingLeft: 0,
  },
  functionalityCookiesList: {
    paddingLeft: "35px",
    listStyleType: "lower-alpha",
  },
  marginBottom: {
    marginBottom: 0,
  },
}));

function Subtitle({ title, text }) {
  const { subtitle, textClass, titleContainer } = useStyles();
  return (
    <Box className={titleContainer}>
      <h3 className={subtitle}>
        <WithTransLate text={title} />
      </h3>
      <p className={textClass}>
        <WithTransLate text={text} />
      </p>
    </Box>
  );
}

Subtitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Privacy() {
  const {
    root,
    textClass,
    titleInfo,
    articleWrapper,
    articleTitle,
    definitionList,
    definition,
    link,
    subtitle,
    additionSubtitle,
    subtitle2,
    personalDataList,
    collectingAndUsingItem,
    typesOfDataItem,
    paddingList,
    cookies,
    functionalityCookiesList,
    cookiesText,
    marginBottom,
  } = useStyles();
  return (
    <Box className={root}>
      <div className={titleInfo}>
        <p className={textClass}>
          <WithTransLate text="Last updated: June 06, 2022" />
        </p>

        <p className={textClass}>
          <WithTransLate text="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure" />
          <br/> 
          <WithTransLate text="of Your information when You use the Service and tells You about Your privacy rights and" />
          <br/> 
          <WithTransLate text="how the law protects You." />
          <br/>
          <WithTransLate text="We use Your Personal data to provide and improve the Service. By using the Service, You" />
          <br/> 
          <WithTransLate text="agree to the collection and use of information in accordance with this Privacy Policy." />
        </p>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="I. Interpretation and Definitions" />
        </h2>

        <Subtitle
          title="Interpretation"
          text={
            <> 
              The words of which the initial letter is capitalized have meanings defined under the following <br />
              conditions. The following definitions shall have the same meaning regardless of whether they <br />
              appear in singular or in plural.
            </>
          }
        />
        <Subtitle
          title="Definitions"
          text="For the purposes of this Privacy Policy:"
        />
        <div className={textClass}>
          <ul className={definitionList}>
            <li>
                <WithTransLate text="Account means a unique account created for You to access our Service or parts of our"/>
                <br/>
                <WithTransLate text="Service." />
            </li>

            <li>
              <WithTransLate text="Company (referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers" />
              <br/>
              <WithTransLate text="to Blue House B&B, Valhusabraut 19, Seltjarnarnes, 170, Iceland and Grotta Northern"/>
              <br/>
              <WithTransLate text="Lights apartment, Valhusabraut 35, Seltjarnarnes, 170, Iceland." />
            </li>

            <li>
                <WithTransLate text="Cookies are small files that are placed on Your computer, mobile device or any other"/>
                <br/>
                <WithTransLate text="device by a website, containing the details of Your browsing history on that website"/>
                <br/>
                <WithTransLate text="among its many uses." />
            </li>

            <li>
                <WithTransLate text="Country refers to: Iceland" />
            </li>

            <li>
                <WithTransLate text="Device means any device that can access the Service such as a computer, a cell phone or" />
                <br/>
                <WithTransLate text="a digital tablet." />
            </li>

            <li>
                <WithTransLate text="Personal Data is any information that relates to an identified or identifiable individual." />
            </li>

            <li>
                <WithTransLate text="Service refers to the Website." />
            </li>

            <li>
                <WithTransLate text="Service Provider means any natural or legal person who processes the data on behalf of" />
                <br/>
                <WithTransLate text="the Company. It refers to third-party companies or individuals employed by the Company" />
                <br/>
                <WithTransLate text="to facilitate the Service, to provide the Service on behalf of the Company, to perform" />
                <br/>
                <WithTransLate text="services related to the Service or to assist the Company in analyzing how the Service is" />
                <br/>
                <WithTransLate text="used." />
            </li>

            <li>
              <WithTransLate text="Usage Data refers to data collected automatically, either generated by the use of the" />
              <br/>
              <WithTransLate text="Service or from the Service infrastructure itself (for example, the duration of a page visit)." />
            </li>

            <li>
              <WithTransLate text="Website refers to Blue House B&B, accessible from" />
              <a href="https://bluehouse.is/" className={link}>
                {" "}
                https://bluehouse.is/{" "}
              </a>

              <WithTransLate text="and Grotta" />
              <br/>
              <WithTransLate text="Northern Lights apartment, accessible from" />
              <a href="https://grottanorthernlights.com/" className={link}>
                {" "}
                https://grottanorthernlights.com/{" "}
              </a>
            </li>

            <li>
              <WithTransLate text="You means the individual accessing or using the Service, or the company, or other legal" />
              <br/>
              <WithTransLate text="entity on behalf of which such individual is accessing or using the Service, as applicable." />
            </li>
          </ul>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="II. Collecting and Using Your Personal Data" />
        </h2>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="A. Types of Data Collected" />
          </h3>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="1. Personal Data" />
            </h4>

            <div className={textClass}>
              <WithTransLate text="While using Our Service, We may ask You to provide Us with certain personally identifiable"/>
              <br/>
              <WithTransLate text="information that can be used to contact or identify You. Personally identifiable information"/>
              <br/>
              <WithTransLate text="may include, but is not limited to:"/>
              <ul className={personalDataList}>
                <li>
                  <WithTransLate text="First name and last name" />
                </li>

                <li>
                  <WithTransLate text="Email address" />
                </li>

                <li>
                  <WithTransLate text="Address, State, Province, ZIP/Postal code, City" />
                </li>

                <li>
                  <WithTransLate text="Phone number" />
                </li>

                <li>
                  <WithTransLate text="Credit card details" />
                </li>
              </ul>
            </div>
          </div>
        </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="2. Usage Data" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="Usage Data is collected automatically when using the Service." />
              <br/>
              <WithTransLate text="Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP"/>
              <br/>
              <WithTransLate text="address), browser type, browser version, the pages of our Service that You visit, the time and"/>
              <br/>
              <WithTransLate text="date of Your visit, the time spent on those pages, unique device identifiers and other"/>
              <br/>
              <WithTransLate text="diagnostic data." />
              <br/>
              <WithTransLate text="When You access the Service by or through a mobile device, We may collect certain"/>
              <br/>
              <WithTransLate text="information automatically, including, but not limited to, the type of mobile device You use,"/>
              <br/>
              <WithTransLate text="Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating"/>
              <br/>
              <WithTransLate text="system, the type of mobile Internet browser You use, unique device identifiers and other"/>
              <br/>
              <WithTransLate text="diagnostic data." />
              <br/>
              <WithTransLate text="We may also collect information that Your browser sends whenever You visit our Service or"/>
              <br/>
              <WithTransLate text="when You access the Service by or through a mobile device." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="3. Comments" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="When You leave comments on the site We collect the data shown in the comments form, and"/>
              <br/>
              <WithTransLate text="also Your IP address and browser user agent string to help spam detection." />
              <br/>
              <WithTransLate text="An anonymized string created from Your email address (also called a hash) may be provided" />
              <br/>
              <WithTransLate text="to the Gravatar service to see if You are" />
              <br/>
              <WithTransLate text="using the service. The Gravatar service privacy policy is available here: https://" />
              <br/>
              <WithTransLate text="automattic.com/privacy/. After approval of Your comment, Your profile picture is visible to" />
              <br/>
              <WithTransLate text="the public in the context of Your comment." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="4. Media" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="If You upload images to the website, You should avoid uploading images with embedded" />
              <br/>
              <WithTransLate text="location data (EXIF GPS) included. Any visitor to the website can download and extract any" />
              <br/>
              <WithTransLate text="location data from images on the website." />
            </p>
          </div>

          <div className={typesOfDataItem}>
            <h4 className={additionSubtitle}>
              <WithTransLate text="5. Cookies" />
            </h4>

            <p className={textClass}>
              <WithTransLate text="We use Cookies to track the activity on Our Service and store certain information." />
              <br/>
              <WithTransLate text="We use both Session and Persistent Cookies for the purposes set out below:" />
            <ul className={paddingList}>
              <li>
                  <WithTransLate text="Necessary / Essential Cookies" />
              </li>
              <li>
                  <WithTransLate text="These Cookies are essential to provide You with services available through the Website"/>
                  <br/>
                  <WithTransLate text="and to enable You to use some of its features. They help to authenticate users and"/>
                  <br/>
                  <WithTransLate text="prevent fraudulent use of user accounts. Without these Cookies, the services that You"/>
                  <br/>
                  <WithTransLate text="have asked for cannot be provided, and We only use these Cookies to provide You with"/>
                  <br/>
                  <WithTransLate text="those services." />
              </li>
              <li>
                  <WithTransLate text="Cookie Policy / Notice Acceptance Cookies" />
              </li>
              <li>
                  <WithTransLate text="These Cookies identify if users have accepted the use of cookies on the Website." />
              </li>
              <li>
                  <WithTransLate text="Functionality Cookies" />
              </li>
              <li>
                  <WithTransLate text="These Cookies allow us to remember choices You make when You use the Website, such"/>
                  <br/>
                  <WithTransLate text="as remembering your login details or language preference. The purpose of these Cookies" />
                  <br/>
                  <WithTransLate text="is to provide You with a more personal experience and to avoid You having to re-enter" />
                  <br/>
                  <WithTransLate text="your preferences every time You use the Website. For example:" />
                  <ol className={functionalityCookiesList}>
                    <li>
                      <p className={`${textClass} ${marginBottom}`}>
                        <WithTransLate text="If You leave a comment on Our Site You may opt-in to saving Your name, email" />
                        <br/>
                        <WithTransLate text="address and website in cookies. These are for Your convenience so that You do not" />
                        <br/>
                        <WithTransLate text="have to fill in your details again when You leave another comment. These cookies will" />
                        <br/>
                        <WithTransLate text="last for one year." />
                      </p>
                    </li>
                    <li>
                      <p className={`${textClass} ${marginBottom}`}>
                        <WithTransLate text="When You log in, we will also set up several cookies to save Your login information" />
                        <br/>
                        <WithTransLate text="and Your screen display choices. Login cookies last for two days, and screen options" />
                        <br/>
                        <WithTransLate text="cookies last for a year. If You select “Remember Me”, Your login will persist for two" />
                        <br/>
                        <WithTransLate text="weeks. If You log out of Your account, the login cookies will be removed." />
                      </p>
                    </li>
                    <li>
                      <p className={textClass}>
                        <WithTransLate text="If You edit or publish an article, an additional cookie will be saved in Your browser." />
                        <br/>
                        <WithTransLate text="This cookie includes no personal data and simply indicates the post ID of the article " />
                        <br/>
                        <WithTransLate text="You just edited. It expires after 1 day." />
                      </p>
                    </li>
                  </ol>
              </li>
            </ul>
          </p>
        </div>
      
        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="B. Use of Your Personal Data" />
          </h3>

          <p className={textClass}>
            <WithTransLate text="The Company may use Personal Data for the following purposes:" />
          <ul className={paddingList}>
            <li>
                <WithTransLate text="To provide and maintain our Service, including to monitor the usage of our Service." />
            </li>
            <li>
                <WithTransLate text="To manage Your Account: to manage Your registration as a user of the Service. The" />
                <br/>
                <WithTransLate text="Personal Data You provide can give You access to different functionalities of the Service" />
                <br/>
                <WithTransLate text="that are available to You as a registered user." />
            </li>
            <li>
                <WithTransLate text="For the performance of a contract: the development, compliance and undertaking of the" />
                <br/>
                <WithTransLate text="purchase contract for the products, items or services You have purchased or of any other" />
                <br/>
                <WithTransLate text="contract with Us through the Service." />
            </li>
            <li>
                <WithTransLate text="To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms" />
                <br/>
                <WithTransLate text="of electronic communication, such as a mobile application's push notifications regarding" />
                <br/>
                <WithTransLate text="updates or informative communications related to the functionalities, products or" />
                <br/>
                <WithTransLate text="contracted services, including the security updates, when necessary or reasonable for their" />
                <br/>
                <WithTransLate text="implementation." />
            </li>
            <li>
                <WithTransLate text="To provide You with news, special offers and general information about other goods," />
                <br/>
                <WithTransLate text="services and events which we offer that are similar to those that you have already" />
                <br/>
                <WithTransLate text="purchased or enquired about unless You have opted not to receive such information." />
            </li>
            <li>
                <WithTransLate text="To manage Your requests: To attend and manage Your requests to Us." />
            </li>
            <li>
                <WithTransLate text="For business transfers: We may use Your information to evaluate or conduct a merger," />
                <br/>
                <WithTransLate text="divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or" />
                <br/>
                <WithTransLate text="all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or" />
                <br/>
                <WithTransLate text="similar proceeding, in which Personal Data held by Us about our Service users is among" />
                <br/>
                <WithTransLate text="the assets transferred." />
            </li>
            <li>
                <WithTransLate text="For other purposes: We may use Your information for other purposes, such as data" />
                <br/>
                <WithTransLate text="analysis, identifying usage trends, determining the effectiveness of our promotional" />
                <br/>
                <WithTransLate text="campaigns and to evaluate and improve our Service, products, services, marketing and" />
                <br/>
                <WithTransLate text="your experience." />
            </li>
            <li>
                <WithTransLate text="We may share Your personal information in the following situations:" />
            </li>
            <li>
                <WithTransLate text="With Service Providers: We may share Your personal information with Service Providers to" />
                <br/>
                <WithTransLate text="monitor and analyze the use of our Service, to contact You." />
            </li>
            <li>
                <WithTransLate text="For business transfers: We may share or transfer Your personal information in connection" />
                <br/>
                <WithTransLate text="with, or during negotiations of, any merger, sale of Company assets, financing, or" />
                <br/>
                <WithTransLate text="acquisition of all or a portion of Our business to another company." />
            </li>
            <li>
                <WithTransLate text="With Affiliates: We may share Your information with Our affiliates, in which case we will" />
                <br/>
                <WithTransLate text="require those affiliates to honor this Privacy Policy. Affiliates include Our parent company" />
                <br/>
                <WithTransLate text="and any other subsidiaries, joint venture partners or other companies that We control or" />
                <br/>                
                <WithTransLate text="that are under common control with Us." />
            </li>
            <li>
                <WithTransLate text="With business partners: We may share Your information with Our business partners to" />
                <br/>
                <WithTransLate text="offer You certain products, services or promotions." />
            </li>
            <li>
                <WithTransLate text="With other users: when You share personal information or otherwise interact in the public" />
                <br/>
                <WithTransLate text="areas with other users, such information may be viewed by all users and may be publicly" />
                <br/>
                <WithTransLate text="distributed outside." />
            </li>
            <li>
                <WithTransLate text="With Your consent: We may disclose Your personal information for any other purpose with" />
                <br/>
                <WithTransLate text="Your consent." />
            </li>
          </ul>
        </p>
      </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="C. Retention of Your Personal Data" />
          </h3>

          <p className={textClass}>
            <WithTransLate text="The Company will retain Your Personal Data only for as long as is necessary for the purposes"/>
            <br/>
            <WithTransLate text="set out in this Privacy Policy. We will retain and use Your Personal Data to the extent" />
            <br/>
            <WithTransLate text="necessary to comply with our legal obligations (for example, if we are required to retain your" />
            <br/>
            <WithTransLate text="data to comply with applicable laws), resolve disputes, and enforce our legal agreements" />
            <br/>
            <WithTransLate text="and policies." />
            <br/>
            <WithTransLate text="The Company will also retain Usage Data for internal analysis purposes. Usage Data is" />
            <br/>
            <WithTransLate text="generally retained for a shorter period of time, except when this data is used to strengthen" />
            <br/>
            <WithTransLate text="the security or to improve the functionality of Our Service, or We are legally obligated to" />
            <br/>
            <WithTransLate text="retain this data for longer time periods." />
            <br/>          
            <WithTransLate text="For users that register on our website (if any), We also store the personal information they" />
            <br/>
            <WithTransLate text="provide in their user profile. All users can see, edit, or delete their personal information at any" />
            <br/>
            <WithTransLate text="time (except they cannot change their username). Website administrators can also see and" />
            <br/>
            <WithTransLate text="edit that information." />
          </p>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="D. Disclosure of Your Personal Data" />
          </h3>
              <p className={textClass}>
                <WithTransLate text="1. Law enforcement" />
              <br/>
              <WithTransLate text="Under certain circumstances, the Company may be required to disclose Your Personal Data if" />
              <br/>
              <WithTransLate text="required to do so by law or in response to valid requests by public authorities (e.g. a court or" />
              <br/>
              <WithTransLate text="a government agency)." /> 
              </p>

            <p className={textClass}>
              <WithTransLate text="2. Other legal requirements" />
              <br/>
              <WithTransLate text="The Company may disclose Your Personal Data in the good faith belief that such action is" />
              <br/>
              <WithTransLate text="necessary to:" />
                <ul className={personalDataList}>
                  <li>
                    <WithTransLate text="Comply with a legal obligation" />
                  </li>

                  <li>
                    <WithTransLate text="Protect and defend the rights or property of the Company" />
                  </li>

                  <li>
                    <WithTransLate text="Prevent or investigate possible wrongdoing in connection with the Service" />
                  </li>

                  <li>
                    <WithTransLate text="Protect the personal safety of Users of the Service or the public" />
                  </li>

                  <li>
                    <WithTransLate text="Protect against legal liability" />
                  </li>
                </ul>
              </p>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="E. Security of Your Personal Data" />
          </h3>

          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="The security of Your Personal Data is important to Us but remember that no method of" />
              <br/>
              <WithTransLate text="transmission over the Internet, or method of electronic storage is 100% secure. While We" />
              <br/>
              <WithTransLate text="strive to use commercially acceptable means to protect Your Personal Data, We cannot" />
              <br/>
              <WithTransLate text="guarantee its absolute security." />
            </p>
          </div>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="F. Embedded content from other websites" />
          </h3>

          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="Articles on Our site may include embedded content (e.g. videos, images, articles, etc.)." />
              <br/>
              <WithTransLate text="Embedded content from other websites behaves in the exact same way as if the visitor has"/>
              <br/>
              <WithTransLate text="visited the other website." />
              <br/>
              <WithTransLate text="These websites may collect data about You, use cookies, embed additional third-party" />
              <br/>
              <WithTransLate text="tracking, and monitor Your interaction with that embedded content, including tracking Your" />
              <br/>
              <WithTransLate text="interaction with the embedded content if You have an account and are logged in to that" />
              <br/>
              <WithTransLate text="website." />
            </p>
          </div>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="III. What rights do you have over your data." />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="If you have an account on this site, or have left comments, you can request to receive an" />
              <br/>
              <WithTransLate text="exported file of the personal data we hold about you, including any data you have provided" />
              <br/>
              <WithTransLate text="to us. You can also request that we erase any personal data we hold about you. This does" />
              <br/>
              <WithTransLate text="not include any data we are obliged to keep for administrative, legal, or security purposes." />
              <br/>
              <WithTransLate text="You have several rights under data-protection law in relation to how we use your personal" />
              <br/>
              <WithTransLate text="information. You have the right, free of charge, to:" />

              <ul className={personalDataList}>
                <li>
                  <WithTransLate text="Request a copy of the personal information we hold about you in a structured, commonly" />
                  <br/>
                  <WithTransLate text="used and machine readable format;" />
                </li>

                <li>
                  <WithTransLate text="Rectify any inaccurate personal information we hold about you;" />
                </li>

                <li>
                  <WithTransLate text="Withdraw your consent where we have relied upon your consent to process your" />
                  <br/>
                  <WithTransLate text="information;" />
                </li>

                <li>
                  <WithTransLate text="Erase the personal information we hold about you subject to certain exceptions;" />
                </li>

                <li>
                  <WithTransLate text="Restrict processing of your personal information in certain circumstances;" />
                </li>

                <li>
                  <WithTransLate text="Object to our use of your personal information for our legitimate interests, for profiling" />
                  <br/>
                  <WithTransLate text="and for direct marketing purposes;" />
                </li>

                <li>
                  <WithTransLate text="Not be subject to a decision which is based solely on automated processing where that" />
                  <br/>
                  <WithTransLate text="decision produces a legal effect on you or otherwise significantly affects you. We do not" />
                  <br/>
                  <WithTransLate text="make automated decisions of this nature;" />
                </li> 

                <li>
                  <WithTransLate text="Lodge a complaint with the appropriate data-protection authority if you have concerns" />
                  <br/>
                  <WithTransLate text="about how we process your personal data." />
                </li>
              </ul>

              <WithTransLate text="Where we need to collect personal data by law, or under the terms of a contract we have" />
              <br/>
              <WithTransLate text="with you and you fail to provide that data when requested, we may not be able to perform" />
              <br/>
              <WithTransLate text="the contract we have or are trying to enter into with you (for example, to provide you with" />
              <br/>
              <WithTransLate text="goods or services). In this case, we may have to cancel a product or service you have with us" />
              <br/>
              <WithTransLate text="but we will notify you if this is the case at the time." />
            </p>
        </div>
      </div>
      
      <br/>
      <br/>
      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="IV. Changes to this Privacy Policy" />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="We may update Our Privacy Policy from time to time. We will notify You of any changes by"/>
              <br/>
              <WithTransLate text="posting the new Privacy Policy on this page." />
              <br/>
              <WithTransLate text="We will let You know via email and/or a prominent notice on Our Service, prior to the" />
              <br/>
              <WithTransLate text="change becoming effective and update the 'Last updated' date at the top of this Privacy" />
              <br/>
              <WithTransLate text="Policy." />
              <br/>
              <WithTransLate text="You are advised to review this Privacy Policy periodically for any changes. Changes to this" />
              <br/>
              <WithTransLate text="Privacy Policy are effective when they are posted on this page." />
            </p>
          </div>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="V. Contact Us" />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={`${textClass} ${marginBottom}`}>
              <WithTransLate text="If you have any questions about this Privacy Policy, You can contact us:" />
            </p>

            <ul className={personalDataList}>
              <li>
                <p className={`${textClass} ${marginBottom}`}>
                  <WithTransLate text="By email:" />

                  <a href="mailto:info@bluehouse.is" className={link}>
                    {" "}
                    info@bluehouse.is{" "}
                  </a>

                  <WithTransLate text="or" />

                  <a
                    href="mailto:info@grottanorthernlights.com"
                    className={link}
                  >
                    {" "}
                    info@grottanorthernlights.com{" "}
                  </a>
                </p>
              </li>

              <li>
                <p className={`${textClass} ${marginBottom}`}>
                  <WithTransLate text="By visiting this page on our website:" />

                  <a
                    href="https://bluehouse.is/privacy-and-policy"
                    className={link}
                  >
                    {" "}
                    https://bluehouse.is/privacy-and-policy{" "}
                  </a>
                </p>
              </li>

              <li>
                <p className={`${textClass} ${marginBottom}`}>
                  <WithTransLate text="By phone number: +354 775 6480" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </Box>
  );
}

Privacy.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
