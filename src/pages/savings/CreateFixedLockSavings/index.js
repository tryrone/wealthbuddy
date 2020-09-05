<<<<<<< HEAD
import React, { Fragment, useState } from 'react';
import CreateSavings from './components/CreateSavings';
import ConfirmSavings from './components/ConfirmSavings';
import { SavingsType } from 'constants/enums';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import produce from 'immer';
import DisclaimerModal from './components/DisclaimerModal';
import { createFixedLockSavings } from 'state/slices/savings';
import moment from 'moment';
import CreateSavingsSuccessModal from './components/CreateSavingsSuccessModal';
import { convertYmdJsonToIsoDate } from "utils";
=======
import React, { Fragment, useState } from "react";
import CreateSavings from "./components/CreateSavings";
import ConfirmSavings from "./components/ConfirmSavings";
import { SavingsType } from "constants/enums";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import produce from "immer";
import DisclaimerModal from "./components/DisclaimerModal";
import { createFixedLockSavings } from "state/slices/savings";
import moment from "moment";
import CreateSavingsSuccessModal from "./components/CreateSavingsSuccessModal";
import FundSavingsModal from "./components/FundSavingsModal";
>>>>>>> 3bf6d984101a097e0b9021dc8edeb8e1648fd62e

const CreateFixedLockSavings = ({ savingsConfiguration }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedSavingsConfiguration = savingsConfiguration.find(
    (sc) => sc.savingsType === SavingsType.FixedLockSavings
  );

  const [state, setState] = useState({
    showCreationPage: true,
    showConfirmationPage: false,
    showFundSavingsModal: false,
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
      allowCardDebit: null,
      cardId: "",
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
        draft.formValues.allowCardDebit = null;
        draft.formValues.cardId = "";
        draft.showFundSavingsModal = true;
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
      })
    );
  };

  const handleDisclaimerProceed = async () => {
    const formValues = {
      name: state.formValues.name,
      amountToSave: state.formValues.amount,
      MaturityDate: moment(convertYmdJsonToIsoDate(state.formValues.maturityDate)).toISOString(),
      ApplyInterest: state.formValues.applyInterest,
      allowCardDebit: state.formValues.allowCardDebit,
      cardId: state.formValues.cardId,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(formValues));
    formData.append("file", state.formValues.file);

    setState(
      produce((draft) => {
        draft.isCreateLoading = true;
      })
    );
    const resultAction = await dispatch(createFixedLockSavings(formData));
    if (createFixedLockSavings.fulfilled.match(resultAction)) {
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

export default connect(mapStateToProps)(CreateFixedLockSavings);
