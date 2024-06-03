import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NoteApi } from "../api/note_api";
import { NoteForm } from "../components/note_form/NoteForm";
import { addNote } from "../store/notes/note_slice";

export default function NoteCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (formValues) => {
    console.log(formValues); // we get this databack by a call back
    const response = await NoteApi.create(formValues);
    dispatch(addNote(response));
    alert("The note has been created successfully");
    navigate("/");
  };
  return (
    <div>
      <NoteForm title="New Note" onSubmit={submit} />
    </div>
  );
}
