import React, { Fragment, useEffect, useState } from "react";
import Icon from "assets/img/emailConfirm.png";
import "../../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { connect, useDispatch } from "react-redux";
import ReactCodeInput from "react-code-input";
import { completeVerifyEmail } from "state/ducks/completeVerifyEmail/actions";
import { resendVerifyEmail } from "state/slices/customer";
import { Redirect } from "react-router-dom";
import produce from "immer";

const SignUpConfirmEmail = ({
  history,
  isCompleteVerifyEmailLoading,
  completeVerifyEmailError,
  signUpParams,
  dispatchCompleteVerifyEmail,
}) => {
  const initialValues = { otp: "" };

  const validationSchema = yup.object().shape({
    otp: yup.string().label("OTP").length(6).required(),
  });

  const dispatch = useDispatch();

  const [state, setState] = useState({
    isResendVerifyEmailLoading: false,
    resendVerifyEmailError: null,
  });

  if (!signUpParams.emailVerificationID) {
    return <Redirect to="/auth/sign-up" />;
  }

  const handleOnSubmit = (formValues, formikProps) => {
    const payload = {
      ...formValues,
      verificationID: signUpParams.emailVerificationID,
    };
    const meta = { formikProps, history };
    dispatchCompleteVerifyEmail(payload, meta);
  };

  const handleResendVerifyEmail = async (e) => {
    e.preventDefault();

    const data = { email: signUpParams.email };

    setState(
      produce((draft) => {
        draft.isResendVerifyEmailLoading = true;
        draft.resendVerifyEmailError = null;
      })
    );

    const resultAction = await dispatch(resendVerifyEmail(data));

    if (resendVerifyEmail.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isResendVerifyEmailLoading = false;
          draft.resendVerifyEmailError = null;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.isResendVerifyEmailLoading = false;
          draft.resendVerifyEmailError = resultAction.error.message;
        })
      );
    }
  };

  return (
    <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
      <div className="flex flex-col items-center bg-white fadeIn login-fieldset auth-modal">
        <div className="flex flex-col items-center setup-success mb-6">
          <i className="w-10 mb-4">
            <img src={Icon} alt="" />
          </i>
          <h1 className="text-xl font-medium mb-2">
            Confirm your email address
          </h1>
          <p className="text-gray-500 text-center leading-normal">
            We sent a 6 digit code to please enter it below
          </p>
        </div>

        {isCompleteVerifyEmailLoading ? (
          <Loading text="Verifying your email" />
        ) : state.isResendVerifyEmailLoading ? (
          <Loading text="Resending token" />
        ) : (
          <Fragment>
            {completeVerifyEmailError && (
              <div className="w-72 mb-8 text-xs text-left">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {completeVerifyEmailError}
                </p>
              </div>
            )}

            {state.resendVerifyEmailError && (
              <div className="w-72 mb-8 text-xs text-left">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {state.resendVerifyEmailError}
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
                          name="number"
                          placeholder="*"
                          fields={6}
                          onChange={(value) => setFieldValue("otp", value)}
                          inputMode="numeric"
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

                      <div className="mt-8 ">
                        <p className="text-sm text-gray-500">
                          Did not receive an email?{" "}
                          <a
                            className="text-wb-primary"
                            href="/"
                            onClick={handleResendVerifyEmail}
                          >
                            Resend Token
                          </a>
                        </p>
                      </div>
                    </Form>
                  </Fragment>
                );
              }}
            </Formik>
          </Fragment>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isCompleteVerifyEmailLoading: state.completeVerifyEmail.loading,
  completeVerifyEmail: state.completeVerifyEmail.error,
  verificationID: state.signUpParams.emailVerificationID,
  signUpParams: state.signUpParams,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCompleteVerifyEmail: (payload, meta) =>
    dispatch(completeVerifyEmail(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpConfirmEmail);
