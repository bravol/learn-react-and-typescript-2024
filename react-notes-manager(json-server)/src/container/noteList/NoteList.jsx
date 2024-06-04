import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteApi } from "../../api/note_api";
import NoteCard from "../../components/card/NoteCard";
import { deleteNote } from "../../store/notes/note_slice";
import s from "./style.module.css";

const NoteList = ({ notes }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function deleteNote_(id) {
    if (window.confirm("Delete this note?")) {
      const response = await NoteApi.delete(id);
      dispatch(deleteNote(response));
    }
  }
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {notes.map((note) => (
        <div key={note.id} className={s.card_container}>
          <NoteCard
            title={note.title}
            content={note.content}
            subtitle={note.created_at}
            onClick={() => navigate("/notes/" + note.id)}
            onClickTrash={() => deleteNote_(note.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
