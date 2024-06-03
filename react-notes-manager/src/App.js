import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { NoteApi } from "./api/note_api";
import Header from "./components/header/Header";
import { setNoteList } from "./store/notes/note_slice";

function App() {
  const dispatch = useDispatch();
  async function fetchAllNotes() {
    const noteList = await NoteApi.fetachAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    fetchAllNotes();
  }, []);
  return (
    <div>
      <Header />
      <div className="workspace">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
