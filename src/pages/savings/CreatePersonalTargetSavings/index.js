import React, { Fragment, useState } from "react";
import CreateSavings from "./CreateSavings";
import ConfirmSavings from "./ConfirmSavings";
import { SavingsFrequency, SavingsType } from "constants/enums";
import { useLocation } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import DisclaimerModal from "./DisclaimerModal";
import { createPersonalTargetSavings } from "state/slices/savings";
import CreateSavingsSuccessModal from "./CreateSavingsSuccessModal";
import moment from "moment";
import produce from "immer";
import "./styles.css";

const CreatePersonalTargetSavings = ({ savingsConfiguration }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { state: locationState } = useLocation();
  const predefinedName = locationState.params.name;

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.PersonalTargetSavings
  );

  const [state, setState] = useState({
    showCreationPage: true,
    showConfirmationPage: false,
    showDisclaimerModal: false,
    showCreateSavingsSuccessModal: false,
    isCreateLoading: false,
    createError: null,
    formValues: {
      name: predefinedName || "",
      amount: "",
      frequency: SavingsFrequency.Daily.toString(),
      startDate: "",
      duration: "",
      applyInterest: true,
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
        draft.showDisclaimerModal = true;
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
      })
    );
  };

  const handleDisclaimerProceed = async () => {
    const formValues = {
      name: state.formValues.name,
      amount: state.formValues.amount,
      duration: state.formValues.duration,
      schedule: state.formValues.frequency,
      startDate: moment(state.formValues.startDate).toISOString(),
      allowCardDebit: state.formValues.allowCardDebit,
      cardId: state.formValues.cardId,
      savingsType: SavingsType.PersonalTargetSavings,
      applyInterest: state.formValues.applyInterest,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(formValues));
    formData.append("file", state.formValues.file);

    setState(
      produce((draft) => {
        draft.isCreateLoading = true;
      })
    );
    const resultAction = await dispatch(createPersonalTargetSavings(formData));
    if (createPersonalTargetSavings.fulfilled.match(resultAction)) {
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

export default connect(mapStateToProps)(CreatePersonalTargetSavings);
