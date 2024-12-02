import { createSlice, nanoid } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemCart: (state, action) => {
      const { id, title, image } = action.payload
      state.push({ idCart: nanoid(), id, title, image })
    },
    removeItemCart: (state, action) => {
      return state.filter(item => item.idCart !== action.payload)
    },
    clearCart: state => {
      state.length = 0
    },
  },
})

export const { addItemCart, removeItemCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
