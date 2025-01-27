import wifi from "../../../images/services_room/wifi.svg";
import bedding from "../../../images/services_room/BH Icons 30 p_Bedding.svg";
import kingbed from "../../../images/services_room/king size bedroom.svg";
import sharedlink from "../../../images/services_room/share icon.svg";
import cereal from "../../../images/services_room/cereal.svg";
import selfcheckin from "../../../images/services_room/BH Icons 30 p_Check-In.svg";
import freeparking from "../../../images/services_room/BH Icons 30 p_Parking.svg";
import selfbreakfast from "../../../images/services_room/BH Icons 30 p_Breakfast.svg";
import kitchenfacilities from "../../../images/services_room/BH Icons 30 p_Cutlery.svg";
import ironingfacilities from "../../../images/services_room/BH Icons 30 p_Ironing.svg";
import gardenview from "../../../images/services_room/garden.svg";
import seaview from "../../../images/services_room/BH Icons 30 p_Sea View.svg";
import tv from "../../../images/services_room/netflix.svg";
import peoples from "../../../images/services_room/guests.svg";
import bed from "../../../images/services_room/king size bedroom.svg";
import sharedbathroom from "../../../images/services_room/shared bathroom.svg";
import selfservicebreakfast from "../../../images/services_room/self service breakfast.svg";
import budgetfriendly from "../../../images/services_room/Vertical container.svg";
import info from "../../../images/services_room/info.svg";
import spot from "../../../images/services_room/spot.svg";
import busstop from "../../../images/services_room/bus.svg";
import car from "../../../images/services_room/car.svg";
import airport from "../../../images/services_room/airplane.svg";
import time from "../../../images/services_room/airplane.svg";
import privatebathroom from "../../../images/services_room/private bathroom.svg";
import privatedinning from "../../../images/services_room/private dining.svg";
import kitchen from "../../../images/services_room/kitchen.svg";
import uptoseex from "../../../images/services_room/up_to_6.svg";
import main01 from "../../../images/services_room/card room house__image01.webp";
import main02 from "../../../images/services_room/card room house__image02.webp";
import main03 from "../../../images/services_room/card room house__image03.webp";
import main04 from "../../../images/services_room/card room house__image04.webp";
import main05 from "../../../images/services_room/card room house__image05.webp";
import main06 from "../../../images/services_room/card room house__image06.webp";
import main07 from "../../../images/services_room/card room house__image07.webp";

const BASE_URL = `${window.location.protocol}//${window.location.host}`;

export const price = [
  {
    name: "Economy Double Room",
    type1: "Non-refundable",
    price1: "80.00",
    type2: "Refundable",
    price2: "90.00",
    icon: info,
  },
  {
    name: "Double/Twin Room",
    type1: "Non-refundable",
    price1: "85.92",
    type2: "Refundable",
    price2: "95.92",
    icon: info,
  },
  {
    name: "Triple Room",
    type1: "Non-refundable",
    price1: "108.56",
    type2: "Refundable",
    price2: "118.56",
    icon: info,
  },
  {
    name: "Quadruple Room",
    type1: "Non-refundable",
    price1: "127.68",
    type2: "Refundable",
    price2: "137.68",
    icon: info,
  },
  {
    name: "Family Room",
    type1: "Non-refundable",
    price1: "127.68",
    type2: "Refundable",
    price2: "137.68",
    icon: info,
  },
  {
    name: "Two Bedroom Apartment",
    type1: "Non-refundable",
    price1: "127.68",
    type2: "Refundable",
    price2: "137.68",
    icon: info,
  },
  {
    name: "Three Bedroom Apartment",
    type1: "Non-refundable",
    price1: "127.68",
    type2: "Refundable",
    price2: "137.68",
    icon: info,
  },
];

export const achievements = [
  {
    name: "Popular Spot for Northern Lights",
    icon: spot,
  },
  {
    name: "4 Min Walk to Bus Stop",
    icon: busstop,
  },
  {
    name: "10 Min Drive from Town",
    icon: car,
  },
  {
    name: "55 Min Drive from Airport",
    icon: airport,
  },
  {
    name: "Late Night Self Check In",
    icon: time,
  },
];

