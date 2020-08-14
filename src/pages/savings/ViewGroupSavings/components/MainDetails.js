import React from "react";
import { arrowIcon } from "assets/exports";
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
import moment from "moment";

const Member = ({ email }) => (
  <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row justify-between align-items-center my-2 pr-5">
    <div className="flex flex-grow w-2/3">
      <div className="flex-initial text-gray-700 text-center text-sm bg-teal-100 rounded-full p-3 mr-2">
        {email.toString().substring(0, 2).toUpperCase()}
      </div>
      <div className="flex-initial text-gray-300 text-left font-semi-bold text-sm py-3 mr-2 w-10/12 truncate">
        {email}
      </div>
    </div>
    <div className="flex flex-col justify-center">
      <span className="bg-teal-300 text-gray-700 text-sm text-center text-xs rounded-full">
        Accepted
      </span>
      {/*<span className="bg-yellow-300 text-gray-700 text-sm text-center text-xs rounded-full">*/}
      {/*  Pending*/}
      {/*</span>*/}
      {/*<span className="bg-red-300 text-gray-700 text-sm text-center text-xs rounded-full">*/}
      {/*  Declined*/}
      {/*</span>*/}
    </div>
  </div>
);

const MemberProgress = ({ name }) => (
  <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row justify-between align-items-center my-2 pr-5">
    <div className="flex flex-grow w-2/3">
      <div className="flex-initial text-gray-700 text-center text-sm bg-teal-100 rounded-full p-3 mr-2">
        {name.toString().substring(0, 2).toUpperCase()}
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between text-gray-300">
          <div className="text-left font-semi-bold text-sm py-1 mr-2 w-10/12 truncate">
            {name}
          </div>
          <div className="text-left text-sm py-1">30%</div>
        </div>
        <div className="progress">
          <div className="progress-meter" style={{ width: `${46}%` }} />
        </div>
      </div>
    </div>
  </div>
);

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
                      Group Challenge Savings
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <div className="progress">
                    <div
                      className="progress-meter"
                      style={{ width: `${progressPercentage || 46}%` }}
                    />
                  </div>
                  <div className="flex justify-between mt-3">
                    <p className="text-gray-300">
                      {`${formatCurrency(progressPercentage || 46)}% achieved`}
                    </p>
                    <p className="color-black">
                      {`₦${formatCurrency(savings.amountSaved)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                className="rounded-sm mt-5"
                src={savings.imageURL ? savings.imageURL : savingsIcon()}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="w-1/2 mr-5">
            <div className="w-full p-5 text-left">
              <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                Description
              </h5>
              <h1 className="text-black text-sm mt-3">
                If you need to cancel a thunk before the payload creator is
                called, you may provide a condition callback as an option after
                the payload creator.
              </h1>
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
                  savings.schedule === 2
                    ? "Week"
                    : savings.schedule === 3
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
                <Member email="abdulmatin.i.sanni@gmail.com" />
                <Member email="legendofsanni@gmail.com" />
                <Member email="abdulmatin.i.sanni@gmail.com" />
                <Member email="legendofsanni@gmail.com" />
                <Member email="abdulmatin.i.sanni@gmail.com" />
                <Member email="legendofsanni@gmail.com" />
                <MemberProgress name="Moshood Abiola" />
                <MemberProgress name="Olalekan Sanni" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center card-margin--x pb-14 mt-10">
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
              onClick={savings.amountSaved === 0 ? null : startWithdrawSavings}
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerSavings: state.customerSavings.data,
  startCancelLoading: state.savings.startCancelLoading,
});

export default connect(mapStateToProps)(MainDetails);
