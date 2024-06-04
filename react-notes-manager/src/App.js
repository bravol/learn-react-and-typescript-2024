import { useEffect } from "react";
import { Plus } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { NoteApi } from "./api/note_api";
import Button from "./components/button/Button";
import Header from "./components/header/Header";
import { withAuthRequired } from "./hoc/withAuthRequired";
import { setNoteList } from "./store/notes/note_slice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function fetchAllNotes() {
    const noteList = await NoteApi.fetachAll();
    dispatch(setNoteList(noteList));
  }
  useEffect(() => {
    const unsub = NoteApi.onShouldSyncNotes(fetchAllNotes);
    // fetchAllNotes();
    return () => {
      unsub();
    };
  }, []);
  return (
    <div className="position-relative">
      <Header />
      <Button onClick={() => navigate("/note/new")} className="buttonAdd">
        <Plus />
      </Button>
      <div className="workspace">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
export const ProtectedApp = withAuthRequired(App);
