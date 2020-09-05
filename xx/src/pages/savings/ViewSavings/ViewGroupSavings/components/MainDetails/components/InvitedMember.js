import { GroupInvitationStatus } from "constants/enums";
import React from "react";

const InvitedMember = ({ member }) => (
  <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row justify-between align-items-center my-2 pr-5">
    <div className="flex flex-grow w-2/3">
      <div className="flex-initial text-gray-700 text-center text-sm bg-teal-100 rounded-full p-3 mr-2">
        {member.email.toString().substring(0, 2).toUpperCase()}
      </div>
      <div className="flex-initial text-gray-300 text-left font-semi-bold text-sm py-3 mr-2 w-10/12 truncate">
        {member.email}
      </div>
    </div>
    <div className="flex flex-col justify-center">
      {member.status === GroupInvitationStatus.Accepted ? (
        <span className="invited-member-status bg-teal-300 text-gray-700 text-center rounded-full">
          Accepted
        </span>
      ) : member.status === GroupInvitationStatus.Declined ? (
        <span className="invited-member-status bg-red-300 text-gray-700 text-center rounded-full">
          Declined
        </span>
      ) : (
        <span className="invited-member-status bg-yellow-300 text-gray-700 text-center rounded-full">
          Pending
        </span>
      )}
    </div>
  </div>
);

export default InvitedMember;
