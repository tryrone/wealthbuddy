import React, { Fragment } from "react";
import successDoc from "../../../assets/img/success.svg";
import { Link } from "react-router-dom";

function DollarSuccess(props) {
  return (
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
  );
}

export default DollarSuccess;
