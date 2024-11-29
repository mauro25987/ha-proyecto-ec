import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from "../reducer/authSlice"
import cartReducer from "../reducer/cartSlice"

const persistConfig = {
  key: "todo",
  storage,
}

const rootReducer = combineReducers({ auth: authReducer, cart: cartReducer })
const selectCartCount = (state) => state.cart.items.length
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
