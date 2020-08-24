import React, { useState, useEffect, Fragment } from "react";
import { connect, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import moment from "moment";
import DatePicker from "react-modern-calendar-datepicker";
import { wallet, creditcard } from "../imageLinks";
import { Link, Redirect, useHistory } from "react-router-dom";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import SuccessModal from "../components/successModal/SuccessModal";
import { formatCurrency } from "utils";

const items = [{ text: "GTB - 0179" }];

const WithdrawInvestment = (props) => {
  const [view, setView] = useState(false);
  const [itemView, setItem] = useState("Choose bank account");
  const [modal, changeModal] = useState(false);
  const [selectOne, changeSelectOne] = useState(false);
  const [selectTwo, changeSelectTwo] = useState(false);
  const [displayOne, changeDisplayOne] = useState(true);
  const [fullWithdrawal, setFullWithdrawal] = useState(false);
  const [picture, setPicture] = useState([]);
  const [displayTwo, changeDisplayTwo] = useState(false);
  const [card, setCard] = useState("");
  const [amount, setAmount] = useState(null);

  const history = useHistory();

  const onclose = (val) => {
    changeModal(val);
  };

  if (!props.location.investmentId) {
    return <Redirect to="/dashboard/investment" />;
  }

  const setInvestmentTypeOne = props.investmentValuationData.fixedDeposits.filter(
    (item) => item.instrumentId == props.location.investmentId
  );
  const setInvestmentTypeTwo = props.investmentValuationData.portfolioHoldings.filter(
    (item) => item.securityId == props.location.investmentId
  );
  const setInvestmentTypeThree = props.investmentValuationData.treasuryBills.filter(
    (item) => item.id == props.location.investmentId
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

  // onclick of dropdown
  const clickView = (value) => {
    setView(!value);
  };

  // SETTING OF CARD
  const settingOfMyCard = (val) => {
    setCard(val);
  };

  const withdrawData = {
    description: `${
      setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0
        ? makeArray[0].typeLabel
        : setInvestmentTypeTwo.length == 0 && setInvestmentTypeThree.length == 0
        ? makeArray[0].productLabel
        : makeArray[0].symbol
    }`,
    securityID: `${
      setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0
        ? makeArray[0].typeId
        : setInvestmentTypeTwo.length == 0 && setInvestmentTypeThree.length == 0
        ? makeArray[0].typeId
        : makeArray[0].securityId
    }`,
    transAmount: parseInt(amount),
    currency: `${
      setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0
        ? makeArray[0].valueAsAtDate.currency
        : setInvestmentTypeTwo.length == 0 && setInvestmentTypeThree.length == 0
        ? makeArray[0].netInstrumentValue.currency
        : "NGN"
    }`,
    fundName: `${
      setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0
        ? makeArray[0].typeLabel
        : setInvestmentTypeTwo.length == 0 && setInvestmentTypeThree.length == 0
        ? makeArray[0].productLabel
        : makeArray[0].companyName
    }`,
  };

  if (!displayOne && selectTwo) {
    withdrawData.bankAccountID = `${card}`;
  }

  return (
    <div className="px-4 sm:px-12  flex flex-col fadeIn">
      <div className="flex flex-row sm:w-8/12 items-center cursor-pointer  mb-10 ">
        <p
          onClick={() => {
            return history.push("/dashboard/investment");
          }}
          style={{ color: "#999999" }}
          className="text-xs "
        >
          Investment
        </p>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
          {" "}
          {">>"}{" "}
        </p>
        <Link
          to={{
            pathname: "/dashboard/investment/view-investment",
            investmentId: makeArray[0].securityId,
          }}
          style={{ color: "#999999" }}
          className="text-xs ml-4 sm:ml-1"
        >
          {setInvestmentTypeOne.length == 0 && setInvestmentTypeTwo.length == 0
            ? makeArray[0].typeLabel
            : setInvestmentTypeTwo.length == 0 &&
              setInvestmentTypeThree.length == 0
            ? makeArray[0].productLabel
            : makeArray[0].companyName}
        </Link>
        <p style={{ color: "#999999" }} className="text-xs mx-4">
          {" "}
          {">>"}{" "}
        </p>
        <p className="text-sm text-black">Withdraw</p>
      </div>

      {/* heading */}
      <p className="text-black font-bold text-2xl text-left">Withdraw</p>
      {/* heading end */}

      <div className="flex flex-col sm:flex-row">
        {/* column one */}
        {/* column one */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="card sm:w-1/2  w-auto pt-20 pb-20 mb-24 flex flex-col justify-center content-center mt-6 sm:mr-4"
        >
          {/* optinal buttons to withdraw from */}
          {/* optinal buttons to withdraw from */}
          {displayOne ? (
            <Fragment>
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
                  <img src={wallet} alt="" className="" />
                </div>
                <p>Withdraw to wallet</p>
              </div>

              <div
                style={{
                  borderColor: selectTwo ? "#8CB13D" : "#E6E6E6",
                  backgroundColor: selectTwo ? "#F9FFEB" : "",
                }}
                onClick={() => {
                  changeSelectTwo(true);
                  changeSelectOne(false);
                  changeDisplayOne(false);
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
                  <img src={creditcard} alt="" className="" />
                </div>
                <p className="pr-4">Withdraw to bank account</p>
              </div>
            </Fragment>
          ) : null}
          {/* optinal buttons to withdraw from end */}
          {/* optinal buttons to withdraw from end */}

          {/* if withdraw to bank is clicked display this */}
          {/* if withdraw to bank is clicked display this */}
          {!displayOne && selectTwo ? (
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

              {/* dropdown for bank */}
              {/* dropdown for bank */}
              <fieldset className="mb-4 w-full px-6 mx-auto">
                <label className="block text-xs font-medium">
                  Choose bank account
                </label>

                {/* dropsown for list of investments */}
                {/* dropsown for list of investments */}
                <div className="fieldset w-11/12 mt-2 w-full">
                  <React.Fragment>
                    <div className="fund-dropdown">
                      {/* <div className="select-option" onClick={() => toggleList()}> */}
                      <div
                        className="select-option"
                        onClick={() => clickView(view)}
                      >
                        <div className="buddy-dropdown-title flex flex-row">
                          {" "}
                          {itemView}
                        </div>
                        <div
                          className="buddy-dropdown-icon"
                          dangerouslySetInnerHTML={{
                            __html:
                              '<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"/></svg>',
                          }}
                        ></div>
                      </div>
                    </div>
                    {/* listOpen && */}
                    {view ? (
                      <ul className="buddy-dropdown-list basic-dropdown">
                        {/* <ul className="buddy-dropdown-list basic-dropdown" onClick={e => e.stopPropagation()}> */}
                        {props.cards.map((item, i) => (
                          <React.Fragment key={i}>
                            <li
                              className="buddy-dropdown-item flex hover:bg-gray-100 flex-row items-center"
                              onClick={() => {
                                //   setItem(`${item.text}`);
                                setItem(`${item.bank}`);
                                setView(false);
                                settingOfMyCard(item.id);
                              }}
                              key={"newCard"}
                            >
                              {/* <img src={item.img} alt="" /> */}
                              <div className="flex flex-col sm:flex-row justify-center mt-4">
                                <div className="ml-4 self-center">
                                  <p className="text-sm font-medium text-black">
                                    {item.bank}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </React.Fragment>
                        ))}
                        {items.length === 0 ? (
                          <li className="no-result">No results found</li>
                        ) : null}
                      </ul>
                    ) : null}
                  </React.Fragment>
                </div>
                {/* dropsown for list of investments */}
                {/* dropsown for list of investments */}
              </fieldset>
              {/* dropdown for bank */}
              {/* dropdown for bank */}
            </Fragment>
          ) : null}
          {/* if withdraw to bank is clicked display this */}
          {/* if withdraw to bank is clicked display this */}

          {/* if withdraw to wallet is clicked display this */}
          {/* if withdraw to wallet is clicked display this */}
          {!displayOne && selectOne ? (
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
          ) : null}
          {/* if withdraw to wallet is clicked display this */}
          {/* if withdraw to wallet is clicked display this */}

          <div className="nav-buttons flex justify-center pl-4 pr-4 ">
            <button
              onClick={() => {
                changeDisplayOne(true);
              }}
              className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </button>

            <button
              disabled={amount == null ? true : false}
              // onClick={()=>{changeDisplayOne(false)}}
              onClick={() => {
                changeModal(true);
                console.log(withdrawData);
              }}
              className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Next
            </button>
          </div>
        </div>
        {/* column one end */}
        {/* column one end */}

        {/* column two */}
        {/* column two */}
        <div
          style={{ border: "1px solid #F1F1F1" }}
          className="sm:w-1/2 w-auto card sm:w-1/2 pt-24  pb-20  flex flex-col justify-center mt-6 items-center"
        >
          {/* image setting */}
          <div className="w-72 shadow-lg p-2">
            <div className="h-32 w-full border-dashed border border-gray-400 rounded flex flex-col justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8CyHlXfQ0X5KJ_kj1pRohugCUtBom9Qk1wg&usqp=CAU"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          {/* image setting end */}
          {/* image setting end */}

          {/* image text content */}
          {/* image text content */}
          <p className="text-xl font-bold mb-10 mt-10 text-black text-center">
            {setInvestmentTypeOne.length == 0 &&
            setInvestmentTypeTwo.length == 0
              ? makeArray[0].typeLabel
              : setInvestmentTypeTwo.length == 0 &&
                setInvestmentTypeThree.length == 0
              ? makeArray[0].productLabel
              : makeArray[0].companyName}
          </p>

          {/* <p className="text-black text-lg text-center mt-2 font-bold">₦50,000</p> */}

          {/* <div className="flex flex-row justify-between w-full mt-4 px-16 items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Capital
            </p>
            <p className="text-right text-black text-base">
              ₦{" "}
              {setInvestmentTypeOne.length == 0 &&
              setInvestmentTypeTwo.length == 0
                ? makeArray[0].amountPaid.amount
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? makeArray[0].principalBalance.amount
                : makeArray[0].currentValue}
            </p>
          </div> */}
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Amount to withdraw
            </p>
            <p className="text-right text-black text-base">
              ₦ {formatCurrency(amount)}
            </p>
          </div>

          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Current value
            </p>
            <p className="text-right text-black text-base">
              ₦{" "}
              {setInvestmentTypeOne.length == 0 &&
              setInvestmentTypeTwo.length == 0
                ? formatCurrency(makeArray[0].amountPaid.amount)
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? formatCurrency(makeArray[0].principalBalance.amount)
                : formatCurrency(makeArray[0].currentValue)}
            </p>
          </div>
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
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
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Total Interests
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
          <div className="flex flex-row justify-between px-16 mt-6 w-full items-center">
            <p className="text-left text-black text-opacity-25 text-base">
              Maturity Date
            </p>
            <p className="text-right text-black text-base">
              {setInvestmentTypeOne.length == 0 &&
              setInvestmentTypeTwo.length == 0
                ? moment(makeArray[0].valueDate).format("DD MM YYYY")
                : setInvestmentTypeTwo.length == 0 &&
                  setInvestmentTypeThree.length == 0
                ? moment(makeArray[0].valuationDate).format("DD MM YYYY")
                : "Open"}
            </p>
          </div>
          {/* image text content end */}
          {/* image text content end */}

          {/* nav buttons */}

          {/* nav buttons end */}
        </div>
        {/* column two end */}
      </div>

      {modal ? (
        <SuccessModal
          myclose={onclose}
          data={withdrawData}
          text="Your withdrawal Successful."
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => ({
  createInvestmentMe: state.investments.createInvestmentMe,
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  investmentValuationData: state.investments.investmentValuationData,
  investmentValuationLoading: state.investments.investmentValuationLoading,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(WithdrawInvestment);
