import React, { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";

const SearchBar = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSearch(e.target.value);
      setValue("");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <SearchIcon className="icon" />
      <input
        onKeyUp={handleSearch}
        type="text"
        placeholder="Search a TV show you like"
        className="input"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchBar;
