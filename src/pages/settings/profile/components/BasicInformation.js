import React, { Fragment } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { pencil } from "assets/exports";

const gender = [
  { title: "Male", value: "1" },
  { title: "Female", value: "2" },
];

const maritalStatus = [
  { title: "Single", value: "1" },
  { title: "Married", value: "2" },
  { title: "Divorced", value: "3" },
];

const religion = [
  { title: "Christianity", value: "1" },
  { title: "Islam", value: "2" },
  { title: "Others", value: "3" },
];

const BasicInformation = () => {
  return (
    <Fragment>
      <figure className="basic-profile mb-5 flex items-center">
        {/* profileImage !== null ?
                                    <img src={profile.image} alt={`Wealth Buddy Investments`} className="mb-4" /> : */}
        <div className="user-no--picture mb-4 text-white">{`names`}</div>

        <figcaption className="ml-5">
          <p className="font-medium card-header mb-2">Upload Selfie</p>
          <p className=" text-sm color-accent">Click image to change it</p>
        </figcaption>

        <input
          className="selfieInput"
          type="file"
          // onChange={uploadSelfie}
          accept="image/*"
        />
        <div
          className="edit-image"
          dangerouslySetInnerHTML={{ __html: pencil }}
        />
      </figure>

      <div className="settings-profile--fields">
        <div className="w-full settings-field--content">
          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="title">
              Title
            </label>
            <input
              placeholder="Enter Title"
              type="text"
              name="title"
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="firstName">
              First name
            </label>
            <input
              placeholder="Enter First Name"
              type="text"
              name="firstName"
              value={"profile"}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
              readOnly
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="lastName">
              Last name
            </label>
            <input
              placeholder="Enter Last Name"
              type="text"
              name="lastName"
              value={"lastName"}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
              readOnly
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="maidenName">
              Maiden name
            </label>
            <input
              placeholder="Enter Maiden Name"
              type="text"
              name="maidenName"
              value={"maidenName"}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3">Gender</label>
            <select
              name="gender"
              value={"gender"}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            >
              <option value="" disabled>
                Select
              </option>
              {gender.map(({ title, value }, key) => (
                <option key={key} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3">Marital Status</label>
            <select
              name="maritalStatus"
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            >
              <option value="" disabled>
                Select
              </option>
              {maritalStatus.map(({ title, value }, key) => (
                <option key={key} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="religion">
              Religion
            </label>
            <select
              name="religion"
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            >
              <option value="" disabled>
                Select
              </option>
              {religion.map(({ title, value }, key) => (
                <option key={key} value={value}>
                  {title}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="dob">
              Date of Birth
            </label>
            <input
              placeholder="Enter DOB"
              type="text"
              name="dob"
              className="block w-full text-xs p-3 border border-gray-400 rounded"
              readOnly
            />
          </fieldset>
        </div>
      </div>

      <button className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm loading opaque">
        Save <span className="loader" />
      </button>
    </Fragment>
  );
};

export default BasicInformation;
