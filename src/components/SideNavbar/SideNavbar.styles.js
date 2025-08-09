/**
 * SideNavbar.styles.js
 * ---------------------
 * Defines the Material-UI styling for the SideNavbar component.
 * 
 * Key points:
 * - Uses `makeStyles` from Material-UI to create JSS-based styles scoped to the component.
 * - Contains styles for both desktop and responsive breakpoints.
 * - The `root` style includes a smooth `right` transition (0.3s ease-in-out) 
 *   for opening/closing animation of the sidebar.
 * - Uses dynamic props (e.g., `props.right`) to control positioning via JS.
 * - All other classes are referenced by SideNavbarContent.js for consistent theming.
 * 
 * This file is **only for styling**. No component logic is defined here.
 */
import { makeStyles } from "@material-ui/core";

const useSideNavbarStyles = makeStyles((theme) => ({
  root: {
    transition: "right 0.3s ease-in-out", 
    position: "fixed",
    zIndex: "5",
    top: 0,
    right: (props) => props.right,
    bottom: 0,
    color: theme.palette.primary.main,
    padding: "25px 2vw",
    background: theme.palette.secondary.main,
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    maxWidth: "22vw",
    gap: "0px",
    [theme.breakpoints.down("md")]: {
      width: "48.9%",
      maxWidth: "none",
    },
    "@media (max-width: 601px)": {
      display: "none",
    },
    "&::before": {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      backgroundColor: "black",
    },
  },
  bg: {},
  sliderTitle: {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "2px",
    padding: "10px 0 20px 0",
    marginTop: "5px",
  },
  sliderLink: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "5px",
    cursor: "pointer",
  },
  sliderTitle2: {
    fontSize: "16px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  horizontalLine: {
    width: "117%",
    margin: "20px 0 20px -35px",
    border: "0px solid rgba(255, 255, 255, 0.17)",
    background: "rgba(255, 255, 255, 0.17)",
    [theme.breakpoints.down("sm")]: {
      margin: "20px 0 10px -35px",
    },
  },
  sliderInfo: {
    fontSize: "15px",
    fontWeight: "400",
    lineHeight: "10px",
    margin: "10px 0",
    color: "white",
  },
  sliderLogo: {
    width: "144px",
    marginBottom: "20px",
  },
  sliderEscape: {
    position: "fixed",
    transition: "all 0.3s ease-in-out",
    right: (props) => (props.right === 0 ? "20px" : "-100px"),
    width: "fit-content",
    padding: 0,
    "&:focus": {
      outline: "none",
    },
  },
  groupIcons: {
    display: "flex",
    justifyContent: "space-between",
    width: "120px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  sliderIcons: {
    transform: "scale(1.2)",
    marginTop: "-22px",
    marginLeft: "-5px",
  },
  sliderIconss: {
    transform: "scale(1.0)",
    marginTop: "-26px",
    marginLeft: "-5px",
  },
  highlightedColor: {
    color: "white",
    "&:hover": {
      color: "#1E90FF !important",
    },
  },
  socialIcons: {
    transform: "scale(.9)",
  },
  linksWrapper: {
    padding: "25px 1vw",
  },
  contactus: {
    marginLeft: "10px",
  },
  feedback: { display: "none" },
  support: { display: "none" },
  forum: { display: "none" },
}));

export default useSideNavbarStyles;
