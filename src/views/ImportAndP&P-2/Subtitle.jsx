import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { WithTransLate } from "../../translating/index";

const useStyles = makeStyles((theme) => ({
  root: {
  
    fontFamily: "Josefin Sans",
    marginTop: "-20px",
   
    
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
      marginLeft: "-50px",
      marginBottom: "-50px",
    },
  },
  title: {
    fontFamily: "Oblik",
    fontSize: "24px",
    // lineHeight: "25px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  subtitle: {
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "25px",
    letterSpacing: "0em",
  },
  semiSubheading: {
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0em",
  },
  textClass: {
    fontSize: "16px",
    fontWeight: 300,
    letterSpacing: "0em",
  },
  titleContainer: {
    fontFamily: "Oblik",
   
    textAlign: "left",
   
   
  },
}));

function Subtitle({ heading, subHeading, semiSubHeading, text }) {
  const { title, subtitle, semiSubheading, textClass, titleContainer } =
    useStyles();
  const renderTextWithLinks = (text) => {
    const parts = text.split(/(<a\s+href.*?<\/a>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<a")) {
        return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      } else {
        return <WithTransLate key={index} text={part} />;
      }
    });
  };

  return (
    <Box className={titleContainer}>
      <h2 className={title}>
        <WithTransLate text={heading} />
      </h2>
      <h3 className={subtitle}>
        <WithTransLate text={subHeading} />
      </h3>
      <h4 className={semiSubheading}>
        <WithTransLate text={semiSubHeading} />
      </h4>
      <div className={textClass}>{renderTextWithLinks(text)}</div>
    </Box>
  );
}

export default Subtitle;
