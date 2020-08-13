import React from "react";
import FeedIcon from "../../../assets/img/notice.svg";

const GroupFeedItem = ({ feed }) => (
  <div className="feed flex justify-between items-center content-center">
    <div
      style={{
        height: "34px",
        width: "34px",
        borderRadius: "50%",
        marginLeft: "5px",
        background: "#A2E6E0",
      }}
      className="flex justify-center items-center font-light text-black text-base"
    >
      JW
    </div>
    <div className="feed-summary">
      <h6 className="feed-heading mb-1">John Word</h6>
      <p style={{ color: "rgba(0,0,0,.2)" }} className="feed-single--text">
        07:30pm
      </p>
    </div>
    <p
      style={{ color: "rgba(0,0,0,.4)", marginRight: "5px" }}
      className="feed-heading text-sm"
    >
      24,032.00
    </p>
  </div>
);

export default GroupFeedItem;
