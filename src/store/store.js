import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../reducer/authSlice"
import cartReducer from "../reducer/cartSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
})

export default store
