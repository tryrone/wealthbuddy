import React, { Fragment } from "react";
import "./styles.css";

const Loading = ({ text = "Loading" }) => {
  return (
    <Fragment>
      <span className="font-medium">{text}</span>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Fragment>
  );
};

export default Loading;
