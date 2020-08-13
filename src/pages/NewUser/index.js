import React, { Fragment, useState } from "react";
import BVN from "static/bvn.png";
import Card from "static/card.png";
import UserIcon from "assets/img/newUserIcon.svg";
import { connect, useDispatch } from "react-redux";
import AddBvnModal from "./components/AddBvnModal";
import "./style.css";
import produce from "immer";
import AddBvnSuccessModal from "./components/AddBvnSuccessModal";
import { addBvn } from "state/slices/account";
import moment from "moment";
import PaystackModal from "./components/PaystackModal";
import AddCardSuccessModal from "./components/AddCardSuccessModal";
import {
  startFundWalletWithNewCard,
  verifyFundWalletWithNewCard,
} from "state/slices/cards";
import { unwrapResult } from "@reduxjs/toolkit";
import { setIsCardAddedToTrue } from "state/slices/account";

const NewUser = ({ account }) => {
  const dispatch = useDispatch();
  const { customerDetails, isBVNAdded, isCardAdded } = account;

  const [state, setState] = useState({
    isBvnModalVisible: false,
    isAddBvnLoading: false,
    addBvnError: null,
    isAddBvnSuccessModalVisible: false,
    isPaystackModalVisible: false,
    tranxRef: "",
    isVerificationLoading: false,
    verificationError: null,
    isTranxInitialized: false,
    isTranxInitLoading: false,
    tranxInitError: null,
    isAddCardSuccessModalVisible: false,
  });

  const startAddBvnAction = () => {
    if (isBVNAdded) return;

    setState(
      produce((draft) => {
        draft.isBvnModalVisible = true;
      })
    );
  };

  const startAddCardAction = () => {
    if (isCardAdded) return;
    initializeTransaction().then(undefined);
  };

  const initializeTransaction = async () => {
    setState(
      produce((draft) => {
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
      dispatch(setIsCardAddedToTrue());
      setState(
        produce((draft) => {
          draft.isTranxInitLoading = false;
          draft.tranxInitError = resultAction.error.message;
        })
      );
    }
  };

  const closeAddBvnModal = () => {
    setState(
      produce((draft) => {
        draft.isBvnModalVisible = false;
      })
    );
  };

  const handleConfirmBvn = async (formValues) => {
    const payload = {
      bvn: formValues.bvn,
      dateOfBirth: moment(formValues.dateOfBirth).toISOString(),
    };

    setState(
      produce((draft) => {
        draft.isAddBvnLoading = true;
      })
    );

    const resultAction = await dispatch(startAddBvnAction(payload));

    if (addBvn.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isAddBvnLoading = false;
          draft.isBvnModalVisible = false;
          draft.isAddBvnSuccessModalVisible = true;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isAddBvnLoading = false;
          draft.addBvnError = resultAction.error.message;
        })
      );
    }
  };

  const closeAddBvnSuccessModal = () => {
    setState(
      produce((draft) => {
        draft.isAddBvnSuccessModalVisible = false;
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
      <div className=" h-full min-h-screen px-12 flex flex-col justify-center fadeIn">
        <div className="welcome-wrap card flex flex-col justify-center items-center">
          <div className="welcome-image--wrap">
            <img src={UserIcon} alt={"Wealth Buddy"} />
          </div>
          <div className="welcome-text--wrap">
            <h1 className="text-4xl font-medium pt-12 mb-6">
              <span className="text-wb-primary">Welcome, </span>{" "}
              {`${customerDetails.otherNames} ${customerDetails.lastName}`}
            </h1>

            <p className="text-gray-600 leading-normal">
              To continue your savings and investment journey, you are required
              to provide your BVN and fund your wallet to begin saving.
            </p>
          </div>
          <div className="pt-24 welcome-todo w-full flex justify-between items-center">
            <div
              className={`flex quick-action font-medium justify-start items-center ${
                isBVNAdded ? `card-success` : `card-pending`
              }`}
              onClick={addBvn}
            >
              <img src={Card} alt="" />
              <span>Set up your BVN</span>
            </div>
            <div
              className={`flex quick-action justify-start font-medium items-center ${
                isCardAdded ? `card-success` : `card-pending`
              }`}
              onClick={startAddCardAction}
            >
              <img src={BVN} alt="" />
              <span>Add a card</span>
            </div>
          </div>
        </div>
      </div>

      <AddBvnModal
        isVisible={state.isBvnModalVisible}
        addBvnLoading={state.isAddBvnLoading}
        addBvnError={state.addBvnError}
        close={closeAddBvnModal}
        confirmBvn={handleConfirmBvn}
      />

      <AddBvnSuccessModal
        isVisible={state.isAddBvnSuccessModalVisible}
        close={closeAddBvnSuccessModal}
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
  account: state.account.data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchVerifyFundWalletWithNewCard: (payload, meta) =>
    dispatch(verifyFundWalletWithNewCard(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
