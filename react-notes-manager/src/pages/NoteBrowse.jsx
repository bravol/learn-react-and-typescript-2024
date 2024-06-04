import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/search/SearchBar";
import NoteList from "../container/noteList/NoteList";
import { withAuthRequired } from "../hoc/withAuthRequired";

export default function NoteBrowse() {
  const notes = useSelector((store) => store.noteSlice.noteList);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredNotelist = notes?.filter((note) => {
    const containsTitle = note?.title
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    const containsContent = note?.content
      .trim()
      .toUpperCase()
      .includes(searchTerm.trim().toUpperCase());
    return containsTitle || containsContent;
  });
  return (
    <div className="row justify-content-center mb-5">
      <div className="col-sm-12 col-md-4">
        <SearchBar onTextChange={setSearchTerm} />
      </div>
      {notes?.length === 0 && (
        <div className="d-flex justify-content-center mt-5">
          You do not have any note, do you want to{" "}
          <Link to="/note/new"> create one?</Link>
        </div>
      )}
      <NoteList notes={filteredNotelist} />
    </div>
  );
}

export const ProtectedNoteBrowse = withAuthRequired(NoteBrowse);
