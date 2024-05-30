import React from "react";
import { FiveStarRating } from "./FiveStarRating";

export default function TVShowDetalls({ currentTVShow }) {
  const rating = currentTVShow.vote_average / 2;
  return (
    <div>
      <div className="show_title">{currentTVShow.name}</div>
      <div className="show_rating_container">
        <FiveStarRating rating={rating} />
        <span className="show_rating">{rating}/5</span>
      </div>
      <div className="show_overview">{currentTVShow.overview}</div>
    </div>
  );
}
