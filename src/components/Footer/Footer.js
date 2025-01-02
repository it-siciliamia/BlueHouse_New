import React from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { items } from "./footerData";
import { makeStyles } from "@material-ui/core";
import { WithTransLate } from "../helpers/translating";
import { Link } from "react-router-dom";

import s from "./Footer.module.scss";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    padding: theme.spacing(2),
    display: "grid",
    gridTemplateColumns: "1fr",
    gridGap: theme.spacing(2),
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
    width: "100%",
    opacity: "30%",
  },
  blueHouseContainer: {
    width: "100%",
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "@media (min-width: 1280px) and (max-width: 2200px)": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
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
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  const islineSeparator = useMediaQuery({ maxDeviceWidth: 559.99 });

  const isInternalLink = (href) => {
    return href.startsWith("/");
  };

  return (
    <footer style={{ width: "100%" }}>
      <div className={s.container}>
        {!isMobile &&
          location.pathname !== "/" &&
          !location.pathname.startsWith("/beds24") && (
            <div
              className={classes.lineSeparator}
              style={{ marginBottom: isDesktop ? "5rem" : "2.5rem" }}
            ></div>
          )}
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
              {index < items.length - 1 && islineSeparator && (
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
        <div
          className={classes.lineSeparator}
          style={{
            marginBottom: isDesktop ? "1rem" : isLaptop ? "0.5rem" : "0.5rem",
            marginTop: isDesktop ? "4.5rem" : isMobile ? "1rem" : "2.5rem",
          }}
        />
        <div className={classes.blueHouseContainer}>
          <span className={classes.blueHouse}>© Blue House 2024</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
