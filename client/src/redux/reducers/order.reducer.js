import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  showProducts:null,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder:(state, {payload})=>{
      state.orders.push(payload)
    },
    setOrders: (state, {payload})=>{

      state.orders=payload
    },
    changeShowProducts:(state,{payload})=>{
      state.showProducts=!state.showProducts?payload:null
    },
    deleteOrder:(state,{payload})=>{
      state.orders=state.orders.filter(order=>order.id!==payload)
    }

  },
});

export const {deleteOrder,setOrders,changeShowProducts} = orderSlice.actions;

export default orderSlice.reducer;
