import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import orderReducer from "../reducers/order.reducer";
import modalReducer from "../reducers/modal.reducer";
import productReducer from "../reducers/product.reducer";
const store = configureStore({
  reducer: {
    order: orderReducer,
    modal: modalReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
