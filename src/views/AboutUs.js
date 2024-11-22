import React from "react";
import { makeStyles } from "@material-ui/core";
import Selfie from "../images/selfie2.png";
import Signature from "../images/signature.png";
import colorYourExperience from "../images/aboutus/colorYourExperience.png";
import message from "../images/aboutus/message.png";
import Room from "../images/grotta.jpg";
import clsx from "clsx";
import { WithTransLate } from "../translating/index";
import Support from "../components/support.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    margin: "auto",
    marginTop: "30px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-300px",
    },
  },
  row1: {
    display: "flex",
    marginTop: "0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      marginTop: "130%",
      maxWidth: "100%",
      flexDirection: "column",
    },
  },
  row2: {
    display: "flex",
    marginTop: "0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  description1: {
    backgroundSize: "cover",
    fontSize: "16px",
    lineHeight: "30px",
    fontWeight: "300",
    width: "calc(50% - 30px)",
    letterSpacing: "0.1em",
    marginLeft: "50px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      margin: "40px 0",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: 300,
      marginLeft: "25px",
    },
  },
  description2: {
    width: "calc(50% - 100px)",
    marginLeft: "0px",
    backgroundSize: "cover",
    fontWeight: "300",
    marginRight: "0px",
    height: "auto",
    fontSize: "16px",
    lineHeight: "30px",
    letterSpacing: "0.1em",
    [theme.breakpoints.down("md")]: {
      order: 2,
      width: "90%",
      margin: "40px 0",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      fontWeight: 300,
      marginLeft: "25px",
    },
  },
  image1: {
    width: "50%",
    height: "88%",
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
      height: "fit-content",
      padding: "60% 0 0 0",
    },
    [theme.breakpoints.down("xs")]: {
      content: `url(${colorYourExperience})`,
      display: "none",
    },
  },
  image2: {
    width: "calc(50% - 40px)",
    marginLeft: "40px",
    height: "fit-content",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0",
    },
    [theme.breakpoints.down("xs")]: {
      content: `url(${message})`,
    },
  },
  titles: {
    fontFamily: "Oblik",
    whiteSpace: "nowrap",
    transform: "rotate(-90deg)",
    height: "24px",
    width: "24px",
    fontSize: "24px",
    letterSpacing: "0.1em",
    color: "#00366E",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      letterSpacing: "fit-content",
      transform: "rotate(0)",
      marginBottom: "10px",
    },
  },
  experienceTitle: {
    margin: "345px 30px 0px 0px",
    [theme.breakpoints.down("md")]: {
      margin: "660px 30px 0px 0px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "0",
      right: "0",
      width: "fit-content",
      margin: "0 0 10px 0",
      zIndex: "1",
    },
  },
  founderMessageTitle: {
    margin: "335px 0px 0px -80px",
    [theme.breakpoints.down("md")]: {
      margin: "330px 0px 0px 20px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      top: "0",
      right: "0",
      width: "fit-content",
      margin: "0 0 10px 0",
      zIndex: "1",
    },
  },
  signature: {
    maxWidth: "200px",
    marginTop: "37px",
    [theme.breakpoints.down("md")]: {
      maxWidth: "150px",
      marginTop: "20px",
    },
  },
  selfie: {
    width: "100%",
    maxHeight: "70.5vh",
  },
  imageAndDescriptionWrapper: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      width: "fit-content",
      maxWidth: "514px",
      position: "relative",
    },
  },
  imageStyle: {
    flexGrow: 1,
    width: "100%",
    marginTop: "0",
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block",
    },
  },
}));

function Aboutus() {
  const {
    root,
    experienceTitle,
    image1,
    description1,
    description2,
    image2,
    founderMessageTitle,
    row1,
    row2,
    selfie,
    imageAndDescriptionWrapper,
    signature,
    titles,
    imageStyle,
  } = useStyles();
  return (
    <div className={root}>
      <div className={row1}>
        <h1 className={clsx(titles, experienceTitle)}>
          <WithTransLate text=" COLOUR YOUR EXPERIENCE" />
        </h1>
        <div className={imageAndDescriptionWrapper}>
          <img src={Room} alt="Room" className={imageStyle} />
          <img src={Room} className={image1} alt="roomImg" />
          <div className={description1}>
            <p>
              <WithTransLate text="Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences. It’s an old, traditional, warm, charming Icelandic house." />
            </p>
            <p>
              <br />
              <WithTransLate text="Our houses are located on the scenic peninsula of Seltjarnarness, 5 minutes away from Reykjavik’s vibrant downtown. Begin your adventure around the world with us at Blue House B & B and stay at home surrounded by the friends you never knew you had." />
            </p>
            <p>
              <br />
              <WithTransLate
                text="Peacefully set on Seltjarnarnes Peninsula, the Blue House B&B is a 5 minute drive from Reykjavik’s vibrant downtown and 20 minutes’ walk 
                from the “Grótta Lighthouse”, the perfect spot to catch northern lights."
              />
            </p>
            <p>
              <br />
              <WithTransLate text="The property is allocated over three houses and guests can choose from guestrooms or self-catering apartments. Parking is free of charge." />
            </p>
          </div>
        </div>
      </div>
      <div className={row2}>
        <div className={imageAndDescriptionWrapper}>
          <div className={description2}>
            <p>
              <WithTransLate text="For over 11 years I have been lucky to welcome guests from all over the globe." />
            </p>
            <p>
              <br />
              <WithTransLate
                text=" In 2006, I travelled to Iceland and fell in love with the small peninsula of Seltjarnarnes. 
                In 2009 I renovated the Blue House, which became a popular travellers spot right away. 
                Now we offer, in 3 locations, a wide selection of accommodations from Economy and Family rooms 
                to the Grótta Northern Lights apartment, from where you can enjoy an incredible ocean view."
              />
            </p>
            <p>
              <br />
              <WithTransLate
                text=" The peaceful neighbourhood where the houses are located gives a glimpse of the stunning scenery Iceland has to offer. 
                From here, you can enjoy the view over Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, Valhúsa Park, 
                Grótta Lighthouse and the northern lights. If you want to experience the culture of Reykjavik, 
                a 30-minutes walk is all it takes to get to the Downtown area and its museums, restaurants and bars."
              />
            </p>
            <p>
              <WithTransLate
                text="I hope that my team and I can welcome you soon and help you with your trip to Iceland! 
                Remember that the cheapest price is only guaranteed through our website. If you have any questions, 
                please use our live chat, send us an email or drop us a WhatsApp!"
              />
            </p>
          </div>
          <div className={image2}>
            <img alt="Founder img" className={selfie} src={Selfie} />
            <img alt="Signature img" className={signature} src={Signature} />
          </div>
        </div>
        <h1 className={clsx(titles, founderMessageTitle)}>
          <WithTransLate text=" MESSAGE FROM FOUNDER" />
        </h1>
      </div>
      <Support />
    </div>
  );
}

export default Aboutus;
