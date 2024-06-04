import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { NoteApi } from "../api/note_api";
import { NoteForm } from "../components/note_form/NoteForm";
import { withAuthRequired } from "../hoc/withAuthRequired";
import { deleteNote, updateNote } from "../store/notes/note_slice";

export default function Note() {
  const { id } = useParams();
  const notes = useSelector((store) => store.noteSlice.noteList);
  const note = notes.find((note) => note.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditable, setisEditable] = useState(false);
  const submit = async (data) => {
    // console.log("the edited data is", data);
    const response = await NoteApi.update(note.id, data);
    dispatch(updateNote(response));
    setisEditable(false);
  };
  async function deleteNote_() {
    if (window.confirm("Delete this note?")) {
      const response = await NoteApi.delete(note.id);
      //   console.log("the deleted note is", response);
      dispatch(deleteNote(response));
      navigate("/");
    }
  }

  return (
    <>
      {note && (
        <NoteForm
          isEditable={isEditable}
          title={isEditable ? "Edit Note" : note.title}
          note={note}
          onClickDelete={deleteNote_}
          onClickEdit={() => setisEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </>
  );
}

export const ProtectedNote = withAuthRequired(Note);
