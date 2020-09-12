import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import personalSavings from "assets/img/personalIcon.png";
import fixedSavings from "assets/img/fixedIcon.png";
import groupSavings from "assets/img/groupIcon.png";
import fixedFlexSavings from "assets/img/fixedFlex.png";
import { formatCurrency } from "utils";
import moment from "moment";
import { SavingsStatus, SavingsType } from "constants/enums";
import classNames from "classnames";
import "./styles.scss";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const SavingsListItem = ({ savings }) => {
  const progressPercentage = (savings.amountSaved / savings.amountToSave) * 100;
  const interestRate =
    savings.interestRate === 0 ? "N/A" : savings.interestRate + "%";
  const maturityDateReached =
    new Date() > new Date(savings.estimatedTerminationDate);

  const getIcon = (savings) => {
    switch (savings.savingsType) {
      case SavingsType.PersonalTargetSavings:
        return personalSavings;
      case SavingsType.FixedLockSavings:
        return fixedSavings;
      case SavingsType.FixedFlexibleSavings:
        return fixedFlexSavings;
      default:
        return groupSavings;
    }
  };

  return (
    <Link
      to={`/dashboard/savings/view/${savings.savingsID}`}
      className="flex flex-col card flex-summary white-card card-x--padding"
    >
      <div className="flex justify-between items-center card-margin--x">
        <div className=" flex justify-between items-center w-full">
          <div className="text-savings--summary w-full flex align-items-center">
            <div className="left-tran--summary w-full flex flex-col align-items-center">
              <div className="flex flex-row justify-between items-center">
                <div className="flex align-items-center">
                  <div className="trans-image">
                    <img src={getIcon(savings)} alt="" />
                  </div>
                  <p className="tran-single--title font-medium">
                    {savings.name}
                  </p>
                </div>
                {maturityDateReached && (
                  <span className="font-medium color-green ml-2">
                    {savings.status === SavingsStatus.Finished ? (
                      <FaCheckCircle />
                    ) : (
                      <FaExclamationCircle />
                    )}
                  </span>
                )}
              </div>
              <div className="summary-progress w-full">
                <div className="progress">
                  <div
                    className={classNames({
                      "progress-meter": true,
                      "progress-meter-green": progressPercentage >= 100,
                    })}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <div className="flex justify-between">
                  <h6 className="font-medium color-active text-sm">
                    {`${formatCurrency(progressPercentage)}%`}
                  </h6>
                  <h6 className="font-medium text-sm">
                    {`₦${formatCurrency(savings.amountToSave)}`}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="image-saving--summary">
            {savings.imageURL !== "" ? (
              <img src={savings.imageURL} alt="" />
            ) : (
              <img src={getIcon(savings)} alt="" />
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center card-margin--x mini-summary">
        <div className="text-black flex">
          <div>
            {savings.savingsType !== 1 ? (
              <Fragment>
                <h5 className="text-xs mb-2">Total Saved</h5>
                <h2 className="summary-balance font-medium">
                  {`₦${formatCurrency(savings.amountSaved)}`}
                </h2>
              </Fragment>
            ) : (
              <Fragment>
                <h5 className="text-xs mb-2">Contribution</h5>
                <h2 className="summary-balance font-medium">{`₦${formatCurrency(
                  savings.installmentalContribution
                )}/${
                  savings.schedule === 2
                    ? "Week"
                    : savings.schedule === 3
                    ? "Month"
                    : "Day"
                }`}</h2>
              </Fragment>
            )}
          </div>
        </div>
        <div className="text-black flex">
          <div>
            <h5 className="text-xs mb-2">Interest Rate</h5>
            <h2 className="summary-balance font-medium">{interestRate}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center card-margin--x mini-summary">
        <div className="text-black flex">
          <div>
            <h5 className="text-xs mb-2">Start Date</h5>
            {savings.savingsType === SavingsType.PersonalTargetSavings ||
            savings.savingsType === SavingsType.FixedLockSavings ||
            savings.savingsType === SavingsType.FixedFlexibleSavings ? (
              <h2 className="summary-balance font-medium">
                {moment(savings.startDate).format("MMM Do YYYY")}
              </h2>
            ) : (
              <h2 className="summary-balance font-medium">
                {savings.status !== SavingsStatus.Pending
                  ? moment(savings.startDate).format("MMM Do YYYY")
                  : "N/A"}
              </h2>
            )}
          </div>
        </div>
        <div className="text-black flex">
          <div>
            <h5 className="text-xs mb-2">Maturity Date</h5>
            {savings.savingsType === SavingsType.PersonalTargetSavings ||
            savings.savingsType === SavingsType.FixedLockSavings ||
            savings.savingsType === SavingsType.FixedFlexibleSavings ? (
              <h2 className="summary-balance font-medium">
                {moment(savings.estimatedTerminationDate).format("MMM Do YYYY")}
              </h2>
            ) : (
              <h2 className="summary-balance font-medium">
                {savings.status !== SavingsStatus.Pending
                  ? moment(savings.estimatedTerminationDate).format(
                      "MMM Do YYYY"
                    )
                  : "N/A"}
              </h2>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SavingsListItem;
