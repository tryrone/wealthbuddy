import React, { useState, Fragment } from "react";
import { partTerm, fullterm, information } from "../imageLinks";
import TerminateModal from "../components/terminateModal/TerminateModal";
import { Link, Redirect, useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import moment from "moment";
import { formatCurrency } from "utils";

const TerminateInvestment = (props) => {
  const [modal, changeModal] = useState(false);
  const [amount, setAmount] = useState(null);
  const [selectOne, changeSelectOne] = useState(false);
  const [selectTwo, changeSelectTwo] = useState(false);
  const [displayOne, changeDisplayOne] = useState(true);
  const [userDescp, setUserDescp] = useState("");
  // const [despError, setDespError] = useState(false);

  const history = useHistory();

  // ON MODAL CLOSE
  const onclose = (val) => {
    changeModal(val);
    // return document.location.reload(true);
  };

  if (!props.location.investmentId) {
    return <Redirect to="/dashboard/investment" />;
  }

  const setInvestmentTypeOne = props.investmentValuationData.fixedDeposits.filter(
    (item) =>
      parseInt(item.instrumentId) === parseInt(props.location.investmentId)
  );

  const setInvestmentTypeTwo = props.investmentValuationData.portfolioHoldings.filter(
    (item) =>
      parseInt(item.securityId) === parseInt(props.location.investmentId)
  );
  const setInvestmentTypeThree = props.investmentValuationData.treasuryBills.filter(
    (item) => parseInt(item.id) === parseInt(props.location.investmentId)
  );

  let makeArray = [];

  if (setInvestmentTypeOne.length === 0 && setInvestmentTypeTwo.length === 0) {
    makeArray = setInvestmentTypeThree;
  } else if (
    setInvestmentTypeTwo.length === 0 &&
    setInvestmentTypeThree.length === 0
  ) {
    makeArray = setInvestmentTypeOne;
  } else if (
    setInvestmentTypeOne.length === 0 &&
    setInvestmentTypeThree.length === 0
  ) {
    makeArray = setInvestmentTypeTwo;
  }

  const myDate = Date.now();
  const date = moment(myDate).toISOString();

  // TERMINATION DATA
  const terminateDataFixed = {
    instrumentID: parseInt(
      setInvestmentTypeOne.length === 0 && setInvestmentTypeTwo.length === 0
        ? makeArray[0].id
        : setInvestmentTypeTwo.length === 0 &&
          setInvestmentTypeThree.length === 0
        ? makeArray[0].instrumentId
        : null
    ),
    terminationDate: `${date}`,
    typeId: 2,
  };
  const terminateDataTbills = {
    transactionID: parseInt(
      setInvestmentTypeOne.length === 0 && setInvestmentTypeTwo.length === 0
        ? makeArray[0].id
        : setInvestmentTypeTwo.length === 0 &&
          setInvestmentTypeThree.length === 0
        ? makeArray[0].instrumentId
        : null
    ),
    isFullTermination: !displayOne && selectOne ? false : true,
    description: userDescp,
    terminationDate: `${date}`,
    typeId: 3,
  };
  // TERMINATION DATA

  if (!displayOne && selectOne) {
    terminateDataTbills.amount = parseInt(amount);
  }

  // if (setInvestmentTypeOne.length === 0 && setInvestmentTypeTwo.length === 0) {
  //   terminateData.discountRate = `${parseInt(
  //     makeArray[0].discountRate.toFixed(1)
  //   )}`;
  // }

  return (
    <div className="px-12">
      <div className="flex flex-row  sm:w-8/12 items-center  mb-10 ">
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
        <Link
          to={{
            pathname: "/dashboard/investment/view-investment",
            investmentId: makeArray[0].typeId,
            fixedId: makeArray[0].instrumentId,
            tBillId: makeArray[0].id,
          }}
          style={{ color: "#999999" }}
          className="text-xs ml-4 sm:ml-1"
        >
          {setInvestmentTypeOne.length === 0 &&
          setInvestmentTypeTwo.length === 0
            ? makeArray[0].typeLabel
            : setInvestmentTypeTwo.length === 0 &&
              setInvestmentTypeThree.length === 0
            ? makeArray[0].productLabel
            : makeArray[0].companyName}
        </Link>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
          {" "}
          {">>"}{" "}
        </p>
        <p className="text-sm text-black">Terminate</p>
      </div>

      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">Terminate</p>
      {/* heading end */}

      {/* main body of termination */}
      <div className="flex flex-col sm:flex-row">
        {/* column one */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="card sm:w-1/2  w-auto pt-20 pb-20 mb-24 flex flex-col justify-center content-center mt-6 sm:mr-4"
        >
          {/* optinal buttons to withdraw from */}
          {/* optinal buttons to withdraw from */}
          {displayOne ? (
            <Fragment>
              {setInvestmentTypeTwo.length === 0 &&
              setInvestmentTypeThree.length === 0 ? null : (
                <div
                  style={{
                    borderColor: selectOne ? "#8CB13D" : "#E6E6E6",
                    backgroundColor: selectOne ? "#F9FFEB" : "",
                  }}
                  onClick={() => {
                    changeSelectOne(true);
                    changeSelectTwo(false);
                    changeDisplayOne(false);
                  }}
                  className="flex flex-row border cursor-pointer w-8/12 border-solid items-center self-center"
                >
                  <div
                    style={{
                      height: "65px",
                      width: "65px",
                      backgroundColor: "#B8DDE9",
                    }}
                    className="flex mr-6 justify-center items-center"
                  >
                    <img src={partTerm} alt="" className="" />
                  </div>
                  <p className="pr-4">Part Terminate</p>
                </div>
              )}

              {setInvestmentTypeTwo.length === 0 &&
              setInvestmentTypeThree.length === 0 ? (
                <p className="text-center text-green-400 font-medium my-4">
                  Please Click on full terminate to proceed
                </p>
              ) : null}

              <div
                style={{
                  borderColor: selectTwo ? "#8CB13D" : "#E6E6E6",
                  backgroundColor: selectTwo ? "#F9FFEB" : "",
                }}
                onClick={() => {
                  changeSelectOne(false);
                  changeModal(true);
                }}
                className="flex flex-row border mt-4 w-8/12 cursor-pointer border-solid items-center self-center"
              >
                <div
                  style={{
                    height: "65px",
                    width: "65px",
                    backgroundColor: "#B8DDE9",
                  }}
                  className="flex mr-6 justify-center items-center"
                >
                  <img src={fullterm} alt="" className="" />
                </div>
                <p className="pr-4">Full Terminate</p>
              </div>
            </Fragment>
          ) : null}
          {/* optinal buttons to withdraw from end */}
          {/* optinal buttons to withdraw from end */}

          {/* if part terminate is clicked display this */}
          {/* if part terminate is clicked display this */}
          {!displayOne && selectOne ? (
            <Fragment>
              <fieldset className="mb-4 w-full px-6 mx-auto">
                <label className="block text-xs font-medium">
                  How much do you want to withdraw
                </label>
                <NumberFormat
                  thousandSeparator={true}
                  placeholder="How much do you want to withdraw"
                  autoComplete="off"
                  type="text"
                  id="amount"
                  name="amount"
                  className="block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
                  value={amount}
                  onValueChange={({ value }) => {
                    setAmount(value);
                  }}
                />
              </fieldset>
              <fieldset className="mb-4 w-full px-6 mx-auto">
                <label className="block text-xs font-medium">
                  Please sate your reasons for termination
                </label>
                <input
                  type="text"
                  className="block w-full text-xs mt-2 p-3 border border-gray-400 rounded"
                  onChange={(e) => {
                    setUserDescp(e.target.value);
                  }}
                />
              </fieldset>
            </Fragment>
          ) : null}
          {/* if part terminate  is clicked display this */}
          {/* if part terminate  is clicked display this */}

          {/* BUTTONS FOR CONFIRMATION */}
          {/* BUTTONS FOR CONFIRMATION */}
          <div className="nav-buttons flex justify-center pl-4 pr-4 ">
            <Link
              to={{
                pathname: "/dashboard/investment/view-investment",
                investmentId: makeArray[0].typeId,
                fixedId: makeArray[0].instrumentId,
                tBillId: makeArray[0].id,
              }}
              onClick={() => {
                changeDisplayOne(true);
              }}
              className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </Link>
            {/* <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${(checkEmpty(state) === true || status) && "opaque"}`} onClick={(checkEmpty(state) === false && !status) && confirm}> */}
            <button
              // onClick={()=>{changeDisplayOne(false)}}
              disabled={amount == null ? true : false}
              onClick={() => {
                changeModal(true);
              }}
              className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Proceed
            </button>
          </div>
          {/* BUTTONS FOR CONFIRMATION */}
          {/* BUTTONS FOR CONFIRMATION */}
        </div>
        {/* column one end */}

        {/* column two */}
        <div className="sm:w-1/2">
          <div
            style={{ border: "1px solid #F1F1F1" }}
            className="card  pt-24 sm:pt-8  pb-20  flex flex-col justify-center mt-6 items-center"
          >
            {/* image setting */}
            <div
              className="w-full pb-6 mb-6"
              style={{ borderBottom: "1px solid #F1F1F1" }}
            >
              <p className="font-bold text-2xl text-center">
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].typeLabel
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].productLabel
                  : makeArray[0].companyName}
              </p>
            </div>
            {/* image setting end */}

            {/* terminate right text content */}
            {/* terminate right text content */}
            <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
              <p className="text-left text-black font-bold text-base">
                Asset Class
              </p>
              <p className="text-right text-black text-base">
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].typeLabel
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].productCategory
                  : makeArray[0].assetClass}
              </p>
            </div>
            {/* <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold  text-base">Type</p>
              <p className="text-right text-black text-base">
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].type
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].productCategory
                  : makeArray[0].assetClass}
              </p>
            </div> */}
            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold  text-base">
                Date issued
              </p>
              <p className="text-right text-black text-base">
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? moment(makeArray[0].startDate).format("L")
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? moment(makeArray[0].startDate).format("L")
                  : makeArray[0].yieldToMaturity}
              </p>
            </div>

            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold text-base">
                Maturity Date
              </p>
              <p className="text-right text-black text-base">
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? moment(makeArray[0].valuationDate).format("L")
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? moment(makeArray[0].valuationDate).format("L")
                  : makeArray[0].yieldToMaturity}
              </p>
            </div>

            {/* item */}
            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold  text-base">
                Purchase Cost
              </p>
              <p className="text-right text-black text-base">
                ₦{" "}
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].reportFaceValue.amount
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].principalBalance.amount
                  : makeArray[0].totalPurchaseCost}
              </p>
            </div>
            {/* item */}
            {/* item */}
            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold  text-base">
                Total Returns
              </p>
              <p className="text-right text-black text-base">
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
                        makeArray[0].totalGainLoss +
                        makeArray[0].totalPurchaseCost
                      ).toFixed(2)
                )}`}
              </p>
            </div>
            {/* item */}

            {/* item */}
            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold  text-base">
                Total Interest
              </p>
              <p className="text-right text-black text-base">
                {`+ ₦${formatCurrency(
                  setInvestmentTypeOne.length == 0 &&
                    setInvestmentTypeTwo.length == 0
                    ? makeArray[0].interestAccrued.amount.toFixed(2)
                    : setInvestmentTypeTwo.length == 0 &&
                      setInvestmentTypeThree.length == 0
                    ? makeArray[0].interestLessTaxes.amount
                    : makeArray[0].totalGainLoss
                )} `}
              </p>
            </div>
            {/* item */}

            <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold text-base">Tenure</p>
              <p className="text-right text-black text-base">
                {setInvestmentTypeOne.length == 0 &&
                setInvestmentTypeTwo.length == 0
                  ? makeArray[0].tenure
                  : setInvestmentTypeTwo.length == 0 &&
                    setInvestmentTypeThree.length == 0
                  ? makeArray[0].tenor
                  : null}{" "}
                days
              </p>
            </div>
            {/* <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
              <p className="text-left text-black font-bold text-base">
                Returns
              </p>
              <p className="text-right text-black text-base">
                {Math.sign(
                  setInvestmentTypeTwo.length == 0
                    ? makeArray[0].interestRate.toFixed(1)
                    : setInvestmentTypeTwo.length == 0 &&
                      setInvestmentTypeThree.length == 0
                    ? makeArray[0].interestRate.toFixed(1)
                    : makeArray[0].portPercentage
                )}
                %
              </p>
            </div> */}
            {/* image text content end */}
            {/* image text content end */}
          </div>

          {/* notification for termination text */}
          <div
            style={{ background: "#F9FFEB", border: "1px solid #8CB13D" }}
            className="flex flex-row rounded content-center py-6 mb-20 px-4 items-center"
          >
            <img src={information} alt="" className="mr-2" />
            <p className="text-sm">
              {selectOne
                ? `Part of your investment would be
                                    terminated and would be sent
                                    to you wallet along with your interest.`
                : `This investment would be fuly
                                    terminated and your
                                    funds would be transfered
                                    to your wallet along with your
                                    interest.`}
            </p>
          </div>
          {/* notification for termination text  end*/}
        </div>
        {/* column two end */}
      </div>
      {/* main body of termination end */}

      {modal ? (
        <TerminateModal
          myclose={onclose}
          myTerminateData={
            setInvestmentTypeOne.length === 0 &&
            setInvestmentTypeTwo.length === 0
              ? terminateDataTbills
              : terminateDataFixed
          }
          cost={
            setInvestmentTypeOne.length === 0 &&
            setInvestmentTypeTwo.length === 0
              ? makeArray[0].reportFaceValue.amount
              : setInvestmentTypeTwo.length === 0 &&
                setInvestmentTypeThree.length === 0
              ? makeArray[0].principalBalance.amount
              : makeArray[0].totalPurchaseCost
          }
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
});

export default connect(mapStateToProps)(TerminateInvestment);
