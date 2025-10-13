import Map from "../../images/footer/map.svg";
import Mail from "../../images/footer/mail.svg";
import Phone from "../../images/footer/phone.svg";
import Youtube from "../../images/footer/youtube.svg";
import Insta from "../../images/footer/instagram.svg";
import Whatsapp from "../../images/footer/whatsapp.svg";
import Facebook from "../../images/footer/facebook.svg";
import X from "../../images/footer/x.svg";

export const items = [
  {
    title: "CONTACT US",
    links: [
      { name: "+354 775 6480", icon: Phone, href: "tel:+3547756480" },
      {
        name: "info@bluehouse.is",
        icon: Mail,
        href: "mailto:info@bluehouse.is",
      },
      {
        name: "Whatsapp",
        icon: Whatsapp,
        href: "https://api.whatsapp.com/send?phone=3547756480&text=&source=&data=",
      },
      {
        name: "Valhúsabraut 19, Seltjarnarnes, 170, Iceland",
        icon: Map,
        href: "https://www.google.com/maps?cid=1655029609091171155",
      },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      {
        name: "House Rules & Cancellation Policy",
        href: "/house-rules",
      },
      {
        name: "Blue House Blog",
        href: "https://blog.bluehouse.is/",
      },
      {
        name: "Tours and Activities",
        href: "https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus",
      },
      {
        name: "Airport Shuttle",
        href: "https://bluehouse.tourdesk.is/Transportation",
      },
      // {
      //   name: "Feedback",
      //   href: "https://gnl.ladesk.com/219394-Feedback",
      // },
      {
        name: "Imprint & Privacy Policy",
        href: "/privacy-and-policy",
      },
    ],
  },

  {
    title: "FOLLOW US",
    links: [
      {
        name: "Instagram",
        icon: Insta,
        href: "https://www.instagram.com/bluehousebb/",
      },
      {
        name: "Facebook",
        icon: Facebook,
        href: "https://www.facebook.com/bluehouseiceland",
      },
      { name: "X(Twitter)", icon: X, href: "https://x.com/icelandbed" },
      {
        name: "YouTube",
        icon: Youtube,
        href: "https://youtube.com/@bluehousebbiceland1339?si=OCqKpXhElbK9J-SZ",
      },
    ],
  },
];
