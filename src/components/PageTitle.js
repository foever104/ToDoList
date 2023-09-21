import React from "react";
// import style from '../styles/modules/title.module.scss';
import "../styles/title.css";

function PageTitle({ children, ...rest }) {
  return (
    // <div>
    <p className="title" {...rest}>
      {children}
    </p>
    // </div>
  );
}
export default PageTitle;
