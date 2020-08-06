import React from "react";
import "./styles.css";

const AuthModal = (props) => {
  return (
    <div
      className={`auth-modal flex flex-col items-center bg-white fadeIn ${
        typeof props.className !== "undefined" ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default AuthModal;
