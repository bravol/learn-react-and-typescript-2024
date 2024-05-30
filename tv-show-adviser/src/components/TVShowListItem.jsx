import React from "react";
import { SMALL_IMG_COVER_BASE_URL } from "../config";

export default function TVShowListItem({ tvShow, onClick }) {
  const MAX_TITLE_CHAR = 20;

  const onClick_ = () => {
    onClick();
  };
  return (
    <div className="item_container" onClick={onClick_}>
      <img
        alt={tvShow?.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className="item_img"
      />
      <div className="item_title">
        {tvShow?.name?.length > MAX_TITLE_CHAR
          ? tvShow?.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow?.name}
      </div>
    </div>
  );
}
