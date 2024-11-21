import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../reducer/cartSlice";
import tokenReducer from "../reducer/tokenSlice";

const store = configureStore({
  reducer: {
    orders: orderReducer,
    token: tokenReducer,
  },
});

export default store;
