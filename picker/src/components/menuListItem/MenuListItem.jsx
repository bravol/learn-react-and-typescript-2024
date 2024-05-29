import React, { useState } from "react";
import s from "./style.module.css";

const MenuListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  function activate() {
    setIsHovered(true);
  }

  function deactivate() {
    setIsHovered(false);
  }

  const getBackGroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "green";
      } else {
        return "#eff0ef";
      }
    }
  };

  const onItemClick = () => {
    console.log("Item clicked:", props.difficulty); // Logging click event
    props.itemClick(props.difficulty);
  };

  return (
    <div
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onClick={onItemClick}
      className={s.container}
      style={{ backgroundColor: getBackGroundColor() }}
    >
      Set to: {props.difficulty}
    </div>
  );
};

export default MenuListItem;
