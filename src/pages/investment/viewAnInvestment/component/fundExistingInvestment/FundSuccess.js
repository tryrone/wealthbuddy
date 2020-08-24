import React, { Fragment, useEffect } from "react";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import successDoc from "../../../../../assets/img/success.svg";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { fundInvestment } from "../../../../../state/slices/investments";
import FailedDoc from "../../../../../assets/img/failedDoc.svg";
import Loading from "shared-components/Loading";

const FundSuccess = (props) => {
  const dispatch = useDispatch();
  let errorObj = props.fundInvestmentError;

  useEffect(() => {
    dispatch(fundInvestment(props.investData));
  }, []);

  console.log(props.investData, "keeke");

  const refresh = () => {
    document.location.reload(true);
    return <Redirect to="/investment/add-investment" />;
    //   return document.location.reload(true);
  };

  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span
          className="closeModal cursor-pointer"
          onClick={() => props.close()}
        >
          <span className="closeModal cursor-pointer">
            <CloseModalIcon />
          </span>
        </span>
        {props.fundInvestmentLoading ? (
          <Loading text="Funding in progress" />
        ) : props.fundInvestmentError ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={FailedDoc} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Failed</h1>
              <p className="text-center text-gray-500 leading-normal">
                {props.fundInvestmentError.message}
              </p>

              <button
                onClick={() => {
                  props.close();
                }}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
              >
                Done
              </button>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={successDoc} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Success</h1>
              <p className="text-center text-gray-500 leading-normal">
                {props.text}
              </p>

              <button
                onClick={() => {
                  refresh();
                }}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
              >
                Done
              </button>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fundInvestmentLoading: state.investments.fundInvestmentLoading,
  fundInvestmentError: state.investments.fundInvestmentError,
  fundInvestmentData: state.investments.fundInvestmentData,
  fundInvestmentMe: state.investments.fundInvestmentMe,
  getAllInvestmentsData: state.investments.getAllInvestmentsData,
  investmentValuationData: state.investments.investmentValuationData,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(FundSuccess);
