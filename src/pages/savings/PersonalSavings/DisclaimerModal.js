import React, { Fragment, useEffect } from "react";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import DisclaimerIcon from "assets/img/disclaimerIcon.png";
import { closeModalOnOutsideClick } from "utils";

const DisclaimerModal = ({
  isVisible,
  onBack: handleBack,
  onProceed: handleProceed,
  closeModal,
}) => {
  useEffect(() => {
    if (isVisible) {
      closeModalOnOutsideClick(closeModal);
    }
  }, [0]);

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal" onClick={closeModal}>
            <CloseModalIcon />
          </span>

          <div className="flex flex-col items-center mb-6">
            <i className="w-20 mb-4">
              <img src={DisclaimerIcon} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">Disclaimers</h1>
          </div>

          <div className="disclaimer-text">
            <p className="mb-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="text-gray-300">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="nav-buttons flex justify-center">
            <div
              onClick={handleBack}
              className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </div>

            <button
              type="submit"
              className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
              onSubmit={handleProceed}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DisclaimerModal;
