import React, { useEffect } from "react";
import TotalCard from "./components/totalCard/TotalCard";
import TransactHistory from "./components/transactHistory/TransactHistory";
import { connect, useDispatch } from "react-redux";
import {
  getInvestmentTransactionsForFund,
  getAllInvestments,
  investmentValuationData,
  getAllFixedTransactions,
  getAllTbillsTransactions,
} from "../../state/slices/investments";
import MyInvestment from "./components/myInvestment/MyInvestment";
import Loading from "shared-components/Loading";
import { Redirect } from "react-router-dom";
import "./style.css";

const InvestHome = ({
  investmentTransactionsForFundsLoading,
  investmentValuationLoading,
  getAllInvestmentsData,
  investmentValuationData,
  allTbillsTrasactionsData,
  allFixedTrasactionsData,
  isEmpty,
  investmentTransactionsForFundsData,
}) => {
  const dispatch = useDispatch();
  const tegaSum = Object.keys(investmentValuationData).length;
  useEffect(() => {
    if (tegaSum === 0) {
      dispatch(getInvestmentTransactionsForFund());
      dispatch(getAllInvestments());
      dispatch(getAllTbillsTransactions());
      dispatch(getInvestmentTransactionsForFund());
      dispatch(getAllFixedTransactions());
    }

    // if (getAllInvestmentsData === 0) {
    //   dispatch(getAllInvestments());
    // }

    // if (allTbillsTrasactionsData.length === 0) {
    //   dispatch(getAllTbillsTransactions());
    // }

    // if (investmentTransactionsForFundsData === 0) {
    //   dispatch(getInvestmentTransactionsForFund());
    // }

    // if (allFixedTrasactionsData === 0) {
    //   dispatch(getAllFixedTransactions());
    // }
  }, []);

  return investmentValuationLoading ? (
    <div className="px-12 flex justify-center content-center items-center">
      <Loading text="Loading" />
    </div>
  ) : (
    <div className="px-12">
      {/* <p className="text-black mb-4 text-base">Hello, John Word</p> */}
      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        <div className="flex flex-col w-full mr-5 overflow-y-scroll hide-scroll overscroll-contain h-screen">
          <TotalCard />
          <p className="text-black mb-4 text-base">My Investment</p>
          <div className="has-scrollbar">
            <MyInvestment />
          </div>
        </div>
        <TransactHistory />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  investmentValuationLoading: state.investments.investmentValuationLoading,
  investmentValuationData: state.investments.investmentValuationData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  getAllInvetstmentTransactionsLoading:
    state.investments.getAllInvetstmentTransactionsLoading,
  investmentTransactionsForFundsLoading:
    state.investments.investmentTransactionsForFundsLoading,
  investmentTransactionsForFundsData:
    state.investments.investmentTransactionsForFundsData,
  isEmpty: state.investments.getAllInvetstmentTransactionsisEmpty,
  allTbillsTrasactionsData: state.investments.allTbillsTrasactionsData,
  allFixedTrasactionsData: state.investments.allFixedTrasactionsData,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
});

export default connect(mapStateToProps)(InvestHome);

// !isEmpty ? (
//   <Redirect to="/dashboard/investment/add-investment" />
// ) :
