import React from "react";
import { Field } from "formik";

const EmploymentInformation = () => {
  return (
    <div className="settings-profile--fields">
      <div className="w-full settings-field--content">
        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="occupation">
            Occupation
          </label>
          <Field
            placeholder="Enter Occupation"
            type="text"
            id="occupation"
            name="occupation"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="employerName">
            Employer Name
          </label>
          <Field
            placeholder="Enter Employer Name"
            type="text"
            id="employerName"
            name="employerName"
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap input-full--wrap">
          <label className="block text-xs mb-3" htmlFor="lastName">
            Employer Address
          </label>
          <Field
            placeholder="Enter Employer Address"
            component="textarea"
            id="employerAddress"
            name="employerAddress"
            className="block w-full p-3 border border-gray-400 rounded"
          />
        </fieldset>
      </div>
    </div>
  );
};

export default EmploymentInformation;
