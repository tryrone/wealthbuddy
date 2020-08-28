import React, { Fragment } from "react";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";
import { formatCurrency } from "utils";
import { connect } from "react-redux";

const ConfirmCancelSavingsModal = ({
  isVisible,
  closeModal,
  cancelSavings,
  isCancelSavingsLoading,
  cancelSavingsError,
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
        </div>

        {isCancelSavingsLoading ? (
          <div className="flex flex-col items-center mt-8">
            <Loading text="Deleting Your Savings." />
          </div>
        ) : (
          <Fragment>
            {cancelSavingsError && (
              <div className="w-72 text-xs text-left mt-8 ">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {cancelSavingsError}
                </p>
              </div>
            )}

            <div className="flex flex-col items-center mb-6 confirm-cancel">
              <h1 className="text-2xl font-medium mb-2 max-heading color-red">
                Are you sure you want delete this savings?
              </h1>
              <p className="text-center text-gray-500 leading-normal">
                This savings will automatically be cancelled for members you
                have invited.
              </p>
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
                onClick={cancelSavings}
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

export default ConfirmCancelSavingsModal;
