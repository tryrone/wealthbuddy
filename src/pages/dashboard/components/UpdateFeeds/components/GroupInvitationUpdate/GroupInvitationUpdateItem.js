import React from "react";
import { FaChevronRight } from "react-icons/fa";

const GroupInvitationUpdateItem = ({
  invitation,
  onClickItem: handleItemClick,
}) => (
  <div className="w-full flex flex-row justify-between py-2 update-item">
    <a
      href="#"
      className="flex flex-grow"
      onClick={(e) => handleItemClick(e, invitation.id)}
    >
      <div className="flex flex-grow">
        <div className="flex flex-initial flex-col items-center content-center justify-start">
          <span className="text-gray-700 text-xs bg-teal-100 badge-icon">
            {invitation.email.toString().substring(0, 2).toUpperCase()}
          </span>
        </div>
        <div className="flex-initial text-gray-700 text-xs sm:text-sm md:text-sm lg-text-sm xl:text-sm leading-relaxed description">
          {invitation.description}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-center chevron-right">
          <FaChevronRight />
        </span>
      </div>
    </a>
  </div>
);

export default GroupInvitationUpdateItem;
