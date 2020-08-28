import React, { useState } from "react";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "./check.scss";
import moment from "moment";

const today = utils("en").getToday();

function RollOver({ myRollover }) {
  const [view, setView] = useState(false);
  const [itemView, setItem] = useState("Choose roll over rule");

  const clickView = (value) => {
    setView(!value);
  };
  const fixedItems = [
    {
      days: "PRINCIPAL_INTEREST",
      name: "Principal Interest",
    },
    {
      days: "PRINCIPAL",
      name: "Principal",
    },
    {
      days: "INTEREST",
      name: "Interest",
    },
    {
      days: "NO_ROLLOVER",
      name: "No roll over",
    },
  ];

  const items = fixedItems;

  return (
    <React.Fragment>
      <div className="fund-dropdown">
        {/* <div className="select-option" onClick={() => toggleList()}> */}
        <div className="select-option" onClick={() => clickView(view)}>
          <div className="buddy-dropdown-title flex text-xs flex-row">
            {" "}
            {itemView}
          </div>
          <div
            className="buddy-dropdown-icon"
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"/></svg>',
            }}
          ></div>
        </div>
      </div>
      {/* listOpen && */}
      {view ? (
        <ul className="buddy-dropdown-list basic-dropdown">
          {/* <ul className="buddy-dropdown-list basic-dropdown" onClick={e => e.stopPropagation()}> */}
          {items.map((item, i) => (
            <React.Fragment key={i}>
              <li
                className="buddy-dropdown-item flex hover:bg-gray-100 flex-row items-center"
                onClick={() => {
                  setItem(`${item.name}`);
                  setView(false);
                  myRollover(item.days);
                }}
                key={"newCard"}
              >
                <div className="flex flex-row w-full justify-between">
                  <p className="text-base">{item.name}</p>
                </div>
              </li>
            </React.Fragment>
          ))}
          {fixedItems.length === 0 ? (
            <li className="no-result">No results found</li>
          ) : null}
        </ul>
      ) : null}
    </React.Fragment>
  );
}

export default RollOver;
