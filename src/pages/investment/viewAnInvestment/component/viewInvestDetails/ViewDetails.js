import React from "react";
import { formatCurrency } from "utils";
import moment from "moment";
import { connect } from "react-redux";

const ViewDetails = (props) => {
  const setInvestmentTypeOne = props.investmentValuationData.fixedDeposits.filter(
    (item) => item.instrumentId == props.investmentIdFixed
  );
  const setInvestmentTypeTwo = props.investmentValuationData.portfolioHoldings.filter(
    (item) => item.securityId == props.investmentIdFunds
  );
  const setInvestmentTypeThree = props.investmentValuationData.treasuryBills.filter(
    (item) => item.typeId == props.investmentIdTbills
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

  console.log(makeArray, "mobile new issues");
  return (
    <div>
      <div
        style={{
          border: "1px solid #F1F1F1",
        }}
        className="card p-2 sm:p-4 flex flex-col w-auto rounded mt-4"
      >
        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Asset Class
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? "TREASURY BILLS"
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? makeArray[0].productCategory
              : makeArray[0].assetClass}
          </p>
        </div>

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">Type</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? makeArray[0].type
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? makeArray[0].productLabel
              : makeArray[0].companyName}
          </p>
        </div>

        {/* item */}
        {/* {setInvestmentTypeTwo.length == 0 &&
        setInvestmentTypeThree.length == 0 ? null : (
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Symbol</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {setInvestmentTypeOne.length == 0 &&
              setInvestmentTypeTwo.length == 0
                ? makeArray[0].label.substring(0, 15)
                : makeArray[0].symbol}
            </p>
          </div>
        )} */}
        {/* item */}

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Purchase Cost
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            ₦{" "}
            {formatCurrency(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? makeArray[0].reportFaceValue.amount
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? makeArray[0].principalBalance.amount
                : makeArray[0].totalPurchaseCost
            )}
          </p>
        </div>
        {/* item */}

        {/* item */}
        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeThree.length == 0 ? (
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">
              Total Units
            </p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {makeArray[0].totalUnitsHeld}
            </p>
          </div>
        ) : null}
        {/* item */}

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Daily Return
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            ₦{" "}
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? makeArray[0].dailyIncome.amount.toFixed(1)
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? makeArray[0].dailyIncome.amount.toFixed(1)
              : makeArray[0].dailyIncome.toFixed(1)}
          </p>
        </div>
        {/* item */}

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Total Returns
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {`₦${formatCurrency(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? (
                    makeArray[0].reportCurrentValue.amount +
                    makeArray[0].interestAccrued.amount
                  ).toFixed(2)
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? (
                    makeArray[0].interestLessTaxes.amount +
                    makeArray[0].netInstrumentValue.amount
                  ).toFixed(2)
                : (
                    makeArray[0].totalGainLoss + makeArray[0].totalPurchaseCost
                  ).toFixed(2)
            )}`}
          </p>
        </div>
        {/* item */}

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">StartDate</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {moment(makeArray[0].startDate).format("DD MM YYYY")}
          </p>
        </div>
        {/* item */}

        {/* item */}
        {/* <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Date issued
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            17 Jun 2019
          </p>
        </div> */}
        {/* item */}

        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Maturity Date
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? moment(makeArray[0].valueDate).format("DD MM YYYY")
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? moment(makeArray[0].valuationDate).format("DD MM YYYY")
              : " N/A"}
          </p>
        </div>

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">Tenure</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? makeArray[0].basis + "days"
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? makeArray[0].tenor + "days"
              : "Open"}{" "}
          </p>
        </div>

        {/* <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Minimun Deposit
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            N10,000
          </p>
        </div> */}
        {/* item */}

        {/* item */}

        {/* item */}
        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeTwo.length == 0 ? (
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">
              Days Spent
            </p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {makeArray[0].daysSpent}
            </p>
          </div>
        ) : null}
        {/* item */}

        {/* item */}
        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeTwo.length == 0 ? (
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">
              Days Left
            </p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {makeArray[0].daysLeft}
            </p>
          </div>
        ) : null}
        {/* item */}

        {/* item */}
        {setInvestmentTypeOne.length == 0 &&
        setInvestmentTypeTwo.length == 0 ? (
          <div className="flex flex-row mt-8 content-center justify-between items-center">
            <p className="font-bold text-black text-base sm:text-sm">Rate</p>
            <p className="font-hairline text-right text-black text-base sm:text-sm">
              {makeArray[0].discountRate}
            </p>
          </div>
        ) : null}
        {/* item */}
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
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
});

export default connect(mapStateToProps)(ViewDetails);
