// import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import useBreakpoints from "../../Styles/useBreakpointsNew.js";
// import s from "./PrivacyComponent.module.scss";
// import { WithTransLate } from "../helpers/translating/index.jsx";
// import BookingBtnWrapper from "../BookingBtnWrapper/BookingBtnWrapper.jsx";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Newsletter from "../Newsletter/Newsletter.jsx";
// import NewMap from "../map/NewMap.jsx";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     fontFamily: "Josefin Sans",
//     marginTop: "-20px",
//     marginBottom: "-40px",
//     flexDirection: "column",
//     [theme.breakpoints.between(768, 1024)]: {
//       marginBottom: "-50px",
//     },
//   },

//   title: {
//     fontFamily: "Oblik",
//     fontSize: "40px",
//     fontWeight: "700",
//     lineHeight: "50px",
//     [theme.breakpoints.down("md")]: {
//       fontSize: "30px",
//       lineHeight: "40px",
//     },
//     [theme.breakpoints.between(768, 1024)]: {
//       fontSize: "35px",
//       lineHeight: "45px",
//     },
//   },
//   titleInfo: {
//     margin: "4px 0 ",
//   },

//   titleContainer: {
//     fontFamily: "Josefin sans",
//     display: "flex",
//     flexDirection: "column",
//     textAling: "left",
//     justifyContent: "space-between",
//     marginTop: "20px",
//   },

//   collectingAndUsingItem: {},
//   typesOfDataItem: {},
//   paddingList: {
//     paddingLeft: "35px",
//   },

//    headerPolicy: {
//     fontSize: "30px",
//     color:"#1d3967",
//     fontWeight: "700",
//     marginBottom: "64px",
//   },

//   textClass: {
//     marginBottom: "32px",
//     fontSize: "18px",
//     lineHeight: "24px",
//     fontWeight: 300,
//     letterSpacing: "0em",
//     [theme.breakpoints.down("md")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//     [theme.breakpoints.between(768, 1024)]: {
//       fontSize: "17px",
//       lineHeight: "23px",
//     },
//   },

//   articleWrapper: {
//     marginBottom: "20px",
//     [theme.breakpoints.down("md")]: {
//       marginBottom: "24px",
//     },
//     [theme.breakpoints.between(768, 1024)]: {
//       marginBottom: "34px",
//     },
//   },

//   definitionList: {
//     paddingLeft: "30px",
//     "& li": {
//       paddingBottom: "10px",
//     },
//     "& li:last-child": {
//       paddingBottom: 0,
//     },
//   },

//   definition: {
//     fontWeight: 600,
//   },

//   link: {
//     color: "#1D3967",
//     textDecoration: "none",
//   },

//   linkWrapper: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottom: "1px solid #e5e5e5",
//     color: "#1D3967",
//     paddingBottom: "20px",
//     marginBottom: "10px",
//   },

//   subtitle: {
//     marginBottom: "10px",
//     fontWeight: 400,
//     fontSize: "23px",
//     [theme.breakpoints.down("md")]: {
//       fontSize: "16px",
//     },
//     [theme.breakpoints.between(768, 1024)]: {
//       fontSize: "17px",
//     },
//   },

//   subtitle2: {
//     marginBottom: "25px",
//     marginTop: "25px",
//     fontSize: "22.5px",
//   },

//   additionSubtitle: {
//     marginTop: "30px",
//     marginBottom: "20px",
//     fontSize: "19px",
//     lineHeight: "24px",
//     fontWeight: 600,
//     letterSpacing: "0em",
//     [theme.breakpoints.down("md")]: {
//       fontSize: "16px",
//       lineHeight: "22px",
//     },
//     [theme.breakpoints.between(768, 1024)]: {
//       fontSize: "17px",
//       lineHeight: "23px",
//     },
//   },
// }));

// const COOKIES_ADVERTISEMENT = [
//   { id: 1, text: "TAUnique", link: ".tripadvisor.com" },
//   { id: 2, text: "TACds", link: ".tripadvisor.com" },
//   { id: 3, text: "b3e783bb62", link: "salesiq.zoho.eu" },
// ];

