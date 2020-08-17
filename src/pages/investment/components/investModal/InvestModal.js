import React, { useState, Fragment, useEffect } from "react";
import CardIcon from "../../../../assets/img/cardIcon.png";
import successDoc from "../../../../assets/img/success.svg";
import failedDoc from "../../../../assets/img/failedDoc.svg";
import "./invest.css";
import { createInvestment } from "../../../../state/slices/investments";
import { connect, useDispatch } from "react-redux";
import InvestmentDropdown from "../investmentDropdown/InvestmentDropdown";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";
import { Redirect } from "react-router-dom";
// import { Redirect } from "react-router-dom";

const InvestModal = (props) => {
  const [payment, setPayment] = useState(false);
  const [card, setCard] = useState(false);
  // const [flick, setFlick] = useState(false);
  const [inHide, setInHide] = useState(true);
  const [myCard, setMyCard] = useState("");
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const setInvestDetails = props.MycreateInvestmentData;
  const myInvestType = props.investType;
  let errorObj = props.createInvestmentError;

  const dispatch = useDispatch();

  const refresh = () => {
    return document.location.reload(true);
    // return <Redirect to="/investment/add-investment" />;
  };

  const showMyDetails = () => {
    if (!activeOne) {
      dispatch(createInvestment(setInvestDetails));
    } else if (activeOne) {
      setInvestDetails.cardId = `${myCard}`;
      dispatch(createInvestment(setInvestDetails));
      console.log(setInvestDetails);
    }

    if (props.createInvestmentError && !props.createInvestmentLoading) {
      setPayment(true);
    }
    setInHide(false);
  };

  const setMyAvailableCard = (val) => {
    setMyCard(val);
  };

  const onclose = () => {
    props.myclose(false);
    // console.log(props);
  };

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span
          className="closeModal cursor-pointer"
          onClick={() => {
            onclose();
            refresh();
          }}
        >
          <p className="text-hairline text-base text-right">Close</p>
        </span>

        {/* UI before payment  */}
        {/* UI before payment  */}
        {props.createInvestmentLoading ? null : inHide ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={CardIcon} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Fund wallet</h1>
              <p className="text-center text-gray-500 leading-normal">
                Select a payment method to make deposits into your investment.
                there.
              </p>
            </div>

            {/* selecting payment method */}
            {/* selecting payment method */}
            {/* payment one */}
            {/* payment one */}

            {!activeTwo ? (
              <div
                onClick={() => {
                  setActiveOne(true);
                  setActiveTwo(false);
                  setCard(true);
                }}
                className={`rounded-md  w-11/12 sm:w-8/12 border mt-16 flex flex-row items-center content-center py-4 px-4 ${
                  activeOne ? "blessed" : "good-time"
                }`}
              >
                <div className={`${activeOne ? "plain-b" : "plain-two"}`}>
                  <div className={`${activeOne ? "plain-inner" : ""}`} />
                </div>
                <label
                  className="ml-4 font-medium text-base"
                  for="payment_method"
                >
                  Use debit card{" "}
                </label>
                <br></br>
              </div>
            ) : (
              ""
            )}

            {/* setting payment method two visible */}
            {/* setting payment method two visible */}
            {/* select two */}

            {!activeOne ? (
              <div
                onClick={() => {
                  setActiveTwo(true);
                  setActiveOne(false);
                }}
                className={`rounded-md  w-11/12 sm:w-8/12 border mt-2 flex flex-row items-center content-center py-4 px-4 ${
                  activeTwo ? "blessed" : "good-time"
                }`}
              >
                <div className={`${activeTwo ? "plain-b" : "plain-two"}`}>
                  <div className={`${activeTwo ? "plain-inner" : ""}`} />
                </div>
                <label
                  className="ml-4 font-medium text-base"
                  for="payment_method"
                >
                  Use wallet{" "}
                </label>
                <br></br>
              </div>
            ) : (
              ""
            )}
            {/* setting payment method two visible end */}
            {/* setting payment method two visibleend */}

            {/* selecting payment method end */}
            {/* selecting payment method end*/}

            {/* dropdown select input */}
            {/* dropdown select input */}
            {activeOne ? (
              <Fragment>
                {/* <p className="text-black text-xs font-bold mt-4 text-left">Select a card</p> */}
                <div className="fieldset w-11/12 mt-2 sm:w-8/12">
                  <InvestmentDropdown
                    cardsData={props.cards}
                    settingCard={setMyAvailableCard}
                  />
                  <button
                    // onClick={()=>{onclose()}}
                    onClick={() => {
                      showMyDetails();
                    }}
                    className={`mt-6 w-40 text-center leading-loose mx-auto bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
                  >
                    Done
                  </button>
                </div>
              </Fragment>
            ) : null}
            {/* dropdown select input end*/}
            {/* dropdown select input end */}

            {/* wallet display text */}
            {/* wallet display text */}
            {props.createInvestmentLoading ? null : activeTwo ? (
              <Fragment>
                <p
                  style={{ color: "#999999" }}
                  className="text-xs text-center mt-4 "
                >
                  You have ₦ {formatCurrency(props.dashboard.walletBalance)}in
                  your wallet
                </p>
                <button
                  onClick={() => {
                    showMyDetails();
                    // setPayment(true);
                  }}
                  className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
                >
                  Continue
                </button>
              </Fragment>
            ) : (
              ""
            )}

            {/* wallet display text */}
            {/* wallet display text */}
          </Fragment>
        ) : (
          ""
        )}

        {/* UI before payment end  */}
        {/* UI before payment  end */}

        {/* Loading UI for PayMent */}
        {/* Loading UI for PayMent */}
        {props.createInvestmentLoading ? (
          <Fragment>
            <Loading text="Creating Investment" />
          </Fragment>
        ) : null}
        {/* Loading UI for PayMent */}
        {/* Loading UI for PayMent */}

        {/* UI after payment */}
        {/* UI after payment */}
        {!(errorObj && props.createInvestmentLoading) && payment ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={successDoc} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Success</h1>
              <p className="text-center text-gray-500 leading-normal">
                You have successfully created an investment.
              </p>

              <button
                onClick={() => {
                  onclose();
                  refresh();
                }}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
              >
                Done
              </button>
            </div>
          </Fragment>
        ) : errorObj && !props.createInvestmentLoading && !payment ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={failedDoc} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Failed</h1>
              <p className="text-center text-gray-500 leading-normal">
                {errorObj.message}.
              </p>

              <button
                onClick={() => {
                  onclose();
                  refresh();
                }}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
              >
                Done
              </button>
            </div>
          </Fragment>
        ) : (
          ""
        )}

        {/* UI after payment end */}
        {/* UI after payment end*/}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(InvestModal);
