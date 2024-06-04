import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { noteReducer } from "./notes/note_slice";

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
    authSlice: authReducer,
  },
});
