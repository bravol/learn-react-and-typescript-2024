import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },

    addNote: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { addNote, setNoteList } = noteSlice.actions;
