import React from "react";
import SuccessModal from "shared-components/modals/SuccessModal";
import CardIcon from "assets/img/cardIcon.png";

const SubmitUtilityBillSuccessModal = ({ isVisible, close }) =>
  isVisible && (
    <SuccessModal
      title="Success"
      subtitle="Utility bill added successfully"
      icon={CardIcon}
      buttonTitle="Done"
      closeModal={close}
    />
  );

export default SubmitUtilityBillSuccessModal;
