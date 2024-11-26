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
  },
})

export const { addItemCart, removeItemCart } = cartSlice.actions
export default cartSlice.reducer
