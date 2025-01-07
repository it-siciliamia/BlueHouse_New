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
  pricePerNight: null,
  paymentType: null,
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
    },
    setCheckOut: (store, action) => {
      store.checkOut = moment(action.payload, "YYYYMMDD").format("YYYYMMDD");
      store.dayDifference = moment(store.checkOut, "YYYYMMDD").diff(
        moment(store.checkIn, "YYYYMMDD"),
        "days"
      );
    },
    setAddParams: (store, action) => {
      const { adult, children, room } = action.payload;
      store.addParams = {
        ...store.addParams,
        adult: adult !== undefined ? adult : store.addParams.adult,
        children: children !== undefined ? children : store.addParams.children,
        room: room !== undefined ? room : store.addParams.room,
      };
    },
    setAppartmentName: (store, action) => {
      store.appartmentName = action.payload;
    },
    setPricePerNight: (store, action) => {
      store.pricePerNight = action.payload;
    },
    setPaymentType: (store, action) => {
      store.paymentType = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default dataSearch.reducer;
export const {
  setCheckIn,
  setCheckOut,
  setAddParams,
  setAppartmentName,
  setPricePerNight,
  setPaymentType,
} = dataSearch.actions;
