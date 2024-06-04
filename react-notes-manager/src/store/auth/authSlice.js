import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "noteSlice",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (currentSlice, action) => {
      currentSlice.user = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setUser } = authSlice.actions;
