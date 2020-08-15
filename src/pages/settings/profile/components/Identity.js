import React from "react";
import NumberFormat from "react-number-format";

const Identity = () => {
  return (
    <div className="settings-profile--fields">
      <div className="w-full settings-field--content">
        <fieldset className="mb-6 input-field--wrap">
          <label className="block text-xs mb-3" htmlFor="occupation">
            BVN
          </label>
          <NumberFormat
            format="###########"
            placeholder="Enter BVN"
            type="text"
            name="bvn"
            value={"bvn"}
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            readOnly
          />
        </fieldset>
      </div>
    </div>
  );
};

export default Identity;
