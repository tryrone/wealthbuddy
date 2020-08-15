import React, { useState } from "react";
import DatePicker, { utils } from "react-modern-calendar-datepicker";
import "./check.scss";
import moment from "moment";

const today = utils("en").getToday();

const items = [
  {
    days: 30,
    percentage: 4,
    date: moment(today).add(30, "days").format("MMM Do YYYY"),
  },
  {
    days: 60,
    percentage: 9,
    date: moment(today).add(60, "days").format("MMM Do YYYY"),
  },
  {
    days: 120,
    percentage: 12,
    date: moment(today).add(120, "days").format("MMM Do YYYY"),
  },
  {
    days: 240,
    percentage: 20,
    date: moment(today).add(240, "days").format("MMM Do YYYY"),
  },
];

function StartDropdown({ myDuration }) {
  const [view, setView] = useState(false);
  const [itemView, setItem] = useState("Choose period");

  const clickView = (value) => {
    setView(!value);
  };

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
                  setItem(`${item.days} days`);
                  setView(false);
                  myDuration(item.days);
                }}
                key={"newCard"}
              >
                <div className="flex flex-row w-full justify-between">
                  <div>
                    <p className="text-base">{item.days} days</p>
                    <p style={{ color: "#999999" }} className="text-xs">
                      {item.date}
                    </p>
                  </div>
                  <p className="text-base">{item.percentage}%</p>
                </div>
              </li>
            </React.Fragment>
          ))}
          {items.length === 0 ? (
            <li className="no-result">No results found</li>
          ) : null}
        </ul>
      ) : null}
    </React.Fragment>
  );
}

export default StartDropdown;
