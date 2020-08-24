import React, { useEffect } from "react";
import { corn, catfish, dogs, addBtn } from "../../imageLinks";
import { allPersonalInvestments } from "../../../../state/slices/investments";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";

const MyInvestment = (props) => {
  return props.investmentValuationLoading ? null : (
    <div className="flex flex-row flex-wrap  scroll-container ps">
      <Link to={`/dashboard/investment/add-investment`}>
        <div
          style={{
            border: "1px solid #F1F1F1",
            borderRadius: "2px",
            padding: "43px 61px",
          }}
          className="card  flex mr-3 justify-center content-center items-center flex-col"
        >
          <img src={addBtn} />
          <p className="text-sm text-black mt-3 text-center">Add Investment</p>
        </div>
      </Link>
      {!props.investmentValuationData.portfolioHoldings
        ? null
        : props.investmentValuationData.portfolioHoldings.map((item, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: "/dashboard/investment/view-investment",
                  investmentId: item.securityId,
                }}
                style={{ border: " 1px solid #F1F1F1", borderRadius: "2px" }}
                className="card px-4 py-4  flex mr-4 flex-col"
              >
                <div className="flex flex-row content-center items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                    alt=""
                    className="rounded-sm"
                    style={{ height: "78.41px", width: "90.71px" }}
                  />
                  <p
                    style={{ width: "100px" }}
                    className="text-black font-bold text-base ml-2 "
                  >
                    {item.companyName}
                  </p>
                </div>

                <div
                  style={{ borderTop: "1px solid #F1F1F1" }}
                  className="flex flex-row mt-2 pt-2 justify-between"
                >
                  <div>
                    <p className="text-black text-sm">Current Value</p>
                    <p className="text-black mt-1 font-bold text-base">
                      ₦{formatCurrency(item.currentValue.toFixed(2))}
                    </p>
                  </div>

                  <div>
                    <p className="text-black text-sm">Returns</p>
                    <p
                      style={{ color: "#8CB13D" }}
                      className="font-bold mt-1 text-right text-base"
                    >
                      {item.portPercentage.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

      {props.investmentValuationLoading
        ? null
        : !props.investmentValuationData.fixedDeposits
        ? null
        : props.investmentValuationData.fixedDeposits.map((item, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: "/dashboard/investment/view-investment",
                  investmentId: item.typeId,
                  fixedId: item.instrumentId,
                }}
                style={{ border: " 1px solid #F1F1F1", borderRadius: "2px" }}
                className="card px-4 py-4  flex mr-4 flex-col"
              >
                <div className="flex flex-row content-center items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                    alt=""
                    className="rounded-sm"
                    style={{ height: "78.41px", width: "90.71px" }}
                  />
                  <p
                    style={{ width: "100px" }}
                    className="text-black font-bold text-base ml-2 "
                  >
                    {item.productLabel}
                  </p>
                </div>

                <div
                  style={{ borderTop: "1px solid #F1F1F1" }}
                  className="flex flex-row mt-2 pt-2 justify-between"
                >
                  <div>
                    <p className="text-black text-sm">Current Value</p>
                    <p className="text-black mt-1 font-bold text-base">
                      ₦{" "}
                      {formatCurrency(
                        item.netInstrumentValue.amount.toFixed(2)
                      )}
                    </p>
                  </div>

                  <div>
                    <p className="text-black text-sm">Returns</p>
                    <p
                      style={{ color: "#8CB13D" }}
                      className="font-bold mt-1 text-right text-base"
                    >
                      {item.interestRate.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}

      {props.investmentValuationLoading
        ? null
        : !props.investmentValuationData.treasuryBills
        ? null
        : props.investmentValuationData.treasuryBills.map((item, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: "/dashboard/investment/view-investment",
                  investmentId: item.typeId,
                  tBillId: item.id,
                }}
                style={{ border: " 1px solid #F1F1F1", borderRadius: "2px" }}
                className="card px-4 py-4  flex mr-4 flex-col"
              >
                <div className="flex flex-row content-center items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                    alt=""
                    className="rounded-sm"
                    style={{ height: "78.41px", width: "90.71px" }}
                  />
                  <p
                    style={{ width: "100px" }}
                    className="text-black font-bold text-base ml-2 "
                  >
                    {item.typeLabel}
                  </p>
                </div>

                <div
                  style={{ borderTop: "1px solid #F1F1F1" }}
                  className="flex flex-row mt-2 pt-2 justify-between"
                >
                  <div>
                    <p className="text-black text-sm">Current Value</p>
                    <p className="text-black mt-1 font-bold text-base">
                      ₦ {formatCurrency(item.valueAsAtDate.amount.toFixed(2))}
                    </p>
                  </div>

                  <div>
                    <p className="text-black text-sm">Returns</p>
                    <p
                      style={{ color: "#8CB13D" }}
                      className="font-bold mt-1 text-right text-base"
                    >
                      {item.interestRate.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  // ALL PERSONAL INVESTMENT DATA
  allPersonalInvestmentsData: state.investments.allPersonalInvestmentsData,
  allPersonalInvestmentsLoading:
    state.investments.allPersonalInvestmentsLoading,
  allPersonalInvestmentsError: state.investments.allPersonalInvestmentsError,
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
});

export default connect(mapStateToProps)(MyInvestment);
