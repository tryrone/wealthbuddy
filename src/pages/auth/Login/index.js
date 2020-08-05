import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "static/logo.svg";
import "../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import { login } from "state/slices/account";

const Login = ({ history, loading, error, dispatchLogin }) => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/dashboard" } };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().label("Email").email().required(),
    password: yup.string().label("Password").required(),
  });

  const handleLogin = async (values) => {
    const resultAction = await dispatchLogin(values);
    if (login.fulfilled.match(resultAction)) {
      history.replace(from);
    }
  };

  return (
    <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
      <div className="flex flex-col items-center bg-white fadeIn login-fieldset onboarding-wrap auth-modal">
        <div className="flex flex-col items-center mb-6">
          <i className="w-10 mb-4">
            <img src={Logo} alt="" />
          </i>
          <h1 className="text-2xl font-medium">Sign in</h1>
        </div>

        {loading ? (
          <Loading text="Logging you in" />
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
              onSubmit={handleLogin}
            >
              {({ handleSubmit, isValid }) => {
                return (
                  <Fragment>
                    <Form
                      className="flex flex-col items-center"
                      onSubmit={handleSubmit}
                    >
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
                        <label className="block text-xs mb-2">Password</label>
                        <Field
                          placeholder="********"
                          type="password"
                          id="password"
                          name="password"
                          className="block w-72 text-xs p-3 border border-gray-400 rounded"
                        />
                      </fieldset>

                      <fieldset className="w-full justify-between flex items-center">
                        <Link
                          to="/forgot-password"
                          className="forgot-password text-gray-500 "
                        >
                          Forgot Password?
                        </Link>
                      </fieldset>

                      <button
                        type="submit"
                        className="mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                        onSubmit={handleSubmit}
                        disabled={!isValid}
                      >
                        Login
                      </button>
                    </Form>

                    <div className="mt-8 ">
                      <p className="text-sm text-gray-500">
                        Don't have an account?{" "}
                        <Link to="/auth/sign-up" className="text-wb-primary">
                          Sign Up
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
  loading: state.account.loginLoading,
  error: state.account.loginError,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: (payload) => dispatch(login(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
