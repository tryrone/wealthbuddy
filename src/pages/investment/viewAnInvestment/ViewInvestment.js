import React from "react";
import ViewCard from "./component/viewCard/ViewCard";
import { bulb } from "../imageLinks";
import TransactionHistory from "./component/transactionHistory/TransactionHistory";
import { connect, useDispatch } from "react-redux";
import ViewDetails from "./component/viewInvestDetails/ViewDetails";
import { Link, Redirect } from "react-router-dom";

const ViewInvestment = (props) => {
  const specificData = props.allPersonalInvestmentsData.filter(
    (item) => props.location.investmentId == item.securityId
  );

  if (!props.location.investmentId) {
    return <Redirect to="/dashboard/investment" />;
  }
  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row justify-between content-center sm:w-2/6 items-center  mb-10 ">
        <p style={{ color: "#999999" }} className="text-xs ">
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs ">
          {" "}
          {">>"}{" "}
        </p>
        <p className="text-sm text-black">{specificData[0].companyName}</p>
      </div>

      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">
        {specificData[0].companyName}
      </p>
      {/* heading end */}

      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        {/* left part */}
        <div className="flex flex-col w-full mr-5">
          <ViewCard investmentId={specificData[0].securityId} />

          {/* roll over card */}
          <div
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
          {/* roll over card */}
          <div>
            <ViewDetails details={specificData[0]} />
          </div>
        </div>
        {/* left part */}

        {/* right part */}
        <TransactionHistory data={specificData[0].assetClass} />
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
});

export default connect(mapStateToProps)(ViewInvestment);
