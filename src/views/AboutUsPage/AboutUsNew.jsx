import { BsWhatsapp } from "react-icons/bs";

import s from "./AboutUs.module.scss";
import BookingBtnWrapper from "../../components/BookingBtnWrapper/BookingBtnWrapper";
import { WithTransLate } from "../../components/helpers/translating";
import Newsletter from "../../components/Newsletter/Newsletter";
import Link from "../../components/Shared/ui/Link";
import Support from "../../components/SuportComponent/support";
import aboutus1 from "../../images/aboutus/aboutus1.png";
import aboutus2 from "../../images/aboutus/aboutus2.png";
import message from "../../images/aboutus/message.webp";
import signature from "../../images/aboutus/signature.png";
import useBreakpoints from "../../Styles/useBreakpointsNew";

function AboutUsNew() {
  const { isMobile, isTablet } = useBreakpoints();

  return (
    <>
      {!!(isMobile || isTablet) && (
        <div className={s.bookingbtnBox}>
          <BookingBtnWrapper />
        </div>
      )}
      <div className={s.aboutUsContainer}>
        <section className={s.sectionContainer}>
          <h3>
            <WithTransLate text="colour your experience" />
          </h3>
          <img src={aboutus1} alt="Blue house room" className={s.image} />
          <div>
            <p>
              <WithTransLate text="Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences. It’s an old, traditional, warm, charming Icelandic house" />
            </p>
            <p>
              <WithTransLate text="Our houses are located on the scenic peninsula of Seltjarnarness, 5 minutes away from Reykjavik’s vibrant downtown. Begin your adventure around the world with us at Blue House B&B and stay at home surrounded by the friends you never knew you had." />
            </p>
            <p>
              <WithTransLate text="Peacefully set on Seltjarnarnes Peninsula, the Blue House B&B is a 5 minute drive from Reykjavik’s vibrant downtown and 20 minutes’ walk from the “Grótta Lighthouse”, the perfect spot to catch northern lights" />
            </p>
            <p>
              <WithTransLate text="The property is allocated over three houses and guests can choose from guestrooms or self-catering apartments. Parking is free of charge." />
            </p>
          </div>
        </section>

        <section className={`${s.sectionContainer} ${s.sectionContainerReverse}`}>
          <h3>
            <WithTransLate text="Message from the founder" />
          </h3>
          <div className={s.imgBox}>
            <img src={message} alt="Portrait of Zeno" className={s.image} />
            <img src={signature} alt="Zeno's signature" className={s.imgSignature} />
          </div>
          <div>
            <p>
              <WithTransLate text="For over 11 years I have been lucky to welcome guests from all over the globe." />
            </p>
            <p>
              <WithTransLate text="In 2006, I travelled to Iceland and fell in love with the small peninsula of Seltjarnarnes. In 2009 I renovated the Blue House, which became a popular travellers spot right away. Now we offer, in 3 locations, a wide selection of accommodations from Economy and Family rooms to the Grótta Northern Lights apartment, from where you can enjoy an incredible ocean view." />
            </p>
            <p>
              <WithTransLate text="The peaceful neighbourhood where the houses are located gives a glimpse of the stunning scenery Iceland has to offer. From here, you can enjoy the view over Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, Valhúsa Park, Grótta Lighthouse and the northern lights. If you want to experience the culture of Reykjavik, a 30-minutes walk is all it takes to get to the Downtown area and its museums, restaurants and bars." />
            </p>
            <p>
              <WithTransLate text="I hope that my team and I can welcome you soon and help you with your trip to Iceland! Remember that the cheapest price is only guaranteed through our website. If you have any questions, please use our live chat, send us an email or drop us a WhatsApp!" />
            </p>
          </div>
        </section>

        <section className={s.sectionContainer}>
          <h3>
            <WithTransLate text="about us" />
          </h3>
          <img src={aboutus2} alt="Zeno's team" className={s.image} />
          <div>
            <div>
              <p>
                <WithTransLate text="We’re passionate travellers, we love to welcome guests from all over the world and to share the beauty of Iceland." />
              </p>
              <p>
                <WithTransLate text="We believe that a memorable trip is more than sightseeing, it’s about sharing and having meaningful experiences." />
              </p>
              <p>
                <WithTransLate text="Let us be a part of that journey by giving you tips on the special places of Reykjavik and and treat you to some delicious, fresh-baked goodies!" />
              </p>
            </div>
            <Link
              href="https://wa.me/3547756480"
              target="_blank"
              rel="noopener noreferrer"
              className={s.btnWhatsapp}
            >
              <WithTransLate text="Send us message" />
              <BsWhatsapp size={24} />
            </Link>
          </div>
        </section>
      </div>
      <Support />
      <Newsletter />
    </>
  );
}

export default AboutUsNew;
