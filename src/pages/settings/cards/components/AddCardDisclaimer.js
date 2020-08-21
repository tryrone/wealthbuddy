import React, { useEffect } from "react";
import CardIcon from "assets/img/cardIcon.png";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { closeModalOnOutsideClick } from "utils";

const AddCardDisclaimerModal = ({
  isVisible,
  onClose: handleClose,
  onProceed: handleOnProceed,
}) => {
  useEffect(() => {
    isVisible && closeModalOnOutsideClick(handleClose);
  }, [isVisible]);

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn">
          <span className="closeModal" onClick={handleClose}>
            <CloseModalIcon />
          </span>
          <div className="flex flex-col items-center mb-0">
            <i className="w-20 mb-4">
              <img src={CardIcon} alt="" />
            </i>
          </div>
          <h1 className="text-2xl font-medium mb-2">Add New Card</h1>
          <p className="text-center text-gray-500 leading-normal">
            A sum of <span className="font-medium text-black">₦100</span> will
            be required from your card for verification.
          </p>
          <div className="nav-buttons flex justify-center">
            <button
              type="button"
              onClick={handleClose}
              className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Back
            </button>
            <button
              type="button"
              className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
              onClick={handleOnProceed}
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default AddCardDisclaimerModal;
