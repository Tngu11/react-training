import React from "react";

const Rating = props => {
  const roundedRating = Math.round(props.children);
  let ratingStr = "";
  for (let i = 0; i < 5; i++) {
    if (roundedRating > i) ratingStr += "★";
    else ratingStr += "☆";
  }
  return <div style={{ fontSize: "30px", padding: "10px" }}>{ratingStr}</div>;
};

export default Rating;
