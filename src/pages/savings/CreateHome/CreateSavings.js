import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import personalSavings from "assets/img/personalIcon.png";
import fixedSavings from "assets/img/fixedIcon.png";
import groupSavings from "assets/img/groupIcon.png";
import groupConSavings from "assets/img/groupConIcon.png";
import fixedFlexSavings from "assets/img/fixedFlex.png";
// import roundRobin from 'assets/img/round-robin.png'
// import saveSavings from "assets/img/saveIcon.svg";
import CreatePersonalSavingsModal from "pages/savings/CreateHome/components/CreatePersonalSavingsModal";

const options = [
  {
    heading: "Fixed Lock savings",
    subheading: "Save today to enjoy tomorrow.",
    path: "/dashboard/savings/create/fixed",
    icon: fixedSavings,
  },
  {
    heading: "Fixed Flexible savings",
    subheading: "Lock money away until you need it. Save for rainy days.",
    path: "/dashboard/savings/create/fixed-flexible",
    icon: fixedFlexSavings,
  },
  {
    heading: "Group Target Savings",
    subheading:
      "Don’t do it alone. Start a savings plan with friends and family.",
    path: "/dashboard/savings/create/group-target",
    icon: groupSavings,
  },
  {
    heading: "Group Challenge Savings ",
    subheading:
      "Don’t do it alone. Start a savings plan with friends and family.",
    path: "/dashboard/savings/create/group-challenge",
    icon: groupConSavings,
  },
  // {
  //   heading: "Round Robin",
  //   subheading:
  //     "As simple as investing your savings and we will help you grow from there.",
  //   path: "/dashboard/savings/create/round-robin/1",
  //   icon: roundRobin,
  // },
];

const CreateSavings = () => {
  const [
    isCreatePersonalSavingsModalVisible,
    setCreatePersonalSavingsModalOpen,
  ] = useState(false);

  const openCreatePersonalSavingsModal = () => {
    setCreatePersonalSavingsModalOpen(true);
  };

  const closeCreatePersonalSavingsModal = () => {
    setCreatePersonalSavingsModalOpen(false);
  };

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
              <div
                onClick={openCreatePersonalSavingsModal}
                className="card flex items-center"
              >
                <div className="savings-image">
                  <img src={personalSavings} alt="" />
                </div>
                <div className="savings-items flex h-full flex flex-col items-start justify-center">
                  <h1 className="font-medium card-header mb-2">
                    Personal savings
                  </h1>
                  <p className="card-excerpt leading-4">
                    Smash your Goals with a personal savings plan.
                  </p>
                </div>
              </div>
              {options.map((item, index) => (
                <Link
                  to={`${item.path}`}
                  className="card flex items-center"
                  key={index}
                >
                  <div className="savings-image">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="savings-items flex h-full flex flex-col items-start justify-center">
                    <h1 className="font-medium card-header mb-2">
                      {item.heading}
                    </h1>
                    <p className="card-excerpt leading-4">{item.subheading}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CreatePersonalSavingsModal
        isVisible={isCreatePersonalSavingsModalVisible}
        closeModal={closeCreatePersonalSavingsModal}
      />
    </Fragment>
  );
};

export default CreateSavings;
