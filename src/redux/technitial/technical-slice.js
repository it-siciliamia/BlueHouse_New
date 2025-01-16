import { createSlice } from "@reduxjs/toolkit";
import { getRoomsData, createStripeSession } from "./technical-operations";
import { reset } from "ansi-html";

const initialState = {
  error: null,
  message: null,
  loading: false,
  isPlaceholderShown: false,
  paymentStage: 3,
  bookingConfirmed: false,
};

const technical = createSlice({
  name: "technical",
  initialState,
  reducers: {
    clearError: (store, action) => {
      store.error = action.payload;
    },
    clearMessage: (store, action) => {
      store.message = action.payload;
    },
    setPlaceholderShown: (store, action) => {
      store.isPlaceholderShown = action.payload;
    },
    setPaymentStage: (store, action) => {
      store.paymentStage = action.payload;
    },
    setBookingConfirmed: (store, action) => {
      store.bookingConfirmed = action.payload;
    },
    resetTechnical: (store) => {
      store.error = null;
      store.message = null;
      store.loading = false;
      store.isPlaceholderShown = false;
      store.paymentStage = 1;
      store.bookingConfirmed = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // * GET ROOMS DATA
      .addCase(getRoomsData.pending, (store) => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(getRoomsData.fulfilled, (store, { payload }) => {
        store.loading = false;
      })
      .addCase(getRoomsData.rejected, (store, { payload }) => {
        store.loading = false;
        store.error =
          payload?.data?.message || "Oops, something went wrong, try again";
      })
      // * CREATE STRIPE SESSION
      .addCase(createStripeSession.pending, (store) => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(createStripeSession.fulfilled, (store, { payload }) => {
        store.loading = false;
      })
      .addCase(createStripeSession.rejected, (store, { payload }) => {
        store.loading = false;
        store.error =
          payload?.data?.message || "Oops, something went wrong, try again";
      });
  },
});

export default technical.reducer;
export const {
  clearError,
  clearMessage,
  setPlaceholderShown,
  setPaymentStage,
  setBookingConfirmed,
  resetTechnical,
} = technical.actions;
