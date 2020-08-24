import React from "react";
import personalSavings from "assets/img/personalIcon.png";
import educationIcon from "assets/img/educationIcon.svg";
import expensesIcon from "assets/img/expensesIcon.svg";
import foodIcon from "assets/img/foodIcon.svg";
import homeIcon from "assets/img/homeIcon.svg";
import carIcon from "assets/img/carIcon.svg";
import emergencyIcon from "assets/img/emergencyIcon.svg";
import weddingIcon from "assets/img/weddingIcon.svg";
import vacationIcon from "assets/img/vacationIcon.svg";
import miscellaneousIcon from "assets/img/miscelenousIcon.svg";
import businessIcon from "assets/img/businessIcon.svg";
import { Link } from "react-router-dom";
import { addFundIcon } from "assets/exports";
import CloseModalIcon from "shared-components/svgs/CloseModalIcon";
import "../style.css";

const options = [
  { id: 1, title: "Education", icon: educationIcon },
  { id: 2, title: "Expenses", icon: expensesIcon },
  { id: 3, title: "Food", icon: foodIcon },
  { id: 4, title: "Emergency", icon: emergencyIcon },
  { id: 5, title: "Home", icon: homeIcon },
  { id: 6, title: "Car", icon: carIcon },
  { id: 7, title: "Business", icon: businessIcon },
  { id: 8, title: "Wedding", icon: weddingIcon },
  { id: 9, title: "Vacation", icon: vacationIcon },
  { id: 10, title: "Miscellaneous", icon: miscellaneousIcon },
];

const CreatePersonalSavingsModal = ({ isVisible, closeModal }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div
      onClick={closeModal}
      className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active"
    >
      <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset personal-wrap">
        <span className="closeModal" onClick={closeModal}>
          <CloseModalIcon />
        </span>
        <div className="proceed-personal--wrap flex justify-between">
          <div className="left-side--wrap">
            <div className="flex justify-between">
              <div className="personal-inner--icon">
                <img
                  className="inner-proceed--icon"
                  src={personalSavings}
                  alt=""
                />
              </div>
              <div className="personal-inner--body">
                <div className="proceed-heading mb-10">
                  <h1 className="text-2xl font-medium">
                    Personal target savings
                  </h1>
                  <p className="mt-2 leading-normal">
                    As simple as investing your savings and we will help you
                    grow from there.
                  </p>
                </div>
                <div className="proceed-body">
                  <Link
                    to={{
                      pathname: "/dashboard/savings/create/personal",
                      state: { params: { name: "" } },
                    }}
                    // onClick={closeModal}
                    className="card card-label addNewSavings card-padding mb-0 flex justify-center items-center"
                  >
                    <div className="flex flex-col items-center text-black">
                      <span dangerouslySetInnerHTML={{ __html: addFundIcon }} />
                      <h5 className="card-header color-primary mt-3 font-medium ">
                        Customize
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side--wrap">
            <div className="right-wrap">
              {options.map((item, index) => (
                <Link
                  to={{
                    pathname: "/dashboard/savings/create/personal",
                    state: { params: { name: item.title } },
                    // }} onClick={closeModal}
                  }}
                  className="card flex items-center"
                  key={index}
                >
                  <div className="right-image">
                    <img src={item.icon} alt={`Wealth Buddy ${item.title}`} />
                  </div>
                  <div className="right-items flex h-full flex flex-col items-start justify-center">
                    <p className="mb-0">{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePersonalSavingsModal;
