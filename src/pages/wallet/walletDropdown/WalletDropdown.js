import React, { Fragment, useState } from "react";

const items = [];

const WalletDropdown = (props) => {
  const [listOpen, setListOpen] = useState(false);
  const clickView = (value) => setListOpen(!value);

  return (
    <Fragment>
      <div className="fund-dropdown">
        <div className="select-option" onClick={() => clickView(listOpen)}>
          <div className="buddy-dropdown-title">headerTitle</div>
          <div
            className="buddy-dropdown-icon"
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"/></svg>',
            }}
          />
        </div>
      </div>

      {listOpen && (
        <ul className="buddy-dropdown-list basic-dropdown">
          {/* <ul className="buddy-dropdown-list basic-dropdown" onClick={e => e.stopPropagation()}> */}
          {/*{state.items.map((item, i) => (*/}
          {/*  <Fragment key={i}>*/}
          {/*    <li*/}
          {/*      className="buddy-dropdown-item"*/}
          {/*      key={"newCard"}*/}
          {/*      onClick={() => selectItem("Add New Card", "", "")}*/}
          {/*    >*/}
          {/*      <p className="dropdown-details">*/}
          {/*        <span className="dropdown-item--title text-semi-bold">*/}
          {/*          Add New Card*/}
          {/*        </span>*/}
          {/*      </p>*/}
          {/*    </li>*/}
          {/*    <li*/}
          {/*      className="buddy-dropdown-item"*/}
          {/*      onClick={() =>*/}
          {/*        selectItem(item.bank, item.id, state.initialItems)*/}
          {/*      }*/}
          {/*    >*/}
          {/*      <p className="dropdown-details">*/}
          {/*        <span className="dropdown-item--title text-semi-bold">{`${item.bank}`}</span>*/}
          {/*      </p>*/}
          {/*    </li>*/}
          {/*  </Fragment>*/}
          {/*))}*/}
          {items.length === 0 && (
            <li className="no-result">No results found</li>
          )}
        </ul>
      )}
    </Fragment>
  );
};

export default WalletDropdown;
