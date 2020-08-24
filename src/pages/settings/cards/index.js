import React, { Fragment, useState } from "react";
import Trash from "assets/img/trash.svg";
import MastercardLogo from "assets/img/mastercard.svg";
import VisaLogo from "assets/img/visa.svg";
import VerveLogo from "assets/img/verve.svg";
import PlusIcon from "assets/img/plus.svg";
import { cardDot } from "assets/exports";
import { connect, useDispatch } from "react-redux";
import {
  startFundWalletWithNewCard,
  verifyFundWalletWithNewCard,
} from "state/slices/cards";
import PaystackModal from "./components/PaystackModal";
import AddCardSuccessModal from "./components/AddCardSuccessModal";
import produce from "immer";
import { unwrapResult } from "@reduxjs/toolkit";
import AddCardDisclaimerModal from "./components/AddCardDisclaimer";

const cardBrandIcons = {
  mastercard: MastercardLogo,
  visa: VisaLogo,
  verve: VerveLogo,
};

const UserCards = ({ cards }) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isDisclaimerModalVisible: false,
    isPaystackModalVisible: false,
    tranxRef: "",
    isVerificationLoading: false,
    verificationError: null,
    isTranxInitialized: false,
    isTranxInitLoading: false,
    tranxInitError: null,
    isAddCardSuccessModalVisible: false,
  });

  const initializeTransaction = async () => {
    setState(
      produce((draft) => {
        draft.isDisclaimerModalVisible = false;
        draft.isTranxInitialized = false;
        draft.isPaystackModalVisible = true;
        draft.isTranxInitLoading = true;
      })
    );

    const params = { amount: 100, saveCard: true };
    const resultAction = await dispatch(startFundWalletWithNewCard(params));

    if (startFundWalletWithNewCard.fulfilled.match(resultAction)) {
      const transaction = unwrapResult(resultAction);
      setState(
        produce((draft) => {
          draft.tranxRef = transaction.reference;
          draft.isTranxInitialized = true;
          draft.isTranxInitLoading = false;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isTranxInitLoading = false;
          draft.tranxInitError = resultAction.error.message;
        })
      );
    }
  };

  const showDisclaimerModal = () => {
    setState(
      produce((draft) => {
        draft.isDisclaimerModalVisible = true;
      })
    );
  };

  const closeDisclaimerModal = () => {
    setState(
      produce((draft) => {
        draft.isDisclaimerModalVisible = false;
      })
    );
  };

  const closePaystackModal = () => {
    setState(
      produce((draft) => {
        draft.isPaystackModalVisible = false;
      })
    );
  };

  const closeAddCardSuccessModal = () => {
    setState(
      produce((draft) => {
        draft.isAddCardSuccessModalVisible = false;
      })
    );
  };

  const verifyTransactionReference = async () => {
    const formValues = {
      transactionReference: state.tranxRef,
    };

    setState(
      produce((draft) => {
        draft.isVerificationLoading = true;
      })
    );

    const resultAction = await dispatch(
      verifyFundWalletWithNewCard(formValues)
    );

    if (verifyFundWalletWithNewCard.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isVerificationLoading = false;
          draft.isPaystackModalVisible = false;
          draft.isAddCardSuccessModalVisible = true;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isVerificationLoading = false;
          draft.isPaystackModalVisible = false;
          draft.verificationError = resultAction.error.message;
        })
      );
    }
  };

  const handlePaystackSuccess = () => {
    verifyTransactionReference().then(undefined);
  };

  return (
    <Fragment>
      <div className="user-card--wrap flex-col fadeIn">
        <div className="user-card--heading flex justify-between items-center">
          <h3 className="card-main--heading font-medium">Your Debit Cards</h3>
          <div className="plus-wrap">
            <img
              onClick={showDisclaimerModal}
              className="plus"
              src={PlusIcon}
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          {cards.map((card, i) => (
            <div className="single-user--card" key={i}>
              <div className="single-card--action flex justify-end">
                <img src={Trash} alt="" />
              </div>
              <div className="single-card--body flex justify-between text-white">
                <div className="single-card--details flex">
                  {[...Array(4)].map((e, i) => (
                    <span
                      className="single-dot"
                      key={i}
                      dangerouslySetInnerHTML={{ __html: cardDot }}
                    />
                  ))}
                </div>
                <div className="single-card--details flex">
                  {[...Array(4)].map((e, i) => (
                    <span
                      className="single-dot"
                      key={i}
                      dangerouslySetInnerHTML={{ __html: cardDot }}
                    />
                  ))}
                </div>
                <div className="single-card--details flex">
                  {[...Array(4)].map((e, i) => (
                    <span
                      className="single-dot"
                      key={i}
                      dangerouslySetInnerHTML={{ __html: cardDot }}
                    />
                  ))}
                </div>
                <div className="single-card--details">{card.lastFourDigit}</div>
              </div>
              <div className="single-card--excerpt flex justify-between items-center">
                <div className="flex items-center font-medium text-white">
                  <span className="mr-2">EXPIRES</span>
                  <span>
                    {card.expiryMonth}/{card.expiryYear}
                  </span>
                </div>
                <div className="text-white">
                  <img src={cardBrandIcons[card.brand]} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddCardDisclaimerModal
        isVisible={state.isDisclaimerModalVisible}
        onClose={closeDisclaimerModal}
        onProceed={initializeTransaction}
      />

      <PaystackModal
        isVisible={state.isPaystackModalVisible}
        tranxRef={state.tranxRef}
        onClose={closePaystackModal}
        onPaystackSuccess={handlePaystackSuccess}
        isTranxInitialized={state.isTranxInitialized}
        isTranxInitLoading={state.isTranxInitLoading}
        isVerificationLoading={state.isVerificationLoading}
        verificationError={state.verificationError}
      />

      <AddCardSuccessModal
        isVisible={state.isAddCardSuccessModalVisible}
        close={closeAddCardSuccessModal}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.data,
});

export default connect(mapStateToProps)(UserCards);
