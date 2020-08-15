import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Form, Formik } from "formik";
import * as yup from "yup";
import CardIcon from "assets/img/cardIcon.png";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import NumberFormat from "react-number-format";

const initialValues = {
  amount: "",
};

const StartWithdrawSavingsModal = ({
  isVisible,
  closeModal,
  savings,
  startWithdrawProcess,
  startWithdrawLoading,
  startWithdrawError,
}) => {
  const validationSchema = yup.object().shape({
    amount: yup
      .number()
      .max(parseFloat(savings.amountSaved))
      .label("Amount")
      .required(),
  });

  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal" onClick={closeModal}>
          <CloseModalIcon />
        </span>
        <div className="flex flex-col items-center mb-0">
          <i className="w-20 mb-4">
            <img src={CardIcon} alt="" />
          </i>
          <h1 className="text-2xl font-medium mb-2">Withdraw from savings</h1>
          <p className="text-center text-gray-500 leading-normal">
            As simple as investing your savings and we will help you grow from
            there.
          </p>
        </div>

        {startWithdrawLoading ? (
          <div className="flex flex-col items-center mt-8">
            <Loading text="Funding Wallet" />
          </div>
        ) : (
          <Fragment>
            {startWithdrawError && (
              <div className="w-72 text-xs text-left mt-8 ">
                <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                  {startWithdrawError}
                </p>
              </div>
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              validateOnMount={true}
              onSubmit={startWithdrawProcess}
            >
              {({
                handleSubmit,
                isValid,
                setFieldValue,
                values,
                ...formikProps
              }) => {
                return (
                  <Form
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                  >
                    <fieldset className="mt-6 w-full">
                      <label className="block text-xs mb-2">Amount</label>
                      <NumberFormat
                        thousandSeparator={true}
                        placeholder="eg: 20,000"
                        autoComplete="off"
                        type="text"
                        id="amount"
                        name="amount"
                        className="block w-72 text-xs p-3 border border-gray-400 rounded"
                        value={values.amount}
                        onBlur={formikProps.handleBlur}
                        onValueChange={({ value }) =>
                          setFieldValue("amount", value)
                        }
                      />
                    </fieldset>

                    <div className="nav-buttons flex justify-center">
                      <div
                        onClick={closeModal}
                        className=" w-40 border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                      >
                        Back
                      </div>
                      <button
                        type="submit"
                        className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm"
                        onSubmit={handleSubmit}
                        disabled={!isValid}
                      >
                        Proceed
                      </button>
                    </div>
                  </Form>
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
  startWithdrawLoading: state.savings.startWithdrawLoading,
  startWithdrawError: state.savings.startWithdrawError,
});

export default connect(mapStateToProps)(StartWithdrawSavingsModal);
