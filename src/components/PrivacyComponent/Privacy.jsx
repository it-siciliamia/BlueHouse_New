import { Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import s from "./PrivacyComponent.module.scss";
import { WithTransLate } from "../helpers/translating/index.jsx";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Newsletter from "../Newsletter/Newsletter.jsx";
import Header from "../header/Header.jsx";


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
      margin: "144px 0 32px 0",
      fontWeight: "800",
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
    fontSize: "18px",
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
  titlesPolicy: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  headerPolicy: {
    fontSize: "30px",
    color:"#1d3967",
    fontWeight: "700",
    marginBottom: "64px",
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
    fontSize: "20px",
    color:"#1d3967",
    marginBottom: "20px",
    fontWeight: "bold",
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
    fontSize: "19px",
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
    paddingBottom: "8px",
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
    headerPolicy,
    definitionList,
    link,
    subtitle,
    additionSubtitle,
    subtitle2,
    personalDataList,
    collectingAndUsingItem,
    typesOfDataItem,
    paddingList,
    functionalityCookiesList,
    marginBottom,
  } = useStyles();
  return (
    <Box className={root}>
      <div className={s.titleWrapper}>
        <h2 className={s.titleFirst}>
          <WithTransLate text="IMPRINT AND PRIVACY POLICY" />
        </h2>
      </div>
      <div className={s.imagePrivacy}></div>
      <div className={s.buttonSection}>
          <button className={s.buttonLink}>
              <a href="/privacy" className={s.linkText}>
                  Privacy Policy
              </a>
          </button>
          <button className={s.buttonLink}>
              <a href="/cookie-policy" className={s.linkText}>
                  Cookie Policy
              </a>
          </button>
      </div>
      <div className={titleInfo}>
        <div>
             <h1 className={headerPolicy}>PRIVACY POLICY</h1>
             <b><WithTransLate text="Last updated: June 06, 2022" /></b>
        </div>

        <p className={textClass} style={{ marginBottom: "32px" }}>
          <WithTransLate text="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure" />
          <br />
          <WithTransLate text="of Your information when You use the Service and tells You about Your privacy rights and" />
          <br />
          <WithTransLate text="how the law protects You." />
          <br />
          <WithTransLate text="We use Your Personal data to provide and improve the Service. By using the Service, You" />
          <br />
          <WithTransLate text="agree to the collection and use of information in accordance with this Privacy Policy." />
        </p>
      </div>

      <div className={articleWrapper}>
        <h2 className={textClass} style={{ color: "#5875a3ff" }}>
          <WithTransLate text="1. Interpretation and Definitions" />
        </h2>
        <h2 className={textClass} style={{ color: "#5875a3ff" }}>
          <WithTransLate text="2. Collecting and Using Your Personal Data" />
        </h2>
         <h2 className={textClass} style={{ color: "#5875a3ff" }}>
          <WithTransLate text="3. What rights do you have over your data." />
        </h2>
        <h2 className={textClass} style={{ color: "#5875a3ff" }}>
            <WithTransLate text="4. Changes to this Privacy Policy" />
          </h2>
           <h2 className={textClass} style={{ color: "#5875a3ff" }}>
            <WithTransLate text="5. Contact Us" />
          </h2>
        <br />
         <h2 className={articleTitle}>
          <WithTransLate text="1. INTERPRETATION AND DEFINATION" />
         </h2>
        <Subtitle
          title="Interpretation"
          text={
            <>
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </>
          }
        />
        <Subtitle title="Definitions" text="For the purposes of this Privacy Policy:" />
        <div className={textClass} style={{marginBottom:"48px"}}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
            <thead>
              <tr style={{ backgroundColor: '#1E4A71', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd', fontSize: "14px", fontWeight: "400" }}>TERM</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', fontSize: "14px", fontWeight: "400"  }}>DEFINITION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>Account</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"}}>
                  <WithTransLate text="A unique account created for You to access our Service or parts of our Service." />
                </td>
              </tr>
             <tr>
               <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Company</td>
               <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px" }}>
                 <WithTransLate text={
                   <>
                     (Referred to as either 'the Company', 'We', 'Us' or 'Our' in this Agreement) refers to
                     <strong> Blue House B&B</strong>, Valhusabraut 19, Seltjarnarnes, 170, Iceland and
                     <strong> Grotta Northern Lights apartment</strong>, Valhusabraut 35, Seltjarnarnes, 170, Iceland.
                   </>
                 } />
               </td>
             </tr>

              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Cookies</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px" }}>
                  <WithTransLate text="Are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Country</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Refers to: Iceland" />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Device</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Any device that can access the Service such as a computer, a cell phone or a digital tablet." />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Personal Data</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Is any information that relates to an identified or identifiable individual." />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Service</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Refers to the Website." />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Service Provider</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Usage Data</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." />
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>Website</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px"  }}>
                  <WithTransLate text="Refers to Blue House B&B, accessible from " />
                  <a style={{ color: "#1a0dab", textDecoration: "underline", fontWeight: "400" }} href="https://bluehouse.is/">https://bluehouse.is/</a>
                  <WithTransLate text="and Grotta Northern Lights apartment, accessible from " />
                  <a style={{ color: "#1a0dab", textDecoration: "underline", fontWeight: "400"  }} href="https://grottanorthernlights.com/">https://grottanorthernlights.com/</a>
                </td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px" }}>You</td>
                <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "15px" }}>
                  <WithTransLate text="You means the individual accessing or using the Service, or the company, or other legal" />
                  <br />
                  <WithTransLate text="entity on behalf of which such individual is accessing or using the Service, as applicable." />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="2. COLLECTING AND USING YOUR PERSONAL DATA" />
        </h2>

        <div className={collectingAndUsingItem}>
          <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="A. Types of Data Collected" />
          </h3>
        </div>
        <div style={{marginBottom:"48px"}}>
          <Accordion>
             <AccordionSummary className={typesOfDataItem}expandIcon={<ExpandMoreIcon />}>
              <h4 className={additionSubtitle}>
                <WithTransLate text="Personal Data" />
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <div className={textClass}>
                <WithTransLate text="While using Our Service, We may ask You to provide Us with certain personally identifiable" />
                <br />
                <WithTransLate text="information that can be used to contact or identify You. Personally identifiable information" />
                <br />
                <WithTransLate text="may include, but is not limited to:" />
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
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
              <h4 className={additionSubtitle}>
                <WithTransLate text="Usage Data" />
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={textClass}>
                <WithTransLate text="Usage Data is collected automatically when using the Service." />
                <br />
                <WithTransLate text="Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP" />
                <br />
                <WithTransLate text="address), browser type, browser version, the pages of our Service that You visit, the time and" />
                <br />
                <WithTransLate text="date of Your visit, the time spent on those pages, unique device identifiers and other" />
                <br />
                <WithTransLate text="diagnostic data." />
                <br />
                <WithTransLate text="When You access the Service by or through a mobile device, We may collect certain" />
                <br />
                <WithTransLate text="information automatically, including, but not limited to, the type of mobile device You use," />
                <br />
                <WithTransLate text="Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating" />
                <br />
                <WithTransLate text="system, the type of mobile Internet browser You use, unique device identifiers and other" />
                <br />
                <WithTransLate text="diagnostic data." />
                <br />
                <WithTransLate text="We may also collect information that Your browser sends whenever You visit our Service or" />
                <br />
                <WithTransLate text="when You access the Service by or through a mobile device." />
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
              <h4 className={additionSubtitle}>
                <WithTransLate text="Comments" />
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={textClass}>
                <WithTransLate text="When You leave comments on the site We collect the data shown in the comments form, and" />
                <br />
                <WithTransLate text="also Your IP address and browser user agent string to help spam detection." />
                <br />
                <WithTransLate text="An anonymized string created from Your email address (also called a hash) may be provided" />
                <br />
                <WithTransLate text="to the Gravatar service to see if You are" />
                <br />
                <WithTransLate text="using the service. The Gravatar service privacy policy is available here: https://" />
                <br />
                <WithTransLate text="automattic.com/privacy/. After approval of Your comment, Your profile picture is visible to" />
                <br />
                <WithTransLate text="the public in the context of Your comment." />
               </p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
              <h4 className={additionSubtitle}>
                <WithTransLate text="Media" />
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={textClass}>
                <WithTransLate text="If You upload images to the website, You should avoid uploading images with embedded" />
                <br />
                <WithTransLate text="location data (EXIF GPS) included. Any visitor to the website can download and extract any" />
                <br />
                <WithTransLate text="location data from images on the website." />
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
              <h4 className={additionSubtitle}>
                <WithTransLate text="Cookies" />
              </h4>
            </AccordionSummary>
            <AccordionDetails>
              <p className={textClass}>
                <WithTransLate text="We use Cookies to track the activity on Our Service and store certain information." />
                <br />
                <WithTransLate text="We use both Session and Persistent Cookies for the purposes set out below:" />
                <ul className={personalDataList}>
                  <li><WithTransLate text="Necessary / Essential Cookies" /></li>
                  <li><WithTransLate text="Cookie Policy / Notice Acceptance Cookies" /></li>
                  <li><WithTransLate text="Functionality Cookies" /></li>
                </ul>
              </p>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 style={{fontSize:"19px", marginBottom:"32px"}} className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="B. Use of Your Personal Data" />
          </h3>

         <p className={textClass}>
            <b style={{textDecoration:"underline"}}><WithTransLate text="The Company may use Personal Data for the following purposes:" /></b>
            <ul style={{marginTop:"16px"}} className={paddingList}>
              <li>
                <WithTransLate text="1. To provide and maintain our Service, including to monitor the usage of our Service." />
              </li><br />
              <li>
                <WithTransLate text="2. To manage Your Account: to manage Your registration as a user of the Service. The" />
                <WithTransLate text="Personal Data You provide can give You access to different functionalities of the Service" />
                <WithTransLate text="that are available to You as a registered user." />
              </li><br />
              <li>
                <WithTransLate text="3. For the performance of a contract: the development, compliance and undertaking of the" />
                <WithTransLate text="purchase contract for the products, items or services You have purchased or of any other" />
                <WithTransLate text="contract with Us through the Service." />
              </li><br />
              <li>
                <WithTransLate text="4. To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms" />
                <WithTransLate text="of electronic communication, such as a mobile application's push notifications regarding" />
                <WithTransLate text="updates or informative communications related to the functionalities, products or" />
                <WithTransLate text="contracted services, including the security updates, when necessary or reasonable for their" />
                <WithTransLate text="implementation." />
              </li><br />
              <li>
                <WithTransLate text="5. To provide You with news, special offers and general information about other goods," />
                <WithTransLate text="services and events which we offer that are similar to those that you have already" />
                <WithTransLate text="purchased or enquired about unless You have opted not to receive such information." />
              </li><br />
              <li>
                <WithTransLate text="6. To manage Your requests: To attend and manage Your requests to Us." />
              </li>
              <li>
                <WithTransLate text="7. For business transfers: We may use Your information to evaluate or conduct a merger," />
                <WithTransLate text="divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or" />
                <WithTransLate text="all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or" />
                <WithTransLate text="similar proceeding, in which Personal Data held by Us about our Service users is among" />
                <WithTransLate text="the assets transferred." />
              </li><br />
              <li>
                <WithTransLate text="8. For other purposes: We may use Your information for other purposes, such as data" />
                <WithTransLate text="analysis, identifying usage trends, determining the effectiveness of our promotional" />
                <WithTransLate text="campaigns and to evaluate and improve our Service, products, services, marketing and" />
                <WithTransLate text="your experience." />
              </li><br />
              <li>
                <b><WithTransLate text="We may share Your personal information in the following situations:" /></b>
              </li><br />
              <li>
                <WithTransLate text="1. With Service Providers: We may share Your personal information with Service Providers to" />
                <WithTransLate text="monitor and analyze the use of our Service, to contact You." />
              </li><br />
              <li>
                <WithTransLate text="2. For business transfers: We may share or transfer Your personal information in connection" />
                <WithTransLate text="with, or during negotiations of, any merger, sale of Company assets, financing, or" />
                <WithTransLate text="acquisition of all or a portion of Our business to another company." />
              </li><br />
              <li>
                <WithTransLate text="3. With Affiliates: We may share Your information with Our affiliates, in which case we will" />
                <WithTransLate text="require those affiliates to honor this Privacy Policy. Affiliates include Our parent company" />
                <WithTransLate text="and any other subsidiaries, joint venture partners or other companies that We control or" />
                <WithTransLate text="that are under common control with Us." />
              </li><br />
              <li>
                <WithTransLate text="4. With business partners: We may share Your information with Our business partners to" />
                <WithTransLate text="offer You certain products, services or promotions." />
              </li><br />
              <li>
                <WithTransLate text="5. With other users: when You share personal information or otherwise interact in the public" />
                <WithTransLate text="areas with other users, such information may be viewed by all users and may be publicly" />
                <WithTransLate text="distributed outside." />
              </li><br />
              <li style={{marginBottom:"48px"}}>
                <WithTransLate text="6. With Your consent: We may disclose Your personal information for any other purpose with" />
                <WithTransLate text="Your consent." />
              </li>
            </ul>
          </p>
        </div>


        <div style={{marginBottom:"48px"}} className={collectingAndUsingItem}>
          <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="C. Retention of Your Personal Data" />
          </h3>

          <p className={textClass}>
            <WithTransLate text="The Company will retain Your Personal Data only for as long as is necessary for the purposes" />
            <WithTransLate text="set out in this Privacy Policy. We will retain and use Your Personal Data to the extent" />
            <WithTransLate text="necessary to comply with our legal obligations (for example, if we are required to retain your" />
            <WithTransLate text="data to comply with applicable laws), resolve disputes, and enforce our legal agreements" />
            <WithTransLate text="and policies." />
            <br /><br />
            <WithTransLate text="The Company will also retain Usage Data for internal analysis purposes. Usage Data is" />
            <WithTransLate text="generally retained for a shorter period of time, except when this data is used to strengthen" />
            <WithTransLate text="the security or to improve the functionality of Our Service, or We are legally obligated to" />
            <WithTransLate text="retain this data for longer time periods." />
            <br /><br />
            <WithTransLate text="For users that register on our website (if any), We also store the personal information they" />
            <WithTransLate text="provide in their user profile. All users can see, edit, or delete their personal information at any" />
            <WithTransLate text="time (except they cannot change their username). Website administrators can also see and" />
            <WithTransLate text="edit that information." />
          </p>
        </div>

         <div style={{marginBottom:"48px"}} className={collectingAndUsingItem}>
         <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="D. Disclosure of Your Personal Data" />
          </h3>
           <Accordion>
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <p className={typesOfDataItem}>
                  <b><WithTransLate text="Law enforcement" /></b>
               </p>
             </AccordionSummary>
             <AccordionDetails>
                <div className={textClass}>
                  <WithTransLate text="Under certain circumstances, the Company may be required to disclose Your Personal Data if" />
                  <br />
                  <WithTransLate text="required to do so by law or in response to valid requests by public authorities (e.g. a court or" />
                  <br />
                  <WithTransLate text="a government agency)." />
                </div>
             </AccordionDetails>
           </Accordion>

           <Accordion>
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <p className={typesOfDataItem}>
                  <b><WithTransLate text="Other legal requirements" /></b>
               </p>
             </AccordionSummary>
             <AccordionDetails>
                <div className={textClass}>
                <WithTransLate text="The Company may disclose Your Personal Data in the good faith belief that such action is" />
                <br />
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
                </div>
             </AccordionDetails>
           </Accordion>

         </div>

        <div style={{marginBottom:"48px"}} className={collectingAndUsingItem}>
          <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="E. Security of Your Personal Data" />
          </h3>

          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="The security of Your Personal Data is important to Us but remember that no method of" />
              <WithTransLate text="transmission over the Internet, or method of electronic storage is 100% secure. While We" />
              <WithTransLate text="strive to use commercially acceptable means to protect Your Personal Data, We cannot" />
              <WithTransLate text="guarantee its absolute security." />
            </p>
          </div>
        </div>

        <div className={collectingAndUsingItem}>
          <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
            <WithTransLate text="F. Embedded content from other websites" />
          </h3>

          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="Articles on Our site may include embedded content (e.g. videos, images, articles, etc.)." />
              <WithTransLate text="Embedded content from other websites behaves in the exact same way as if the visitor has" />
              <WithTransLate text="visited the other website." />
              <br /><br />
              <WithTransLate text="These websites may collect data about You, use cookies, embed additional third-party" />
              <WithTransLate text="tracking, and monitor Your interaction with that embedded content, including tracking Your" />
              <WithTransLate text="interaction with the embedded content if You have an account and are logged in to that" />
              <WithTransLate text="website." />
            </p>
          </div>
        </div>
      </div>

      <div className={articleWrapper}>
        <h2 className={articleTitle}>
          <WithTransLate text="3. WHAT RIGHTS DO YOU HAVE OVER YOUR DATA." />
        </h2>

        <div className={collectingAndUsingItem}>
          <div className={typesOfDataItem}>
            <p className={textClass}>
              <WithTransLate text="If you have an account on this site, or have left comments, you can request to receive an" />
              <WithTransLate text="exported file of the personal data we hold about you, including any data you have provided" />
              <WithTransLate text="to us. You can also request that we erase any personal data we hold about you. This does" />
              <WithTransLate text="not include any data we are obliged to keep for administrative, legal, or security purposes." />
              <br /><br />
              <b style={{textDecoration:"underline"}}><WithTransLate text="You have several rights under data-protection law in relation to how we use your personal " /></b>
              <b style={{textDecoration:"underline"}}><WithTransLate text="information. You have the right, free of charge, to:" /></b><br />

              <ul className={personalDataList}>
                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="1. Request a copy of the personal information we hold about you in a structured, commonly" />
                  <WithTransLate text="used and machine readable format;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="2. Rectify any inaccurate personal information we hold about you;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="3. Withdraw your consent where we have relied upon your consent to process your" />
                  <WithTransLate text="information;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="4. Erase the personal information we hold about you subject to certain exceptions;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="5. Restrict processing of your personal information in certain circumstances;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="6. Object to our use of your personal information for our legitimate interests, for profiling" />
                  <WithTransLate text="and for direct marketing purposes;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="7. Not be subject to a decision which is based solely on automated processing where that" />
                  <WithTransLate text="decision produces a legal effect on you or otherwise significantly affects you. We do not" />
                  <WithTransLate text="make automated decisions of this nature;" />
                </li>

                <li style={{marginBottom:"16px"}}>
                  <WithTransLate text="8. Lodge a complaint with the appropriate data-protection authority if you have concerns" />
                  <WithTransLate text="about how we process your personal data." />
                </li>
              </ul>

              <WithTransLate text="Where we need to collect personal data by law, or under the terms of a contract we have" />
              <WithTransLate text="with you and you fail to provide that data when requested, we may not be able to perform" />
              <WithTransLate text="the contract we have or are trying to enter into with you (for example, to provide you with" />
              <WithTransLate text="goods or services). In this case, we may have to cancel a product or service you have with us" />
              <WithTransLate text="but we will notify you if this is the case at the time." />
            </p>
          </div>
        </div>

        <br />
        <br />
        <div className={articleWrapper}>
          <h2 className={articleTitle}>
            <WithTransLate text="4. CHANGES TO THIS PRIVACY POLICY" />
          </h2>

          <div style={{marginBottom:"48px"}} className={collectingAndUsingItem}>
            <div className={typesOfDataItem}>
              <div className={textClass}>
                <p style={{marginBottom:"16px"}}>
                  <WithTransLate text="We may update Our Privacy Policy from time to time. We will notify You of any changes by" />
                  <WithTransLate text="posting the new Privacy Policy on this page." />
                  <br />
                </p>
                <p style={{marginBottom:"16px"}}></p>
                  <WithTransLate text="We will let You know via email and/or a prominent notice on Our Service, prior to the" />
                  <WithTransLate text="change becoming effective and update the 'Last updated' date at the top of this Privacy" />
                  <WithTransLate text="Policy." />
                <br />
                <p>
                  <WithTransLate text="You are advised to review this Privacy Policy periodically for any changes. Changes to this" />
                  <WithTransLate text="Privacy Policy are effective when they are posted on this page." />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={{marginBottom:"0px"}} className={articleWrapper}>
          <h2 className={articleTitle}>
            <WithTransLate text="5. CONTACT US" />
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

                    <a style={{ color: "#66629cff", textDecoration: "underline", fontWeight: "400" }} href="mailto:info@bluehouse.is" className={link}>
                      {" "}
                      info@bluehouse.is{" "}
                    </a>

                    <WithTransLate text="or" />

                    <a style={{ color: "#66629cff", textDecoration: "underline", fontWeight: "400" }} href="mailto:info@grottanorthernlights.com" className={link}>
                      {" "}
                      info@grottanorthernlights.com{" "}
                    </a>
                  </p>
                </li>

                <li>
                  <p className={`${textClass} ${marginBottom}`}>
                    <WithTransLate text="By visiting this page on our website:" />

                    <a style={{ color: "#66629cff", textDecoration: "underline", fontWeight: "400" }} href="https://bluehouse.is/privacy-and-policy" className={link}>
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
      <div>
         <WithTransLate text="For further information on how we can handle your data please read our privacy policy." />
         <br /><br /><br /><br />
         <Newsletter/>
      </div>
    </Box>
  );
}

Privacy.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
