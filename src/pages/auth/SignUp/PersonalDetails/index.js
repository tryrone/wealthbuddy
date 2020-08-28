import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "static/logo.svg";
import "../../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { startVerifyEmail } from "state/ducks/startVerifyEmail/actions";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  referralCode: "",
};

const validationSchema = yup.object().shape({
  firstName: yup.string().label("First name").required(),
  lastName: yup.string().label("First name").required(),
  email: yup.string().label("Email").email().required(),
  phoneNumber: yup.string().label("Phone number").required(),
  referralCode: yup.string().label("Referral code"),
});

const SignUpPersonalDetails = ({
  history,
  loading,
  error,
  dispatchStartVerifyEmail,
}) => (
  <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
    <div className="flex flex-col items-center bg-white fadeIn login-fieldset onboarding-wrap auth-modal">
      <div className="flex flex-col items-center mb-6">
        <i className="w-10 mb-4">
          <img src={Logo} alt="" />
        </i>
        <h1 className="text-2xl font-medium">Sign Up</h1>
        <p className="text-center leading-normal">
          We'll get you set up in less than one minute
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
              dispatchStartVerifyEmail(formValues, { formikProps, history });
            }}
          >
            {({ handleSubmit, isValid }) => {
              return (
                <Fragment>
                  <Form
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                  >
                    <fieldset className="mb-5">
                      <label className="block text-xs mb-2">First name</label>
                      <Field
                        placeholder="ex. Adebanjo"
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                      />
                    </fieldset>

                    <fieldset className="mb-5">
                      <label className="block text-xs mb-2">Last name</label>
                      <Field
                        placeholder="ex. Adebowale"
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                      />
                    </fieldset>

                    <fieldset className="mb-5">
                      <label className="block text-xs mb-2">Email</label>
                      <Field
                        placeholder="my@email.com"
                        type="email"
                        id="email"
                        name="email"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                      />
                    </fieldset>

                    <fieldset className="mb-5">
                      <label className="block text-xs mb-2">Phone number</label>
                      <Field
                        placeholder="08012345678"
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                      />
                    </fieldset>

                    <fieldset className="mb-5">
                      <label className="block text-xs mb-2">
                        Referral code (optional)
                      </label>
                      <Field
                        placeholder=""
                        type="text"
                        id="referralCode"
                        name="referralCode"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                      />
                    </fieldset>

                    <button
                      type="submit"
                      className="mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                      onSubmit={handleSubmit}
                      disabled={!isValid}
                    >
                      Next
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

const mapStateToProps = (state) => ({
  loading: state.startVerifyEmail.loading,
  error: state.startVerifyEmail.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchStartVerifyEmail: (payload, meta) =>
    dispatch(startVerifyEmail(payload, meta)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPersonalDetails);
