import React from "react";
import NumberFormat from "react-number-format";

const NextOfKin = () => {
  return (
    <div className="settings-profile--fields">
      <div className="w-full settings-field--content">
        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="name">
            Full Name
          </label>
          <input
            placeholder="Enter Full Name"
            type="text"
            name="name"
            value={"name"}
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
          <input
            placeholder="Enter Email"
            type="email"
            name="email"
            value={"email"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
          />
        </fieldset>

        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="relationship">
            Relationship
          </label>
          <input
            placeholder="Enter Relationship"
            type="text"
            name="relationship"
            value={"relationship"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
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
      </div>
    </div>
  );
};

export default NextOfKin;
