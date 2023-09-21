import React, { useState, useEffect } from "react";
import "../styles/TodoItem.css";
import { MdDelete, MdStarRate, MdStar } from "react-icons/md";

const starStyle = {
  // fontSize: "2.5rem",
  // padding: "0.5rem",
  // borderRadius: "4px",
  color: "red"
  // background: "var(--primaryPurple)"
};
const unStarStyle = {
  // height: "20px",
  // width: "20px"
  // fontSize: "2.5rem",
  // padding: "0.5rem",
  // borderRadius: "4px",
  // color: "red",
  color: "var(--gray-1)"
  // background: "var(--gray-1)"
};
function getStarColor(star) {
  if (star) {
    // if (star !== "normal") {
    return starStyle;
  } else {
    return unStarStyle;
  }
}
function StarButton({ star, handleStar }) {
  // function StarButton({ star, handleStar }) {
  return (
    <div
      className="icon"
      onClick={() => {
        handleStar();
      }}
    >
      <MdStar style={getStarColor(star)} />
    </div>
  );
}

export default StarButton;
