import React from "react";
import FeedIcon from "assets/img/notice.svg";
import { connect } from "react-redux";

const FeedItem = ({ feed }) => (
  <div className="feed flex">
    <div className="feed-image">
      <img className="feed-single--image" src={FeedIcon} alt="Wealth Buddy" />
    </div>
    <div className="feed-summary">
      <h6 className="feed-heading mb-1">{feed.heading}</h6>
      <p className="feed-single--text">{feed.content}</p>
    </div>
  </div>
);

const SummaryFeeds = ({ updateFeeds }) => (
  <div className="flex flex-col feed-wrap">
    <h1 className="text-4xl mb-5 font-medium card-header">Your Update Feeds</h1>

    <div className="flex flex-col justify-center items-start">
        {updateFeeds.map((feed, index) => (<FeedItem key={index} feed={feed} />))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  updateFeeds: state.dashboard.data.updateFeeds,
});

export default connect(mapStateToProps)(SummaryFeeds);
