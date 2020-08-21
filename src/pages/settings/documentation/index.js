import React, { Fragment, useState } from "react";
import IdentificationIcon from "assets/img/settings-identification.png";
import UtilityIcon from "assets/img/settings-utility.png";
import { successDoc, pendingDoc, progressDoc } from "assets/exports";
import { DocumentApprovalStatus } from "constants/enums";
import { connect, useDispatch } from "react-redux";
import IdentificationModal from "./components/IdentificationModal";
import produce from "immer";
import SubmitIdentificationSuccessModal from "./components/SubmitIdentificationSuccessModal";
import { uploadIdentification } from "state/slices/account";
import { convertYmdJsonToIsoDate } from "utils";

const Documentation = ({
  meansOfIdentificationApprovalStatus,
  utilityBillApprovalStatus,
}) => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isIdentificationModalVisible: false,
    identificationLoading: false,
    identificationError: null,
    isSuccessModalVisible: false,
  });

  const openIdentificationModal = () => {
    setState(
      produce((draft) => {
        draft.isIdentificationModalVisible = true;
      })
    );
  };

  const handleIdentificationModalClose = () => {
    setState(
      produce((draft) => {
        draft.isIdentificationModalVisible = false;
      })
    );
  };

  const handleOnIdentificationSubmit = async (formValues) => {
    const data = {
      idType: formValues.idType,
      IdentificationNumber: formValues.idNumber,
      issuanceDate: convertYmdJsonToIsoDate(formValues.issuanceDate),
      expiryDate: convertYmdJsonToIsoDate(formValues.expiryDate),
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("file", formValues.file);

    setState(
      produce((draft) => {
        draft.identificationLoading = true;
      })
    );

    const resultAction = await dispatch(uploadIdentification(formData));

    if (uploadIdentification.fulfilled.match(resultAction)) {
      setState(
        produce((draft) => {
          draft.identificationLoading = false;
          draft.isIdentificationModalVisible = false;
          draft.isSuccessModalVisible = true;
        })
      );
    } else {
      setState(
        produce((draft) => {
          draft.identificationLoading = false;
          draft.identificationError = resultAction.error.message;
        })
      );
    }
  };

  const handleSuccessModalClose = () => {
    setState(
      produce((draft) => {
        draft.isSuccessModalVisible = false;
      })
    );
  };

  return (
    <Fragment>
      <ul className="flex h-full account-content documentation-content fadeIn">
        <li className="doc-upload--card">
          <div
            className="relative shadow-card h-full bg-white rounded-lg p-8 py-16 flex flex-col justfiy-between text-center"
            onClick={() => {
              // if (
              //   meansOfIdentificationApprovalStatus ===
              //     DocumentApprovalStatus.Rejected ||
              //   meansOfIdentificationApprovalStatus ===
              //     DocumentApprovalStatus.NotUploaded
              // ) {
              openIdentificationModal();
              // }
            }}
          >
            <img
              src={IdentificationIcon}
              className="mx-auto mb-12 doc-icon"
              alt=""
            />
            <div className="leading-snug">
              <h3 className="text-2xl font-medium mb-4">Identification</h3>
              {meansOfIdentificationApprovalStatus ===
              DocumentApprovalStatus.Submitted ? (
                <p className="font-normal color-primary text-gray-300">
                  Your Government Issued ID has been submitted for review.
                </p>
              ) : meansOfIdentificationApprovalStatus ===
                DocumentApprovalStatus.Approved ? (
                <p className="font-normal color-black">
                  Your Identification Card has successfully been approved.
                </p>
              ) : meansOfIdentificationApprovalStatus ===
                DocumentApprovalStatus.Rejected ? (
                <p className="font-normal text-gray-300">
                  Sorry, your uploaded government issue ID was rejected, kindly
                  re-upload a valid identity card for review.
                </p>
              ) : (
                <p className="font-normal text-gray-300">
                  Give us the details of your government-issued ID and we'll add
                  it to your profile.
                </p>
              )}
            </div>
            <span
              className="doc-status--icon top-0 right-0 absolute -mt-3 -mr-3"
              dangerouslySetInnerHTML={{
                __html:
                  meansOfIdentificationApprovalStatus ===
                  DocumentApprovalStatus.Submitted
                    ? progressDoc
                    : meansOfIdentificationApprovalStatus ===
                      DocumentApprovalStatus.Approved
                    ? successDoc
                    : pendingDoc,
              }}
            />

            {meansOfIdentificationApprovalStatus ===
            DocumentApprovalStatus.Submitted ? (
              <div className="wealth-buddy--cta bg-wb-primary opaque text-white">
                Awaiting Approval
              </div>
            ) : meansOfIdentificationApprovalStatus ===
              DocumentApprovalStatus.Approved ? (
              <div className="wealth-buddy--cta bg-wb-primary text-white">
                Approved
              </div>
            ) : (
              <div className="wealth-buddy--cta bg-wb-primary text-white">
                Upload Identification
              </div>
            )}
          </div>
        </li>

        <li className="doc-upload--card">
          <div
            className="relative shadow-card h-full bg-white rounded-lg p-8 py-16 flex flex-col justfiy-between text-center"
            onClick={() => {
              if (
                utilityBillApprovalStatus === DocumentApprovalStatus.Rejected ||
                utilityBillApprovalStatus === DocumentApprovalStatus.NotUploaded
              ) {
                // Show utility bill modal
              }
            }}
          >
            <img src={UtilityIcon} className="mx-auto mb-12 doc-icon" alt="" />
            <div className="leading-snug">
              <h3 className="text-2xl font-medium mb-4">Utility Bill</h3>
              {utilityBillApprovalStatus ===
              DocumentApprovalStatus.Submitted ? (
                <p className="font-normal color-primary text-gray-300">
                  Your Utility Bill has been submitted for review.
                </p>
              ) : utilityBillApprovalStatus ===
                DocumentApprovalStatus.Approved ? (
                <p className="font-normal color-black">
                  Your utility bill has successfully been approved.
                </p>
              ) : utilityBillApprovalStatus ===
                DocumentApprovalStatus.Rejected ? (
                <p className="font-normal text-gray-300">
                  Sorry, your utility bill was rejected, kindly re-upload a
                  utility bill for review.
                </p>
              ) : (
                <p className="font-normal text-gray-300">
                  Give us the details of your Utility Bill and we'll add it to
                  your profile.
                </p>
              )}
            </div>
            <span
              className="doc-status--icon top-0 right-0 absolute -mt-3 -mr-3"
              dangerouslySetInnerHTML={{
                __html:
                  utilityBillApprovalStatus === DocumentApprovalStatus.Submitted
                    ? progressDoc
                    : utilityBillApprovalStatus ===
                      DocumentApprovalStatus.Approved
                    ? successDoc
                    : pendingDoc,
              }}
            />
            {utilityBillApprovalStatus === DocumentApprovalStatus.Submitted ? (
              <div className="wealth-buddy--cta bg-wb-primary opaque text-white">
                Awaiting Approval
              </div>
            ) : utilityBillApprovalStatus ===
              DocumentApprovalStatus.Approved ? (
              <div className="wealth-buddy--cta bg-wb-primary text-white">
                Approved
              </div>
            ) : (
              <div className="wealth-buddy--cta bg-wb-primary text-white">
                Upload Utility
              </div>
            )}
          </div>
        </li>
      </ul>

      <IdentificationModal
        isVisible={state.isIdentificationModalVisible}
        loading={state.identificationLoading}
        error={state.identificationError}
        onSubmit={handleOnIdentificationSubmit}
        close={handleIdentificationModalClose}
      />

      <SubmitIdentificationSuccessModal
        isVisible={state.isSuccessModalVisible}
        close={handleSuccessModalClose}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  meansOfIdentificationApprovalStatus:
    state.account.data.meansOfIdentificationUploadStatus.approvalStatus,
  utilityBillApprovalStatus:
    state.account.data.utilityBillUploadStatus.approvalStatus,
});

export default connect(mapStateToProps)(Documentation);
