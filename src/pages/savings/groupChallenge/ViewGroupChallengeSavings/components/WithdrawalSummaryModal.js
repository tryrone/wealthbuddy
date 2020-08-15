import React, { Fragment } from "react";
import { connect } from "react-redux";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { formatCurrency } from "utils";
import { FaUsers } from "react-icons/fa/index";

const WithdrawalSummaryModal = ({
  isVisible,
  closeModal,
  savings,
  withdrawalDetails,
  completeWithdrawSavings,
  completeWithdrawLoading,
  completeWithdrawError,
}) => {
  if (!isVisible) {
    return null;
  }

  const { amountSaved, amountToDisburse, penalty } = withdrawalDetails;
  const balance = amountSaved - amountSaved - penalty;

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={closeModal}>
          <CloseModalIcon />
        </span>
        <div className="flex flex-col items-center mb-0">
          <div className="p-5 bg-purple-200 text-purple-600 rounded-md mb-4">
            <FaUsers className="text-2xl" />
          </div>
          <h1 className="text-2xl font-medium mb-2">Withdrawal summary</h1>
        </div>

        {completeWithdrawLoading ? (
          <div className="flex flex-col items-center mt-8">
            <Loading text="Funding Wallet" />
          </div>
        ) : (
          <Fragment>
            {completeWithdrawError && (
              <div className="w-72 text-xs text-left mt-8 ">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {completeWithdrawError}
                </p>
              </div>
            )}
            <div className="confirm-transaction">
              <div className="confirm-wrap">
                <div className="confirm-item">
                  <span className="plan-name">Current balance</span>
                  <span className="plan-type font-medium">
                    {`₦${formatCurrency(amountSaved)}`}
                  </span>
                </div>
                <div className="confirm-item">
                  <span className="plan-name">Withdrawal</span>
                  <span className="plan-type font-medium">
                    {`₦${formatCurrency(amountToDisburse)}`}
                  </span>
                </div>
                <div className="confirm-item">
                  <span className="plan-name">Penalty</span>
                  <span className="plan-type font-medium color-red">
                    {`₦${formatCurrency(penalty)}`}
                  </span>
                </div>
                <div className="confirm-item">
                  <span className="plan-name text-wb-primary">Balance</span>
                  <span className="plan-type font-medium text-wb-primary">
                    {`₦${formatCurrency(balance)}`}
                  </span>
                </div>
              </div>
            </div>
            <div className="nav-buttons flex justify-center">
              <div
                onClick={closeModal}
                className=" w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
              >
                Cancel
              </div>
              <button
                className={` w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
                onClick={completeWithdrawSavings}
              >
                Proceed
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  completeWithdrawLoading: state.savings.completeWithdrawLoading,
  completeWithdrawError: state.savings.completeWithdrawError,
});

export default connect(mapStateToProps)(WithdrawalSummaryModal);
