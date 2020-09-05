import React from "react";
import { arrowIcon } from "assets/exports";
import { getHumanDate } from "utilities";
import personalSavings from "assets/img/personalIcon.png";
import fixedSavings from "assets/img/fixedIcon.png";
import groupSavings from "assets/img/groupIcon.png";
import fixedFlexSavings from "assets/img/fixedFlex.png";
import { Link } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "toasted-notes/src/styles.css";
import { connect } from "react-redux";
import { formatCurrency } from "utils";
import classNames from "classnames";

const MainDetails = ({
  savings,
  startCancelSavings,
  startCancelLoading,
  startWithdrawSavings,
}) => {
  const progressPercentage = (savings.amountSaved / savings.amountToSave) * 100;
  const dateStatus = new Date(savings.estimatedTerminationDate) > new Date();

  const savingsIcon = () => {
    switch (savings) {
      case 1:
        return personalSavings;
      case 2:
        return fixedSavings;
      case 3:
        return fixedFlexSavings;
      default:
        return groupSavings;
    }
  };

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
            <img src={savingsIcon()} alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center card-margin--x pb-14">
          <div className=" flex flex-col justify-center items-center items-center w-full">
            <div className="image-saving--summary">
              {savings.imageURL !== "" ? (
                <img src={savings.imageURL} alt="" />
              ) : (
                <img src={savingsIcon()} alt="" />
              )}
            </div>
            <div className="text-savings--summary w-full flex align-items-center">
              <div className="left-tran--summary w-full flex flex-col justify-center align-items-center">
                <div className="flex justify-center text-center align-items-center">
                  <div className="flex flex-col justify-center">
                    <p className="savings-inner--title font-medium text-gray-300">
                      {`${savings.name}`}
                    </p>
                    <h1 className="mt-3 mb-4 text-4xl font-medium">
                      {`₦${formatCurrency(savings.amountToSave)}`}
                    </h1>
                    <p className="savings-inner--title font-medium color-black mb-4">{`${
                      savings.savingsType === 1
                        ? "Personal Target Savings"
                        : savings.savingsType === 2
                        ? "Fixed Lock Savings"
                        : savings.savingsType === 3
                        ? "Fixed Flexible Savings"
                        : "Group Savings"
                    }`}</p>
                  </div>
                </div>
                <div className="summary-progress w-full">
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
          </div>
          <div className="nav-buttons flex justify-center">
            {savings.savingsType !== 2 && (
              <div
                className={classNames({
                  "w-40 border-b text-center bg-white cta-del leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm": true,
                  loading: startCancelLoading,
                })}
                onClick={savings.savingsType !== 2 && startCancelSavings}
              >
                Cancel <span className="loader" />
              </div>
            )}
            {savings.savingsType !== 2 ? (
              <button
                className={`w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm ${
                  savings.amountSaved === 0 ? "opaque" : ""
                }`}
                onClick={
                  savings.amountSaved === 0 ? null : startWithdrawSavings
                }
              >
                Withdraw
              </button>
            ) : (
              <button
                className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm ${
                  savings.amountSaved === 0 || dateStatus ? "opaque" : ""
                }`}
                onClick={
                  savings.amountSaved === 0 || dateStatus
                    ? null
                    : startWithdrawSavings
                }
              >
                Withdraw
              </button>
            )}
          </div>
        </div>

        <div className="view-summary--items card-margin--x px-0 flex-wrap top-inner--summary">
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Contribution
            </h5>
            <h1 className="mt-3 font-medium">{`₦${formatCurrency(
              savings.installmentalContribution
            )}/${
              savings.schedule === 2
                ? "Week"
                : savings.schedule === 3
                ? "Month"
                : "Day"
            }`}</h1>
          </div>
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Interest Rate
            </h5>
            <h1 className="mt-3 font-medium">{`${
              savings.interestRate === 0 ? "N/A" : savings.interestRate + "%"
            }`}</h1>
          </div>
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Start Date
            </h5>
            <h1 className=" mt-3 font-medium">
              {getHumanDate(savings.startDate)}
            </h1>
          </div>
        </div>

        <div className="view-summary--items card-margin--x px-0 flex-wrap no-border--bottom">
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Maturity Date
            </h5>
            <h1 className="mt-3 font-medium">{`${getHumanDate(
              savings.estimatedTerminationDate
            )}`}</h1>
          </div>
          {savings.interestRate !== 0 && (
            <div className="savings-inner--item">
              <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                Interest Earned
              </h5>
              <h1 className="mt-3 font-medium color-primary">{`₦${formatCurrency(
                savings.totalInterestEarned
              )}`}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
  startCancelLoading: state.savings.startCancelLoading,
});

export default connect(mapStateToProps)(MainDetails);
