import { useFormikContext } from "formik";
import React, { Fragment, useEffect } from "react";
import { addBankAccount,  addBankAccountFail, } from "state/ducks/addBankAccount/actions";
import { connect } from "react-redux";

const Alert = ({ message, color }) => (
  <div
    className={`w-full mt-5 p-3 bg-${color}-200 text-${color}-700 rounded text-xs text-center font-medium`}
  >
    {message}
  </div>
);

const AddBankModalVerification = ({
  addBankAccountLoading,
  addBankAccountError,
  addBankAccountData,
  dispatchAddBankAccount,
  dispatchAddBankAccountFail,
  setBankId,
  ...props
}) => {
  const { values, setFieldValue } = useFormikContext();
  const { accountNumber, bankName } = values;
  const markAsValid = () => setFieldValue(props.name, true);
  const markAsInvalid = () => setFieldValue(props.name, false);

  useEffect(() => {
    let isCurrent = true;

    if (accountNumber.length === 10 && bankName !== "") {
      if (isCurrent) {
        dispatchAddBankAccount(values, { markAsValid });
      }
    } else {
      dispatchAddBankAccountFail(null);
      markAsInvalid();
    }

    return () => {
      isCurrent = false;
    };
  }, [bankName, accountNumber, setFieldValue, props.name]);

  useEffect(() => setBankId(addBankAccountData.id), [addBankAccountData]);

  return (
    <Fragment>
      {addBankAccountLoading && (
        <Alert color="blue" message="Verifying Bank Account" />
      )}
      {addBankAccountError && (
        <Alert color="red" message={addBankAccountError} />
      )}
      {addBankAccountData.accountName && (
        <Alert color="green" message={addBankAccountData.accountName} />
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  addBankAccountLoading: state.addBankAccount.loading,
  addBankAccountError: state.addBankAccount.error,
  addBankAccountData: state.addBankAccount.data,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddBankAccount: (payload, meta) =>
    dispatch(addBankAccount(payload, meta)),
  dispatchAddBankAccountFail: (payload, meta) =>
    dispatch(addBankAccountFail(payload, meta)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBankModalVerification);
