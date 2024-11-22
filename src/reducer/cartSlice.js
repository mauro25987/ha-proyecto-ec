import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemCart: (state, action) => {
      const { id, title, image } = action.payload
      state.push({ id, title, image })
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
