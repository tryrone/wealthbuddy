import React, { Fragment, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { terminateFunds } from "../../../../state/slices/investments";
import successDoc from "../../../../assets/img/success.svg";
import failedDoc from "../../../../assets/img/failedDoc.svg";
import Loading from "shared-components/Loading";

const TermSuccessModal = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(terminateFunds(props.terminateData));
  }, []);

  return props.terminateFundsLoading ? (
    <Loading text="Termination in progress" />
  ) : props.terminateFundsError ? (
    <Fragment>
      <div className="flex flex-col items-center mb-0">
        <i className="w-20 mb-4">
          <img src={failedDoc} alt="" />
        </i>
        <h1 className="text-2xl font-medium mb-2">Failed</h1>
        <p className="text-center text-gray-500 leading-normal">
          {props.terminateFundsError.message}
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
          {props.terminateFundsData.message}
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
  );
};

const mapStateToProps = (state) => ({
  cards: state.cards.data,
  dashboard: state.dashboard.data,
  terminateFundsLoading: state.investments.terminateFundsLoading,
  terminateFundsData: state.investments.terminateFundsData,
  terminateFundsError: state.investments.terminateFundsError,
});

export default connect(mapStateToProps)(TermSuccessModal);
