import React, { useEffect, Fragment } from "react";
import {
  createInvestment,
  getAllFixedTransactions,
  getInvestmentTransactionsForFund,
  getAllTbillsTransactions,
  getInvestmentValuation,
} from "../../../../state/slices/investments";
import successDoc from "../../../../assets/img/success.svg";
import Loading from "shared-components/Loading";
import failedDoc from "../../../../assets/img/failedDoc.svg";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const InvestModalSuccess = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  let errorObj = props.createInvestmentError;
  //   const mySuccess = props.createInvestmentData;
  useEffect(() => {
    dispatch(createInvestment(props.investData));
  }, []);

  const refresh = () => {
    dispatch(getAllTbillsTransactions());
    dispatch(getInvestmentTransactionsForFund());
    dispatch(getAllFixedTransactions());
    dispatch(getInvestmentValuation());
    history.push("/dashboard/investment");
    // return document.location.reload(true);
  };
  return (
    <div>
      {props.createInvestmentLoading ? (
        <div className="mx-auto flex flex-col content-center items-center">
          <Loading text="creating investment" />
        </div>
      ) : null}
      {!errorObj && !props.createInvestmentLoading ? (
        <Fragment>
          <div className="flex flex-col items-center mb-0">
            <i className="w-20 mb-4">
              <img src={successDoc} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">Success</h1>
            <p className="text-center text-gray-500 leading-normal">
              You have successfully created an investment.
              {/* {mySuccess.message} */}
            </p>

            <button
              onClick={() => {
                props.close();
                refresh();
              }}
              className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Done
            </button>
          </div>
        </Fragment>
      ) : errorObj && !props.createInvestmentLoading ? (
        <Fragment>
          <div className="flex flex-col items-center mb-0">
            <i className="w-20 mb-4">
              <img src={failedDoc} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">Failed</h1>
            <p className="text-center text-gray-500 leading-normal">
              {errorObj.message}.
            </p>

            <button
              onClick={() => {
                props.close();
                // refresh();
              }}
              className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
            >
              Done
            </button>
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  createInvestmentMe: state.investments.createInvestmentMe,
  createInvestmentLoading: state.investments.createInvestmentLoading,
  createInvestmentError: state.investments.createInvestmentError,
  createInvestmentData: state.investments.createInvestmentData,
  cards: state.cards.data,
  dashboard: state.dashboard.data,
});

export default connect(mapStateToProps)(InvestModalSuccess);
