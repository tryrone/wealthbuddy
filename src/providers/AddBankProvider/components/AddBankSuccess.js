import React, { useContext } from "react";
import AddBankContext from "contexts/AddBankContext";
import SuccessModal from "shared-components/modals/SuccessModal";
import BankIconSuccess from "assets/img/bankIconSuccess.png";

const AddBankSuccess = () => {
  const { isAddBankSuccessModalOpen, closeAddBankSuccessModal } = useContext(
    AddBankContext
  );

  return (
    isAddBankSuccessModalOpen && (
      <SuccessModal
        title="Success"
        subtitle="You have successfully added a Bank Account."
        icon={BankIconSuccess}
        buttonTitle="Done"
        closeModal={closeAddBankSuccessModal}
      />
    )
  );
};

export default AddBankSuccess;
