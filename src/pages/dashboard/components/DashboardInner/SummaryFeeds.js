import React from 'react';
import FeedIcon from "../../../../assets/img/notice.svg";

 const SummaryFeeds =()=> {
    return (
        <div className="flex flex-col feed-wrap">
        <h1 className="text-4xl mb-5 font-medium card-header">
            Your Update Feeds
        </h1>

        <div className="flex flex-col justify-center items-center">
            
                <div  className="feed flex">
                    <div className="feed-image">
                        <img className="feed-single--image" src={FeedIcon} alt={`Wealth Buddy`} />
                    </div>
                    <div className="feed-summary">
                        <h6 className="feed-heading mb-1">item.heading</h6>
                        <p className="feed-single--text">item.content</p>
                    </div>
                </div>
       

        </div>
    </div>
    )
}
export default SummaryFeeds;