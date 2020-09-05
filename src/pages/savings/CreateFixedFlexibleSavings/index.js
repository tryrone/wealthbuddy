import React, { Fragment, useState } from "react";
import CreateSavings from "./components/CreateSavings";
import ConfirmSavings from "./components/ConfirmSavings";
import { SavingsType } from "constants/enums";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import produce from "immer";
import DisclaimerModal from "./components/DisclaimerModal";
import { createFixedFlexibleSavings } from "state/slices/savings";
import moment from "moment";
import CreateSavingsSuccessModal from "./components/CreateSavingsSuccessModal";
import { convertYmdJsonToIsoDate } from "utils";

const CreateFixedFlexibleSavings = ({ savingsConfiguration }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.FixedFlexibleSavings
  );

  const [state, setState] = useState({
    showCreationPage: true,
    showConfirmationPage: false,
    showDisclaimerModal: false,
    showCreateSavingsSuccessModal: false,
    isCreateLoading: false,
    createError: null,
    formValues: {
      name: "",
      amount: "",
      maturityDate: "",
      applyInterest: true,
      file: "",
      imagePreviewUrl: null,
    },
  });

  const onSubmitCreateFixedSavings = (values) => {
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
      amountToSave: state.formValues.amount,
      MaturityDate: moment(convertYmdJsonToIsoDate(state.formValues.maturityDate)).toISOString(),
      ApplyInterest: state.formValues.applyInterest,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(formValues));
    formData.append("file", state.formValues.file);

    setState(
      produce((draft) => {
        draft.isCreateLoading = true;
      })
    );
    const resultAction = await dispatch(createFixedFlexibleSavings(formData));
    if (createFixedFlexibleSavings.fulfilled.match(resultAction)) {
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
          onSubmit={onSubmitCreateFixedSavings}
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

export default connect(mapStateToProps)(CreateFixedFlexibleSavings);
