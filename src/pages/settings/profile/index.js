import React, { useEffect } from "react";
import BasicInformation from "./components/BasicInformation";
import ContactInformation from "./components/ContactInformation";
import EmploymentInformation from "./components/EmploymentInformation";
import NextOfKin from "./components/NextOfKin";
import Identity from "./components/Identity";

const basicInfoTabs = [
  { name: "Basic Info", excerpt: "Change bio, name and other KYC info", id: 1 },
  { name: "Contact", excerpt: "Update your contact information", id: 2 },
  { name: "Employment", excerpt: "Update your employment information", id: 3 },
  {
    name: "Next of Kin",
    excerpt: "Update your Next of kin information",
    id: 4,
  },
  { name: "Identity", excerpt: "Our contact information and support", id: 5 },
];

const Profile = ({ activeTabId, handleTab }) => {
  useEffect(() => {
    Array.from(
      document.querySelectorAll(
        `.default .accordion-title,.default .accordion-item`
      )
    ).forEach((element) => {
      element.classList.add("default");
    });
  }, []);

  const tabs = {
    1: <BasicInformation />,
    2: <ContactInformation />,
    3: <EmploymentInformation />,
    4: <NextOfKin />,
    5: <Identity />,
  };

  return (
    <form className="account-content fadeIn">
      <div className="profile-left--wrap">
        {basicInfoTabs.map((item, index) => (
          <div
            className={`profile-side--menu ${
              activeTabId === item.id ? "is-active" : ""
            }`}
            key={index}
            onClick={handleTab.bind(this, item.id)}
          >
            <div className="profile-side--item" key={item}>
              <div>
                <h3 className="text-semi--bold ">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.excerpt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="profile-right--wrap">
        <div className="settings-fields--wrap">
          <div className="wrapper">{tabs[activeTabId]}</div>
          <button className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm loading opaque">
            Save <span className="loader" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