// const COOKIES_ANALITICS = [
//   { id: 1, text: "_ga", link: ".bluehouse.is" },
//   { id: 2, text: "_gid", link: ".bluehouse.is" },
//   { id: 3, text: "_gat_UA-223879896-1", link: ".bluehouse.is" },
//   { id: 4, text: "_ga_6QGX4YP9SF", link: ".bluehouse.is" },
//   { id: 5, text: "LaVisitorNew", link: ".bluehouse.is" },
//   { id: 6, text: "LaSID", link: ".bluehouse.is" },
//   { id: 7, text: "_ga_WYRZ6Q7MDE", link: ".bluehouse.is" },
//   { id: 8, text: "TADCID", link: "www.tripadvisor.com" },
// ];

// const COOKIES_FUNCTIONAL = [
//   { id: 1, text: "TASession", link: ".tripadvisor.com" },
//   { id: 2, text: "ServerPool", link: ".tripadvisor.com" },
//   { id: 3, text: "_zcsr_tmp", link: "salesiq.zoho.eu" },
// ];

// const COOKIES_NECESSARY = [
//   { id: 1, text: "LS_CSRF_TOKEN", link: "salesiq.zoho.eu" },
//   { id: 2, text: "zfccn", link: "pagesense-collect.zoho.eu" },
//   // { id: 3, text: "JSESSIONID", link: "maillist-manage.eu" },
// ];

// export default function CookiePolicy() {
//   const {
//     root,
//     textClass,
//     titleInfo,
//     headerPolicy,
//     definitionList,
//     definition,
//     articleWrapper,
//     link,
//     linkWrapper,
//     subtitle,
//     subtitle2,
//     additionSubtitle,
//     collectingAndUsingItem,
//     typesOfDataItem,
//   } = useStyles();

//   const { isMobile, isTablet } = useBreakpoints();

//   return (
//     <Box className={root}>
//        <div>
//         {!!(isMobile || isTablet) && <BookingBtnWrapper />}
//        </div>
//        <div className={s.titleWrapper}>
//           <h2 style={{left: "-100px"}} className={s.titleFirst}>
//             <WithTransLate text="COOKIE POLICY" />
//           </h2>
//        </div>
//        <div className={s.imagePrivacy}></div>
//        <div className={s.buttonSection}>
//             <button className={s.buttonLink}>
//                 <a href="/privacy" className={s.linkText}>
//                     Privacy Policy
//                 </a>
//             </button>
//             <button className={s.buttonLink}>
//                 <a href="/cookie-policy" className={s.linkText}>
//                     Cookie Policy
//                 </a>
//             </button>
//         </div>
//        <div className={titleInfo}>
//         <div>
//            <h1 className={headerPolicy}>COOKIE POLICY</h1>
//            <b><WithTransLate text="Last updated: June 06, 2022" /></b>
//         </div>
//         <p className={textClass}>
//           <WithTransLate text="In order to provide you with a more personalized and responsive service we need to" />
//           <WithTransLate text="remember and store information about how you use this website. This is done using small text" />
//           <WithTransLate text="files called cookies. Cookies contain small amounts of information and are downloaded to" />
//           <WithTransLate text="your computer or other device by a server for this website. Your web browser then sends" />
//           <WithTransLate text="these cookies back to this Website on each subsequent visit so that it can recognise you and" />
//           <WithTransLate text="remember things like your user preferences. A cookie is a small file of letters and numbers" />
//           <WithTransLate text="that we store on your browser and hard drive of your computer. Cookies contain information" />
//           <WithTransLate text="that is transferred to your computer’s hard drive. By browsing our sites you are accepting our" />
//           <WithTransLate text="use of cookies. You can close the cookie notification by clicking “OK” button." />
//         </p>

