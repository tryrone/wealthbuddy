import React, { useEffect } from "react";
import Chart from "../../../components/Chart";
import { connect, useDispatch } from "react-redux";
import { investBars } from "../../../imageLinks";
import moment from "moment";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";

const TransactionHistory = (props) => {
  const dispatch = useDispatch();

  //   useEffect(() => {

  //   }, []);
  //   const numbers = [1, 1, 1, 1, 1, 1];

  return (
    <div
      style={{ border: "1px solid #F1F1F1", borderRadius: "2px" }}
      className="card mt-6 w-full bg-white border px-8 py-5 scrollbar-container ps"
    >
      <div className="flex justify-center content-center items-center">
        <p className="text-xs font-bold text-teal-700">+324,442.88</p>
        <p style={{ color: "#999999" }} className="text-xs">
          today
        </p>
      </div>
      <Chart />
      <div className="flex flex-row mt-8 justify-between content-center items-center">
        <p className="text-black text-base font-light">Transaction History</p>
        <p
          style={{ color: "#8CB13D" }}
          className="text-black text-base font-light"
        >
          view all
        </p>
      </div>

      {/* invest content */}

      {props.investmentTransactionsForFundsLoading ? (
        <Loading />
      ) : (
        props.investmentTransactionsForFundsData.map((num) => {
          return (
            <div
              key={num}
              className="flex flex-row justify-between content-center items-center mt-8"
            >
              <div className="flex flex-col sm:flex-row content-center items-center">
                <img src={investBars} alt="" />

                <div className="ml-5 mt-4 sm:mt-0">
                  <p className="text-black text-xl font-light">
                    {num.fundName}
                  </p>
                  <p style={{ color: "#999999" }} className="text-sm mt-2">
                    {num.description}
                  </p>
                </div>
              </div>

              <div className="mt-10 sm:mt-0">
                <p className="text-black font-bold font-light">
                  N{formatCurrency(num.transAmount)}
                </p>
                <p style={{ color: "#999999" }} className="text-sm mt-2">
                  {/* {moment(num.orderDate).format("MMM DD YYYY")} */}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // ALL PERSONAL INVESTMENT DATA
  investmentTransactionsForFundsData:
    state.investments.investmentTransactionsForFundsData,
  investmentTransactionsForFundsLoading:
    state.investments.investmentTransactionsForFundsLoading,
  investmentTransactionsForFundsError:
    state.investments.investmentTransactionsForFundsError,
});

export default connect(mapStateToProps)(TransactionHistory);
