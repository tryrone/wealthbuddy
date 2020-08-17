import React, { Fragment } from "react";
import { FaChevronRight } from "react-icons/fa";
import { connect } from "react-redux";
import { GroupSavingsType } from "constants/enums";

const savingsTypeNames = {
  [GroupSavingsType.GroupTargetSavings]: "Group target savings",
  [GroupSavingsType.GroupChallengeSavings]: "Group challenge savings",
  [GroupSavingsType.GroupContributorySavings]: "Group contributory savings",
};

const GroupInvitationUpdateItem = ({
  invitation,
  onClickItem: handleItemClick,
  customerDetails,
}) => {
  const message = `Hi ${customerDetails.otherNames}, I added you to a
      ${
        savingsTypeNames[invitation.groupSavingsType]
      } challenge . You'll be sent
      a confirmation mail when you accept.`;

  return (
    <div className="w-full flex flex-row justify-between py-2 update-item">
      <a
        href="#"
        className="flex flex-grow"
        onClick={(e) => handleItemClick(e, invitation)}
      >
        <div className="flex flex-grow">
          <div className="flex flex-initial flex-col items-center content-center justify-start">
            <span className="text-gray-700 text-xs bg-teal-100 badge-icon">
              {invitation.email.toString().substring(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="flex-initial text-gray-700 text-xs sm:text-sm md:text-sm lg-text-sm xl:text-sm leading-relaxed description">
            {message}
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
};

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
});

export default connect(mapStateToProps)(GroupInvitationUpdateItem);
