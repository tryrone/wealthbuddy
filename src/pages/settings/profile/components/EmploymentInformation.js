import React from "react";

const EmploymentInformation = () => {
  return (
    <div className="settings-profile--fields">
      <div className="w-full settings-field--content">
        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="occupation">
            Occupation
          </label>
          <input
            placeholder="Enter Occupation"
            type="text"
            name="occupation"
            value={"occupation"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="employerName">
            Employer Name
          </label>
          <input
            placeholder="Enter Employer Name"
            type="text"
            name="employerName"
            value={"employerName"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap input-full--wrap">
          <label className="block text-xs mb-3" htmlFor="lastName">
            Employer Address
          </label>
          <textarea
            placeholder="Enter Employer Address"
            name="employerAddress"
            value={"employerAddress"}
            className="block w-full p-3 border border-gray-400 rounded"
          />
        </fieldset>
      </div>
    </div>
  );
};

export default EmploymentInformation;
