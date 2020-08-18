import React, { useEffect } from "react";
import TotalCard from "./components/totalCard/TotalCard";
import TransactHistory from "./components/transactHistory/TransactHistory";
import { connect, useDispatch } from "react-redux";
import {
  getInvestmentTransactionsForFund,
  getAllInvestments,
  getAllFixedTransactions,
  getAllTbillsTransactions,
} from "../../state/slices/investments";
import MyInvestment from "./components/myInvestment/MyInvestment";
import Loading from "shared-components/Loading";
import { Redirect } from "react-router-dom";

const InvestHome = ({ investmentTransactionsForFundsLoading, isEmpty }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInvestmentTransactionsForFund());
    dispatch(getAllInvestments());
    dispatch(getAllFixedTransactions());
    dispatch(getAllTbillsTransactions());
  }, []);

  return investmentTransactionsForFundsLoading ? (
    <div className="px-12 flex justify-center content-center items-center">
      <Loading text="Loading" />
    </div>
  ) : (
    <div className="px-12">
      {/* <p className="text-black mb-4 text-base">Hello, John Word</p> */}
      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        <div className="flex flex-col w-full mr-5 overflow-y-scroll overscroll-contain h-screen">
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
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  getAllInvetstmentTransactionsLoading:
    state.investments.getAllInvetstmentTransactionsLoading,
  investmentTransactionsForFundsLoading:
    state.investments.investmentTransactionsForFundsLoading,
  isEmpty: state.investments.getAllInvetstmentTransactionsisEmpty,
});

export default connect(mapStateToProps)(InvestHome);

// !isEmpty ? (
//   <Redirect to="/dashboard/investment/add-investment" />
// ) :
