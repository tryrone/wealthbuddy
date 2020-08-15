import React, { useEffect } from "react";
import TotalCard from "./components/totalCard/TotalCard";
import TransactHistory from "./components/transactHistory/TransactHistory";
import { connect, useDispatch } from "react-redux";
import {
  getAllInvetstmentTransactions,
  getInvestmentTransactionsForFund,
} from "../../state/slices/investments";
import MyInvestment from "./components/myInvestment/MyInvestment";
import Loading from "shared-components/Loading";
import { Redirect } from "react-router-dom";

const InvestHome = ({ getAllInvetstmentTransactionsLoading, isEmpty }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllInvetstmentTransactions());
    dispatch(getInvestmentTransactionsForFund());
  }, []);

  return getAllInvetstmentTransactionsLoading ? (
    <div className="px-12 flex justify-center content-center items-center">
      <Loading text="Loading" />
    </div>
  ) : (
    <div className="px-12">
      {/* <p className="text-black mb-4 text-base">Hello, John Word</p> */}
      <div className="md:flex md:flex-shrink-0 savings-home--wrap  justify-between fadeIn">
        <div className="flex flex-col w-full mr-5">
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
  getAllInvetstmentTransactionsLoading:
    state.investments.getAllInvetstmentTransactionsLoading,
  getAllInvetstmentTransactionsError:
    state.investments.getAllInvetstmentTransactionsError,
  getAllInvetstmentTransactionsData:
    state.investments.getAllInvetstmentTransactionsData,
  isEmpty: state.investments.getAllInvetstmentTransactionsisEmpty,
});

export default connect(mapStateToProps)(InvestHome);

// !isEmpty ? (
//   <Redirect to="/dashboard/investment/add-investment" />
// ) :
