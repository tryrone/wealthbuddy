import React, { Fragment, useEffect, useState } from "react";
import CreatePersonalSavings from "./CreatePersonalSavings";
import ConfirmPersonalSavings from "./ConfirmPersonalSavings";
import { SavingsFrequency, SavingsType } from "constants/enums";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import FundSavingsModal from "./FundSavingsModal";
import produce from "immer";
import DisclaimerModal from "./DisclaimerModal";

const PersonalSavings = ({ savingsConfiguration }) => {
  const { state: locationState } = useLocation();
  const predefinedName = locationState.params.name;

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.PersonalTargetSavings
  );

  const [formValues, setFormValues] = useState({
    name: predefinedName || "",
    amount: "",
    frequency: SavingsFrequency.Daily.toString(),
    startDate: "",
    duration: "",
    applyInterest: true,
    file: "",
    imagePreviewUrl: null,
    cardId: "",
  });

  const [showCreationPage, setShowCreationPage] = useState(true);
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);
  const [showFundSavingsModal, setShowFundSavingsModal] = useState(false);
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);

  const onSubmitCreatePersonalSavings = (values) => {
    setFormValues(values);
    setShowCreationPage(false);
    setShowConfirmationPage(true);
  };

  const handleClickBackOnConfirmationPage = (e) => {
    e.preventDefault();
    setShowCreationPage(true);
    setShowConfirmationPage(false);
  };

  const handleClickLaunchOnConfirmationPage = (e) => {
    e.preventDefault();
    setShowFundSavingsModal(true);
    console.log(formValues);
  };

  const handleCloseFundSavingsModal = (e) => {
    e.preventDefault();
    setShowFundSavingsModal(false);
  };

  const handleSubmitFundSavingsForm = ({ cardId }) => {
    setShowFundSavingsModal(false);
    setShowDisclaimerModal(true);
    setFormValues(
      produce((draft) => {
        draft.cardId = cardId;
      })
    );
  };

  const handleCloseDisclaimerModal = () => {
    setShowDisclaimerModal(false);
  };

  const handleDisclaimerModalBack = () => {
    setShowDisclaimerModal(false);
    setShowFundSavingsModal(true);
  };

  return (
    <Fragment>
      <div className="px-12 ">
        <CreatePersonalSavings
          savingsConfiguration={selectedSavingsConfiguration}
          initialFormValues={formValues}
          isVisible={showCreationPage}
          onSubmit={onSubmitCreatePersonalSavings}
        />

        <ConfirmPersonalSavings
          savingsConfiguration={selectedSavingsConfiguration}
          formValues={formValues}
          isVisible={showConfirmationPage}
          onBackClick={handleClickBackOnConfirmationPage}
          onLaunchClick={handleClickLaunchOnConfirmationPage}
        />

        <FundSavingsModal
          isVisible={showFundSavingsModal}
          onSubmit={handleSubmitFundSavingsForm}
          closeModal={handleCloseFundSavingsModal}
        />

        <DisclaimerModal
          isVisible={showDisclaimerModal}
          onBack={handleDisclaimerModalBack}
          onProceed={handleSubmitFundSavingsForm}
          closeModal={handleCloseDisclaimerModal}
        />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  savingsConfiguration: state.savingsConfiguration.data,
});

export default connect(mapStateToProps)(PersonalSavings);
