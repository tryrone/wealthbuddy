import React from "react";
import { arrowIcon } from "assets/exports";
import GroupSavingsIcon from "assets/img/groupIcon.png";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "toasted-notes/src/styles.css";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import classNames from "classnames";
import moment from "moment";
import {
  SavingsFrequency,
  GroupSavingsStatus,
  SavingsType,
} from "constants/enums";
import InvitedMember from "./components/InvitedMember";
import Member from "./components/Member";
import "./styles.css";

const MainDetails = ({
  savings,
  groupMembers,
  invitations,
  isStartGroupSavingsLoading,
  startGroupSavings,
  confirmCancel,
  startWithdrawSavings,
}) => {
  const savingsTypeNames = {
    [SavingsType.GroupTargetSavings]: "Group target savings",
    [SavingsType.GroupChallengeSavings]: "Group challenge savings",
    [SavingsType.GroupContributorySavings]: "Group contributory savings",
  };

  if (savings.type === SavingsType.GroupContributorySavings) {
    groupMembers = groupMembers.slice().sort((a, b) => (a.order > b.order ? 1 : -1));
  }

  const progressPercentage = (savings.amountSaved / savings.amountToSave) * 100;

  const canBeCancelled =
    savings.isAdmin === true &&
    (savings.status === GroupSavingsStatus.Pending ||
      (savings.type !== SavingsType.GroupChallengeSavings &&
        savings.type !== SavingsType.GroupContributorySavings &&
        savings.status === GroupSavingsStatus.InProgress));

  const canBeWithdrawn =
    savings.type !== SavingsType.GroupContributorySavings &&
    savings.type !== SavingsType.GroupChallengeSavings &&
    savings.type === SavingsType.GroupTargetSavings &&
    savings.isAdmin === true &&
    new Date(savings.estimatedTerminationDate) > new Date() &&
    savings.amountSaved !== 0;

  const canBeStarted = savings.isAdmin === true;

  return (
    <div className="card card-padding min-card w-full flex flex-col justify-between">
      <div className="flex flex-col flex-summary white-card card-x--padding">
        <div className="savings-heading">
          <Link to="/dashboard/savings" className="back font-medium">
            <span
              className="back"
              dangerouslySetInnerHTML={{ __html: arrowIcon }}
            />
            Back
          </Link>
          <div className="trans-image">
            <img src={GroupSavingsIcon} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center card-margin--x">
          <div className="flex flex-row justify-center items-center items-center w-full">
            <div className="w-full flex align-items-center mr-5">
              <div className="w-full flex flex-col justify-center align-items-center">
                <div className="flex justify-start align-items-start">
                  <div className="flex flex-col justify-center">
                    <p className="savings-inner--title font-medium text-gray-300">
                      {`${savings.name}`}
                    </p>
                    <h1 className="mt-3 mb-4 text-4xl font-medium">
                      {`₦${formatCurrency(savings.amountToSave)}`}
                    </h1>
                    <p className="font-medium color-black mb-4">
                      {savingsTypeNames[savings.type] || "Savings"}
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="progress">
                    <div
                      className="progress-meter"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <p className="text-gray-300">
                      {`${formatCurrency(progressPercentage)}% achieved`}
                    </p>
                    <p className="color-black">
                      {`₦${formatCurrency(savings.amountSaved)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <img
              className="group-savings-image rounded-sm mt-5"
              src={savings.imageURL ? savings.imageURL : GroupSavingsIcon}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2 mr-5">
            <div className="w-full p-5 text-left">
              <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                Description
              </h5>
              <h1 className="text-black text-sm mt-3">{savings.description}</h1>
            </div>
          </div>
          <div className="w-1/2">
            <div className="view-summary--items card-margin--x px-0 flex-wrap no-border--bottom">
              <div className="w-1/2 p-5 text-left">
                <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                  Contribution
                </h5>
                <h1 className="mt-3 font-medium">{`₦${formatCurrency(
                  savings.installmentalContribution
                )}/${
                  savings.schedule === SavingsFrequency.Weekly
                    ? "Week"
                    : savings.schedule === SavingsFrequency.Monthly
                    ? "Month"
                    : "Day"
                }`}</h1>
              </div>
              <div className="w-1/2 p-5 text-left">
                <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                  Interest Rate
                </h5>
                <h1 className="mt-3 font-medium">{`${
                  savings.interestRate === 0
                    ? "N/A"
                    : savings.interestRate + "%"
                }`}</h1>
              </div>
            </div>

            <div className="view-summary--items card-margin--x px-0 flex-wrap no-border--bottom">
              <div className="w-1/2 p-5 text-left">
                <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                  Start Date
                </h5>
                <h1 className=" mt-3 font-medium">
                  {moment(savings.startDate).format("MMM Do YYYY")}
                </h1>
              </div>
              <div className="w-1/2 p-5 text-left">
                <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                  Maturity Date
                </h5>
                <h1 className="mt-3 font-medium">
                  {moment(savings.estimatedTerminationDate).format(
                    "MMM Do YYYY"
                  )}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-full mr-5">
            <div className="w-full p-5 text-left">
              <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                Group members
              </h5>
              <div className="flex flex-row flex-wrap mt-3">
                {savings.status === GroupSavingsStatus.Pending
                  ? invitations.map((member, index) => (
                      <InvitedMember key={index} member={member} />
                    ))
                  : groupMembers.map((member, index) => (
                      <Member key={index} member={member} />
                    ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center card-margin--x pb-14 mt-10">
          <div
            className={classNames({
              "w-40 border-b text-center bg-white cta-del leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm": true,
              opaque: !canBeCancelled,
            })}
            onClick={canBeCancelled ? confirmCancel : null}
          >
            Cancel <span className="loader" />
          </div>

          {savings.status === GroupSavingsStatus.Pending ? (
            <button
              className={classNames({
                "w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-green text-white rounded-sm": true,
                loading: isStartGroupSavingsLoading,
                opaque: !canBeStarted,
              })}
              onClick={canBeStarted ? startGroupSavings : null}
            >
              Start <span className="loader" />
            </button>
          ) : (
            <button
              className={classNames({
                "w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm": true,
                opaque: !canBeWithdrawn,
              })}
              onClick={canBeWithdrawn ? startWithdrawSavings : null}
            >
              Withdraw
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
});

export default connect(mapStateToProps)(MainDetails);
