import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";
import { formatCurrency } from "utils";

const WithdrawSavingsSuccess = ({
  isVisible,
  closeModal,
  amountToDisburse,
}) => {
  if (!isVisible) {
    return null;
  }

  return (
    <SuccessModal
      title="Success"
      subtitle={
        <span>
          <span className="font-bold color-black">
            ₦{formatCurrency(amountToDisburse)}
          </span>{" "}
          successfully added to your Wallet.
        </span>
      }
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={closeModal}
    />
  );
};

export default WithdrawSavingsSuccess;
