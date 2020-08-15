import React, { useState } from "react";
import Chart from "../Chart";
import moment from "moment";
import { connect } from "react-redux";
import { investBars } from "../../imageLinks";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";

const TransactHistory = (props) => {
  // const [myHeight, setHeight] = useState(400);

  const naira = "₦";
  const dollar = "$";

  const properTransactions = props.getAllInvetstmentTransactionsData;

  return props.getAllInvetstmentTransactionsLoading ? (
    <div className="px-12 flex justify-center content-center items-center">
      <Loading text="Loading" />
    </div>
  ) : (
    <div
      style={{
        border: "1px solid #F1F1F1",
        borderRadius: "2px",
      }}
      className="card w-full bg-white border px-8 py-5 scrollbar-container ps"
    >
      <div className="flex justify-center content-center items-center">
        <p className="text-xs font-bold text-teal-700">+324,442.88</p>
        <p style={{ color: "#999999" }} className="text-xs">
          today
        </p>
      </div>
      <Chart />
      <div className="flex flex-row mt-8 justify-between content-center overflow-y-scroll items-center">
        <p className="text-black text-base font-light">Transaction History</p>
        <p
          // onClick={() => {
          //   setHeight(600);
          // }}
          style={{ color: "#8CB13D" }}
          className="text-black text-base font-light cursor-pointer"
        >
          view all
        </p>
      </div>
      <div style={{ overflowY: "scroll" }}>
        {/* invest content */}
        {props.getAllInvetstmentTransactionsLoading ? (
          <Loading text="" />
        ) : (
          properTransactions.map((num, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-between content-center items-center mt-8"
              >
                <div className="flex flex-col sm:flex-row content-center items-center">
                  <img src={investBars} />

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
                    {num.currency === "NGN" ? naira : dollar}
                    {formatCurrency(num.transAmount)}
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
    </div>
  );
};
const mapStateToProps = (state) => ({
  // INVESTMENT TRANSACTION
  getAllInvetstmentTransactionsLoading:
    state.investments.getAllInvetstmentTransactionsLoading,
  getAllInvetstmentTransactionsError:
    state.investments.getAllInvetstmentTransactionsError,
  getAllInvetstmentTransactionsData:
    state.investments.getAllInvetstmentTransactionsData,
});

export default connect(mapStateToProps)(TransactHistory);
