import React, { Fragment, useEffect } from "react";
import successDoc from "../../../../assets/img/success.svg";
import { connect, useDispatch } from "react-redux";
import { withdrawFunds } from "../../../../state/slices/investments";
import FailedDoc from "../../../../assets/img/failedDoc.svg";
import Loading from "shared-components/Loading";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";

function SuccessModal(props) {
  const dispatch = useDispatch();
  const withData = props.data;
  useEffect(() => {
    dispatch(withdrawFunds(withData));
  }, []);
  const onclose = () => {
    props.myclose(false);
    // console.log(props);
  };

  const refresh = () => {
    return document.location.reload(true);
    // return <Redirect to="/investment/add-investment" />;
  };
  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span className="closeModal cursor-pointer" onClick={() => onclose()}>
          <span className="closeModal cursor-pointer">
            <CloseModalIcon />
          </span>
        </span>
        {props.withdrawFundsLoading ? (
          <Loading text="Withdrawal in progress" />
        ) : props.withdrawFundsError ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={FailedDoc} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">Failed</h1>
              <p className="text-center text-gray-500 leading-normal">
                {props.withdrawFundsError.message}
              </p>

              <button
                onClick={() => {
                  onclose();
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
}

const mapStateToProps = (state) => ({
  cards: state.cards.data,
  dashboard: state.dashboard.data,
  withdrawFundsData: state.investments.withdrawFundsData,
  withdrawFundsLoading: state.investments.withdrawFundsLoading,
  withdrawFundsError: state.investments.withdrawFundsError,
});

export default connect(mapStateToProps)(SuccessModal);
