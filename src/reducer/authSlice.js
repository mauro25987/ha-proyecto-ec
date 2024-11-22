import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, isAuthenticated: false },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      state.isAuthenticated = true
    },
    removeToken: state => {
      state.token = null
      state.isAuthenticated = false
    },
  },
})

export const { setToken, removeToken } = authSlice.actions
export default authSlice.reducer
