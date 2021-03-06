import React, { useState, Fragment } from "react";
import CardIcon from "../../../../../assets/img/cardIcon.png";
import successDoc from "../../../../../assets/img/success.svg";
import "./invest.css";
import { fundInvestment } from "../../../../../state/slices/investments";
import failedDoc from "../../../../../assets/img/failedDoc.svg";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import InvestmentDropdown from "../../../components/investmentDropdown/InvestmentDropdown";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import FundSuccess from "./FundSuccess";

const FundExistingModal = (props) => {
  const [payment, setPayment] = useState(false);
  const [card, setCard] = useState(false);
  const [inHide, setInHide] = useState(true);
  const [myCard, setMyCard] = useState("");
  const [activeOne, setActiveOne] = useState(false);
  const [activeTwo, setActiveTwo] = useState(false);

  const setInvestDetails = props.MycreateInvestmentData;

  if (!props.getAllInvestmentsData) {
    return (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <p className="text-hairline text-base text-center">
            There seems to be an issues with the platform , please contact
            customer services.
          </p>
          <button
            onClick={() => {
              return document.location.reload(true);
            }}
            className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const myDataArray = props.getAllInvestmentsData.filter(
    (item) => item.investmentID == setInvestDetails.itemId
  );

  const showMyDetails = () => {
    if (myDataArray.length == 0) {
      return (
        <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
          <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
            <p className="text-hairline text-base text-center">
              There seems to be an issues with the platform , please contact
              customer services.
            </p>
            <button
              onClick={() => {
                return <Redirect to="/investment/investment" />;
              }}
              className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Close
            </button>
          </div>
        </div>
      );
    }

    if (!activeOne) {
      setInvestDetails.investmentType = parseInt(myDataArray[0].investmentType);
      delete setInvestDetails.itemId;
      // dispatch(fundInvestment(setInvestDetails));
      // console.log(myDataArray[0]);
    } else if (activeOne) {
      setInvestDetails.cardId = `${myCard}`;
      setInvestDetails.investmentType = parseInt(myDataArray[0].investmentType);
      delete setInvestDetails.itemId;
      // dispatch(fundInvestment(setInvestDetails));
      // console.log(myDataArray[0]);
      // console.log(props, "solo");
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
        <span className="closeModal cursor-pointer" onClick={() => onclose()}>
          <p
            onClick={() => {
              onclose();
            }}
            className="text-hairline text-base text-right"
          >
            <span>
              <CloseModalIcon />
            </span>
          </p>
        </span>

        {/* UI before payment  */}
        {props.fundInvestmentLoading ? null : inHide ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={CardIcon} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Fund Investment</h1>
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
                  htmlFor="payment_method"
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
                  htmlFor="payment_method"
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
                      setPayment(true);
                    }}
                    className={`mt-6 w-40 text-center leading-loose mx-auto bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
                  >
                    Done
                  </button>
                  {myDataArray.length == 0 ? (
                    <p className="mt-2 font-hairline text-center text-xs">
                      there seems to be something wrong with the investment
                      please contact customer services
                    </p>
                  ) : null}
                </div>
              </Fragment>
            ) : null}
            {/* dropdown select input end*/}
            {/* dropdown select input end */}

            {/* wallet display text */}
            {/* wallet display text */}
            {props.fundInvestmentLoading ? null : activeTwo ? (
              <Fragment>
                <p
                  style={{ color: "#999999" }}
                  className="text-xs text-center flex flex-row mt-4 "
                >
                  You have{" "}
                  <p className="text-orange-700 mx-2">
                    ???{formatCurrency(props.dashboard.walletBalance)}
                  </p>
                  in your wallet
                </p>
                <button
                  onClick={() => {
                    showMyDetails();
                    setPayment(true);
                  }}
                  className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
                >
                  Continue
                </button>
                {myDataArray.length == 0 ? (
                  <p className="mt-2 font-hairline text-center text-xs">
                    there seems to be something wrong with the investment please
                    contact customer services
                  </p>
                ) : null}
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

        {/* Loading UI for PayMent */}
        {payment ? (
          <FundSuccess
            investData={setInvestDetails}
            close={onclose}
            text="you have successfully funded an investment"
          />
        ) : null}
        {/* Loading UI for PayMent */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  fundInvestmentLoading: state.investments.fundInvestmentLoading,
  fundInvestmentError: state.investments.fundInvestmentError,
  fundInvestmentData: state.investments.fundInvestmentData,
  fundInvestmentMe: state.investments.fundInvestmentMe,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
  investmentValuationData: state.investments.investmentValuationData,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(FundExistingModal);
