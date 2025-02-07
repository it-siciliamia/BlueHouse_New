import './AboutUs.css';
import Support from "../../components/SuportComponent/support.js";
import { useEffect, useState } from 'react';
import CaruselSliderHome from '../HomePage/CaruselSliderHome/CaruselSliderHome.jsx';
import Facebook from "../../images/Header_icons/headerSocialIcons/facebook.svg";
import instaIcon from "../../images/Header_icons/headerSocialIcons/insta.svg";
import Email from "../../images/Header_icons/headerSocialIcons/email.svg";
import Whatsapp from "../../images/Header_icons/headerSocialIcons/whats.svg";
// import AboutPageComponent from "../../components/AboutPageComponent/AboutPageComponent.jsx";

function Aboutus() {
  const imgSources = [
    '/assets/images/aboutus-1.webp',
    '/assets/images/aboutus-2.webp',
    '/assets/images/aboutus-3.webp'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleImages, setVisibleImages] = useState(3); // Default: 3 images for desktop

  // Function to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 601) {
        setVisibleImages(1); // Phone: 1 image
      } else if (window.innerWidth <= 1279) {
        setVisibleImages(2); // Tablet: 2 images
      } else {
        setVisibleImages(3); // Desktop: 3 images
      }
    };

    // Initial call to set the correct number of images
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSources.length)
  }

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imgSources.length) % imgSources.length
    )
  }

  // Function to get the images to display based on the currentIndex
  // Function to get the images to display based on the currentIndex and visibleImages
  const getVisibleImages = () => {
    const visibleImagesArray = [];
    for (let i = 0; i < visibleImages; i++) {
      const index = (currentIndex + i) % imgSources.length;
      visibleImagesArray.push(imgSources[index]);
    }
    return visibleImagesArray;
  }

  return (
    <div>
      {/* <AboutPageComponent /> */}
      <div className="max-w-999px mx-auto px-22px">
        <section className="grid grid-cols-1fr_auto">
          <div className='socials'>
            <a
              href="https://www.instagram.com/bluehousebb/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={instaIcon}
                title="Instagram"
                alt="instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/bluehouseiceland"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Facebook}
                title="facebook"
                alt="facebook"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=3547756480&text=&source=&data="
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Whatsapp}
                title="Whatsapp"
                alt="whatsapp"
              />
            </a>
            <a
              href="https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Email}
                title="Email"
                alt="Email"
              />
            </a>
          </div>
          <CaruselSliderHome />
        </section>

        <div className="h-50px w-full" />

        <section className="grid grid-cols-1fr_auto">
          <div className='vertical-text title me-3px w-fit mb-auto'>ABOUT US</div>

          <div id='about-us_content' className=''>
            <p className='paragraphs text-center'>Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences. It’s an old, traditional, warm, charming Icelandic house.</p>
            <p className='paragraphs text-center'>Our houses are located on the scenic peninsula of Seltjarnarness, 5 minutes away from Reykjavik’s vibrant downtown. Begin your adventure around the world with us at Blue House B&B and stay at home surrounded by the friends you never knew you had.</p>

            <div className="h-50px w-full" />

            <div className="img-collection">
              {getVisibleImages().map((img, index) => (
                <div className='img-wrapper' key={index}>
                  <img className='img' src={img} alt={`About Us ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="h-50px w-full" />

            <div className='w-full'>
              <div className="navigation-arrows">
                <div className="arrow prev" onClick={handlePrevious}>
                  &#10094; {/* Left arrow */}
                </div>

                <div className="arrow next" onClick={handleNext}>
                  &#10095; {/* Right arrow */}
                </div>
              </div>
            </div>

            <div className="h-50px w-full" />

            <p className='paragraphs text-center'>Peacefully set on Seltjarnarnes Peninsula, the Blue House B&B is a 5 minute drive from Reykjavik’s vibrant downtown and 20 minutes’ walk from the “Grótta Lighthouse”, the perfect spot to catch northern lights.</p>
            <p className='paragraphs text-center'>The property is allocated over three houses and guests can choose from guestrooms or self-catering apartments. Parking is free of charge.</p>
          </div>
        </section>

        <div className="h-105px w-full" />

        <section className="grid grid-cols-1fr_auto">
          <div className='vertical-text title me-3px w-fit mb-auto'>MESSAGE FROM THE FOUNDER</div>

          <div id='about-us_content' className=''>
            <div className='quote-left'>“</div>
            <div className="img-wrapper mx-auto" style={{ maxWidth: 703, maxHeight: 554 }}>
              <img src="/assets/images/aboutus-ceo.webp" alt="" className="img" />
            </div>

            <div className="h-50px w-full" />

            <p className='paragraphs text-center'>For over 11 years I have been lucky to welcome guests from all over the globe.</p>
            <p className='paragraphs text-center'>In 2006, I travelled to Iceland and fell in love with the small peninsula of Seltjarnarnes. In 2009 I renovated the Blue House, which became a popular travellers spot right away. Now we offer, in 3 locations, a wide selection of accommodations from Economy and Family rooms to the Grótta Northern Lights apartment, from where you can enjoy an incredible ocean view.</p>
            <p className='paragraphs text-center'>The peaceful neighbourhood where the houses are located gives a glimpse of the stunning scenery Iceland has to offer. From here, you can enjoy the view over Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, Valhúsa Park, Grótta Lighthouse and the northern lights. If you want to experience the culture of Reykjavik, a 30-minutes walk is all it takes to get to the Downtown area and its museums, restaurants and bars.</p>
            <p className='paragraphs text-center'>I hope that my team and I can welcome you soon and help you with your trip to Iceland! Remember that the cheapest price is only guaranteed through our website. If you have any questions, please use our live chat, send us an email or drop us a WhatsApp!</p>
            <div className="img-wrapper mx-auto" style={{ maxWidth: 202 }}>
              <img src="/assets/images/visa-ceo.webp" alt="Visa CEO" />
            </div>

            <div className="h-105px w-full" />

            <div className='quote-right'>“</div>
          </div>
        </section>
        <Support />

        <div className="h-50px w-full" />
      </div>
    </div>
  );
}

export default Aboutus;
