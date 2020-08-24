import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import BankIconSuccess from "assets/img/bankIconSuccess.png";

const AddBankSuccess = ({
  isAddBankSuccessModalOpen,
  closeAddBankSuccessModal,
}) =>
  isAddBankSuccessModalOpen && (
    <SuccessModal
      title="Success"
      subtitle="You have successfully added a Bank Account."
      icon={BankIconSuccess}
      buttonTitle="Done"
      closeModal={closeAddBankSuccessModal}
    />
  );

export default AddBankSuccess;
