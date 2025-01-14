import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosGetAvailableRooms } from "../../api/api";

export const getAvailableRooms = createAsyncThunk(
  "api/availability",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await axiosGetAvailableRooms(userData);
      return data;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
