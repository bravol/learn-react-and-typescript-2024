import React from "react";
import MenuListItem from "../menuListItem/MenuListItem";
import s from "./style.module.css";

const ParentComponent = (props) => {
  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={props.difficulty === "Low"}
        difficulty="Low"
        itemClick={props.itemClick}
      />
      <MenuListItem
        isSelected={props.difficulty === "Medium"}
        difficulty="Medium"
        itemClick={props.itemClick}
      />
      <MenuListItem
        isSelected={props.difficulty === "High"}
        difficulty="High"
        itemClick={props.itemClick}
      />
      <MenuListItem
        isSelected={props.difficulty === "Insane"}
        difficulty="Insane"
        itemClick={props.itemClick}
      />
    </div>
  );
};

export default ParentComponent;
