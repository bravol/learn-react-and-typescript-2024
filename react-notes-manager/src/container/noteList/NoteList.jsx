import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NoteCard from "../../components/card/NoteCard";
import s from "./style.module.css";

const NoteList = () => {
  const navigate = useNavigate();
  const noteList = useSelector((store) => store.noteSlice.noteList);
  return (
    <div className={`row justify-content-center ${s.cards_container}`}>
      {noteList.map((note) => (
        <div key={note.id} className={s.card_container}>
          <NoteCard
            title={note.title}
            content={note.content}
            subtitle={note.created_at}
            onClick={() => navigate("/notes/" + note.id)}
            onClickTrash={() => alert("onClickTrash")}
          />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
