import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const {} = orderSlice.actions;

export default orderSlice.reducer;