export const items = [
  {
    title: "Economy Double Room",
    type: "room",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/economy_double_room`,
    },
    mainImage: main01,
    services: [
      {
        name: "Best for 2 people",
        icon: peoples,
      },
      {
        name: "Queen sized bed",
        icon: bed,
      },
      {
        name: "Shared bathroom",
        icon: peoples,
      },
      {
        name: "Self service breakfast",
        icon: selfservicebreakfast,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
    ],
    description:
      "Our economy double rooms are located at 3 of our properties. Facing Valhúsahaedpark, the rooms are equipped with a queen-size bed and Netflix TV. All offer shared bathroom and kitchenfacilities. Continental self-service breakfast with homemade bread is included in the room rate. House andtype of bed can not be guaranteed.",
    amenities: [
      {
        name: "Queen sized bed",
        icon: kingbed,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Shared bathroom",
        icon: sharedbathroom,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
      {
        name: "Self service continental breakfast",
        icon: selfbreakfast,
      },
      {
        name: "Kitchen facilities",
        icon: kitchenfacilities,
      },
      {
        name: "Ironing facilities",
        icon: ironingfacilities,
      },
      {
        name: "Garden view",
        icon: gardenview,
      },
      {
        name: "Sea view",
        icon: seaview,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
    ],
    price: [
      {
        nameOne: "Non-refundable:",
        valueOne: "124.48",
        nameTwo: "Refundable:",
        valueOne: "134.48",
        icon: info,
      },
    ],
  },
  //Double/Twin Room
  {
    type: "room",
    title: "Double/Twin Room",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/double_twin_room`,
    },
    mainImage: main02,
    services: [
      {
        name: "Best for 2 people",
        icon: peoples,
      },
      {
        name: "King/Twin Sized Bed",
        icon: bed,
      },
      {
        name: "Shared bathroom",
        icon: peoples,
      },
      {
        name: "Self service breakfast",
        icon: selfservicebreakfast,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Seaside view",
        icon: seaview,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
    ],
    description:
      "Our double/twin rooms are located at 3 of our properties. Facing the seaside, the rooms areequipped with a king-size or twin bed and Netflix TV. All offer shared bathroom and kitchen facilities. Continentalself-service breakfast with homemade bread is included in the room rate. House and type of bed can not beguaranteed.",
    amenities: [
      {
        name: "Queen sized bed",
        icon: kingbed,
      },
      {
        name: "Shared bathroom",
        icon: sharedbathroom,
      },
      {
        name: "Self service continental breakfast",
        icon: selfbreakfast,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Kitchen facilities",
        icon: kitchenfacilities,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
    ],
    price: [
      {
        nameOne: "Non-refundable:",
        valueOne: "124.48",
        nameTwo: "Refundable:",
        valueOne: "134.48",
        icon: info,
      },
    ],
  },
  //Triple Room
  {
    type: "room",
    title: "Triple Room",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/triple_room`,
    },
    mainImage: main03,
    services: [
      {
        name: "Best for 3 people",
        icon: peoples,
      },
      {
        name: "Queen/Twin Beds",
        icon: bed,
      },
      {
        name: "Shared bathroom",
        icon: peoples,
      },
      {
        name: "Self service breakfast",
        icon: selfservicebreakfast,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
    ],
    description:
      "Our triple rooms are located both in the Blue House and the Yellow House. The rooms areequipped with a king-size/twin bed and Netflix-TV. Extra beds are queensized sofabeds. Bathroom and kitchenfacilities are shared. Continental self-service breakfast with homemade bread is included.",
    amenities: [
      {
        name: "Queen sized bed",
        icon: kingbed,
      },
      {
        name: "Shared bathroom",
        icon: sharedbathroom,
      },
      {
        name: "Self service continental breakfast",
        icon: selfbreakfast,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Kitchen facilities",
        icon: kitchenfacilities,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
    ],
    price: [
      {
        nameOne: "Non-refundable:",
        valueOne: "124.48",
        nameTwo: "Refundable:",
        valueOne: "134.48",
        icon: info,
      },
    ],
  },
  //Quadruple Room
  {
    type: "room",
    title: "Quadruple Room",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/Quadruple_room`,
    },
    mainImage: main04,
    services: [
      {
        name: "King Sized Bed + Sofa Bed",
        icon: bed,
      },
      {
        name: "Shared bathroom",
        icon: peoples,
      },
      {
        name: "Cereal breakfast",
        icon: cereal,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
    ],
    description:
      "Our quadruple rooms are located both in the Blue House and the Yellow House. Therooms are equipped with a king-size/twin bed and Netflix-TV. Extra beds are queensized sofabeds. Bathroom andkitchen facilities are shared. Quadruple room with private bathroom and living room can be booked at surcharge uponavailability. Cereal Breakfast at the apartment is included in the rate. Continental self-service breakfast with homemadebread can be booked at surcharge.",
    amenities: [
      {
        name: "King size bed + Sofa bed",
        icon: kingbed,
      },
      {
        name: "Shared bathroom",
        icon: peoples,
      },
      {
        name: "Self service continental breakfast",
        icon: selfbreakfast,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Cereal breakfast included",
        icon: cereal,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
    ],
  },
  //Family Room
  {
    type: "house",
    title: "Family Room",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/family_room`,
    },
    mainImage: main05,
    services: [
      {
        name: "Seaside view",
        icon: seaview,
      },
      {
        name: "Queen sized bed + Sofa",
        icon: bed,
      },
      {
        name: "Private bathroom",
        icon: privatebathroom,
      },
      {
        name: "Priavte dinning area",
        icon: privatedinning,
      },
      {
        name: "Self service breakfast",
        icon: selfbreakfast,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
    ],
    description:
      "Our Family room is located at the Yellow House and offers an incredible view to the seaside andlighthouse. It is extremely popular for northern lights hunters in the winter. The family room is equipped with NetflixTV, a King size bed and sofa bed in seperate rooms. Bathroom, dining area and terrace are private. Kitchen facilitiesare shared. Continental self-service breakfast with homemade bread at the Blue House is included in the room rate.",
    amenities: [
      {
        name: "Queen sized bed + Sofa",
        icon: kingbed,
      },
      {
        name: "Private bathroom",
        icon: privatebathroom,
      },
      {
        name: "Private dinning area",
        icon: privatedinning,
      },
      {
        name: "Self service breakfast",
        icon: selfbreakfast,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Shared Kitchen facilities",
        icon: kitchenfacilities,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
    ],
  },
  //Two Bedroom Apartment
  {
    type: "house",
    title: "Two Bedroom Apartment",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/two_bedroom_apartment`,
    },
    mainImage: main06,
    services: [
      {
        name: "Garden view",
        icon: gardenview,
      },
      {
        name: "2 Bedrooms + 1 Sofa",
        icon: bed,
      },
      {
        name: "Private kitchen",
        icon: kitchen,
      },
      {
        name: "Private bathroom",
        icon: privatebathroom,
      },
      {
        name: "Cereal breakfast",
        icon: cereal,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
    ],
    description:
      "Our two-bedroom aparment is ideal for families and groups. Located at the garden ofthe Blue House it is popular for northern lights in the winter. The Apartment offers two bedrooms with double or twinbeds and Netflix-TV. The sofabed is located in the living room and bathroom, kitchenette, terrace and dining area areprivate. Cereal Breakfast at the apartment is included in the rate. Continental self-service breakfast with homemadebread can be booked at surcharge.",
    amenities: [
      {
        name: "2 Bedrooms + 1 Sofa",
        icon: kingbed,
      },
      {
        name: "Private bathroom",
        icon: privatebathroom,
      },
      {
        name: "Cereal breakfast",
        icon: cereal,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Private Kitchenette",
        icon: kitchenfacilities,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
      {
        name: "Up to 6 People",
        icon: uptoseex,
      },
    ],
  },
  //Three Bedroom Apartment
  {
    type: "house",
    title: "Three Bedroom Apartment",
    links: {
      icon: sharedlink,
      href: `${BASE_URL}/beds24/Three_bedroom_apartment`,
    },
    mainImage: main07,
    services: [
      {
        name: "Best for 10 people",
        icon: peoples,
      },
      {
        name: "3 Bedrooms + 3 Sofa",
        icon: bed,
      },
      {
        name: "Private kitchen",
        icon: kitchen,
      },
      {
        name: "2 Private bathroom",
        icon: privatebathroom,
      },
      {
        name: "Cereal breakfast",
        icon: cereal,
      },
      {
        name: "Budget friendly",
        icon: budgetfriendly,
      },
      {
        name: "Netflix TV",
        icon: tv,
      },
      {
        name: "Free Fast WiFi",
        icon: wifi,
      },
    ],
    description:
      "Our largest apartment is located at the Yellow House and offers an incredible view tothe seaside and lighthouse. It is extremely popular for northern lights hunters in the winter. Up to 12 Adults (werecommend 9) can stay there and we have a variety of twin, Kingsize and sofabeds. Netflix-TV is in 3 rooms.Bathroom, kitchen, terrace and dining area are private. Cereal Breakfast at the apartment is included in the rate.Continental self-service breakfast with homemade bread can be booked at surcharge.",
    amenities: [
      {
        name: "3 Bedrooms + 3 Sofa",
        icon: kingbed,
      },
      {
        name: "2 Private bathroom",
        icon: privatebathroom,
      },
      {
        name: "Cereal breakfast",
        icon: cereal,
      },
      {
        name: "Television with Netflix",
        icon: tv,
      },
      {
        name: "Bedding provided",
        icon: bedding,
      },
      {
        name: "Private Kitchen",
        icon: kitchenfacilities,
      },
      {
        name: "Self check-in anytime",
        icon: selfcheckin,
      },
      {
        name: "Up to 12 People (10 recomended)",
        icon: peoples,
      },
      {
        name: "Free parking",
        icon: freeparking,
      },
    ],
  },
];
