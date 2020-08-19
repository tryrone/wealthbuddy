import React from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import stateRegions from "constants/stateRegions.js";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { Field, useFormikContext } from "formik";

const ContactInformation = ({ account }) => {
  const { values, handleChange, handleBlur } = useFormikContext();
  const { customerDetails } = account;

  const specificState = stateRegions.find((o) => o.state.name === values.state);

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
            type="text"
            name="email"
            value={customerDetails.email}
            onChange={() => null}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            readOnly
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap input-full--wrap">
          <label className="block text-xs mb-3" htmlFor="address">
            Address
          </label>
          <Field
            placeholder="Enter Address"
            component="textarea"
            id="address"
            name="address"
            className="block w-full p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="landmark">
            Land Mark
          </label>
          <Field
            placeholder="Enter Landmark"
            type="text"
            id="landmark"
            name="landmark"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3">State</label>
          <select
            name="state"
            value={values.state}
            onChange={handleChange}
            onBlur={handleBlur}
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
            value={values.lga}
            onChange={handleChange}
            onBlur={handleBlur}
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
          <Field
            placeholder="Enter Home Town"
            type="text"
            id="homeTown"
            name="homeTown"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="nationality">
            Nationality
          </label>
          <Field
            placeholder="Enter Nationality"
            type="text"
            id="nationality"
            name="nationality"
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
