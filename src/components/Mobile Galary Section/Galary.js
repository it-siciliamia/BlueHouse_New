import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Rooms } from "./Galary-information";
import { Houses } from "./Galary-information";
import { Surroundings } from "./Galary-information";
import { WithTransLate } from "../../translating";
function CustomTabPanel(props) {
  const { children, value, index, Rooms } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
              width: '100%',
              gap: '18px',
              paddingX:'20px'
            }}
          >
            {Rooms.map((room, index) => (
              <Card
                key={index}
                sx={{
                  maxWidth: "100%",
                  boxShadow:'none',
                  borderRadius: "0px",
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={room.image}
                  title={room.title}
                />
                <CardContent
                  sx={{ width: "200px", height: "10px", padding: 0, my:1  }}
                >
                  <Typography
                    gutterBottom
                    variant="p"
                    fontSize="16px"
                    fontWeight={"400"}
                    color='#000000'
                    fontFamily='Josefin Sans'
                    component="div"
                  >
                    <WithTransLate text={room.title} />
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="p"
                    fontSize="14px"
                    fontWeight='300'
                    color="#14202B"
                    component="div"
                  >
                    <WithTransLate text={room.From} />
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ height: "10px", pt: 2, pl:0,pr:0, mt:!!room.From? 6:3, width: "100%", ml:0,mr:0 }}
                >
                  <Button
                    sx={{ width: "90px", textDecoration: "underline", p: 0, pr:'0', color:'#3B5998', fontFamily:'Josefin Sans', fontWeight:'600' }}
                    href={room.Link}
                    target="_blank"
                  >

                    {
                      value === 2 ? <WithTransLate text="SEE MORE" /> : <WithTransLate text="BOOK NOW" />
                    }

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Gallery = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "800px",
        padding: "50px 0px",
        display: { xs: "block", sm: "none" },
      }}
    >
      <Typography
        gutterBottom
        variant="h6"
        marginLeft="20px"
        fontFamily={"Oblik"}
      >
        <WithTransLate sx={{}} text="GALLERY" />
      </Typography>

      <Box >
        <Tabs
          sx={{
            margin:'20px 20px',
            marginTop:'0px',
            "& .MuiTab-root": {
              borderBottom:'2px solid #8F8F8F',
              fontFamily: "Josefin Sans",
              textTransform: "none", // Keep text capitalization as in the label
              fontWeight: "400",
              fontSize: "18px",
              minWidth: 100, // Adjust minimum width to your needs
              color: "#8F8F8F", // Set default text color
              "&.Mui-selected": {
                color: "#1D3967", // Color when selected
              },
              // Remove border and focus styling
              "&.Mui-focusVisible": {
                outline: "none", // Remove the default focus outline
                borderColor:'#1D3967',

              },
              "&:focus": {
                outline: "none", // Remove the default focus outline
                borderColor:'#1D3967',

              },
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{
            style:{
              backgroundColor:'#1D3967'
            }
          }}
          centered
        >
          <Tab label="Rooms" sx={{ fontStyle: 'inherit', width: '33%' }} {...a11yProps(0)} />
          <Tab label="Houses" sx={{ fontStyle: 'inherit', width: '33%' }} {...a11yProps(1)} />
          <Tab label="Surroundings" sx={{ fontStyle: 'inherit', width: '33.9%' }} {...a11yProps(2)} />
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
