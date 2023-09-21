import React, { useState, useEffect } from "react";
import "../styles/TodoItem.css";
import { MdDelete, MdEdit, MdCheck } from "react-icons/md";

const checkStyle = {
  fontSize: "2.5rem",
  padding: "0.5rem",
  borderRadius: "4px",
  color: "white",
  background: "var(--primaryPurple)"
};
const unCheckStyle = {
  fontSize: "2.5rem",
  padding: "0.5rem",
  borderRadius: "4px",
  color: "var(--gray-1)",
  background: "var(--gray-1)"
};

function getCheckColor(checked) {
  if (checked) {
    return checkStyle;
  } else {
    return unCheckStyle;
  }
}
function CheckButton({ checked, handleCheck }) {
  return (
    <div
      className="svgBox"
      onClick={() => {
        handleCheck();
      }}
    >
      <MdCheck style={getCheckColor(checked)} />
    </div>
  );
}

export default CheckButton;
