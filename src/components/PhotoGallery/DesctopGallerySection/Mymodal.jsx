import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Tabs, Tab, Button } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { WithTransLate } from "../../helpers/translating/index";
import customModalData from "../../Shared/CustomModal/customModalData";
import "./MyModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ index, open, setOpen, setTabIndex }) => {
  const [activeIndexes, setActiveIndexes] = useState(
    Array(customModalData.length).fill(null)
  );
  const [sliderKey, setSliderKey] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState("");

  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
    setActiveIndexes(Array(customModalData.length).fill(null));
    setSliderKey((prevKey) => prevKey + 1);
  };

  const handleDropdownClick = (indx, itemIndex) => {
    setGalleryTitle(customModalData[index][indx].title);
    setActiveIndexes(
      activeIndexes.map((v, i) => {
        return i === itemIndex ? (v === indx ? null : indx) : v;
      })
    );
    setSliderKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    setSliderKey((prevKey) => prevKey + 1);

    if (index === 0) {
      setGalleryTitle("Double/Twin");
    }
    if (index === 1) {
      setGalleryTitle("Blue House");
    }
    if (index === 2) {
      setGalleryTitle("Northern Lights");
    }
  }, [index]);

  const CustomPrevArrow = ({ currentSlide, slideCount, ...rest }) => (
    <button {...rest} className="slick-prev">
      <FiChevronLeft className="btnIconLeft" />
    </button>
  );

  const CustomNextArrow = ({ currentSlide, slideCount, ...rest }) => (
    <button {...rest} className="slick-next">
      <FiChevronRight className="btnIconRight" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dotsClass: "slick-dots custom-dots",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component="div">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <div style={{ background: "transparent" }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropProps={{
          style: {
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              pt: 8,
              height: "80vh",
              position: "relative",
            }}
          >
            <Box sx={{ width: "35%", overflow: "auto" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={index}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{ style: { display: "none" } }}
                  sx={{
                    "& .MuiTab-root": {
                      fontFamily: "Josefin Sans",
                      textTransform: "none",
                      fontWeight: "400",
                      fontSize: "18px",
                      minWidth: 100,
                      color: "#999",
                      "&.Mui-selected": {
                        color: "#000",
                      },

                      "&.Mui-focusVisible": {
                        outline: "none",
                      },
                      "&:focus": {
                        outline: "none",
                      },
                    },
                  }}
                >
                  <Tab
                    label="Rooms"
                    {...a11yProps(0)}
                    sx={{
                      maxWidth: "33%",
                      "&.Mui-selected": { color: "#073762" },
                    }}
                  />
                  <Tab
                    label="Houses"
                    {...a11yProps(1)}
                    sx={{
                      maxWidth: "33%",
                      "&.Mui-selected": { color: "#073762" },
                    }}
                  />
                  <Tab
                    label="Surroundings"
                    {...a11yProps(2)}
                    sx={{
                      maxWidth: "33%",
                      "&.Mui-selected": { color: "#073762" },
                    }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={index} index={0} sx={{ gap: 4 }}>
                {customModalData[0].map((room, roomIndex) => (
                  <Box
                    key={roomIndex}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      borderBottom: 1,
                      borderColor: "divider",
                      pt: 2,
                      width: "100%",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      <Typography component="div" sx={{ fontSize: 18 }}>
                        <WithTransLate text={room.title} />
                      </Typography>
                      {activeIndexes[0] !== roomIndex ? (
                        <Button
                          sx={{ width: "5%" }}
                          onClick={() => handleDropdownClick(roomIndex, 0)}
                        >
                          <SlArrowDown />
                        </Button>
                      ) : (
                        <Button
                          sx={{ width: "5%" }}
                          onClick={() => handleDropdownClick(roomIndex, 0)}
                        >
                          <SlArrowUp />
                        </Button>
                      )}
                    </Box>
                    {activeIndexes[0] === roomIndex && (
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "75%",
                          fontSize: "16",
                          fontWeight: 300,
                          fontFamily: "Josefin Sans",
                        }}
                      >
                        <WithTransLate text={room.description} />
                        <Button
                          href="https://beds24.com/booking2.php?propid=3578&layout=1"
                          target="_blank"
                          sx={{
                            width: 225,
                            height: 46,
                            background: "#073762",
                            borderRadius: "0px",
                            fontFamily: "Josefin Sans",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "white",
                            mt: 3,
                            mb: 2,
                            "&:hover": {
                              background: "white",
                              color: "#073762",
                              border: "1px solid #073762",
                            },
                          }}
                        >
                          <span style={{ marginTop: "5px" }}>
                            <WithTransLate text={"Book Now"} />
                          </span>
                        </Button>
                      </Typography>
                    )}
                  </Box>
                ))}
              </CustomTabPanel>
              <CustomTabPanel value={index} index={1}>
                {customModalData[1].map((house, houseIndex) => (
                  <Box
                    key={houseIndex}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      borderBottom: 1,
                      borderColor: "divider",
                      pt: 2,
                      width: "100%",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        fontFamily: "Josefin Sans",
                      }}
                    >
                      <Typography component="div" sx={{ fontSize: 18 }}>
                        <WithTransLate text={house.title} />
                      </Typography>
                      {activeIndexes[1] !== houseIndex ? (
                        <Button
                          sx={{ width: "5%" }}
                          onClick={() => handleDropdownClick(houseIndex, 1)}
                        >
                          <SlArrowDown />
                        </Button>
                      ) : (
                        <Button
                          sx={{ width: "5%" }}
                          onClick={() => handleDropdownClick(houseIndex, 1)}
                        >
                          <SlArrowUp />
                        </Button>
                      )}
                    </Box>
                    {activeIndexes[1] === houseIndex && (
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "75%",
                          fontSize: "16",
                          fontWeight: 300,
                          fontFamily: "Josefin Sans",
                        }}
                      >
                        <WithTransLate text={house.description} />
                        <Button
                          href="https://beds24.com/booking2.php?propid=3578&layout=1"
                          target="_blank"
                          sx={{
                            width: 225,
                            height: 46,
                            background: "#073762",
                            borderRadius: "0px",
                            fontFamily: "Josefin Sans",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "white",
                            mt: 3,
                            mb: 2,
                            "&:hover": {
                              background: "white",
                              color: "#073762",
                              border: "1px solid #073762",
                            },
                          }}
                        >
                          <span style={{ marginTop: "5px" }}>
                            <WithTransLate text={"Book Now"} />
                          </span>
                        </Button>
                      </Typography>
                    )}
                  </Box>
                ))}
              </CustomTabPanel>
              <CustomTabPanel value={index} index={2}>
                {customModalData[2].map((surrounding, surroundingIndex) => (
                  <Box
                    key={surroundingIndex}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      borderBottom: 1,
                      borderColor: "divider",
                      pt: 2,
                      width: "100%",
                      mt: 1,
                      mb: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Typography variant="div" sx={{ fontSize: 18 }}>
                        <WithTransLate text={surrounding.title} />
                      </Typography>
                      {activeIndexes[2] !== surroundingIndex ? (
                        <Button
                          sx={{ width: "5%" }}
                          onClick={() =>
                            handleDropdownClick(surroundingIndex, 2)
                          }
                        >
                          <SlArrowDown />
                        </Button>
                      ) : (
                        <Button
                          sx={{ width: "5%" }}
                          onClick={() =>
                            handleDropdownClick(surroundingIndex, 2)
                          }
                        >
                          <SlArrowUp />
                        </Button>
                      )}
                    </Box>
                    {activeIndexes[2] === surroundingIndex && (
                      <Typography
                        component="div"
                        variant="body1"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "75%",
                          fontSize: "16",
                          fontWeight: 300,
                          fontFamily: "Josefin Sans",
                        }}
                      >
                        <WithTransLate text={surrounding.description} />
                        <Button
                          href="https://blog.bluehouse.is/"
                          target="_blank"
                          variant="contained"
                          sx={{
                            width: 225,
                            height: 46,
                            background: "#073762",
                            borderRadius: "0px",
                            fontFamily: "Josefin Sans",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "white",
                            mt: 3,
                            mb: 2,
                          }}
                        >
                          <span style={{ marginTop: "5px" }}>
                            <WithTransLate text="See more" />
                          </span>
                        </Button>
                      </Typography>
                    )}
                  </Box>
                ))}
              </CustomTabPanel>
            </Box>
            <Box
              sx={{
                width: "60%",
                display: "flex",
                allignItems: "center",
                flexDirection: "column",
                top: 20,
                right: 0,
                position: "absolute",
              }}
            >
              <Button
                onClick={() => setOpen(false)}
                sx={{
                  width: "5%",
                  position: "absolute",
                  top: -30,
                  right: -20,
                  zIndex: "5",
                  marginBottom: "20px",
                }}
              >
                <IoClose size="30px" color="#2E3A59" />
              </Button>
              <Slider
                {...settings}
                currentSlide={undefined}
                slideCount={undefined}
                key={sliderKey}
              >
                {customModalData[index]
                  .filter((item) => {
                    return item.title === galleryTitle;
                  })
                  .map((item) =>
                    item.backgrounds.map((v, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: "100%",
                          height: "70vh",
                          mt: 3,
                          overflow: "hidden",
                          objectFit: "contain",
                        }}
                      >
                        <Box
                          key={index}
                          component="img"
                          loading="lazy"
                          src={v}
                          alt={`Slide ${index + 1}`}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                    ))
                  )}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