//         <div className={collectingAndUsingItem}>
//           <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
//             <WithTransLate text="Type of Cookies used on the Website" />
//           </h3>
//         </div>
//         <div style={{marginBottom:"48px"}}>
//           <Accordion>
//              <AccordionSummary className={typesOfDataItem}expandIcon={<ExpandMoreIcon />}>
//               <h4 className={additionSubtitle}>
//                 <WithTransLate text="Necessary cookies" />
//               </h4>
//             </AccordionSummary>
//             <AccordionDetails>
//               <div className={textClass}>
//                  <WithTransLate text="These are cookies that are required for the operation of our website." />
//                 <br />
//                 <WithTransLate text="They include cookies that enable you to log into secure areas of our website as well as" />
//                 <br />
//                 <WithTransLate text="placing products in your cart." />
//               </div>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
//               <h4 className={additionSubtitle}>
//                 <WithTransLate text="Preference settings cookies" />
//               </h4>
//             </AccordionSummary>
//             <AccordionDetails>
//               <p className={textClass}>
//                 <WithTransLate text="These are cookies that are required for the operation of" />
//               <br />
//               <WithTransLate text="some features our website. They include cookies that enable changes of some settings on" />
//               <br />
//               <WithTransLate text="our websites." />
//               </p>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
//               <h4 className={additionSubtitle}>
//                 <WithTransLate text="Statistics, analytical and performance cookies" />
//               </h4>
//             </AccordionSummary>
//             <AccordionDetails>
//               <p className={textClass}>
//                <WithTransLate text="They allow us to recognise and count" />
//               <br />
//               <WithTransLate text="the number of visitors and to see how visitors move around our website when they are" />
//               <br />
//               <WithTransLate text="using it." />
//                </p>
//             </AccordionDetails>
//           </Accordion>

//           <Accordion>
//             <AccordionSummary className={typesOfDataItem} expandIcon={<ExpandMoreIcon />}>
//               <h4 className={additionSubtitle}>
//                 <WithTransLate text="Marketing cookies" />
//               </h4>
//             </AccordionSummary>
//             <AccordionDetails>
//               <p className={textClass}>
//                  <WithTransLate text="These cookies can be connected to your social accounts to display" />
//               <br />
//               <WithTransLate text="advertisements to your social accounts." />
//               </p>
//             </AccordionDetails>
//           </Accordion>
//         </div>

//         <p className={textClass}>
//           <h3 style={{fontSize:"19px"}} className={`${subtitle} ${subtitle2}`}>
//             <WithTransLate text="Our cookies and 3rd party cookies used on our sites" />
//           </h3>
//         </p>
//       </div>

//       <div className={textClass} style={{marginBottom:"48px"}}>
//           <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#1E4A71', color: 'white', textAlign: 'left' }}>
//                   <th style={{ padding: '10px', border: '1px solid #ddd', fontSize: "14px", fontWeight: "400"  }}>ADVERTISEMENT</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>TAUnique</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>TACds</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>b3e783bb62</td>
//                 </tr>
//               </tbody>
//           </table>
//       </div>
//        <div className={textClass} style={{marginBottom:"48px"}}>
//           <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#1E4A71', color: 'white', textAlign: 'left' }}>
//                   <th style={{ padding: '10px', border: '1px solid #ddd', fontSize: "14px", fontWeight: "400"  }}>ANALYTICS</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>_ga</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>_gid</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>_gat_UA-223879896-1</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>_ga_6QGX4YP9SF</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>LaVisitorNew</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>LaSID</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>_ga_WYRZ6Q7MDE</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>TADCID</td>
//                 </tr>
//               </tbody>
//           </table>
//       </div>
//       <div className={textClass} style={{marginBottom:"48px"}}>
//           <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#1E4A71', color: 'white', textAlign: 'left' }}>
//                   <th style={{ padding: '10px', border: '1px solid #ddd', fontSize: "14px", fontWeight: "400"  }}>FUNCTIONAL</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>TASession</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>ServerPool</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>_zcsr_tmp</td>
//                 </tr>
//               </tbody>
//           </table>
//       </div>
//       <div className={textClass} style={{marginBottom:"48px"}}>
//           <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Arial, sans-serif' }}>
//               <thead>
//                 <tr style={{ backgroundColor: '#1E4A71', color: 'white', textAlign: 'left' }}>
//                   <th style={{ padding: '10px', border: '1px solid #ddd', fontSize: "14px", fontWeight: "400"  }}>NECESSARY</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>LS_CSRF_TOKEN</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>zfccn</td>
//                 </tr>
//                 <tr>
//                   <td style={{ padding: '10px', border: '1px solid #ddd', fontSize: "16px"}}>JSESSIONID</td>
//                 </tr>
//               </tbody>
//           </table>
//       </div>
//         <br /><br /><br /><br />
//         <Newsletter/>
//     </Box>
//   );
// }
