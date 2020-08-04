import React from "react";
import CreatePersonalSavings from "./CreatePersonalSavings";
import ConfirmPersonalSavings from "./ConfirmPersonalSavings";

const PersonalSavings = () => {
  return (
    <React.Fragment>
      <div className="px-12 ">
        <CreatePersonalSavings />
        <ConfirmPersonalSavings />
      </div>
    </React.Fragment>
  );
};

export default PersonalSavings;
