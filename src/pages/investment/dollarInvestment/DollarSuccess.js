import React, { Fragment } from "react";
import successDoc from "../../../assets/img/success.svg";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import { Link } from "react-router-dom";

function DollarSuccess(props) {
  return (
    <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
        <span
          className="closeModal cursor-pointer"
          onClick={() => {
            onclose();
            // refresh();
          }}
        >
          <span className="closeModal">
            <CloseModalIcon />
          </span>
        </span>
        <Fragment>
          <div className="flex flex-col items-center mb-0">
            <i className="w-20 mb-4">
              <img src={successDoc} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">
              Your Investment has been received
            </h1>
            <p className="text-center text-gray-500 leading-normal">
              Your investment will be reviewed and your position credited in the
              next 24 hours.
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
      </div>
    </div>
  );
}

export default DollarSuccess;
