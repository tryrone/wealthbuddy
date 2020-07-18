import React, { Fragment } from "react";
import Icon from "assets/img/emailConfirm.png";
import "../../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { login } from "state/ducks/user/actions";
import ReactCodeInput from "react-code-input";

const initialValues = {
  otp: "",
};

const validationSchema = yup.object().shape({
  otp: yup.string().label("OTP").length(6).required(),
});

const SignUpConfirmEmail = ({ history, loading, error, dispatchLogin }) => (
  <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
    <div className="flex flex-col items-center bg-white fadeIn login-fieldset auth-modal">
      <div className="flex flex-col items-center setup-success mb-6">
        <i className="w-10 mb-4">
          <img src={Icon} alt="" />
        </i>
        <h1 className="text-xl font-medium mb-2">Confirm your email address</h1>
        <p className="text-gray-500 text-center leading-normal">
          We sent a 6 digit code to please enter it below
        </p>
      </div>

      {loading ? (
        <Loading text="Creating your Account" />
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
            onSubmit={(formValues, formikProps) => {
              dispatchLogin(formValues, { formikProps, history });
            }}
          >
            {({ handleSubmit, isValid, setFieldValue, values }) => {
              return (
                <Fragment>
                  <Form
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                  >
                    <fieldset className="is-six--code">
                      {values.otp}
                      <ReactCodeInput
                        type="number"
                        placeholder="*"
                        fields={6}
                        onChange={(value) => setFieldValue("otp", value)}
                      />
                    </fieldset>

                    <button
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
    </div>
  </section>
);

const mapStateToProps = (state) => ({
  loading: state.user.loginLoading,
  error: state.user.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload, meta) => dispatch(login(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpConfirmEmail);
