import React, { Fragment, useEffect, useState } from "react";
import BasicInformation from "./components/BasicInformation";
import ContactInformation from "./components/ContactInformation";
import EmploymentInformation from "./components/EmploymentInformation";
import NextOfKin from "./components/NextOfKin";
import Identity from "./components/Identity";
import * as yup from "yup";
import { connect, useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import { updateProfile } from "state/slices/account";
import classNames from "classnames";
import { convertIsoDateToYmdJson, convertYmdJsonToIsoDate } from "utils";
import notification from "config/notification";
import { store } from "react-notifications-component";

const Profile = ({ account, activeTabId, handleTab }) => {
  useEffect(() => {
    Array.from(
      document.querySelectorAll(
        `.default .accordion-title,.default .accordion-item`
      )
    ).forEach((element) => {
      element.classList.add("default");
    });
  }, []);

  const { customerDetails } = account;
  const dispatch = useDispatch();
  const [isSaving, setIsSaving] = useState(false);

  const basicInfoTabs = [
    {
      name: "Basic Info",
      excerpt: "Change bio, name and other KYC info",
      id: 1,
    },
    { name: "Contact", excerpt: "Update your contact information", id: 2 },
    {
      name: "Employment",
      excerpt: "Update your employment information",
      id: 3,
    },
    {
      name: "Next of Kin",
      excerpt: "Update your Next of kin information",
      id: 4,
    },
    { name: "Identity", excerpt: "Our contact information and support", id: 5 },
  ];

  const tabs = {
    1: <BasicInformation />,
    2: <ContactInformation />,
    3: <EmploymentInformation />,
    4: <NextOfKin />,
    5: <Identity />,
  };

  const customerDateOfBirth = customerDetails.dateOfBirth
    ? convertIsoDateToYmdJson(customerDetails.dateOfBirth)
    : null;

  const initialValues = {
    title: customerDetails.title,
    maidenName: customerDetails.maidenName,
    gender: customerDetails.gender,
    maritalStatus: customerDetails.marritalStatus,
    religion: customerDetails.religion,
    dateOfBirth: customerDateOfBirth,
    address: customerDetails.address,
    landmark: customerDetails.landmark,
    state: customerDetails.state,
    lga: customerDetails.lga,
    homeTown: customerDetails.homeTown,
    nationality: customerDetails.nationality,
    occupation: customerDetails.occupation,
    employerName: customerDetails.employerName,
    employerAddress: customerDetails.employerAddress,
    nextOfKinName: customerDetails.nextOfKinName,
    nextOfKinPhoneNumber: customerDetails.nextOfKinPhoneNumber,
    nextOfKinEmail: customerDetails.nextOfKinEmail,
    nextOfKinRelationship: customerDetails.nextOfKinRelationship,
    nextOfKinAddress: customerDetails.nextOfKinAddress,
    picture: customerDetails.picture,
  };

  const validationSchema = yup.object().shape({
    title: yup.string().label("Title").nullable(),
    maidenName: yup.string().label("Maiden name").nullable(),
    gender: yup.number().label("Gender").nullable(),
    maritalStatus: yup.number().label("Marital status").nullable(),
    religion: yup.number().label("Religion").nullable(),
    dateOfBirth: yup.object().label("Date of Birth").nullable(),
    address: yup.string().label("Address").nullable(),
    landmark: yup.string().label("Landmark").nullable(),
    state: yup.string().label("State").nullable(),
    lga: yup.string().label("LGA").nullable(),
    homeTown: yup.string().label("Home Town").nullable(),
    nationality: yup.string().label("Nationality").nullable(),
    occupation: yup.string().label("Occupation").nullable(),
    employerName: yup.string().label("Employer Name").nullable(),
    employerAddress: yup.string().label("Employer Address").nullable(),
    nextOfKinName: yup.string().label("Next of Kin Name").nullable(),
    nextOfKinPhoneNumber: yup
      .string()
      .label("Next of Kin Phone Number")
      .nullable(),
    nextOfKinEmail: yup
      .string()
      .label("Next of Kin Phone Number")
      .email()
      .nullable(),
    nextOfKinRelationship: yup
      .string()
      .label("Next of Kin Relationship")
      .nullable(),
    nextOfKinAddress: yup
      .string()
      .label("Next of Kin Phone Address")
      .nullable(),
  });

  const handleSubmit = async (formValues) => {
    const payload = {
      ...formValues,
      marritalStatus: formValues.maritalStatus,
      dateOfBirth: convertYmdJsonToIsoDate(formValues.dateOfBirth),
    };

    setIsSaving(true);
    const resultAction = await dispatch(updateProfile(payload));
    if (updateProfile.fulfilled.match(resultAction)) {
      setIsSaving(false);

      store.addNotification({
        ...notification,
        title: "Success",
        message: "Profile updated successfully",
        type: "success",
      });
    } else {
      if (resultAction.payload) {
        setIsSaving(false);
        // resultAction.payload.message
      } else {
        setIsSaving(false);
        // resultAction.error.message
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount={true}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isValid }) => {
        return (
          <Fragment>
            <Form className="account-content fadeIn" onSubmit={handleSubmit}>
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
                        <p className="mt-2 text-sm text-gray-300">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="profile-right--wrap">
                <div className="settings-fields--wrap">
                  <div className="wrapper">{tabs[activeTabId]}</div>
                  <button
                    type="submit"
                    className={classNames({
                      "w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm": true,
                      "loading opaque": isSaving,
                    })}
                    disabled={!isValid}
                    onClick={handleSubmit}
                  >
                    Save <span className="loader" />
                  </button>
                </div>
              </div>
            </Form>
          </Fragment>
        );
      }}
    </Formik>
  );
};
const mapStateToProps = (state) => ({
  account: state.account.data,
});

export default connect(mapStateToProps)(Profile);
