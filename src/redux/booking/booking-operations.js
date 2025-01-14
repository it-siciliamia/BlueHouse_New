import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosCreateNewBooking } from "../../api/api";

export const createNewBooking = createAsyncThunk(
  "api/bookings",
  async (bookingData, { rejectWithValue }) => {
    try {
      const data = await axiosCreateNewBooking(bookingData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
