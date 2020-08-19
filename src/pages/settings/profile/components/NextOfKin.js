import React from "react";
import NumberFormat from "react-number-format";
import { Field } from "formik";

const NextOfKin = () => {
  return (
    <div className="settings-profile--fields">
      <div className="w-full settings-field--content">
        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="name">
            Full Name
          </label>
          <Field
            placeholder="Enter Full Name"
            type="text"
            id="nextOfKinName"
            name="nextOfKinName"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="phone">
            Phone Number
          </label>
          <NumberFormat
            format="#### ### ####"
            placeholder="Enter Phone Number"
            type="text"
            name="phone"
            value={90930409498}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="email">
            Email Address
          </label>
          <Field
            placeholder="Enter Email"
            type="email"
            id="nextOfKinEmail"
            name="nextOfKinEmail"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="relationship">
            Relationship
          </label>
          <Field
            placeholder="Enter Relationship"
            type="text"
            id="nextOfKinRelationship"
            name="nextOfKinRelationship"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap input-full--wrap">
          <label className="block text-xs mb-3" htmlFor="address">
            Address
          </label>
          <Field
            placeholder="Enter Address"
            compnent="textarea"
            id="nextOfKinAddress"
            name="nextOfKinAddress"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>
      </div>
    </div>
  );
};

export default NextOfKin;
