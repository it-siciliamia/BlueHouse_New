import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dropDownButton: {
    paddingInline: "0",
    fontSize: "18px",
    fontWeight: "400",
    display: "flex",
    alignItems: "center",
    height: "21px",
    backgroundColor: "inherit",
    border: "none",
    color: "#fff",
    justifyContent: "start",
    textTransform: "none",
    "&:focus": {
      outline: "none",
    },
  },
  menu: {
    "& .MuiPaper-root": {
      width: "260px",
      padding: "15px 10px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      transition: "opacity 0.3s ease, transform 0.3s ease",
    },
  },
  searchRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    flexGrow: 1,
    "& input": {
      fontSize: "14px",
      padding: "6px 8px",
    },
  },
  navButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: "8px",
    marginTop: "5px",
  },
  pageInfo: {
    fontSize: "13px",
    color: "#444",
  },
  closeIcon: {
    color: "#053870",
    fontSize: "22px",
    fontWeight: "bold",
  },
}));

export default useStyles;
