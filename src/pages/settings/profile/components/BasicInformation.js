import React, { Fragment, useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { pencil } from "assets/exports";
import { connect, useDispatch } from "react-redux";
import { Field, useFormikContext } from "formik";
import { uploadProfilePicture } from "state/slices/account";
import DatePicker, { utils } from "react-modern-calendar-datepicker";

const gender = [
  { title: "Male", value: 1 },
  { title: "Female", value: 2 },
];

const maritalStatus = [
  { title: "Single", value: 1 },
  { title: "Married", value: 2 },
  { title: "Divorced", value: 3 },
];

const religion = [
  { title: "Christianity", value: 1 },
  { title: "Islam", value: 2 },
  { title: "Others", value: 3 },
];

const BasicInformation = ({ account }) => {
  const { customerDetails } = account;

  const firstNameInitial = customerDetails.otherNames.charAt(0);
  const lastNameInitial = customerDetails.lastName.charAt(0);
  const photoAbbreviation = `${firstNameInitial}${lastNameInitial}`;

  const dispatch = useDispatch();
  const {
    values,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormikContext();
  const [isPictureUploading, setIsPictureUploading] = useState(false);

  const handleUploadProfilePicture = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    setIsPictureUploading(true);
    const resultAction = await dispatch(uploadProfilePicture(formData));
    if (uploadProfilePicture.fulfilled.match(resultAction)) {
      setIsPictureUploading(false);
    } else {
      if (resultAction.payload) {
        setIsPictureUploading(false);
        // resultAction.payload.message
      } else {
        setIsPictureUploading(false);
        // resultAction.error.message
      }
    }
  };

  return (
    <Fragment>
      <figure className="basic-profile mb-5 flex items-center">
        {values.picture !== null ? (
          <img src={values.picture} alt="" className="mb-4" />
        ) : (
          <div className="user-no--picture mb-4 text-white">
            {photoAbbreviation}
          </div>
        )}

        <figcaption className="ml-5">
          <p className="font-medium card-header mb-2">Upload Selfie</p>
          <p className=" text-sm color-accent">Click image to change it</p>
        </figcaption>
        <input
          className="selfieInput"
          type="file"
          onChange={handleUploadProfilePicture}
          accept="image/*"
        />
        <div
          className={`edit-image ${isPictureUploading ? "edit-loading" : ""}`}
          dangerouslySetInnerHTML={{ __html: pencil }}
        />
      </figure>

      <div className="settings-profile--fields">
        <div className="w-full settings-field--content">
          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="title">
              Title
            </label>
            <Field
              placeholder="Enter Title"
              type="title"
              id="title"
              name="title"
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={customerDetails.otherNames}
              onChange={() => null}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
              readOnly
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              name="firstName"
              value={customerDetails.lastName}
              onChange={() => null}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
              readOnly
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3" htmlFor="maidenName">
              Maiden name
            </label>
            <Field
              placeholder="Enter Maiden Name"
              type="maidenName"
              id="maidenName"
              name="maidenName"
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            />
          </fieldset>

          <fieldset className="mb-6 input-field--wrap">
            <label className="block text-xs mb-3">Gender</label>
            <select
              name="gender"
              value={values.gender}
              onChange={(event) =>
                setFieldValue(event.target.name, parseInt(event.target.value))
              }
              onBlur={handleBlur}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            >
              <option value={null}>Select Gender</option>
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
              value={values.maritalStatus}
              onChange={(event) =>
                setFieldValue(event.target.name, parseInt(event.target.value))
              }
              onBlur={handleBlur}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            >
              <option value={null}>Select Marital Status</option>
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
              value={values.religion}
              onChange={(event) =>
                setFieldValue(event.target.name, parseInt(event.target.value))
              }
              onBlur={handleBlur}
              className="block w-full text-xs p-3 border border-gray-400 rounded"
            >
              <option value={null}>Select</option>
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
            <DatePicker
              inputPlaceholder="Enter Date of Birth"
              value={values.dateOfBirth}
              onChange={(value) => setFieldValue("dateOfBirth", value)}
              shouldHighlightWeekends
              minimumDate={utils("en").getToday()}
              inputClassName="block w-full text-xs p-3 border border-gray-400 rounded text-left-f"
            />
          </fieldset>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  account: state.account.data,
});

export default connect(mapStateToProps)(BasicInformation);
