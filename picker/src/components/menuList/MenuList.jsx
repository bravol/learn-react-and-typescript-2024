import React from "react";
import { difficulties } from "../constants";
import MenuListItem from "../menuListItem/MenuListItem";
import s from "./style.module.css";

const ParentComponent = (props) => {
  return (
    <div className={s.container}>
      {difficulties.map((difficulty, index) => {
        return (
          <MenuListItem
            key={index}
            isSelected={props.difficulty === difficulty}
            difficulty={difficulty}
            itemClick={props.itemClick}
          />
        );
      })}
    </div>
  );
};

export default ParentComponent;
