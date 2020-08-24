import React, { useContext } from "react";
import BankIcon from "assets/img/bankIcon.png";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import AddBankContext from "contexts/AddBankContext";

const NoBankYetModal = () => {
  const {
    isNoBankYetModalOpen,
    closeNoBankYetModal,
    continueToAddBankDetails,
  } = useContext(AddBankContext);

  return (
    isNoBankYetModalOpen && (
      <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset empty-modal">
          <span className="closeModal" onClick={closeNoBankYetModal}>
            <CloseModalIcon />
          </span>
          <div className="flex flex-col items-center mb-0">
            <i className="mb-8">
              <img className="empty-bank--icon" src={BankIcon} alt="" />
            </i>
          </div>
          <p className="text-center card-header text-gray-500 font-normal leading-normal">
            Saving and investing money is important, and so is cashing out.
            Enter your bank details for withdrawals.
          </p>
          <div className="nav-buttons flex justify-center">
            <button
              className="px-6 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
              onClick={continueToAddBankDetails}
            >
              Add Bank Details
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default NoBankYetModal;
