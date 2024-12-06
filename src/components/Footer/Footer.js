import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { items } from "./footerData";
import { makeStyles } from "@material-ui/core";
import { WithTransLate } from "../helpers/translating";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: "80%",
    margin: "0 auto",
    padding: theme.spacing(2),
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      margin: "0px",
      marginTop: "-10px",
      marginBottom: "-30px",
      paddingTop: "0px",
      paddingBottom: "0px",
      paddingLeft: "40px",
      paddingRight: "40px",
    },
  },
  logo: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(-4),
    [theme.breakpoints.up("md")]: {
      marginBottom: "3rem",
      marginTop: theme.spacing(-18),
    },
  },
  linkContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  socials: {
    display: "flex",
    flexDirection: "column !important",
    gap: "10px !important",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "row !important",
      justifyContent: "flex-start",
      marginLeft: "0px",
    },
  },
  titleContainer: {
    display: "column",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "left",
    },
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#14202B",
    textAlign: "left",
    marginBottom: "10px",
    whiteSpace: "nowrap",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      writingMode: "horizontal-tb",
      transform: "none",
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  link: {
    fontSize: "16px",
    maxWidth: "240px",
    gap: "30px",
    fontWeight: "300",
    display: "flex",
    alignItems: "flex-start",
    color: "#14202B",
    textDecoration: "none",
    marginBottom: theme.spacing(0.5),
    "&:hover": {
      color: "#073762",
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginRight: "20px",
    },
  },
  socialName: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  itemLinks: {
    display: "flex",
    gap: "8px",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left",
    },
  },
  icon: {
    marginRight: theme.spacing(-2),
  },
  lineSeparator: {
    margin: "auto",
    borderBottom: "1px solid #1D3967",
    width: "80%",
    opacity: "30%",
  },
  blueHouseContainer: {
    maxWidth: "80%",
    margin: "0 auto",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blueHouse: {
    fontSize: "14px",
    fontWeight: 300,
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  backToTop: {
    fontSize: "14px",
    fontWeight: 300,
    marginRight: "10px",
    flexShrink: 0,
    cursor: "pointer",
  },
  scrollToTopBtn: {
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    height: "30px",
    width: "30px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "none",
  },
}));

function Footer() {
  const location = useLocation();
  const classes = useStyles();
  const isMobile = useMediaQuery({ maxDeviceWidth: 767 });

  const isInternalLink = (href) => {
    return href.startsWith("/");
  };

  return (
    <>
      <div style={{ marginBottom: "2rem" }} />
      {!isMobile && location.pathname !== "/" && (
        <div
          className={classes.lineSeparator}
          style={{ marginBottom: "2.5rem" }}
        ></div>
      )}
      <div className={classes.container}>
        <div className={classes.linkContainer}>
          {items.map((item, index) => (
            <div
              className={classes.titleContainer}
              key={index}
              style={{ gridArea: `item${index + 1}` }}
            >
              <h3 className={classes.title}>
                <WithTransLate text={item.title} />
              </h3>
              <div
                className={`${classes.itemLinks} ${
                  index === 2 ? classes.socials : ""
                }`}
              >
                {item.links.map((link, idx) => (
                  <React.Fragment key={idx}>
                    {isInternalLink(link.href) ? (
                      <Link
                        to={link.href}
                        className={`${classes.link} ${
                          index === 2 ? classes.socialLink : ""
                        }`}
                      >
                        {link.icon && (
                          <img
                            src={link.icon}
                            className={classes.icon}
                            alt={`Go to ${link.name}`}
                          />
                        )}
                        <span className={index === 2 ? classes.socialName : ""}>
                          <WithTransLate text={link.name} />
                        </span>
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className={`${classes.link} ${
                          index === 2 ? classes.socialLink : ""
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon && (
                          <img
                            src={link.icon}
                            className={classes.icon}
                            alt={`Go to ${link.name}`}
                          />
                        )}
                        <span className={index === 2 ? classes.socialName : ""}>
                          <WithTransLate text={link.name} />
                        </span>
                      </a>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {index < items.length - 1 && isMobile && (
                <div
                  style={{
                    width: "100%",
                    borderBottom: "1px solid #1D3967",
                    opacity: "30%",
                    marginTop: "20px",
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={classes.lineSeparator} style={{ marginTop: "2rem" }} />
      <div className={classes.blueHouseContainer}>
        <span className={classes.blueHouse}>© Blue House 2024</span>
      </div>
    </>
  );
}

export default Footer;
