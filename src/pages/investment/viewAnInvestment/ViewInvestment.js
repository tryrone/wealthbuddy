import React from "react";
import ViewCard from "./component/viewCard/ViewCard";
import { bulb } from "../imageLinks";
import TransactionHistory from "./component/transactionHistory/TransactionHistory";
import { connect, useDispatch } from "react-redux";
import ViewDetails from "./component/viewInvestDetails/ViewDetails";
import { Link, Redirect, useHistory } from "react-router-dom";

const ViewInvestment = (props) => {
  //RELOAD HANDLER
  const history = useHistory();

  if (!props.location.investmentId) {
    return <Redirect to="/dashboard/investment" />;
  }

  const setInvestmentTypeOne = props.investmentValuationData.fixedDeposits.filter(
    (item) => item.instrumentId == props.location.fixedId
  );
  const setInvestmentTypeTwo = props.investmentValuationData.portfolioHoldings.filter(
    (item) => item.securityId == props.location.investmentId
  );
  const setInvestmentTypeThree = props.investmentValuationData.treasuryBills.filter(
    (item) => item.id == props.location.tBillId
  );

  let makeArray = [];

  if (setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0) {
    makeArray = setInvestmentTypeThree;
  } else if (
    setInvestmentTypeTwo.length == 0 &&
    setInvestmentTypeThree.length == 0
  ) {
    makeArray = setInvestmentTypeOne;
  } else if (
    setInvestmentTypeOne.length == 0 &&
    setInvestmentTypeThree.length == 0
  ) {
    makeArray = setInvestmentTypeTwo;
  }

  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row content-center sm:w-6/12 items-center  mb-10 ">
        <p
          onClick={() => {
            return history.push("/dashboard/investment");
          }}
          style={{ color: "#999999" }}
          className="text-xs cursor-pointer"
        >
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs mx-4 ">
          {" "}
          {">>"}{" "}
        </p>
        <p className="text-sm text-black">
          {makeArray[0].companyName
            ? makeArray[0].companyName
            : makeArray[0].productLabel
            ? makeArray[0].productLabel
            : makeArray[0].typeLabel
            ? makeArray[0].typeLabel
            : null}
        </p>
      </div>

      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">
        {makeArray[0].companyName
          ? makeArray[0].companyName
          : makeArray[0].productLabel
          ? makeArray[0].productLabel
          : makeArray[0].typeLabel
          ? makeArray[0].typeLabel
          : null}
      </p>
      {/* heading end */}

      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        {/* left part */}
        <div className="flex flex-col w-full mr-5">
          {/* <ViewCard investmentId={specificData[0].securityId} /> */}
          <ViewCard
            investmentIdFixed={makeArray[0].instrumentId}
            investmentIdTbills={makeArray[0].typeId}
            investmentIdFunds={makeArray[0].securityId}
          />

          {/* roll over card */}
          {/* <div
            style={{ borderColor: "#8CB13D", backgroundColor: "#F9FFEB" }}
            className="flex flex-col sm:flex-row border border-solid px-6 py-4"
          >
            <img src={bulb} alt="" className="mr-4" />
            <div className="">
              <p className="text-xs">
                Your investments is now mature and you can now withdraw or
                rollover this investment plan
              </p>

              <Link
                to="/dashboard/investment/view-investment/roll-over"
                style={{ color: "#8CB13D" }}
                className="text-xs mt-4 font-bold"
              >
                Roll over this plan
              </Link>
            </div>
          </div>
           */}
          {/* roll over card */}
          <div>
            <ViewDetails
              investmentIdFixed={makeArray[0].instrumentId}
              investmentIdTbills={makeArray[0].typeId}
              investmentIdFunds={makeArray[0].securityId}
            />
            {/* <ViewDetails details={specificData[0]} /> */}
          </div>
        </div>
        {/* left part */}

        {/* right part */}
        <TransactionHistory />
        {/* right part */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  // ALL PERSONAL INVESTMENT DATA
  allPersonalInvestmentsData: state.investments.allPersonalInvestmentsData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  allPersonalInvestmentsError: state.investments.allPersonalInvestmentsError,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
  getAllInvestmentsLoading: state.investments.getAllInvestmentsLoading,
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
});

export default connect(mapStateToProps)(ViewInvestment);
