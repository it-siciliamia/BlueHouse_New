import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import { WithTransLate } from "../../components/helpers/translating/index";

const useStyles = makeStyles((theme) => ({
  rule: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    },
  },
  ruleText: {
    marginLeft: "50px",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "22px",
    lineHeight: "25px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
      marginLeft: 0,
    },
    [theme.breakpoints.down("xs")]: {
      margin: "0 10px",
      fontSize: "16px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      margin: "0 10px",
      fontSize: "18px",
    },
  },
  iconStyle: {
    maxWidth: "30px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "60px",
      marginBottom: "10px",
    },
    [theme.breakpoints.between(768, 1024)]: {
      maxWidth: "60px",
      marginBottom: "10px",
    },
  },
}));

function Rule({ Icon, text }) {
  const { rule, ruleText, iconStyle } = useStyles();
  return (
    <div className={rule}>
      {Icon && <img src={Icon} className={iconStyle} alt="Rule" />}
      <p className={ruleText}>
        <WithTransLate text={text} />
      </p>
    </div>
  );
}

Rule.propTypes = {
  Icon: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Rule;
