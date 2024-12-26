import * as React from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "react-responsive";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Rooms, Houses, Surroundings } from "./Galary-information";

import { WithTransLate } from "../../helpers/translating";
import ImageSlider from "./ImageSlider/ImageSlider";

function CustomTabPanel(props) {
  const isTwoColumn = useMediaQuery({ maxDeviceWidth: 600 });
  const { children, value, index, Rooms } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`GALLERY-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component="div">{children}</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isTwoColumn
                ? "repeat(1, 1fr)"
                : "repeat(2, 1fr)",
              width: "100%",
              gap: isTwoColumn ? "40px" : "18px",
              paddingX: "20px",
            }}
          >
            {Rooms.map((room, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: "100%",
                  boxShadow: "none",
                  borderRadius: "0px",
                }}
              >
                <div>
                  <ImageSlider category={room.title} />
                </div>
                <CardContent
                  sx={{ maxWidth: "280px", height: "10px", padding: 0, my: 1 }}
                >
                  <Typography
                    gutterBottom
                    fontSize="16px"
                    fontWeight="400"
                    color="#000000"
                    fontFamily="Josefin Sans"
                    component="div"
                  >
                    <WithTransLate text={room.title} />
                  </Typography>
                  <Typography
                    gutterBottom
                    fontSize="14px"
                    fontWeight="300"
                    color="#14202B"
                    component="div"
                  >
                    <WithTransLate text={room.From} />
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    height: "10px",
                    pt: 2,
                    pl: 0,
                    pr: 0,
                    mt: room.From ? 6 : 3,
                    width: "100%",
                    ml: 0,
                    mr: 0,
                  }}
                >
                  <Button
                    sx={{
                      maxWidth: "280px",
                      height: "46px",
                      textDecoration: "underline",
                      p: 0,
                      pr: "0",
                      color: "#1D3967",
                      fontFamily: "Josefin Sans",
                      fontWeight: "600",
                      whiteSpace: "nowrap",
                    }}
                    href={room.Link}
                    target="_blank"
                  >
                    {value === 2 ? (
                      <WithTransLate text="SEE MORE" />
                    ) : (
                      <WithTransLate text="BOOK NOW" />
                    )}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  Rooms: PropTypes.array.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `GALLERY-${index}`,
  };
}

const Gallery = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      id="GALLERY"
      sx={{
        width: "100%",
        paddingTop: "50px",
        display: "block",
      }}
    >
      <Typography
        gutterBottom
        variant="h2"
        sx={{
          fontSize: "20px",
          marginLeft: "20px",
          fontFamily: "Oblik",
        }}
      >
        <WithTransLate sx={{}} text="GALLERY" />
      </Typography>

      <Box>
        <Tabs
          sx={{
            margin: "20px 20px",
            marginTop: "0px",
            "& .MuiTab-root": {
              paddingLeft: "0px !important",
              paddingRight: "0px !important",
              paddingBottom: "0px !important",
              fontFamily: "Josefin Sans",
              textTransform: "none",
              fontWeight: "400",
              fontSize: "16px",
              minWidth: 100,
              color: "#8F8F8F",
              position: "relative",
              border: "none",
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%) scaleX(0)",
                height: "2px",
                backgroundColor: "#8F8F8F",
                transition: "transform 0.3s ease",
                transformOrigin: "center",
                boxSizing: "border-box",
              },
              "&.Mui-selected": {
                fontWeight: "600",
                color: "#1D3967",
              },
              "&.Mui-selected::after": {
                backgroundColor: "#1D3967",
                transform: "translateX(-50%) scaleX(1)",
              },
              "&:hover::after": {
                transform: "translateX(-50%) scaleX(1)",
              },
              "&.Mui-focusVisible": {
                outline: "none",
                borderColor: "none",
              },
              "&:focus": {
                outline: "none",
              },
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#1D3967",
            },
          }}
          centered
        >
          <Tab
            label="Rooms"
            sx={{ fontStyle: "inherit", width: "33%" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Houses"
            sx={{ fontStyle: "inherit", width: "33%" }}
            {...a11yProps(1)}
          />
          <Tab
            label="Surroundings"
            sx={{ fontStyle: "inherit", width: "33.9%" }}
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} Rooms={Rooms} index={0}>
        {/*Rooms*/}
      </CustomTabPanel>
      <CustomTabPanel value={value} Rooms={Houses} index={1}>
        {/*Houses*/}
      </CustomTabPanel>
      <CustomTabPanel value={value} Rooms={Surroundings} index={2}>
        {/*   Surroundings*/}
      </CustomTabPanel>
    </Box>
  );
};

export default Gallery;
