import React, { Fragment } from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import { formatCurrency } from "utils";
import { FaUsers } from "react-icons/fa/index";

const Icon = () => (
  <div className="p-5 bg-purple-200 text-purple-600 rounded-md mb-4">
    <FaUsers className="text-2xl" />
  </div>
);

const WithdrawSavingsSuccess = ({
  isVisible,
  closeModal,
  amountToDisburse,
}) => {
  return (
    isVisible && (
      <SuccessModal
        IconComponent={Icon}
        title="Withdrawal request successful"
        subtitle={
          <Fragment>
            Your request to withdraw{" "}
            <span className="font-bold text-wb-primary">
              ₦{formatCurrency(amountToDisburse)}
            </span>{" "}
            was sent to group members for approval.
          </Fragment>
        }
        buttonTitle="Done"
        closeModal={closeModal}
      />
    )
  );
};

export default WithdrawSavingsSuccess;
