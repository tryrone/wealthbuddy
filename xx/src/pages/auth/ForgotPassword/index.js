import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import Loading from "shared-components/Loading";
import * as yup from "yup";
import { Field, Form, Formik } from "formik";
import { resetPassword } from "state/slices/account";
import Icon from "assets/img/passwordIcon.png";
import produce from "immer";
import { useDispatch } from "react-redux";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    isLoading: false,
    error: null,
    isResetSuccessful: false,
  });

  const initialValues = {
    email: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().label("Email").email().required(),
  });

  const handleLogin = async (values) => {
    setState(
      produce((draft) => {
        draft.isLoading = true;
        draft.error = null;
      })
    );

    const resultAction = await dispatch(resetPassword(values));
    if (resetPassword.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isLoading = false;
          draft.isResetSuccessful = true;
        })
      );
    } else {
      if (resultAction.payload) {
        setState(
          produce((draft) => {
            draft.isLoading = false;
            draft.isResetSuccessful = false;
            draft.error = resultAction.payload.message;
          })
        );
      } else {
        setState(
          produce((draft) => {
            draft.isLoading = false;
            draft.isResetSuccessful = false;
            draft.error = resultAction.error.message;
          })
        );
      }
    }
  };

  return (
    <section className="h-screen w-full setup-screens flex flex-col justify-center items-center leafy-bg">
      <div className="flex flex-col items-center bg-white fadeIn login-fieldset onboarding-wrap auth-modal">
        <div className="flex flex-col items-center mb-6 setup-success">
          <i className="w-10 mb-4">
            <img src={Icon} alt="" />
          </i>
          {!state.isResetSuccessful ? (
            <Fragment>
              <h1 className="text-2xl font-medium">Password reset</h1>
              <p className="text-center mt-3 text-gray-500 leading-normal">
              Enter your email below, to reset your password
              </p>
            </Fragment>
          ) : (
            <Fragment>
              <h1 className="text-2xl font-medium">Success</h1>
              <p className="text-center mt-3 text-gray-500 leading-normal">
                A default password has been sent to your email
              </p>
            </Fragment>
          )}
        </div>

        {!state.isResetSuccessful ? (
          <Fragment>
            {state.isLoading ? (
              <Loading text="Resetting your password" />
            ) : (
              <Fragment>
                {state.error && (
                  <div className="w-72 mb-8 text-xs text-left">
                    <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                      {state.error}
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

                          <button
                            type="submit"
                            className="mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                            onSubmit={handleSubmit}
                            disabled={!isValid}
                          >
                            Reset Password
                          </button>
                        </Form>

                        <div className="mt-8 ">
                          <p className="text-sm text-gray-500">
                            Don't have an account?{" "}
                            <Link
                              to="/auth/sign-up"
                              className="text-wb-primary"
                            >
                              Sign Up
                            </Link>
                             &nbsp; |  &nbsp; <Link
                              to="/auth/login"
                              className="text-wb-primary"
                            >
                              Login
                            </Link>
                          </p>
                        </div>
                      </Fragment>
                    );
                  }}
                </Formik>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <Fragment>
            <Link
              to="/auth/login"
              className="mt-4 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
            >
              Proceed to Login
            </Link>

            <div className="mt-8 ">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/auth/sign-up" className="text-wb-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </Fragment>
        )}
      </div>
    </section>
  );
};

export default ForgotPassword;
