import blue_house4 from "../../../images/Houses/BlueHouse/bh2.webp";
import blue_house3 from "../../../images/Houses/BlueHouse/bh4.webp";
import blue_house from "../../../images/Houses/BlueHouse/bh6.webp";
import blue_house7 from "../../../images/Houses/BlueHouse/bh7.webp";
import blue_house2 from "../../../images/Houses/BlueHouse/new/bh.webp";
import blue_house8 from "../../../images/Houses/BlueHouse/new/bh2.webp";
import blue_house5 from "../../../images/Houses/BlueHouse/new/bh4.webp";
import grotta_northern_lights from "../../../images/Houses/GNL/gnl1.webp";
import grotta_northern_lights9 from "../../../images/Houses/GNL/gnl10.webp";
import grotta_northern_lights3 from "../../../images/Houses/GNL/gnl3.webp";
import grotta_northern_lights4 from "../../../images/Houses/GNL/gnl4.webp";
import grotta_northern_lights5 from "../../../images/Houses/GNL/gnl5.webp";
import grotta_northern_lights6 from "../../../images/Houses/GNL/gnl6.webp";
import grotta_northern_lights7 from "../../../images/Houses/GNL/gnl7.webp";
import grotta_northern_lights8 from "../../../images/Houses/GNL/gnl8.webp";
import grotta_northern_lights10 from "../../../images/Houses/GNL/gnl9.webp";
import green_house from "../../../images/Houses/Greenhouse Outside.webp";
import apartments8 from "../../../images/Rooms/Apartment/a10.webp";
import apartments9 from "../../../images/Rooms/Apartment/a11.webp";
import apartments10 from "../../../images/Rooms/Apartment/a12.webp";
import apartments11 from "../../../images/Rooms/Apartment/a13.webp";
import apartments12 from "../../../images/Rooms/Apartment/a14.webp";
import apartments13 from "../../../images/Rooms/Apartment/a15.webp";
import apartments14 from "../../../images/Rooms/Apartment/a16.webp";
import apartments15 from "../../../images/Rooms/Apartment/a17.webp";
import apartments16 from "../../../images/Rooms/Apartment/a18.webp";
import apartments17 from "../../../images/Rooms/Apartment/a19.webp";
import apartments18 from "../../../images/Rooms/Apartment/a21.webp";
import apartments19 from "../../../images/Rooms/Apartment/a22.webp";
import apartments1 from "../../../images/Rooms/Apartment/a3.webp";
import apartments2 from "../../../images/Rooms/Apartment/a4.webp";
import apartments3 from "../../../images/Rooms/Apartment/a5.webp";
import apartments4 from "../../../images/Rooms/Apartment/a6.webp";
import apartments5 from "../../../images/Rooms/Apartment/a7.webp";
import apartments6 from "../../../images/Rooms/Apartment/a8.webp";
import apartments7 from "../../../images/Rooms/Apartment/a9.webp";
import double1 from "../../../images/Rooms/DoubleTwin/dt1.webp";
import double2 from "../../../images/Rooms/DoubleTwin/dt2.webp";
import double3 from "../../../images/Rooms/DoubleTwin/dt3.webp";
import double4 from "../../../images/Rooms/DoubleTwin/dt4.webp";
import double5 from "../../../images/Rooms/DoubleTwin/dt5.webp";
import family1 from "../../../images/Rooms/FamilyRoom/fr1.webp";
import family2 from "../../../images/Rooms/FamilyRoom/fr2.webp";
import family3 from "../../../images/Rooms/FamilyRoom/fr3.webp";
import family4 from "../../../images/Rooms/FamilyRoom/fr4.webp";
import family5 from "../../../images/Rooms/FamilyRoom/fr5.webp";
import family6 from "../../../images/Rooms/FamilyRoom/fr6.webp";
import triple1 from "../../../images/Rooms/TripleQuadruple/t1.webp";
import triple2 from "../../../images/Rooms/TripleQuadruple/t2.webp";
import NorthernLights from "../../../images/Surroundings/surrounding3.webp";
import Activities2 from "../../../images/view-gallery/Activities/1.webp";
import Activities3 from "../../../images/view-gallery/Activities/2.webp";
import Activities4 from "../../../images/view-gallery/Activities/3.webp";
import Activities from "../../../images/view-gallery/Activities/4.webp";
import green_house2 from "../../../images/view-gallery/houses/GreenHouse/gh1.webp";
import green_house7 from "../../../images/view-gallery/houses/GreenHouse/GH_bathroom.webp";
import green_house3 from "../../../images/view-gallery/houses/GreenHouse/GH_kitchen.webp";
import green_house4 from "../../../images/view-gallery/houses/GreenHouse/GreenHouse1.webp";
import green_house5 from "../../../images/view-gallery/houses/GreenHouse/Livingroom2.webp";
import Neighborhood from "../../../images/view-gallery/neighborhood.webp";
import Neighborhood2 from "../../../images/view-gallery/neighborhood2.webp";
import Neighborhood3 from "../../../images/view-gallery/neighborhood3.webp";
import NorthernLights2 from "../../../images/view-gallery/northern_lights2.webp";
import NorthernLights3 from "../../../images/view-gallery/northern_lights3.webp";

