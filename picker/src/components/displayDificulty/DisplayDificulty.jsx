import React from "react";
import s from "./style.module.css";

const DisplayDificulty = (props) => {
  return (
    <div className={s.container}>
      {props.difficulty
        ? "Dificulty set to " + props.difficulty
        : "No difficulty set"}
    </div>
  );
};

export default DisplayDificulty;
