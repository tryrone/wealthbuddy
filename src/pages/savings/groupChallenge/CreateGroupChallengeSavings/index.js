import React, { Fragment, useState } from "react";
import CreateSavings from "./components/CreateSavings";
import ConfirmSavings from "./components/ConfirmSavings";
import { SavingsFrequency, SavingsType } from "constants/enums";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddDescriptionModal from "./components/AddDescriptionModal";
import produce from "immer";
import DisclaimerModal from "./components/DisclaimerModal";
import { createGroupChallengeSavings } from "state/slices/savings";
import CreateSavingsSuccessModal from "./components/CreateSavingsSuccessModal";
import "./styles.css";

const Index = ({ savingsConfiguration }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.GroupChallengeSavings
  );

  const [state, setState] = useState({
    showCreationPage: true,
    showConfirmationPage: false,
    showAddDescriptionModal: false,
    showDisclaimerModal: false,
    showCreateSavingsSuccessModal: false,
    isCreateLoading: false,
    createError: null,
    formValues: {
      name: "",
      amount: "",
      frequency: SavingsFrequency.Daily.toString(),
      duration: "",
      description: "",
      applyInterest: true,
      participants: [],
      file: "",
      imagePreviewUrl: null,
    },
  });

  const onSubmitCreatePersonalSavings = (values) => {
    setState(
      produce((draft) => {
        draft.showCreationPage = false;
        draft.showConfirmationPage = true;
        draft.formValues = values;
      })
    );
  };

  const handleClickBackOnConfirmationPage = (e) => {
    e.preventDefault();
    setState(
      produce((draft) => {
        draft.showCreationPage = true;
        draft.showConfirmationPage = false;
      })
    );
  };

  const handleClickLaunchOnConfirmationPage = (e) => {
    e.preventDefault();
    setState(
      produce((draft) => {
        draft.formValues.description = "";
        draft.showAddDescriptionModal = true;
      })
    );
  };

  const handleCloseFundSavingsModal = () => {
    setState(
      produce((draft) => {
        draft.showAddDescriptionModal = false;
      })
    );
  };

  const handleSubmitDescription = ({ description }) => {
    setState(
      produce((draft) => {
        draft.showAddDescriptionModal = false;
        draft.showDisclaimerModal = true;
        draft.formValues.description = description;
      })
    );
  };

  const handleCloseDisclaimerModal = () => {
    setState(
      produce((draft) => {
        draft.showDisclaimerModal = false;
      })
    );
  };

  const handleDisclaimerModalBack = () => {
    setState(
      produce((draft) => {
        draft.showDisclaimerModal = false;
        draft.showAddDescriptionModal = true;
      })
    );
  };

  const handleDisclaimerProceed = async () => {
    const formValues = {
      name: state.formValues.name,
      amount: state.formValues.amount,
      duration: state.formValues.duration,
      schedule: state.formValues.frequency,
      description: state.formValues.description,
      participants: state.formValues.participants,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(formValues));
    formData.append("file", state.formValues.file);

    setState(
      produce((draft) => {
        draft.isCreateLoading = true;
      })
    );
    const resultAction = await dispatch(createGroupChallengeSavings(formData));
    if (createGroupChallengeSavings.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isCreateLoading = false;
          draft.showDisclaimerModal = false;
          draft.showCreateSavingsSuccessModal = true;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isCreateLoading = false;
          draft.createError = resultAction.error.message;
        })
      );
    }
  };

  const handleSuccessModalClose = () => {
    setState(
      produce((draft) => {
        draft.showCreateSavingsSuccessModal = false;
      })
    );
    history.push("/dashboard/savings");
  };

  return (
    <Fragment>
      <div className="px-12 ">
        <CreateSavings
          savingsConfiguration={selectedSavingsConfiguration}
          initialFormValues={state.formValues}
          isVisible={state.showCreationPage}
          onSubmit={onSubmitCreatePersonalSavings}
        />

        <ConfirmSavings
          savingsConfiguration={selectedSavingsConfiguration}
          formValues={state.formValues}
          isVisible={state.showConfirmationPage}
          onBack={handleClickBackOnConfirmationPage}
          onLaunch={handleClickLaunchOnConfirmationPage}
        />

        <AddDescriptionModal
          formValues={state.formValues}
          isVisible={state.showAddDescriptionModal}
          onSubmit={handleSubmitDescription}
          close={handleCloseFundSavingsModal}
        />

        <DisclaimerModal
          isVisible={state.showDisclaimerModal}
          isCreateLoading={state.isCreateLoading}
          createError={state.createError}
          onBack={handleDisclaimerModalBack}
          onProceed={handleDisclaimerProceed}
          close={handleCloseDisclaimerModal}
        />

        <CreateSavingsSuccessModal
          isVisible={state.showCreateSavingsSuccessModal}
          close={handleSuccessModalClose}
        />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  savingsConfiguration: state.savingsConfiguration.data,
});

export default connect(mapStateToProps)(Index);