//! HOUSES (tab index = 0)
const HousesData = [
  {
    title: "Blue House",
    cover: blue_house4,
    backgrounds: [
      blue_house4,
      blue_house3,
      blue_house,
      blue_house7,
      blue_house2,
      blue_house5,
      blue_house8,
    ],
    description:
      "Blue House is an authentic Icelandic-style home that offers a variety of rooms and a truly northern experience.",
    fullDescription:
      "Blue House is an authentic Icelandic-style home that offers a variety of rooms and a truly northern experience. Enjoy scenic views of the sea and mountains. This cosy, yet modern bed and breakfast, is situated on the small peninsula of Seltjarnarnes and 5 minute drive by car from the city of Reykjavik.",
  },
  {
    title: "Green House",
    cover: green_house,
    backgrounds: [
      green_house,
      green_house2,
      green_house3,
      green_house4,
      green_house5,
      green_house7,
    ],
    description:
      "The two-bedroom apartment called Green House is located in the garden of the Blue House.",
    fullDescription:
      "The two-bedroom apartment called Green House is located in the garden of the Blue House. It is perfect for solo travellers or small groups of friends looking for a peaceful getaway. It features a kitchenette, a living area and a bathroom with shower.",
  },
  {
    title: "Grótta Northern Lights",
    cover: grotta_northern_lights,
    backgrounds: [
      grotta_northern_lights,
      grotta_northern_lights3,
      grotta_northern_lights4,
      grotta_northern_lights5,
      grotta_northern_lights6,
      grotta_northern_lights7,
      grotta_northern_lights8,
      grotta_northern_lights9,
      grotta_northern_lights10,
    ],
    description:
      "Grótta Northern Lights Apartment is a modern and cosy home that makes its guests feel like locals.",
    fullDescription:
      "Grótta Northern Lights Apartment is a modern and cosy home that makes its guests feel like locals. Located 10 minutes from downtown Reykjavik on the peninsula of Seltjarnarnes, this peaceful three-room apartment offers a stunning view of the ocean.",
  },
];

//? ROOMS (tab index = 1)
const RoomsData = [
  {
    title: "Double/Twin room",
    cover: double3,
    backgrounds: [double3, double1, double2, double4, double5],
    description: "Our double/twin rooms are available at 3 of our properties.",
    fullDescription:
      "Our double/twin rooms are available at 3 of our properties. Facing the seaside, the rooms are equipped with a king-size or twin bed and Netflix TV. Some rooms offer shared bathroom and kitchen facilities.",
  },
  {
    title: "Triple/Quadruple room",
    cover: triple2,
    backgrounds: [triple2, triple1],
    description: "The Triple/Quadruple Rooms are available in two of the three houses.",
    fullDescription:
      "The Triple/Quadruple Rooms are located in two of the three buildings. They feature a sofa bed and flat screen TVs with Netflix. Twin beds can be requested depending on availability. Bathroom and kitchen facilities are shared.",
  },
  {
    title: "Family Room",
    cover: family1,
    backgrounds: [family1, family2, family3, family4, family5, family6],
    description: "The Family Room with a terrace is in the Grótta Northern Lights Apartment.",
    fullDescription:
      "The Family Room with a terrace overlooking the ocean and the lighthouse is located in the Grótta Northern Lights Apartment in Valhúsabraut 35. It includes a TV with Netflix, as well as a private bathroom and dining area. Kitchen facilities are shared.",
  },
  {
    title: "Two-bedroom Apartment",
    cover: apartments18,
    backgrounds: [
      apartments18,
      apartments2,
      apartments3,
      apartments4,
      apartments5,
      apartments6,
      apartments7,
      apartments8,
      apartments9,
      apartments10,
      apartments11,
      apartments12,
      apartments13,
      apartments14,
      apartments15,
      apartments16,
      apartments17,
      apartments1,
      apartments19,
    ],
    description: "The two-bedroom Bungalow is in the garden of the Blue House.",
    fullDescription:
      "Two-Bedroom Bungalow Apartment located in the garden of the Blue House, this apartment is equipped with a kitchenette, private bathroom, sofa bed, as well as two TVs with Netflix.",
  },
];

//todo SURROUNDINGS (tab index = 2)
const SurroundingsData = [
  {
    title: "Northern Lights",
    cover: NorthernLights,
    backgrounds: [NorthernLights, NorthernLights2, NorthernLights3],
    description:
      "Close to the Blue House, the best place to spot northern lights is by Grótta Lighthouse.",
    fullDescription:
      "Close to the Blue House, the best place to spot northern lights is by Grótta Lighthouse. Located on the edge of Seltjarnarnes Peninsula in a protected nature reserve home to more than 100 different bird species and 140 plant varieties, the lighthouse was built in 1897 and fully restored in 1947. You can easily reach it with a pleasant 25-minutes walk from the Blue House.",
  },
  {
    title: "Neighbourhood",
    cover: Neighborhood,
    backgrounds: [Neighborhood, Neighborhood2, Neighborhood3],
    description:
      "Seltjarnarnes is a very quiet town: you will definitely have a very relaxing stay with us!",
    fullDescription:
      "Seltjarnarnes is a very quiet town: you will definitely have a very relaxing stay with us! You will often see kids playing or running in the streets, parents walking with their toddlers, and cute, furry cats strolling around undisturbed. Did you know that in 2007 Seltjarnarnes became the world's first town where every citizen had access to fiber optics?",
  },
  {
    title: "Activities",
    cover: Activities,
    backgrounds: [Activities, Activities2, Activities3, Activities4],
    description:
      "While visiting Seltjarnarnes Peninsula, stroll through Valhúsahæð Park, behind the Blue...",
    fullDescription:
      "While visiting Seltjarnarnes Peninsula, stroll through Valhúsahæð Park, behind the Blue House, then head to the Grótta Lighthouse, located in a protected nature reserve. Don’t miss the Kvika Foot Bath, a geothermal small pool that allows you to enjoy the beautiful view of Esja Mountain and Snæfellsjökull Glacier.",
  },
];

const customModalData = [HousesData, RoomsData, SurroundingsData];

export default customModalData;
