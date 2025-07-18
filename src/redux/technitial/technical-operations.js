import { createAsyncThunk } from "@reduxjs/toolkit";
import { 
  axiosGetRoomsData, 
  axiosGetAvailableRooms, 
  axiosCreateNewBooking,
  axiosCreateStripeSession 
} from "../../api/api";

// Get all rooms data
export const getRoomsData = createAsyncThunk(
  "api/rooms",
  async (_, { rejectWithValue }) => {
    try {
      const data = await axiosGetRoomsData();
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

// Get available rooms
export const getAvailableRooms = createAsyncThunk(
  "api/available-rooms",
  async ({ roomId, startDate, endDate }, { rejectWithValue }) => {
    try {
      const data = await axiosGetAvailableRooms(roomId, startDate, endDate);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

// Create new booking
export const createNewBooking = createAsyncThunk(
  "api/create-booking",
  async ({ roomId, guestDetails, checkIn, checkOut }, { rejectWithValue }) => {
    try {
      const data = await axiosCreateNewBooking(roomId, guestDetails, checkIn, checkOut);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);

// Create Stripe session
export const createStripeSession = createAsyncThunk(
  "api/create-stripe-session",
  async ({ price, currency, bookingId }, { rejectWithValue }) => {
    try {
      const data = await axiosCreateStripeSession(price, currency, bookingId);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
