import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { fundWalletWithExistingCard } from "state/ducks/fundWalletWithExistingCard/actions";
import { startFundWalletWithNewCard } from "state/ducks/startFundWalletWithNewCard/actions";
import NumberFormat from "react-number-format";

const WithdrawalSummaryModal = ({
  isVisible,
  closeModal,
  startFundWithNewCardLoading,
  startFundWithNewCardError,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={closeModal}>
          <CloseModalIcon />
        </span>
        <div className="flex flex-col items-center mb-0">
          <i className="w-20 mb-4">
            <img src={CardIcon} alt="" />
          </i>
          <h1 className="text-2xl font-medium mb-2">Withdraw from savings</h1>
        </div>

        {startFundWithNewCardLoading ? (
          <div className="flex flex-col items-center mt-8">
            <Loading text="Funding Wallet" />
          </div>
        ) : (
          <Fragment>
            {startFundWithNewCardError && (
              <div className="w-72 text-xs text-left mt-8 ">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {startFundWithNewCardError}
                </p>
              </div>
            )}
            <div className="confirm-transaction">
              <div className="confirm-wrap">
                <div>
                  <div className="confirm-item">
                    <span className="plan-name">Goal Name</span>
                    <span className="plan-type font-medium">
                      {withdrawSavings.name}
                    </span>
                  </div>
                  <div className="confirm-item">
                    <span className="plan-name">Goal Type</span>
                    <span className="plan-type font-medium">
                      {withdrawSavings.type === 1
                        ? "Personal Target Savings"
                        : withdrawSavings.type === 2
                        ? "Fixed Flexible Savings"
                        : withdrawSavings.type === 3
                        ? "Fixed Lock Saving"
                        : "Group Savings"}
                    </span>
                  </div>
                  <div className="confirm-item">
                    <span className="plan-name">Amount to withdraw</span>
                    <span className="plan-type font-medium">
                      {`₦${formatMoney(
                        confirmWithdrawSavings.data.amountToDisburse
                      )}`}
                    </span>
                  </div>
                  <div className="confirm-item">
                    <span className="plan-name">Penalty</span>
                    <span className="plan-type font-medium color-red">
                      {`₦${formatMoney(confirmWithdrawSavings.data.penalty)}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fundWithExistingCardLoading: state.fundWalletWithExistingCard.loading,
  fundWithExistingCardError: state.fundWalletWithExistingCard.error,
  startFundWithNewCardLoading: state.startFundWalletWithNewCard.loading,
  startFundWithNewCardError: state.startFundWalletWithNewCard.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFundWalletWithExistingCard: (payload, meta) =>
    dispatch(fundWalletWithExistingCard(payload, meta)),
  dispatchStartFundWalletWithNewCard: (payload, meta) =>
    dispatch(startFundWalletWithNewCard(payload, meta)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithdrawalSummaryModal);
