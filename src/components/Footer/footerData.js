import Facebook from "../../images/footer/facebook.svg";
import Instagram from "../../images/footer/instagram.svg";
import Mail from "../../images/footer/mail.svg";
import Map from "../../images/footer/map.svg";
import Phone from "../../images/footer/phone.svg";
import Whatsapp from "../../images/footer/whatsapp.svg";
import XIcon from "../../images/footer/x.svg";
import Youtube from "../../images/footer/youtube.svg";

const SOCIAL_LINKS = Object.freeze([
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    type: "external",
    href: "https://www.instagram.com/bluehousebb/",
    newTab: true,
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    type: "external",
    href: "https://www.facebook.com/bluehouseiceland",
    newTab: true,
  },
  {
    id: "x",
    name: "X (Twitter)",
    icon: XIcon,
    type: "external",
    //removed twitter link since the account is not active and changed newTab to false so it wont open a new tab when clicked
    to: "/",
    newTab: false,
  },
  {
    id: "youtube",
    name: "Youtube",
    icon: Youtube,
    type: "external",
    href: "https://www.youtube.com/channel/UCHwb5_DHT9B3iysOexwyH9A",
    newTab: true,
  },
]);

const BLUE_HOUSE_LINKS = Object.freeze([
  { id: "house-rules", name: "House Rules", type: "route", to: "/house-rules" },
  {
    id: "bluehouseblog",
    name: "Blue House Blog",
    type: "external",
    href: "https://blog.bluehouse.is/",
    newTab: true,
  },
  {
    id: "northern-lights",
    name: "Northern Lights",
    type: "external",
    href: "https://bluehouse.tourdesk.is/Tour/Item/18676/1/Northern_lights_-_Minibus?_gl=1*1rskche*_ga*NjgzMTExMTM0LjE3NDEwOTM1MjY.*_ga_6QGX4YP9SF*MTc0MTQ3Mzk3OC4zLjAuMTc0MTQ3NDAyNi4xMi4wLjA.",
    newTab: true,
  },
  {
    id: "airport-shuttle",
    name: "Airport Shuttle",
    type: "external",
    href: "https://bluehouse.tourdesk.is/Transportation",
    newTab: true,
  },
  {
    id: "support",
    name: "Support",
    type: "external",
    href: "https://bluehouseis.zohodesk.eu/portal/en/newticket?departmentId=135604000000205173&layoutId=135604000000214460",
    newTab: true,
  },
  {
    id: "faq",
    name: "FAQ",
    type: "external",
    href: "https://bluehouseis.zohodesk.eu/portal/en/kb/iceland",
    newTab: true,
  },
  {
    id: "privacy-policy",
    name: "Imprint & Privacy Policy",
    type: "route",
    to: "/privacy-and-policy",
  },
  {
    id: "cancellation-policy",
    name: "Cancellation Policy",
    type: "route",
    to: "/", // TODO add the route to Cancellation Policy
  },
]);

const CONTACT_LINKS = Object.freeze([
  {
    id: "phone",
    name: "+354 775 6480",
    type: "external",
    icon: Phone,
    href: "tel:+3547756480",
    newTab: false,
  },
  {
    id: "e-mail",
    name: "info@bluehouse.is",
    type: "external",
    icon: Mail,
    href: "mailto:info@bluehouse.is",
    newTab: false,
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    type: "external",
    icon: Whatsapp,
    href: "https://api.whatsapp.com/send?phone=3547756480&text=&source=&data=",
    newTab: true,
  },
  {
    id: "map",
    name: "Valhúsabraut 19, Seltjarnarnes, 170, Iceland",
    type: "external",
    icon: Map,
    href: "https://www.google.com/maps?cid=1655029609091171155",
    newTab: true,
  },
]);

export const footerSections = Object.freeze({
  social: SOCIAL_LINKS,
  blueHouse: BLUE_HOUSE_LINKS,
  contact: CONTACT_LINKS,
});

export const socialLinks = SOCIAL_LINKS;
export const blueHouseLinks = BLUE_HOUSE_LINKS;
export const contactLinks = CONTACT_LINKS;
