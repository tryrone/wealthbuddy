import React, { Fragment } from "react";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { FaUsers } from "react-icons/fa";
import converter from "number-to-words";
import { formatCurrency } from "utils";
import GroupSavingsIcon from "assets/img/groupIcon.png";
import { connect } from "react-redux";
import { GroupSavingsType } from "constants/enums";
import classNames from "classnames";

const savingsTypeNames = {
  [GroupSavingsType.GroupTargetSavings]: "Group target savings",
  [GroupSavingsType.GroupChallengeSavings]: "Group challenge savings",
  [GroupSavingsType.GroupContributorySavings]: "Group contributory savings",
};

const GroupInvitationActionModal = ({
  isVisible,
  isDeclineLoading,
  onClose: handleClose,
  onDecline: handleDecline,
  onAccept: handleAccept,
  invitationId,
  invitations,
  customerDetails,
}) => {
  const invitation =
    invitations.find((invitation) => invitation.id === invitationId) || {};

  const contribution = invitation.amountToContribute;

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal" onClick={handleClose}>
            <CloseModalIcon />
          </span>

          <Fragment>
            <div className="flex flex-col w-full justify-start items-start mb-5">
              <h1 className="text-lg font-medium mb-2">
                Group challenge invitation
              </h1>
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <div className="w-full flex flex-row items-center pb-5">
                <img
                  className="invitation--inviter-image rounded-full"
                  src={invitation.creatorProfilePicture || GroupSavingsIcon}
                  alt=""
                />
                <p className="w-full text-sm">
                  Hi {customerDetails.otherNames}, I added you to a{" "}
                  <span className="text-wb-primary">
                    {savingsTypeNames[invitation.groupSavingsType]} challenge
                  </span>
                  . You'll be sent a confirmation mail when you accept.
                </p>
              </div>
              <div className="flex flex-row justify-center items-center items-center w-full py-2 border-y">
                <div className="w-1/2 flex flex-col justify-center">
                  <p className="savings-inner--title font-semi-bold text-gray-300 pt-2">
                    {`${invitation.name}`}
                  </p>
                  <h1 className="pt-1 pb-3 text-2xl font-medium wb-border-b">
                    {`₦${formatCurrency(invitation.targetAmount)}`}
                  </h1>

                  <div className="w-full flex flex-row">
                    <div className="w-1/2 py-3 text-left">
                      <h5 className="text-gray-300 text-xs">Contribution</h5>
                      <h1 className="mt-3 font-medium">
                        {`₦${formatCurrency(contribution)}`}
                      </h1>
                    </div>
                    <div className="w-1/2 py-3 text-left">
                      <h5 className="text-gray-300 text-xs">
                        Total contribution
                      </h5>
                      <h1 className="mt-3 font-medium">{`₦${formatCurrency(
                        invitation.amountToContribute
                      )}`}</h1>
                    </div>
                  </div>

                  <div className="w-full flex flex-row">
                    <div className="w-1/2 py-3 text-left">
                      <h5 className="text-gray-300 text-xs">Interest Rate</h5>
                      <h1 className="mt-3 font-medium">N/A</h1>
                    </div>
                    <div className="w-1/2 py-3 text-left">
                      <h5 className="text-gray-300 text-xs">Members</h5>
                      <h1 className="mt-3 font-medium">
                        {invitation.numberOfParticipant}
                      </h1>
                    </div>
                  </div>
                </div>

                <img
                  className="w-1/2 group-savings-image rounded-sm"
                  src={invitation.imageURL || GroupSavingsIcon}
                  alt=""
                />
              </div>

              <div className="w-full pt-2 pb-5 text-left wb-border-b">
                <h5 className="text-gray-300 text-xs">Description</h5>
                <p className="w-full mt-3 text-sm">
                  {invitation.description || "No description available"}
                </p>
              </div>
            </div>

            <div className="flex-col flex-grow flex justify-center items-center pt-4">
              <div className="p-1 bg-purple-200 rounded-md">
                <div className="text-purple-600 p-1">
                  <FaUsers />
                </div>
              </div>
              <div className="text-sm text-center leading-relaxed text-gray-300 w-4/5 mt-3">
                <span className="capitalize">
                  {converter.toWords(invitation.numberOfParticipant)}
                </span>{" "}
                people have been added to this group and will be sent a mail to
                confirm the agree
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <div
                className={classNames({
                  "w-40 border-b text-center bg-white cta-del leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm": true,
                  loading: isDeclineLoading,
                })}
                onClick={handleDecline}
              >
                Decline <span className="loader" />
              </div>

              <button
                type="submit"
                className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                onClick={handleAccept}
              >
                Accept
              </button>
            </div>
          </Fragment>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
  invitations: state.savings.pendingInvitationsEntities,
});

export default connect(mapStateToProps)(GroupInvitationActionModal);
