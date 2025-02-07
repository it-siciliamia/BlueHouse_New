import { createSlice } from "@reduxjs/toolkit";
import { createNewBooking } from "./booking-operations";

const initialState = {
  error: null,
  message: null,
  loading: false,
};

const booking = createSlice({
  name: "booking",
  initialState,
  reducers: {
    clearError: (store, action) => {
      store.error = action.payload;
    },
    clearMessage: (store, action) => {
      store.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // * CREATE NEW BOOKING
      .addCase(createNewBooking.pending, (store) => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(createNewBooking.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
      })
      .addCase(createNewBooking.rejected, (store, { payload }) => {
        store.loading = false;
        store.error =
          payload?.data?.message || "Oops, something went wrong, try again";
      });
  },
});

export default booking.reducer;
export const { clearError, clearMessage } = booking.actions;
