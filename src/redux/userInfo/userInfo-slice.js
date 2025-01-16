import { createSlice } from "@reduxjs/toolkit";
import { reset } from "ansi-html";

const initialState = {
  error: null,
  message: null,
  loading: false,
  userInfo: {
    firstName: null,
    surname: null,
    email: null,
    mobile: null,
    address: null,
    postcode: null,
    city: null,
    country: null,
    arrival: null,
    comments: null,
  },
};

const userInfo = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    clearError: (store, action) => {
      store.error = action.payload;
    },
    clearMessage: (store, action) => {
      store.message = action.payload;
    },
    setUserInformation: (store, action) => {
      store.userInfo = { ...action.payload };
    },
    resetUserInfo: (store) => {
      store.error = null;
      store.message = null;
      store.loading = false;
      store.userInfo = {
        firstName: null,
        surname: null,
        email: null,
        mobile: null,
        address: null,
        postcode: null,
        city: null,
        country: null,
        arrival: null,
        comments: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export default userInfo.reducer;
export const { clearError, clearMessage, setUserInformation, resetUserInfo } =
  userInfo.actions;
