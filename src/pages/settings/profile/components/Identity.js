import React from "react";
import { connect } from "react-redux";

const Identity = ({ customerDetails }) => (
  <div className="settings-profile--fields">
    <div className="w-full settings-field--content">
      <fieldset className="mb-6 input-field--wrap">
        <label className="block text-xs mb-3" htmlFor="occupation">
          BVN
        </label>
        <input
          type="text"
          name="firstName"
          value={customerDetails.bvn}
          onChange={() => null}
          className="block w-full text-xs p-3 border border-gray-400 rounded"
          readOnly
        />
      </fieldset>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  customerDetails: state.account.data.customerDetails,
});

export default connect(mapStateToProps)(Identity);
