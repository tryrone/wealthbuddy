import React, { useState } from "react";
import Lottie from "react-lottie";
import BuddyLoader from "assets/animation/loader.json";

const Loader = () => {
  const [isStopped, setIsStopped] = useState(true);
  const startAnimation = () => setIsStopped(false);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: BuddyLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="wealthbuddy-loader">
      <Lottie
        options={defaultOptions}
        height="100%"
        width="100%"
        isStopped={isStopped}
        eventListeners={[
          {
            eventName: "DOMLoaded",
            callback: (anim) => startAnimation(anim),
          },
        ]}
      />
    </div>
  );
};

export default Loader;
