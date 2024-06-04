import React from "react";
import s from "./style.module.css";

const Input = ({ onTextChange, placeholder, type }) => {
  return (
    <input
      type={type || "text"}
      className={s.input}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
