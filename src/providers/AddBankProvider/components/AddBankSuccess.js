import React, { useContext } from "react";
import AddBankContext from "contexts/AddBankContext";
import SuccessModal from "shared-components/modals/SuccessModal";
import BankIconSuccess from "assets/img/bankIconSuccess.png";

const AddBankSuccess = () => {
  const { isSuccessModalOpen, closeAddBankSuccessModal } = useContext(
    AddBankContext
  );

  if (!isSuccessModalOpen) {
    return null;
  }

  return (
    <SuccessModal
      title="Success"
      subtitle="You have successfully added a Bank Account."
      icon={BankIconSuccess}
      buttonTitle="Done"
      closeModal={closeAddBankSuccessModal}
    />
  );
};

export default AddBankSuccess;
