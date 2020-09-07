import React, { Fragment, useState } from "react";
import personalSavings from "assets/img/personalIcon.png";
import fixedSavings from "assets/img/fixedIcon.png";
import groupSavings from "assets/img/groupIcon.png";
import groupConSavings from "assets/img/groupConIcon.png";
import fixedFlexSavings from "assets/img/fixedFlex.png";
import roundRobin from "assets/img/round-robin.png";
import CreatePersonalSavingsModal from "./components/CreatePersonalSavingsModal";
import { FaQuestionCircle } from "react-icons/fa";
import SavingsInfoModal from "./components/SavingsInfoModal";
import produce from "immer";
import ReactTooltip from "react-tooltip";

const CreateSavingsHome = ({ history }) => {
  const [
    isCreatePersonalSavingsModalVisible,
    setCreatePersonalSavingsModalOpen,
  ] = useState(false);

  const [state, setState] = useState({
    isSavingsInfoModalVisible: false,
    savingsInfoModalSavingsItem: {},
  });

  const showSavingsInfoModal = (e, savings) => {
    e.stopPropagation();
    setState(
      produce((draft) => {
        draft.isSavingsInfoModalVisible = true;
        draft.savingsInfoModalSavingsItem = savings;
      })
    );
  };

  const closeSavingsInfoModal = () => {
    setState(
      produce((draft) => {
        draft.isSavingsInfoModalVisible = false;
        draft.savingsInfoModalDetails = "";
      })
    );
  };

  const openCreatePersonalSavingsModal = () => {
    setCreatePersonalSavingsModalOpen(true);
  };

  const closeCreatePersonalSavingsModal = () => {
    setCreatePersonalSavingsModalOpen(false);
  };

  const navigateToPath = (e, path) => {
    e.preventDefault();
    history.push(path);
  };

  const options = [
    {
      heading: "Personal savings",
      subheading: "Smash your Goals with a personal savings plan.",
      handleClick: openCreatePersonalSavingsModal,
      icon: personalSavings,
      details: "details details details",
    },
    {
      heading: "Fixed Lock savings",
      subheading: "Save today to enjoy tomorrow.",
      path: "/dashboard/savings/create/fixed-lock",
      icon: fixedSavings,
      details: "details details details",
    },
    {
      heading: "Fixed Flexible savings",
      subheading: "Lock money away until you need it. Save for rainy days.",
      path: "/dashboard/savings/create/fixed-flexible",
      icon: fixedFlexSavings,
      details: "details details details",
    },
    {
      heading: "Group Target Savings",
      subheading:
        "Don’t do it alone. Start a savings plan with friends and family.",
      path: "/dashboard/savings/create/group-target",
      icon: groupSavings,
      details: "details details details",
    },
    {
      heading: "Group Challenge Savings ",
      subheading:
        "Don’t do it alone. Start a savings plan with friends and family.",
      path: "/dashboard/savings/create/group-challenge",
      icon: groupConSavings,
      details: "details details details",
    },
    {
      heading: "Round Robin",
      subheading:
        "As simple as investing your savings and we will help you grow from there.",
      path: "/dashboard/savings/create/group-contributory",
      icon: roundRobin,
      details: "details details details",
    },
  ];

  return (
    <Fragment>
      <div className="px-12 flare fadeIn">
        <div className="page-heading mb-12 flex flex-col">
          <h1 className="text-4xl mb-6 font-medium">Savings</h1>
          <p className="w-2/5 leading-normal">
            Think Big! Start with a savings plan.
          </p>
        </div>
        <div className="flex-grow flex justify-center items-start">
          <div className="create-saving--overview">
            <div className="flex justify-between create-savings flex-wrap">
              {options.map((item, index) => {
                return item.handleClick ? (
                  <div
                    key={index}
                    onClick={item.handleClick}
                    className="card flex items-center"
                  >
                    <div className="savings-image">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="savings-items flex h-full flex flex-col items-start justify-center">
                      <div className="flex flex-row items-center justify-center mb-2">
                        <h1 className="w-full font-medium card-header">
                          {item.heading}
                        </h1>
                        <span
                          data-tip="Click to know more about this Savings."
                          onClick={(e) => showSavingsInfoModal(e, item)}
                          className="text-gray-200 hover:text-green-300 hover:text-xl animate-fade--hover p-1 text-center ml-2 cursor-pointer"
                        >
                          <FaQuestionCircle />
                        </span>
                      </div>
                      <p className="card-excerpt leading-4">
                        {item.subheading}
                      </p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={index}
                    onClick={(e) => navigateToPath(e, item.path)}
                    className="card flex items-center"
                  >
                    <div className="savings-image">
                      <img src={item.icon} alt="" />
                    </div>
                    <div className="savings-items flex h-full flex flex-col items-start justify-center">
                      <div className="flex flex-row items-center justify-center mb-2">
                        <h1 className="w-full font-medium card-header">
                          {item.heading}
                        </h1>
                        <span
                          data-tip="Click to know more about this Savings."
                          onClick={(e) => showSavingsInfoModal(e, item)}
                          className="text-gray-200 hover:text-green-300 hover:text-xl animate-fade--hover p-1 text-center ml-2 cursor-pointer"
                        >
                          <FaQuestionCircle />
                        </span>
                      </div>
                      <p className="card-excerpt leading-4">
                        {item.subheading}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <CreatePersonalSavingsModal
        isVisible={isCreatePersonalSavingsModalVisible}
        closeModal={closeCreatePersonalSavingsModal}
      />

      <SavingsInfoModal
        isVisible={state.isSavingsInfoModalVisible}
        savings={state.savingsInfoModalSavingsItem}
        onClose={closeSavingsInfoModal}
      />

      <ReactTooltip effect="solid" />
    </Fragment>
  );
};

export default CreateSavingsHome;
