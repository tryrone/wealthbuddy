import React, { useState, Fragment, useEffect } from "react";
import CardIcon from "../../../../assets/img/cardIcon.png";
import "./invest.css";
import { createInvestment } from "../../../../state/slices/investments";
import { connect, useDispatch } from "react-redux";
import InvestmentDropdown from "../investmentDropdown/InvestmentDropdown";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";
import { Redirect } from "react-router-dom";
import InvestModalSuccess from "./InvestModalSuccess";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
// import { Redirect } from "react-router-dom";

const InvestModal = (props) => {
  const [payment, setPayment] = useState(false);
  const [card, setCard] = useState(false);
  const [inHide, setInHide] = useState(true);
  const [myCard, setMyCard] = useState("");
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const setInvestDetails = props.MycreateInvestmentData;

  if (activeOne) {
    setInvestDetails.cardId = `${myCard}`;
  }

  // if (props.createInvestmentError && !props.createInvestmentLoading) {
  //   setPayment(true);
  // }
  // setInHide(false);

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
            // refresh();
          }}
        >
          <span className="closeModal">
            <CloseModalIcon />
          </span>
        </span>

        {/* UI before payment  */}
        {/* UI before payment  */}
        {!payment ? (
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
                      // showMyDetails();
                      setPayment(true);
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
            {activeTwo ? (
              <Fragment>
                <p
                  style={{ color: "#999999" }}
                  className="text-xs text-center flex flex-row mt-4 "
                >
                  You have{" "}
                  <p className="text-orange-700 mx-2">
                    ₦{formatCurrency(props.dashboard.walletBalance)}
                  </p>
                  in your wallet
                </p>
                <button
                  onClick={() => {
                    // showMyDetails();
                    setPayment(true);
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

        {/* UI after payment */}
        {/* UI after payment */}
        {payment ? (
          <InvestModalSuccess investData={setInvestDetails} close={onclose} />
        ) : null}

        {/* UI after payment end */}
        {/* UI after payment end*/}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  createInvestmentMe: state.investments.createInvestmentMe,
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(InvestModal);
