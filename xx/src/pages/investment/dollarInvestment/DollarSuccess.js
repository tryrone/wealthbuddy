import React, { Fragment, useLayoutEffect } from 'react';
import successDoc from '../../../assets/img/success.svg';
import CloseModalIcon from 'shared-components/svgs/CloseModalIcon';
import { uploadDollarPayment } from '../../../state/slices/investments';
import failedDoc from 'assets/img/failedDoc.svg';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from 'shared-components/Loading';

function DollarSuccess(props) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(uploadDollarPayment(props.dollaData));
  }, []);
  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span
          className="closeModal cursor-pointer"
          onClick={() => {
            props.close();
            // refresh();
          }}
        >
          <span className="closeModal">
            <CloseModalIcon />
          </span>
        </span>
        {props.dollarUploadLoading ? (
          <div className="mx-auto flex flex-col content-center items-center">
            <Loading text=" " />
          </div>
        ) : props.dollarUploadError ? (
          <Fragment>
            <div className="flex flex-col items-center mb-0">
              <i className="w-20 mb-4">
                <img src={failedDoc} alt="" />
              </i>
              <h1 className="text-2xl font-medium mb-2">
                Error Submitting Proof
              </h1>
              <p className="text-center text-gray-500 leading-normal">
                unable to upload
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
              <h1 className="text-2xl font-medium mb-2">
                Your Investment has been received
              </h1>
              <p className="text-center text-gray-500 leading-normal">
                Your investment will be reviewed and your position credited in
                the next 24 hours.
                {/* {mySuccess.message} */}
              </p>

              <Link to="/dashboard/investment">
                <button
                  onClick={() => {
                    props.close();
                    // refresh();
                  }}
                  className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
                >
                  Done
                </button>
              </Link>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  dollarUploadLoading: state.investments.dollarUploadLoading,
  dollarUploadData: state.investments.dollarUploadData,
  dollarUploadError: state.investments.dollarUploadError,
});

export default connect(mapStateToProps)(DollarSuccess);
