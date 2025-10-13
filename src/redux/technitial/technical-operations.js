import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosGetRoomsData, axiosCreateStripeSession } from "../../api/api";

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

export const createStripeSession = createAsyncThunk(
  "api/create-stripe-session",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosCreateStripeSession(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
