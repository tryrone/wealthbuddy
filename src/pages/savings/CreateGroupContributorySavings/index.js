import React, { Fragment, useState } from "react";
import CreateSavings from "./components/CreateSavings";
import ConfirmSavings from "./components/ConfirmSavings";
import { SavingsFrequency, SavingsType } from "constants/enums";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AddDescriptionModal from "./components/AddDescriptionModal";
import produce from "immer";
import DisclaimerModal from "./components/DisclaimerModal";
import { createGroupContributorySavings } from "state/slices/savings";
import CreateSavingsSuccessModal from "./components/CreateSavingsSuccessModal";
import "./styles.css";
import FundSavingsModal from "./components/FundSavingsModal";

const GroupContributorySavings = ({ savingsConfiguration }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.GroupContributorySavings
  );

  const [state, setState] = useState({
    showCreationPage: true,
    showConfirmationPage: false,
    showAddDescriptionModal: false,
    showFundSavingsModal: false,
    showDisclaimerModal: false,
    showCreateSavingsSuccessModal: false,
    isCreateLoading: false,
    createError: null,
    formValues: {
      name: "",
      amount: "",
      frequency: SavingsFrequency.Weekly.toString(),
      duration: "",
      description: "",
      applyInterest: true,
      participants: [],
      file: "",
      imagePreviewUrl: null,
      allowCardDebit: null,
      cardId: "",
    },
  });

  const onSubmitCreatePersonalSavings = (values) => {
    values = {
      ...values,
      duration: values.participants.length,
    };

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

  const handleCloseDescriptionModal = () => {
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
        draft.showFundSavingsModal = true;
        draft.formValues.description = description;
      })
    );
  };

  const handleCloseFundSavingsModal = () => {
    setState(
      produce((draft) => {
        draft.showFundSavingsModal = false;
      })
    );
  };

  const handleSubmitFundSavingsForm = ({ cardId, allowCardDebit }) => {
    setState(
      produce((draft) => {
        draft.showFundSavingsModal = false;
        draft.showDisclaimerModal = true;
        draft.formValues.allowCardDebit = allowCardDebit;
        draft.formValues.cardId = cardId;
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
      participants: state.formValues.participants.map((participant, index) => ({
        order: index + 1,
        email: participant.email,
      })),
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(formValues));
    formData.append("file", state.formValues.file);

    setState(
      produce((draft) => {
        draft.isCreateLoading = true;
      })
    );
    const resultAction = await dispatch(
      createGroupContributorySavings(formData)
    );
    if (createGroupContributorySavings.fulfilled.match(resultAction)) {
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
          close={handleCloseDescriptionModal}
        />

        <FundSavingsModal
            formValues={state.formValues}
            isVisible={state.showFundSavingsModal}
            onSubmit={handleSubmitFundSavingsForm}
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

export default connect(mapStateToProps)(GroupContributorySavings);
