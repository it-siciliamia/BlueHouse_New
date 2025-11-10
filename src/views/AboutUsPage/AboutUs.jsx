import './AboutUs.css';
import { useEffect, useState } from 'react';
import CaruselSliderHome from "../HomePage/CaruselSliderHome/CaruselSliderHome.jsx";
import Facebook from "../../images/Header_icons/headerSocialIcons/facebook.svg";
import instaIcon from "../../images/Header_icons/headerSocialIcons/insta.svg";
import Email from "../../images/Header_icons/headerSocialIcons/email.svg";
import Whatsapp from "../../images/Header_icons/headerSocialIcons/whats.svg";
import Support from "./Support.jsx"
import NewMap from "../../components/map/NewMap.jsx";
// import AboutPageComponent from "../../components/AboutPageComponent/AboutPageComponent.jsx";


const Quote = ({ side }) => {
  return (
    <div className='w-full' style={{ textAlign: `${side === 'left' ? 'left' : 'end'}`, padding: '0 1.25rem' }}>
      <svg className={`${side === 'left' ? 'rotate-0' : 'rotate-180'} quote`} width="49" height="33" viewBox="0 0 49 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.216797 21.744C0.216797 17.616 2.0408 12.96 5.6888 7.776C9.3368 2.592 12.0728 0 13.8968 0C15.6248 0 16.4888 0.576001 16.4888 1.728C16.4888 2.208 16.0568 3.84 15.1928 6.624C14.4248 9.312 14.0408 11.28 14.0408 12.528C14.0408 13.776 14.3768 14.592 15.0488 14.976C18.1208 17.088 19.6568 20.208 19.6568 24.336C19.6568 26.832 18.6968 28.848 16.7768 30.384C14.9528 31.92 12.5528 32.688 9.5768 32.688C3.3368 32.688 0.216797 29.04 0.216797 21.744ZM29.0168 21.744C29.0168 17.616 30.8408 12.96 34.4888 7.776C38.1368 2.592 40.8728 0 42.6968 0C44.4248 0 45.2888 0.576001 45.2888 1.728C45.2888 2.208 44.8568 3.84 43.9928 6.624C43.2248 9.312 42.8408 11.28 42.8408 12.528C42.8408 13.776 43.1768 14.592 43.8488 14.976C46.9208 17.088 48.4568 20.208 48.4568 24.336C48.4568 26.832 47.4968 28.848 45.5768 30.384C43.7528 31.92 41.3528 32.688 38.3768 32.688C32.1368 32.688 29.0168 29.04 29.0168 21.744Z" fill="#EDF1F4" />
      </svg>
    </div>
  )
}

