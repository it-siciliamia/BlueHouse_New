import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaceholderShown: false,
  paymentStage: 1,
  error: "",
  message: "",
};

const technical = createSlice({
  name: "technical",
  initialState,
  reducers: {
    setPlaceholderShown: (store, action) => {
      store.isPlaceholderShown = action.payload;
    },
    setPaymentStage: (store, action) => {
      store.paymentStage = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export default technical.reducer;
export const { setPlaceholderShown, setPaymentStage } = technical.actions;
