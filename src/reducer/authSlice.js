import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, userId: null, isAuthenticated: false },
  reducers: {
    setToken: (state, action) => {
      const { token, userId } = action.payload
      state.token = token
      state.userId = userId
      state.isAuthenticated = true
    },
    removeToken: state => {
      state.token = null
      state.userId = null
      state.isAuthenticated = false
    },
  },
})

export const { setToken, removeToken } = authSlice.actions
export default authSlice.reducer
