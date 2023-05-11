import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import orderReducer from "../reducers/order.reducer";

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
