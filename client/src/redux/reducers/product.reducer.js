import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[]
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
setProducts:(state,{payload})=>{
    state.products=payload;
}
    }
});

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;
