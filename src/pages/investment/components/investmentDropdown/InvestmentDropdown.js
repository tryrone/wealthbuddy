import React, { useState } from "react";
import { add, master } from "../../imageLinks";

const items = [
  {
    img: add,
    text: "Add a Card",
  },
  {
    img: master,
    text: "Mastercard - 0233",
  },
];
const InvestmentDropdown = (props) => {
  const [view, setView] = useState(false);
  const [itemView, setItem] = useState("Select a card");

  const clickView = (value) => {
    setView(!value);
  };

  return (
    <React.Fragment>
      <div className="fund-dropdown">
        {/* <div className="select-option" onClick={() => toggleList()}> */}
        <div className="select-option" onClick={() => clickView(view)}>
          <div className="buddy-dropdown-title flex flex-row"> {itemView}</div>
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
                  setItem(`${item.text}`);
                  setView(false);
                }}
                key={"newCard"}
              >
                {/* <img src={item.img} alt="" /> */}
                <p className="dropdown-details">
                  <span className="dropdown-item--title text-black text-opacity-25">
                    {item.text}
                  </span>
                </p>
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
};
export default InvestmentDropdown;
