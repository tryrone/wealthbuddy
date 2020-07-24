import React from "react";
import { arrowIcon } from "assets/exports";
import { formatMoney, getHumanDate } from "utilities";
import personalSavings from "assets/img/personalIcon.png";
import fixedSavings from "assets/img/fixedIcon.png";
import groupSavings from "assets/img/groupIcon.png";
import fixedFlexSavings from "assets/img/fixedFlex.png";
import { Link, useParams } from "react-router-dom";
import "react-perfect-scrollbar/dist/css/styles.css";
import "toasted-notes/src/styles.css";
import { connect } from "react-redux";
import { formatCurrency } from "utils";

const MainDetails = ({ customerSavings }) => {
  const { savingsId } = useParams();

  const getSingleItemArray = customerSavings.find(
    (savingsItem) => savingsItem.savingsID === savingsId
  );

  const progressPercentage =
    (getSingleItemArray.amountSaved / getSingleItemArray.amountToSave) * 100;

  const dateStatus =
    new Date(getSingleItemArray.estimatedTerminationDate) > new Date();

  const savingsIcon = () => {
    switch (getSingleItemArray) {
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

  const cancel = () => null;
  const proceed = () => null;

  // const proceed = () => {
  //     dispatch({
  //         type: "CHANGE_WITHDRAW_SAVINGS",
  //         newPayload: {
  //             ...withdrawSavings,
  //             type: getSingleItemArray.savingsType,
  //             modal: true,
  //             id: savingsId,
  //             name: getSingleItemArray.name,
  //             balance: getSingleItemArray.amountSaved
  //         }
  //     });
  // }

  // const cancel = async (e) => {
  //     e.target.classList.add("loading");
  //     let url;
  //     if (getSingleItemArray.savingsType === 1) {
  //         url = urls.startCancelPersonalSavings
  //     }
  //     else if (getSingleItemArray.savingsType === 3) {
  //         url = urls.startCancelFixedFlexibleSavings
  //     }
  //     else if (getSingleItemArray.savingsType === 2) {
  //         url = urls.startCancelFixedLockSavings
  //     }
  //     else {
  //         url = urls.startCancelPersonalSavings
  //     }

  //     setTimeout(async () => {
  //         const data = {
  //             savingsID: getSingleItemArray.savingsID
  //         }
  //         const finalData = JSON.stringify(data);
  //         const response = await postCall(url, finalData);

  //         if (response === "Token Expired") {
  //             forceLogout()
  //         }
  //         else if (response !== false && typeof response !== "undefined" && response.data.status === true) {
  //             dispatch({
  //                 type: "CHANGE_CANCEL_SAVINGS",
  //                 newPayload: {
  //                     id: getSingleItemArray.savingsID,
  //                     modal: true,
  //                     amount: response.data.data.amountToDisburse,
  //                     type: getSingleItemArray.savingsType
  //                 }
  //             });
  //         }
  //         else {
  //             toaster.notify(response.data.message, {
  //                 position: "bottom",
  //                 duration: null
  //             });
  //         }
  //         Array.from(document.querySelectorAll(".loading")).forEach(
  //             element => {
  //                 element.classList.remove("loading")
  //             }
  //         );
  //     }, 1000);
  // }

  const savings = [1, 2, 3];

  const state = {
    status: true,
  };

  const finalArray = [1, 1];
  const transactions = [1, 1, 1];

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
              {getSingleItemArray.imageURL !== "" ? (
                <img src={getSingleItemArray.imageURL} alt="" />
              ) : (
                <img src={savingsIcon()} alt="" />
              )}
            </div>
            <div className="text-savings--summary w-full flex align-items-center">
              <div className="left-tran--summary w-full flex flex-col justify-center align-items-center">
                <div className="flex justify-center text-center align-items-center">
                  <div className="flex flex-col justify-center">
                    <p className="savings-inner--title font-medium text-gray-300">
                      {`${getSingleItemArray.name}`}
                    </p>
                    <h1 className="mt-3 mb-4 text-4xl font-medium">
                      {`₦${formatCurrency(getSingleItemArray.amountToSave)}`}
                    </h1>
                    <p className="savings-inner--title font-medium color-black mb-4">{`${
                      getSingleItemArray.savingsType === 1
                        ? "Personal Target Savings"
                        : getSingleItemArray.savingsType === 2
                        ? "Fixed Lock Savings"
                        : getSingleItemArray.savingsType === 3
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
                      {`₦${formatCurrency(getSingleItemArray.amountSaved)}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-buttons flex justify-center">
            {getSingleItemArray.savingsType !== 2 && (
              <div
                className={`w-40  border-b text-center bg-white cta-del leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm`}
                onClick={getSingleItemArray.savingsType !== 2 && cancel}
              >
                Cancel <span className="loader" />
              </div>
            )}
            {getSingleItemArray.savingsType !== 2 ? (
              <button
                className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm ${
                  getSingleItemArray.amountSaved === 0 ? "opaque" : ""
                }`}
                onClick={getSingleItemArray.amountSaved === 0 ? null : proceed}
              >
                Withdraw
              </button>
            ) : (
              <button
                className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta cta-black text-white rounded-sm ${
                  getSingleItemArray.amountSaved === 0 || dateStatus
                    ? "opaque"
                    : ""
                }`}
                onClick={
                  getSingleItemArray.amountSaved === 0 || dateStatus
                    ? null
                    : proceed
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
            <h1 className="mt-3 font-medium">{`₦${formatMoney(
              getSingleItemArray.installmentalContribution
            )}/${
              getSingleItemArray.schedule === 2
                ? "Week"
                : getSingleItemArray.schedule === 3
                ? "Month"
                : "Day"
            }`}</h1>
          </div>
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Interest Rate
            </h5>
            <h1 className="mt-3 font-medium">{`${
              getSingleItemArray.interestRate === 0
                ? "N/A"
                : getSingleItemArray.interestRate + "%"
            }`}</h1>
          </div>
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Start Date
            </h5>
            <h1 className=" mt-3 font-medium">
              {getHumanDate(getSingleItemArray.startDate)}
            </h1>
          </div>
        </div>

        <div className="view-summary--items card-margin--x px-0 flex-wrap no-border--bottom">
          <div className="savings-inner--item">
            <h5 className="savings-inner--subtitle text-gray-300 text-xs">
              Maturity Date
            </h5>
            <h1 className="mt-3 font-medium">{`${getHumanDate(
              getSingleItemArray.estimatedTerminationDate
            )}`}</h1>
          </div>
          {getSingleItemArray.interestRate !== 0 && (
            <div className="savings-inner--item">
              <h5 className="savings-inner--subtitle text-gray-300 text-xs">
                Interest Earned
              </h5>
              <h1 className="mt-3 font-medium color-primary">{`₦${formatMoney(
                getSingleItemArray.totalInterestEarned
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
});

export default connect(mapStateToProps)(MainDetails);
