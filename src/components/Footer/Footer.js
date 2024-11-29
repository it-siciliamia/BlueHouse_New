import { items } from "./footerData";
import { makeStyles } from "@material-ui/core";
import { WithTransLate } from "../../translating";

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
      display: "flex",
      flexDirection: "row",
      flex: 1,
      justifyContent: "space-around",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(2),
      gridTemplateAreas: `
      "item1 item2"
      "item3 item2"
    `,
    },
  },
  socials: {
    display: "flex",
    flexDirection: "column !important",
    gap: "10px !important",
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
    maxWidth: "170px",
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
  const classes = useStyles();

  return (
    <>
      <div style={{ marginBottom: "2rem" }} />
      <div className={classes.container}>
        <div className={classes.logo}></div>
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
                  <a
                    key={idx}
                    href={link.href}
                    className={classes.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.icon && (
                      <img
                        src={link.icon}
                        className={classes.icon}
                        alt={`Go to ${link.name}`}
                      />
                    )}
                    <WithTransLate text={link.name} />
                  </a>
                ))}
              </div>
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
