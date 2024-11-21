import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemCart: (state, action) => {
      return
    },
    removeItemCart: (state, action) => {
      return
    },
    editCart: (state, action) => {
      return
    },
  },
})

export const { addItemCart, removeItemCart, editCart } = cartSlice.actions
export default cartSlice.reducer
