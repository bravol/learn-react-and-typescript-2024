import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./notes/note_slice";

export const store = configureStore({
  reducer: {
    noteSlice: noteReducer,
  },
});
