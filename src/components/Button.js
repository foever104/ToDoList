import React from "react";
// import style from '../styles/modules/title.module.scss';
import "../styles/button.css";

const buttonTypes = {
  primary: "primary",
  second: "second"
};

function Button({ type, className, children, ...rest }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={
        className === "button_primary" ? "button_primary" : "button_secondary"
      }
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select id={id} className="button_selected" {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
