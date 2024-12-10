import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPlaceholderShown: false,
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
  },
  extraReducers: (builder) => {},
});

export default technical.reducer;
export const { setPlaceholderShown } = technical.actions;
