const schema = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blue House B&B",
  "url": "https://bluehouse.is",
  "logo": "https://bluehouse.is/logo.jpg",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+354 775 6480",
    "contactType": "Reservations",
    "email": "info@bluehouse.is"
  },
  "sameAs": [
    "https://www.facebook.com/bluehouseiceland",
    "https://www.instagram.com/bluehousebb/",
    "https://www.tripadvisor.com/Hotel_Review-g189970-d1915669-Reviews-Blue_House_B_B-Reykjavik_Capital_Region.html"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Valhúsabraut 19",
    "addressLocality": "Seltjarnarnes",
    "postalCode": "170",
    "addressCountry": "IS"
  },
  "hasPart": [
    {
      "@type": "LodgingBusiness",
      "name": "Blue House B&B",
      "url": "https://bluehouse.is",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Valhúsabraut 19",
        "addressLocality": "Seltjarnarnes",
        "postalCode": "170",
        "addressCountry": "IS"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 64.154115,
        "longitude": -21.998533
      },
      "telephone": "+354 775 6480",
      "makesOffer": {
        "@type": "Offer",
        "name": "Family Room - Nes - Grotta Northern Lights",
        "description": "Private Bathroom, Bed & Living room, Sea View, King Sized Bed + Sofa Bed, Self-service Continental Breakfast.",
        "priceCurrency": "EUR",
        "price": "150.00",
        "priceValidUntil": "2024-11-07",
        "itemOffered": {
          "@type": "Accommodation",
          "name": "Family Room - Nes - Grotta Northern Lights",
          "bed": "King Sized Bed + Sofa Bed",
          "numberOfRooms": 1,
          "occupancy": {
            "@type": "QuantitativeValue",
            "value": 4,
            "unitCode": "C62"
          }
        },
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "LodgingBusiness",
      "name": "Grótta Northern Lights Apartment",
      "url": "https://bluehouse.is",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Miðbraut 11",
        "addressLocality": "Seltjarnarnes",
        "postalCode": "170",
        "addressCountry": "IS"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 64.155827,
        "longitude": -21.996957
      },
      "telephone": "+354 775 6480",
      "makesOffer": {
        "@type": "Offer",
        "name": "Grótta Northern Lights Apartment",
        "description": "Private Apartment with Sea View, King Sized Bed, Self-service Continental Breakfast.",
        "priceCurrency": "EUR",
        "price": "200.00",
        "priceValidUntil": "2024-11-07",
        "itemOffered": {
          "@type": "Accommodation",
          "name": "Grótta Northern Lights Apartment",
          "bed": "King Sized Bed",
          "numberOfRooms": 1,
          "occupancy": {
            "@type": "QuantitativeValue",
            "value": 2,
            "unitCode": "C62"
          }
        },
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "LandmarksOrHistoricalBuildings",
      "name": "Grótta Lighthouse",
      "url": "https://bluehouse.is",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Grótta",
        "addressLocality": "Seltjarnarnes",
        "postalCode": "170",
        "addressCountry": "IS"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 64.164522,
        "longitude": -22.022136
      },
      "telephone": "+354 775 6480"
    }
  ]
}`;

export default schema;
