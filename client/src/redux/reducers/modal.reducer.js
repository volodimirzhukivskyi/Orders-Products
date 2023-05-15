import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showId: null
};

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
         handleClose : (state) => {
             state.showId = null
         },
         handleShow : (state,{payload})=> {
             state.showId = payload
         },
    }
});

export const {handleClose,handleShow} = modalSlice.actions;

export default modalSlice.reducer;
