import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import stateRegions from "constants/stateRegions.js";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";

const ContactInformation = ({ account }) => {
  const { customerDetails } = account;

  const specificState = stateRegions.find(
    (o) => o.state.name === "Lagos State"
  );

  return (
    <div className="settings-profile--fields">
      <div className="w-full settings-field--content">
        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="phoneNumber">
            Phone Number
          </label>
          <NumberFormat
            format="#### ### ####"
            placeholder="Enter Phone Number"
            type="tel"
            name="phoneNumber"
            value={customerDetails.phoneNumber}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            readOnly
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="email">
            Email
          </label>
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={customerDetails.email}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            readOnly
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap input-full--wrap">
          <label className="block text-xs mb-3" htmlFor="address">
            Address
          </label>
          <textarea
            placeholder="Enter Address"
            name="address"
            value="address"
            className="block w-full p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="landmark">
            Land Mark
          </label>
          <input
            placeholder="Enter Land Mark"
            type="text"
            name="landmark"
            value={"landmark"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3">State</label>
          <select
            name="state"
            value={"state"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          >
            <option value="" disabled>
              Select State
            </option>
            {stateRegions.map(({ state }, key) => (
              <option key={key} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3">LGA</label>
          <select
            name="lga"
            // value={state.lga}
            // onChange={handleChange}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          >
            <option value="" disabled>
              Select LGA
            </option>
            {typeof specificState !== "undefined" &&
              typeof specificState.state !== "undefined" &&
              specificState.state.locals.map((lga, key) => (
                <option key={key} value={lga.name}>
                  {lga.name}
                </option>
              ))}
          </select>
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="homeTown">
            Home Town
          </label>
          <input
            placeholder="Enter Home Town"
            type="text"
            name="homeTown"
            value={"homeTown"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="nationality">
            Nationality
          </label>
          <input
            placeholder="Enter Nationality"
            type="text"
            name="nationality"
            value={"nationality"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  account: state.account.data,
});

export default connect(mapStateToProps)(ContactInformation);
