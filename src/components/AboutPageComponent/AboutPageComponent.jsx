import React from "react";
import { useMediaQuery } from "react-responsive";
import { WithTransLate } from "../helpers/translating/index";
import signature from "../../images/aboutus/signature.png";

import s from "./AboutPageComponent.module.scss";

function AboutPageComponent() {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 599.99 });
  const isTablet = useMediaQuery({ minWidth: 600, maxWidth: 959.99 });
  const isLaptop = useMediaQuery({ minWidth: 960, maxWidth: 1279.99 });
  const isDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 2200 });

  return (
    <section className={s.about}>
      <div className={s.sectionWrapper}>
        <div className={s.firstSectionContent}>
          <div className={s.titleWrapper}>
            <h2 className={s.title}>
              <WithTransLate text="COLOUR YOUR EXPERIENCE" />
            </h2>
          </div>
          <div className={s.sectionContent}>
            <div className={s.sectionPart}>
              <div
                className={s.partImage}
                style={{
                  marginBottom: !isDesktop || !isLaptop ? "65px" : "0px",
                }}
              >
                <div className={s.imageFirst}></div>
              </div>
              <div className={s.partTextWripper}>
                <div className={s.partText}>
                  <p>
                    <WithTransLate text="Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences. It’s an old, traditional, warm, charming Icelandic house." />
                  </p>
                  <p>
                    <br />
                    <WithTransLate text="Our houses are located on the scenic peninsula of Seltjarnarness, 5 minutes away from Reykjavik’s vibrant downtown. Begin your adventure around the world with us at Blue House B&B and stay at home surrounded by the friends you never knew you had." />
                  </p>
                </div>
              </div>
            </div>

            <div className={s.sectionPart}>
              {(isMobile || isTablet) && (
                <div className={s.partImage}>
                  <div className={s.imageSecond}></div>
                </div>
              )}
              <div className={s.partTextWripper}>
                <div className={s.partText}>
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
              {(isDesktop || isLaptop) && (
                <div className={s.partImage}>
                  <div className={s.imageSecond}></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={s.secondSectionContent}
          style={{ position: "relative" }}
        >
          <div className={s.titleWrapperSecond}>
            <h2 className={s.titleSecond}>
              <WithTransLate text="MESSAGE FROM FOUNDER" />
            </h2>
          </div>
          <div
            className={s.sectionPart}
            style={{ marginTop: isLaptop ? "40px" : "0" }}
          >
            {(isMobile || isTablet) && (
              <div className={s.partImage}>
                <div
                  style={{
                    marginRight:
                      isMobile || isTablet || isLaptop ? "0px" : "50px",
                    marginLeft:
                      isMobile || isTablet || isLaptop ? "0px" : "50px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      isMobile || isTablet || isLaptop
                        ? "center"
                        : "flex-start",
                  }}
                >
                  <div className={s.imageZeno}></div>
                  <img
                    src={signature}
                    className={s.photoSignature}
                    alt="foto signature"
                  />
                </div>
              </div>
            )}
            <div className={s.partTextWripper}>
              <div className={s.partText}>
                <p>
                  <WithTransLate text="For over 11 years I have been lucky to welcome guests from all over the globe." />
                </p>
                <p>
                  <br />
                  <WithTransLate
                    text="In 2006, I travelled to Iceland and fell in love with the small peninsula of Seltjarnarnes.
         In 2009 I renovated the Blue House, which became a popular travellers spot right away.
         Now we offer, in 3 locations, a wide selection of accommodations from Economy and Family rooms
         to the Grótta Northern Lights apartment, from where you can enjoy an incredible ocean view."
                  />
                </p>
                <p>
                  <br />
                  <WithTransLate
                    text="The peaceful neighbourhood where the houses are located gives a glimpse of the stunning scenery Iceland has to offer.
         From here, you can enjoy the view over Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, Valhúsa Park,
         Grótta Lighthouse and the northern lights. If you want to experience the culture of Reykjavik,
         a 30-minutes walk is all it takes to get to the Downtown area and its museums, restaurants and bars."
                  />
                </p>
                <p>
                  <br />
                  <WithTransLate
                    text="I hope that my team and I can welcome you soon and help you with your trip to Iceland!
         Remember that the cheapest price is only guaranteed through our website. If you have any questions,
         please use our live chat, send us an email or drop us a WhatsApp!"
                  />
                </p>
              </div>
            </div>
            {(isDesktop || isLaptop) && (
              <div className={s.partImage}>
                <div
                  style={{
                    marginRight:
                      isMobile || isTablet || isLaptop ? "0px" : "50px",
                    marginLeft:
                      isMobile || isTablet || isLaptop ? "0px" : "50px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      isMobile || isTablet || isLaptop
                        ? "center"
                        : "flex-start",
                  }}
                >
                  <div
                    className={s.imageZeno}
                    style={{ marginBottom: "20px" }}
                  ></div>
                  <img
                    src={signature}
                    className={s.photoSignature}
                    alt="foto signature"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPageComponent;
