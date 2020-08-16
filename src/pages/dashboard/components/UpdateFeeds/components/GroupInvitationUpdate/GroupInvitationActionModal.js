import React, { Fragment } from "react";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";
import { FaUsers } from "react-icons/fa";
import converter from "number-to-words";
import { formatCurrency } from "utils";
import GroupSavingsIcon from "assets/img/groupIcon.png";
import { SavingsType } from "constants/enums";
import { connect } from "react-redux";

const isLoading = false;
const error = false;
const handleDecline = () => null;
const handleAccept = () => null;

const savingsTypeNames = {
  [SavingsType.GroupTargetSavings]: "Group target savings",
  [SavingsType.GroupChallengeSavings]: "Group challenge savings",
  [SavingsType.GroupContributorySavings]: "Group contributory savings",
};

const savings = {
  name: "Savings name",
  amountToSave: 490000,
  type: 5,
};

const GroupInvitationActionModal = ({
  isVisible,
  onClose: handleClose,
  invitationId,
  invitations,
}) => {
  const invitation = invitations.find(
    (invitation) => invitation.id === invitationId
  );

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          {!isLoading && (
            <span className="closeModal" onClick={handleClose}>
              <CloseModalIcon />
            </span>
          )}

          {!isLoading ? (
            <Fragment>
              <div className="flex flex-col w-full justify-start items-start mb-5">
                <h1 className="text-lg font-medium mb-2">
                  Group challenge invitation
                </h1>
              </div>

              {error && (
                <div className="w-72 text-xs text-left mb-5">
                  <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                    {error}
                  </p>
                </div>
              )}

              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full flex flex-row items-center pb-5">
                  <img
                    className="invitation--inviter-image rounded-full"
                    src={savings.imageURL ? savings.imageURL : GroupSavingsIcon}
                    alt=""
                  />
                  <p className="w-full text-sm">
                    Hi John, I added you to a{" "}
                    <span className="text-wb-primary">
                      Group contributory challenge
                    </span>
                    . You'll be sent a confirmation mail when you accept.
                  </p>
                </div>
                <div className="flex flex-row justify-center items-center items-center w-full py-2 border-y">
                  <div className="w-1/2 flex flex-col justify-center">
                    <p className="savings-inner--title font-semi-bold text-gray-300 pt-2">
                      {`${savings.name}`}
                    </p>
                    <h1 className="pt-1 pb-3 text-2xl font-medium wb-border-b">
                      {`₦${formatCurrency(invitation.amountToContribute)}`}
                    </h1>

                    <div className="w-full flex flex-row">
                      <div className="w-1/2 py-3 text-left">
                        <h5 className="text-gray-300 text-xs">Interest Rate</h5>
                        <h1 className="mt-3 font-medium">12.5%</h1>
                      </div>
                      <div className="w-1/2 py-3 text-left">
                        <h5 className="text-gray-300 text-xs">Interest Rate</h5>
                        <h1 className="mt-3 font-medium">12.5%</h1>
                      </div>
                    </div>

                    <div className="w-full flex flex-row">
                      <div className="w-1/2 py-3 text-left">
                        <h5 className="text-gray-300 text-xs">Interest Rate</h5>
                        <h1 className="mt-3 font-medium">12.5%</h1>
                      </div>
                      <div className="w-1/2 py-3 text-left">
                        <h5 className="text-gray-300 text-xs">Interest Rate</h5>
                        <h1 className="mt-3 font-medium">12.5%</h1>
                      </div>
                    </div>
                  </div>

                  <img
                    className="w-1/2 group-savings-image rounded-sm"
                    src={savings.imageURL ? savings.imageURL : GroupSavingsIcon}
                    alt=""
                  />
                </div>

                <div className="w-full pt-2 pb-5 text-left wb-border-b">
                  <h5 className="text-gray-300 text-xs">Description</h5>
                  <p className="w-full mt-3 text-sm">
                    All notifications have been set to be automatically
                    dismissed after 5000ms. Notifications can be manually
                    dismissed by clicking or by swiping on mobile devices.
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
                  <span className="capitalize">{converter.toWords(6)}</span>{" "}
                  people have been added to this group and will be sent a mail
                  to confirm the agree
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <div
                  onClick={handleDecline}
                  className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                >
                  Decline
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
          ) : (
            <Fragment>
              <div className="flex flex-col items-center mb-0">
                <i className="w-20 mb-4">
                  <img src={CardIcon} alt="" />
                </i>
                <h1 className="text-2xl font-medium mb-2">Create Savings</h1>
                <p className="text-center text-gray-500 leading-normal">
                  As simple as investing your savings and we will help you grow
                  from there.
                </p>
              </div>

              <div className="flex flex-col items-center mt-8">
                <Loading text="Creating goal" />
              </div>
            </Fragment>
          )}
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => ({
  invitations: state.savings.pendingInvitationsEntities,
});

export default connect(mapStateToProps)(GroupInvitationActionModal);
