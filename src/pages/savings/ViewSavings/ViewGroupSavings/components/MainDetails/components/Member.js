import React from "react";
import { formatCurrency } from "utils";
import {SavingsType} from "../../../../../../../constants/enums";

const Member = ({ member, membersCount, savingsType }) => {
  let percentageSaved = formatCurrency(
    (member.amountSaved / member.targetAmount) * 100
  );

  if (savingsType === SavingsType.GroupTargetSavings) {
    percentageSaved *= membersCount;
  }

  const nameWords = member.name.toString().split(" ");
  const abbreviation = `${nameWords[0].charAt(0)}${nameWords[1].charAt(
    0
  )}`.toUpperCase();

  return (
    <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-row justify-between align-items-center my-2 pr-5">
      <div className="flex flex-grow w-2/3">
        <div className="flex-initial text-gray-700 text-center text-sm bg-teal-100 rounded-full p-3 mr-2">
          {abbreviation}
        </div>
        <div className="flex flex-col w-full overflow-hidden">
          <div className="flex flex-row justify-between text-gray-300">
            <div className="text-left font-semi-bold text-sm py-1 mr-2 w-10/12 truncate">
              {member.name}
            </div>
            <div className="text-left text-sm py-1">{percentageSaved}%</div>
          </div>
          <div className="progress">
            <div
              className="progress-meter"
              style={{ width: `${percentageSaved}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
