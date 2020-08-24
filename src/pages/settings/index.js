import React, { Fragment, useState } from "react";
import { arrowIcon } from "assets/exports";
import Documentation from "./documentation";
import UserCards from "./cards";
import UserBanks from "./banks";
import Profile from "./profile";

const tabTitles = ["Profile", "Documentation", "Banks", "Cards"];

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [activeId, setActiveId] = useState(1);

  const changeActiveTab = ({ target: { textContent } }) => {
    setActiveTab(textContent.trim().toLowerCase());
  };

  const handleActive = (event, id) => {
    document
      .querySelector(".profile-right--wrap")
      .classList.add("tab-is--active");
    document
      .querySelector(".profile-left--wrap")
      .classList.add("selector-inactive");
    document
      .querySelector(".back-to--mobile")
      .classList.add("button-is--active");
    setActiveId(event);
  };

  const tabsComponents = {
    profile: <Profile activeTabId={activeId} handleTab={handleActive} />,
    documentation: <Documentation />,
    banks: <UserBanks />,
    cards: <UserCards />,
  };

  const back = () => {
    document
      .querySelector(".profile-right--wrap")
      .classList.remove("tab-is--active");
    document
      .querySelector(".profile-left--wrap")
      .classList.remove("selector-inactive");
    document
      .querySelector(".back-to--mobile")
      .classList.remove("button-is--active");
  };

  return (
    <Fragment>
      <div className="flex flex-col px-12">
        <h1 className="text-4xl mb-6 font-medium">Settings</h1>
        <div className="flex flex-col flex-grow shadow-card overflow-hidden font-medium bg-white mb-12 account-section rounded-lg">
          <ul
            onClick={changeActiveTab}
            className="flex border-solid border-gray-100 profile-tab--wrap text-lg"
          >
            {tabTitles.map((val, index) => {
              return (
                <li
                  key={index}
                  className={`w-1/4 text-center cursor-pointer ${
                    val.toLowerCase() === activeTab ? "tab-active" : ""
                  }`}
                >
                  <span className={`inline-block py-6 px-4`}>{val}</span>
                </li>
              );
            })}
          </ul>
          <div className="flex-grow account-wrap">
            <div className="back-to--mobile" onClick={back}>
              <span
                className="flex mr-2"
                dangerouslySetInnerHTML={{ __html: arrowIcon }}
              />
              Back
            </div>
            {tabsComponents[activeTab]}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
