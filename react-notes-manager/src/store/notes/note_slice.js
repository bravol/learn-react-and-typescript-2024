import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "noteSlice",
  initialState: {
    noteList: [],
  },
  reducers: {
    // inital fetching of notes
    setNoteList: (currentSlice, action) => {
      currentSlice.noteList = action.payload;
    },
    // addnote

    addNote: (currentSlice, action) => {
      currentSlice.noteList.push(action.payload);
    },
    // update note
    updateNote: (currentSlice, action) => {
      const indexToUpdate = currentSlice.noteList.findIndex(
        (note) => note.id === action.payload.id
      );
      currentSlice.noteList[indexToUpdate] = action.payload;
    },
    // delete note
    deleteNote: (currentSlice, action) => {
      const filteredNotes = currentSlice.noteList.filter(
        (note) => note.id !== action.payload.id
      );
      currentSlice.noteList = filteredNotes;
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const { addNote, setNoteList, updateNote, deleteNote } =
  noteSlice.actions;
