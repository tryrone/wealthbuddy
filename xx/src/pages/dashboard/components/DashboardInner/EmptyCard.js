import React from "react";
import EmptyIcon from "shared-components/svgs/EmptyIcon";

const EmptyCard = (props) => (
  <div className="empty-card--items">
    <span className="empty-illustration">
      <EmptyIcon />
    </span>
    <div className="empty-text">
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  </div>
);

export default EmptyCard;
