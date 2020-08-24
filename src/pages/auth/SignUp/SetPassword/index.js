import React, { Fragment } from "react";
import Icon from "assets/img/passwordIcon.png";
import "../../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { createUser } from "state/ducks/createUser/actions";
import { Link, Redirect } from "react-router-dom";

const initialValues = {
  password: "",
  comparePassword: "",
};

const validationSchema = yup.object().shape({
  password: yup.string().label("Password").required(),
  comparePassword: yup
    .string()
    .label("Password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

const SignUpSetPassword = ({
  history,
  loading,
  error,
  signUpParams,
  dispatchCreateUser,
}) => {
  const handleOnSubmit = (formValues, formikProps) => {
    const payload = {
      ...formValues,
      lastName: signUpParams.lastName,
      otherNames: signUpParams.otherNames,
      phoneNumber: signUpParams.phoneNumber,
      email: signUpParams.email,
      emailVerificationID: signUpParams.emailVerificationID,
    };

    const meta = { formikProps, history };
    dispatchCreateUser(payload, meta);
  };

  if (!signUpParams.emailVerificationID) {
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
                        <label className="block text-xs mb-2">
                          Confirm Password
                        </label>
                        <Field
                          placeholder="Re-Enter Password"
                          type="password"
                          id="comparePassword"
                          name="comparePassword"
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
  loading: state.createUser.loading,
  error: state.createUser.error,
  signUpParams: state.signUpParams,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchCreateUser: (payload, meta) => dispatch(createUser(payload, meta)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpSetPassword);
