import { createSlice } from "@reduxjs/toolkit";
import { set } from "date-fns";

const initialState = {
  isPlaceholderShown: false,
  paymentStage: 1,
  bookingConfirmed: false,
  error: "",
  message: "",
};

const technical = createSlice({
  name: "technical",
  initialState,
  reducers: {
    setPlaceholderShown: (store, action) => {
      store.isPlaceholderShown = action.payload;
    },
    setPaymentStage: (store, action) => {
      store.paymentStage = action.payload;
    },
    setBookingConfirmed: (store, action) => {
      store.bookingConfirmed = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default technical.reducer;
export const { setPlaceholderShown, setPaymentStage, setBookingConfirmed } =
  technical.actions;
