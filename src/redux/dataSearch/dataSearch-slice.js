import { createSlice } from "@reduxjs/toolkit";
import * as moment from "moment";
import { getAvailableRooms } from "./dataSearch-operations";
import { reset } from "ansi-html";

const newDate = moment().format("YYYYMMDD");

const initialState = {
  error: null,
  message: null,
  loading: false,
  checkIn: newDate,
  checkOut: newDate,
  dayDifference: 0,
  addParams: {
    adult: 2,
    children: 0,
    room: 1,
  },
  appartmentName: null,
  pricePerNight: 0,
  paymentType: null,
  totalAmountEuro: 0,
  totalAmountCurrency: 0,
  currency: "€",
  exchangeRate: 1,
};

const dataSearch = createSlice({
  name: "dataSearch",
  initialState,
  reducers: {
    clearError: (store, action) => {
      store.error = action.payload;
    },
    clearMessage: (store, action) => {
      store.message = action.payload;
    },
    setCheckIn: (store, action) => {
      store.checkIn = moment(action.payload, "YYYYMMDD").format("YYYYMMDD");
      store.dayDifference = moment(store.checkOut, "YYYYMMDD").diff(
        moment(store.checkIn, "YYYYMMDD"),
        "days"
      );
      updateTotalAmounts(store);
    },
    setCheckOut: (store, action) => {
      store.checkOut = moment(action.payload, "YYYYMMDD").format("YYYYMMDD");
      store.dayDifference = moment(store.checkOut, "YYYYMMDD").diff(
        moment(store.checkIn, "YYYYMMDD"),
        "days"
      );
      updateTotalAmounts(store);
    },
    setAddParams: (store, action) => {
      const { adult, children, room } = action.payload;
      store.addParams = {
        ...store.addParams,
        adult: adult !== undefined ? adult : store.addParams.adult,
        children: children !== undefined ? children : store.addParams.children,
        room: room !== undefined ? room : store.addParams.room,
      };
      updateTotalAmounts(store);
    },
    setAppartmentName: (store, action) => {
      store.appartmentName = action.payload;
    },
    setPricePerNight: (store, action) => {
      store.pricePerNight = action.payload;
      updateTotalAmounts(store);
    },
    setPaymentType: (store, action) => {
      store.paymentType = action.payload;
    },
    setCurrency: (store, action) => {
      store.currency = action.payload;
    },
    setExchangeRate: (store, action) => {
      store.exchangeRate = action.payload;
      updateTotalAmounts(store);
    },
    resetDataSearch: (store) => {
      store.error = null;
      store.message = null;
      store.loading = false;
      store.checkIn = newDate;
      store.checkOut = newDate;
      store.dayDifference = 0;
      store.addParams = {
        adult: 2,
        children: 0,
        room: 1,
      };
      store.appartmentName = null;
      store.pricePerNight = 0;
      store.paymentType = null;
      store.totalAmountEuro = 0;
      store.totalAmountCurrency = 0;
      store.currency = "€";
      store.exchangeRate = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      // * GET AVAILABLE ROOMS
      .addCase(getAvailableRooms.pending, (store) => {
        store.loading = true;
        store.error = null;
        store.message = null;
      })
      .addCase(getAvailableRooms.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.message = payload.message;
      })
      .addCase(getAvailableRooms.rejected, (store, { payload }) => {
        store.loading = false;
        store.error =
          payload?.data?.message || "Oops, something went wrong, try again";
      });
  },
});

const updateTotalAmounts = (store) => {
  store.totalAmountEuro = (
    store.dayDifference *
    store.pricePerNight *
    store.addParams.room
  ).toFixed(2);
  store.totalAmountCurrency = (
    store.totalAmountEuro * store.exchangeRate
  ).toFixed(2);
};

export default dataSearch.reducer;
export const {
  clearError,
  clearMessage,
  setCheckIn,
  setCheckOut,
  setAddParams,
  setAppartmentName,
  setPricePerNight,
  setPaymentType,
  setCurrency,
  setExchangeRate,
  resetDataSearch,
} = dataSearch.actions;
