import React, { Fragment, useState } from "react";
import CreatePersonalSavings from "./CreatePersonalSavings";
import ConfirmPersonalSavings from "./ConfirmPersonalSavings";
import { SavingsFrequency, SavingsType } from "constants/enums";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
// import moment from "moment";

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
  });

  const [showCreationPage, setShowCreationPage] = useState(true);
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);

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

  // const date = moment(formValues.startDate).toISOString();

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
          onClickBack={handleClickBackOnConfirmationPage}
        />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  savingsConfiguration: state.savingsConfiguration.data,
});

export default connect(mapStateToProps)(PersonalSavings);
