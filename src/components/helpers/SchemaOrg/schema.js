const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Blue House B&B",
  url: "https://bluehouse.is",
  logo: "https://bluehouse.is/logo.jpg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+3547756480",
    contactType: "Reservations",
    email: "info@bluehouse.is",
  },
  sameAs: [
    "https://www.facebook.com/bluehouseiceland",
    "https://www.instagram.com/bluehousebb/",
    "https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Valhúsabraut 19",
    addressLocality: "Seltjarnarnes",
    postalCode: "170",
    addressCountry: "IS",
  },
};

const lodgingBusinesses = [
  {
    "@type": "LodgingBusiness",
    name: "Economy Double Room",
    description:
      "Located at 3 properties. Facing Valhúsahaedpark, equipped with a queen-size bed and Netflix TV. Shared bathroom and kitchen. Continental self-service breakfast included.",
    priceRange: "120-140 EUR",
  },
  {
    "@type": "LodgingBusiness",
    name: "Double/Twin Room",
    description:
      "Located at 3 properties. Facing the seaside, equipped with king-size or twin bed and Netflix TV. Shared bathroom and kitchen. Continental self-service breakfast included.",
    priceRange: "120-140 EUR",
  },
  {
    "@type": "LodgingBusiness",
    name: "Ec. Triple Room",
    description:
      "Located in the Blue House and Yellow House. Equipped with king-size/twin bed and Netflix-TV. Extra beds are queen-sized sofa beds. Shared bathroom and kitchen. Continental self-service breakfast included.",
    priceRange: "108-130 EUR",
  },
  {
    "@type": "LodgingBusiness",
    name: "Ec. Quadruple Room",
    description:
      "Located in the Blue House and Yellow House. Equipped with king-size/twin bed and Netflix-TV. Extra beds are queen-sized sofa beds. Shared bathroom and kitchen. Private options available. Breakfast options included.",
    priceRange: "127-150 EUR",
  },
  {
    "@type": "LodgingBusiness",
    name: "Family Room - Nes - Grotta Northern Lights",
    description:
      "Located at the Yellow House. Incredible seaside and lighthouse view, popular for northern lights hunters. Equipped with Netflix-TV, King size bed, and sofa bed. Private bathroom and dining area. Shared kitchen. Breakfast included.",
    priceRange: "120-140 EUR",
  },
  {
    "@type": "LodgingBusiness",
    name: "Two Bedroom Apartment",
    description:
      "Ideal for families and groups. Located in the garden of the Blue House. Two bedrooms with double or twin beds, Netflix-TV, private living room, bathroom, kitchenette, terrace, and dining area. Breakfast included.",
    priceRange: "150-170 EUR",
  },
  {
    "@type": "LodgingBusiness",
    name: "Three Bedroom Apartment",
    description:
      "Located at the Yellow House. Incredible seaside and lighthouse view, popular for northern lights hunters. Up to 12 adults (recommended 9). Multiple beds, 3 Netflix-TV equipped rooms, private bathroom, kitchen, terrace, and dining area. Breakfast included.",
    priceRange: "170-210 EUR",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: "https://blog.bluehouse.is",
  name: "Blue House Blog",
  description:
    "Discover useful travel tips, insights, and updates about staying at Blue House and exploring Iceland.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://bluehouseis.zohodesk.eu/portal/en/home",
  name: "Blue House FAQ",
  description:
    "Find answers to frequently asked questions about staying at Blue House.",
};

const forumSchema = {
  "@context": "https://schema.org",
  "@type": "DiscussionForumPosting",
  url: "https://bluehouseis.zohodesk.eu/portal/en/community/guestforum",
  name: "Blue House Community Forum",
  description:
    "Join discussions and explore interesting topics with other guests.",
};

const toursSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Tours and Activities",
  url: "https://bluehouse.tourdesk.is/Tour?notfound=True",
  description:
    "Book unique tours and activities in Iceland through Blue House.",
};

const combinedSchema = JSON.stringify([
  organizationSchema,
  ...lodgingBusinesses,
  blogSchema,
  faqSchema,
  forumSchema,
  toursSchema,
]);

export default combinedSchema;
