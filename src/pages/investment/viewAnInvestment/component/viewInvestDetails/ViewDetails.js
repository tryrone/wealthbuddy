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
              ? makeArray[0].contractCommissionRateType
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
              : null}
          </p>
        </div>

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">Tenure</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? makeArray[0].basis
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? makeArray[0].tenor
              : makeArray[0].duration}{" "}
            days
          </p>
        </div>

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">Returns</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? makeArray[0].interestRate
              : makeArray[0].portPercentage}{" "}
            %
          </p>
        </div>

        {/* item */}
        {/* <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Minimun Deposit
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            N10,000
          </p>
        </div> */}
      </div>

      {/* second part */}
      {/* second part */}
      <div
        style={{
          border: "1px solid #F1F1F1",
        }}
        className="card p-2 sm:p-4 flex flex-col w-auto rounded mt-4"
      >
        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">Capital</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            N{" "}
            {formatCurrency(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? makeArray[0].valueAsAtDate.amount
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? makeArray[0].principalBalance.amount
                : makeArray[0].quantity
            )}
          </p>
        </div>

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Current Value
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            N{" "}
            {formatCurrency(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? makeArray[0].valueAsAtDate.amount
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? makeArray[0].principalBalance.amount
                : makeArray[0].quantity
            )}
          </p>
        </div>
        {/* item */}

        {/* item */}
        <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">Interests</p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {Math.sign(
              setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                ? makeArray[0].interestRate
                : makeArray[0].portPercentage
            )}
          </p>
        </div>
        {/* item */}

        {/* item */}
        {/* <div className="flex flex-row mt-8 content-center justify-between items-center">
          <p className="font-bold text-black text-base sm:text-sm">
            Maturity Date
          </p>
          <p className="font-hairline text-right text-black text-base sm:text-sm">
            {details.maturityYears}
          </p>
        </div> */}
        {/* item */}
      </div>

      {/* second part */}
      {/* second part */}
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
