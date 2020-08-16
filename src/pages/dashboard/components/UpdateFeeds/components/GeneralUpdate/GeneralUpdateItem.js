import { FaChevronRight, FaExclamation } from "react-icons/fa/index";
import React from "react";

const GeneralUpdateItem = () => (
  <div className="w-full flex flex-row justify-between py-2 update-item">
    <div className="flex flex-grow">
      <div className="flex flex-initial flex-col items-center content-center justify-start">
        {/*<span className="flex flex-col items-center justify-center text-gray-700 text-xs bg-red-100 badge-icon">*/}
        {/*  <span className="text-red-300 text-center text-xs">*/}
        {/*    <FaArrowUp />*/}
        {/*  </span>*/}
        {/*</span>*/}
        {/*<span className="flex flex-col items-center justify-center text-gray-700 text-xs bg-blue-100 badge-icon">*/}
        {/*  <span className="text-blue-300 text-center text-xs">*/}
        {/*    <FaArrowDown />*/}
        {/*  </span>*/}
        {/*</span>*/}
        {/*<span className="flex flex-col items-center justify-center text-gray-700 text-xs bg-green-100 badge-icon">*/}
        {/*  <span className="text-green-300 text-center text-xs">*/}
        {/*    <FaEnvelope />*/}
        {/*  </span>*/}
        {/*</span>*/}
        <span className="flex flex-col items-center justify-center text-gray-700 text-xs bg-green-100 badge-icon">
          <span className="text-green-300 text-center text-xs">
            <FaExclamation />
          </span>
        </span>
      </div>
      <div className="flex-initial text-gray-700 text-xs sm:text-sm md:text-sm lg-text-sm xl:text-sm leading-relaxed description">
        All notifications have been set to be automatically dismissed after
        3000ms. Notifications can be manually dismissed.
      </div>
    </div>
    <div className="flex flex-col items-center justify-center">
      <a href="#" className="text-center chevron-right">
        <FaChevronRight />
      </a>
    </div>
  </div>
);

export default GeneralUpdateItem;
