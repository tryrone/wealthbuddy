import React, { Fragment } from "react";
import CreatePersonalSavings from "./CreatePersonalSavings";
import ConfirmPersonalSavings from "./ConfirmPersonalSavings";

const PersonalSavings = () => {
  return (
    <Fragment>
      <div className="px-12 ">
        <CreatePersonalSavings />
        <ConfirmPersonalSavings />
      </div>
    </Fragment>
  );
};

export default PersonalSavings;
