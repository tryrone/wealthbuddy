import React, { Fragment, useState } from "react";
import Loading from "shared-components/Loading";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { resumeSession, logout } from "state/slices/account";
import { connect, useDispatch } from "react-redux";
import produce from "immer";
import "./styles.scss";

const LockedOutModal = ({ customerDetails }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    isLoading: false,
    error: null,
  });

  const initialValues = {
    email: customerDetails.email,
    password: "",
  };

  const validationSchema = yup.object().shape({
    password: yup.string().label("Password").required(),
  });

  const handleLogin = async (formValues) => {
    setState(
      produce((draft) => {
        draft.isLoading = true;
        draft.error = null;
      })
    );

    const resultAction = await dispatch(resumeSession(formValues));

    if (resumeSession.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.isLoading = false;
        })
      );
    } else {
      if (resultAction.payload) {
        setState(
          produce((draft) => {
            draft.isLoading = false;
            draft.error = resultAction.payload.message;
          })
        );
      } else {
        setState(
          produce((draft) => {
            draft.isLoading = false;
            draft.error = resultAction.error.message;
          })
        );
      }
    }
  };

  const logoutUser = () => {
    dispatch(logout());
    sessionStorage.removeItem("persist:root");
    history.push("/auth/login");
  };

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active blur-background">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset empty-modal">
        <div className="flex flex-col w-full justify-center items-center mb-12 text-white">
          {customerDetails.picture !== null ? (
            <img
              src={customerDetails.picture}
              className="rounded-full mb-4"
              alt=""
            />
          ) : (
            <div className="user-no--picture mb-4">
              {`${customerDetails.otherNames.charAt(
                0
              )}${customerDetails.lastName.charAt(0)}`}
            </div>
          )}
          <figcaption className="font-medium text-center text-black">
            {`${customerDetails.otherNames} ${customerDetails.lastName}`}
          </figcaption>
        </div>

        {state.isLoading ? (
          <Loading text="Logging you in" />
        ) : (
          <Fragment>
            {state.error && (
              <div className="w-72 text-xs text-left">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {state.error}
                </p>
              </div>
            )}

            <p className="text-center card-header text-gray-500 font-normal leading-normal mt-8">
              Please enter your password to continue again.
            </p>

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
                      className="flex flex-col items-center mt-10"
                      onSubmit={handleSubmit}
                    >
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

                      <button
                        type="submit"
                        className="mt-4 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                        onSubmit={handleSubmit}
                        disabled={!isValid}
                      >
                        Login
                      </button>
                    </Form>

                    <div className="mt-8 ">
                      <p className="text-sm text-gray-500">
                        This is not me?{" "}
                        <a
                          href="/#"
                          onClick={logoutUser}
                          className="text-wb-primary"
                        >
                          Logout
                        </a>
                      </p>
                    </div>
                  </Fragment>
                );
              }}
            </Formik>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
});

export default connect(mapStateToProps)(LockedOutModal);
