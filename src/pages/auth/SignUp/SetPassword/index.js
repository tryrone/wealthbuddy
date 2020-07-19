import React, { Fragment } from "react";
import Icon from "assets/img/passwordIcon.png";
import "../../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { login } from "state/ducks/user/actions";
import { Link, Redirect } from "react-router-dom";
import { completeVerifyEmail } from "../../../../state/ducks/completeVerifyEmail/actions";

const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().label("Password").required(),
  confirmPassword: yup
    .string()
    .label("Password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

const SignUpSetPassword = ({
  history,
  loading,
  error,
  verificationID,
  dispatchLogin,
}) => {
  const handleOnSubmit = (formValues, formikProps) => {
    const payload = { ...formValues, verificationID };
    const meta = { formikProps, history };
    dispatchCompleteVerifyEmail(payload, meta);
  };

  if (!verificationID) {
    return <Redirect to="/auth/sign-up" />;
  }

  return (
    <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
      <div className="flex flex-col items-center bg-white fadeIn login-fieldset auth-modal">
        <div className="flex flex-col items-center setup-success mb-6">
          <i className="w-10 mb-4">
            <img src={Icon} alt="" />
          </i>
          <h1 className="text-xl font-medium mb-2">Set Password</h1>
          <p className="text-gray-500 text-center leading-normal">
            Enter a password that will be easy for you and difficult for others
            to remember
          </p>
        </div>

        {loading ? (
          <Loading text="Verifying your password" />
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
              {({ handleSubmit, isValid }) => {
                return (
                  <Fragment>
                    <Form
                      className="flex flex-col items-center"
                      onSubmit={handleSubmit}
                    >
                      <fieldset className="mb-5">
                        <label className="block text-xs mb-2">Password</label>
                        <Field
                          placeholder="Enter Password"
                          type="password"
                          id="password"
                          name="password"
                          className="block w-72 text-xs p-3 border border-gray-400 rounded"
                        />
                      </fieldset>

                      <fieldset className="mb-5">
                        <label className="block text-xs mb-2">Password</label>
                        <Field
                          placeholder="Re-Enter Password"
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="block w-72 text-xs p-3 border border-gray-400 rounded"
                        />
                      </fieldset>

                      <button
                        type="submit"
                        className="mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                        onSubmit={handleSubmit}
                        disabled={!isValid}
                      >
                        Done
                      </button>
                    </Form>

                    <div className="mt-8 ">
                      <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link to="/auth/login" className="text-wb-primary">
                          Sign In
                        </Link>
                      </p>
                    </div>
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
  loading: state.user.loginLoading,
  error: state.user.loginError,
  verificationID: state.signUpParams.emailVerificationID,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload, meta) => dispatch(login(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSetPassword);
