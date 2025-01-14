import { createSlice } from "@reduxjs/toolkit";
import { getRoomsData, createStripeSession } from "./technical-operations";

const initialState = {
  error: null,
  message: null,
  loading: false,
  isPlaceholderShown: false,
  paymentStage: 1,
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
} = technical.actions;
