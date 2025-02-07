import axios from "axios";
// import qs from "qs";

const REACT_APP_API_URL = "http://localhost:3001/api";
// const REACT_APP_API_URL = "https://beds24.com/api/ajax/";

export const instance = axios.create({
  baseURL: REACT_APP_API_URL,
});

//This is a test of the site's access to the existing https://beds24.com/ - access rights from http://localhost:3000/ are not permitted.
// export const axiosGetRoomsData = async () => {
//   const params = qs.stringify({
//     ci: "2025-2-1", // Check-in date
//     co: "2025-2-5", // Check-out date
//     na: "undefined", // Number of adults
//     nc: "undefined", // Number of children
//     pt: "08", // Property type
//     la: "en", // Language
//     cu: "EUR", // Currency
//   });

//   const { data } = await instance.post("/getroomprice.php", params, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//     },
//   });

//   return data;
// };

export const axiosGetRoomsData = async () => {
  const { data } = await instance.get("/rooms");
  return data;
};

export const axiosCreateNewBooking = async (bookingData) => {
  const { data } = await instance.post("/bookings", bookingData);
  return data;
};

export const axiosGetAvailableRooms = async (userData) => {
  const { data } = await instance.get("/availability", {
    params: userData,
  });
  return data;
};

export const axiosCreateStripeSession = async (userData) => {
  const { data } = await instance.post("/create-stripe-session", userData);
  return data;
};
