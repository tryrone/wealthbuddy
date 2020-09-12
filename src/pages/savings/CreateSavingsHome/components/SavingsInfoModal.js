import React, { useEffect } from "react";
import { closeModalOnOutsideClick } from "utils";

const SavingsInfoModal = ({ isVisible, savings, onClose: handleClose }) => {
  useEffect(() => {
    isVisible && closeModalOnOutsideClick(handleClose);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    isVisible && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-medium mb-2">{savings.heading}</h1>
          </div>

          <p className="w-full text-gray-300">
            {savings.subheading}
          </p>

          <div className="flex justify-center mt-10">
            <div
              onClick={handleClose}
              className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
            >
              Close
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SavingsInfoModal;
