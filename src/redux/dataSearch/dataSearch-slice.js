import { createSlice } from "@reduxjs/toolkit";
import * as moment from "moment";

const newDate = moment().format("YYYYMMDD");

const initialState = {
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
  },
  extraReducers: (builder) => {},
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
  setCheckIn,
  setCheckOut,
  setAddParams,
  setAppartmentName,
  setPricePerNight,
  setPaymentType,
  setCurrency,
  setExchangeRate,
} = dataSearch.actions;
