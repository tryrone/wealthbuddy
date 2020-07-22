import React, { Fragment } from "react";
import Loading from "shared-components/Loading";
import BankIconSuccess from "assets/img/bankIconSuccess.png";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { connect } from "react-redux";
import ReactCodeInput from "react-code-input";
import { verifyAddBankAccount } from "state/ducks/verifyAddBankAccount/actions";

const initialValues = {
  otp: "",
};

const validationSchema = yup.object().shape({
  otp: yup.string().label("OTP").length(6).required(),
});

const ConfirmOTP = ({
  loading,
  error,
  bankId,
  tokenReference,
  dispatchVerifyAddBankAccount,
  showAddBankSuccess,
}) => {
  const handleOnSubmit = (formValues, formikProps) => {
    const payload = {
      verificationId: tokenReference,
      otp: formValues.otp,
      id: bankId,
    };

    const meta = { formikProps, showAddBankSuccess };
    dispatchVerifyAddBankAccount(payload, meta);
  };

  return (
    <Fragment>
      <div className="flex flex-col items-center setup-success mb-6">
        <i className="w-10 mb-4">
          <img src={BankIconSuccess} alt="" />
        </i>
        <h1 className="text-xl font-medium mb-2">Account verification</h1>
        <p className="text-center text-gray-500 leading-normal">
          We sent a 6 digit code to your email please enter it below
        </p>
      </div>

      {loading ? (
        <Loading text="Verifying your email" />
      ) : (
        <Fragment>
          {error && (
            <div className="w-72 mb-8 text-xs text-left">
              <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                {error}
              </p>
            </div>
          )}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount={true}
            onSubmit={handleOnSubmit}
          >
            {({ handleSubmit, isValid, setFieldValue, values }) => {
              return (
                <Fragment>
                  <Form
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                  >
                    <fieldset className="is-six--code">
                      <ReactCodeInput
                        type="number"
                        placeholder="*"
                        fields={6}
                        onChange={(value) => setFieldValue("otp", value)}
                      />
                    </fieldset>

                    <button
                      type="submit"
                      className="mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                      disabled={!isValid}
                      onClick={handleSubmit}
                    >
                      Confirm
                    </button>
                  </Form>
                </Fragment>
              );
            }}
          </Formik>
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.verifyAddBankAccount.loading,
  error: state.verifyAddBankAccount.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchVerifyAddBankAccount: (payload, meta) =>
    dispatch(verifyAddBankAccount(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmOTP);
