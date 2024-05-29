import React, { useState } from "react";
import MenuListItem from "../menuListItem/MenuListItem";
import s from "./style.module.css";

const ParentComponent = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Low");

  const handleItemClick = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

  return (
    <div className={s.container}>
      <MenuListItem
        isSelected={selectedDifficulty === "Low"}
        difficulty="Low"
        itemClick={handleItemClick}
      />
      <MenuListItem
        isSelected={selectedDifficulty === "Medium"}
        difficulty="Medium"
        itemClick={handleItemClick}
      />
      <MenuListItem
        isSelected={selectedDifficulty === "High"}
        difficulty="High"
        itemClick={handleItemClick}
      />
      <MenuListItem
        isSelected={selectedDifficulty === "Insane"}
        difficulty="Insane"
        itemClick={handleItemClick}
      />
    </div>
  );
};

export default ParentComponent;