// TODO: this component should be refactored. 
// Replace this JS-based resize handler with CSS media queries. This would let the browser handle responsive layout natively and avoid re-renders on every window resize event.
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
      if (window.innerWidth < 601) {
        setVisibleImages(1); // Phone: 1 image
      } else if (window.innerWidth < 1279) {
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
      <div className='max-w-999px min-768px-px-1rem mx-auto'>
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
      </div>

      <div className="h-50px w-full" />

      <div className="max-w-999px mx-auto px-22px">
        <section className="grid grid-cols-1fr_auto">
          <div className='vertical-text title me-3px w-fit mb-auto'>ABOUT US</div>

          <div id='about-us_content' className=''>
            <p className='paragraphs text-center px-paragraphs'>Blue House Bed and Breakfast welcomes you to your home away from home in Reykjavik, Iceland. Simply put, we are a small team of globetrotters, passionate about unforgettable travel experiences. It’s an old, traditional, warm, charming Icelandic house.</p>
            <p className='paragraphs text-center px-paragraphs'>Our houses are located on the scenic peninsula of Seltjarnarness, 5 minutes away from Reykjavik’s vibrant downtown. Begin your adventure around the world with us at Blue House B&B and stay at home surrounded by the friends you never knew you had.</p>

            <div className="h-50px w-full" />

            <div className="img-collection">
              {getVisibleImages().map((img, index) => (
                <div className='img-wrapper' key={index}>
                  <img className='img' src={img} alt={`About Us ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* <div className="h-50px w-full" /> */}

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

            <p className='paragraphs text-center'>Peacefully set on Seltjarnarnes Peninsula, the Blue House B&B is a 5 minute drive from Reykjavik’s vibrant downtown and 20 minutes’ walk from the “Grótta Lighthouse”, the perfect spot to catch northern lights.</p>
            <p className='paragraphs text-center'>The property is allocated over three houses and guests can choose from guestrooms or self-catering apartments. Parking is free of charge.</p>
          </div>
        </section>

        <div className="h-105px w-full" />

        <section className="grid grid-cols-1fr_auto">
          <div className='vertical-text title me-3px w-fit mb-auto'>MESSAGE FROM THE FOUNDER</div>
          <div id='about-us_content'>
            <div className="img-wrapper mx-auto" style={{ maxWidth: 703, maxHeight: 554 }}>
              <img src="/assets/images/aboutus-ceo.webp" alt="" className="img" />
            </div>

            <div className="h-50px w-full" />


            <Quote side="left" />
            <p className='paragraphs text-center'>For over 11 years I have been lucky to welcome guests from all over the globe.</p>
            <p className='paragraphs text-center'>In 2006, I travelled to Iceland and fell in love with the small peninsula of Seltjarnarnes. In 2009 I renovated the Blue House, which became a popular travellers spot right away. Now we offer, in 3 locations, a wide selection of accommodations from Economy and Family rooms to the Grótta Northern Lights apartment, from where you can enjoy an incredible ocean view.</p>
            <p className='paragraphs text-center'>The peaceful neighbourhood where the houses are located gives a glimpse of the stunning scenery Iceland has to offer. From here, you can enjoy the view over Esja Mountain, Faxafloi Bay, Snaefellsjökull glacier, Valhúsa Park, Grótta Lighthouse and the northern lights. If you want to experience the culture of Reykjavik, a 30-minutes walk is all it takes to get to the Downtown area and its museums, restaurants and bars.</p>
            <p className='paragraphs text-center'>I hope that my team and I can welcome you soon and help you with your trip to Iceland! Remember that the cheapest price is only guaranteed through our website. If you have any questions, please use our live chat, send us an email or drop us a WhatsApp!</p>
            <Quote side="right" />

            <div className="mx-auto" style={{ maxWidth: 202 }}>
              <img src="/assets/images/visa-ceo.webp" alt="Visa CEO" />
            </div>
          </div>
        </section>

        <div className="h-50px w-full" />
      </div>

      <div className="h-50px w-full" />

      <div className='max-w-999px mx-auto px-22px'>
              <div className="flex-between">
                      <div className='flex-column sm-hidden'>
                            <Support type={'support'} />
                            <div className="title-xs text-center">SUPPORT</div>
                            <div className="text-xs text-center">Get personal support<br />from our team</div>
                      </div>

                      <div className='flex-column sm-hidden'>
                            <Support type={'faq'} />
                            <div className="title-xs text-center">FAQ</div>
                            <div className="text-xs text-center">Guest Information<br />Portal</div>
                      </div>
                      
                      <div className='flex-column sm-hidden'>
                            <Support type={'forum'} />
                            <div className="title-xs text-center">FORUM</div>
                            <div className="text-xs text-center">Your opinion is important<br />to us</div>
                      </div>
                      
                      <div className='flex-column md-hidden'>
                            <Support type={'contact'} />
                            <div className="title-xs text-center">CONTACT</div>
                            <div className="text-xs text-center">Click to call us</div>
                      </div>
                      
                      <div className='flex-column md-hidden'>
                            <Support type={'whatsapp'} />
                            <div className="title-xs text-center">WHATSAPP</div>
                            <div className="text-xs text-center">Contact via WhatsApp</div>
                      </div>
              </div>
      </div>

      <div className="h-50px w-full" />
      <div className="h-50px w-full" />

      {/* <NewMap /> */}
    </div>
  );
}

export default Aboutus;
