import React, { Fragment } from "react";
import IdentificationIcon from "assets/img/settings-identification.png";
import UtilityIcon from "assets/img/settings-utility.png";
import { successDoc, pendingDoc, progressDoc } from "assets/exports";
import { DocumentApprovalStatus } from "constants/enums";
import { connect } from "react-redux";
import IdentificationModal from "./identificationModal";

const Documentation = ({
  meansOfIdentificationApprovalStatus,
  utilityBillApprovalStatus,
}) => {
  return (
    <Fragment>
      <ul className="flex h-full account-content documentation-content fadeIn">
        <li className="doc-upload--card">
          <div
            className="relative shadow-card h-full bg-white rounded-lg p-8 py-16 flex flex-col justfiy-between text-center"
            onClick={() => {
              if (
                meansOfIdentificationApprovalStatus ===
                  DocumentApprovalStatus.Rejected ||
                meansOfIdentificationApprovalStatus ===
                  DocumentApprovalStatus.NotUploaded
              ) {
                // Show identification modal
              }
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

      <IdentificationModal />

      {/*{showModal ? (*/}
      {/*  <section*/}
      {/*    className="fixed inset-0 z-50 bg-wb-overlay flex justify-center items-center"*/}
      {/*    data-modal="overlay"*/}
      {/*    onClick={({ target }) => {*/}
      {/*      if (target.dataset.modal === "overlay") {*/}
      {/*        setShowModal(false);*/}
      {/*      }*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <AuthModal width="40rem" className="login-fieldset id-modal">*/}
      {/*      {activeModal === "selfie" ? (*/}
      {/*        <SelfieModal setShowModal={setShowModal} />*/}
      {/*      ) : activeModal === "identification" ? (*/}
      {/*        <IdentificationModal setShowModal={setShowModal} />*/}
      {/*      ) : (*/}
      {/*        <UtilityModal setShowModal={setShowModal} />*/}
      {/*      )}*/}
      {/*    </AuthModal>*/}
      {/*  </section>*/}
      {/*) : null}*/}
    </Fragment>
  );
};

// const SelfieModal = ({ setShowModal }) => {
//   const [files, setFiles] = useState({
//     file: "",
//     imagePreviewUrl: "",
//     isFixed: false,
//   });
//   // const [, dispatch] = useContext(StateContext)
//   // const [loading, setLoading] = useState(false)
//
//   return (
//     <form
//       onSubmit={async (e) => {
//         e.preventDefault();
//         if (!files.file) return;
//         let finalData;
//         let headers;
//         if (process.env.isEncrypted === "true") {
//           // let password = getReference()
//           // let rsakey = rsaEncryption(password)
//           // let encryptedData = {
//           //   data: aesEncryption(JSON.stringify(finalData), password),
//           // }
//           headers = {
//             "Content-Type": "multipart/form-data",
//             // encryptionKey: rsakey,
//           };
//           // finalData = encryptedData
//         } else {
//           // finalData = data
//           headers = { "Content-Type": "multipart/form-data" };
//         }
//
//         // let url = urls.uploadProfilePicture
//
//         let bodyFormData = new FormData();
//         // bodyFormData.append('data', JSON.stringify(finalData))
//         bodyFormData.append("file", files.file);
//
//         // setLoading(true)
//         // const response = await postFormCall(url, bodyFormData, headers)
//
//         // if (typeof response !== 'undefined' && response.data.status === true) {
//         //     setLoading(false)
//         //     setShowModal(false)
//         //     dispatch({
//         //         type: 'CHANGE_SUCCESS',
//         //         newPayload: {
//         //             status: true,
//         //             title: 'Success',
//         //             subtitle: 'Selfie added successfully',
//         //             button: 'Done',
//         //             icon: CardIcon,
//         //         },
//         //     })
//         // } else {
//         //     setLoading(false)
//         //     // setLoginError(response.data.message)
//         // }
//       }}
//     >
//       <div className="flex flex-col items-center text-center">
//         <img src={settingsSelfie} className="mx-auto w-32 mb-4" alt="" />
//         <p className="text-center font-normal text-gray-500 leading-normal">
//           As simple as investing your savings and we will help you grow from
//           there.{" "}
//         </p>
//         {loading ? (
//           <div className="w-full selectFund text-center flex flex-col items-center justify-center">
//             <Loading text="Uploading. Please wait" />
//           </div>
//         ) : (
//           <>
//             <ImageUpload files={files} setFiles={setFiles} />
//             <div className="mt-12">
//               <button
//                 type="submit"
//                 className={`block py-3 px-24 font-medium bg-wb-primary rounded-lg text-white ${
//                   files.file ? "" : "opaque"
//                 }`}
//               >
//                 Submit
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </form>
//   );
// };
//
// const utilityOptions = [
//   {
//     key: "1",
//     label: "Electricity Bill",
//   },
//   {
//     key: "2",
//     label: "Waste Bill",
//   },
//   {
//     key: "3",
//     label: "Water Bill",
//   },
// ];
//
// const UtilityModal = ({ setShowModal }) => {
//   const [stage, setStage] = useState(1);
//   // const { handleSubmit, register } = useForm()
//   const [files, setFiles] = useState({
//     file: "",
//     imagePreviewUrl: "",
//     isFixed: false,
//   });
//   // const [, dispatch] = useContext(StateContext)
//   const [loading, setLoading] = useState(false);
//   const [utilityType, setUtilityType] = useState(undefined);
//   const [error, setError] = useState(null);
//
//   return (
//     <form
//     // onSubmit={handleSubmit(async ({ utility_type }, e) => {
//     //     e.preventDefault()
//     //     if (stage === 1) {
//     //         setUtilityType(utility_type)
//     //         setStage(2)
//     //         return
//     //     }
//     //     if (!files.file || !utilityType) return
//     //     let finalData = { utilityBillType: utility_type }
//     //     let headers
//     //     if (process.env.isEncrypted === 'true') {
//     //         // let password = getReference()
//     //         // let rsakey = rsaEncryption(password)
//     //         let encryptedData = {
//     //             // data: aesEncryption(JSON.stringify(finalData), password),
//     //         }
//     //         headers = {
//     //             'Content-Type': 'multipart/form-data',
//     //             encryptionKey: rsakey,
//     //         }
//     //         finalData = encryptedData
//     //     } else {
//     //         // finalData = data
//     //         headers = { 'Content-Type': 'multipart/form-data' }
//     //     }
//
//     //     // let url = urls.uploadUtilityBill
//
//     //     let bodyFormData = new FormData()
//     //     bodyFormData.append('data', JSON.stringify(finalData))
//     //     bodyFormData.append('file', files.file)
//
//     //     setLoading(true)
//     //     // const response = await postFormCall(url, bodyFormData, headers)
//
//     //     if (typeof response !== 'undefined' && response.data.status === true) {
//     //         setLoading(false)
//     //         setShowModal(false)
//     //         dispatch({
//     //             type: 'CHANGE_SUCCESS',
//     //             newPayload: {
//     //                 status: true,
//     //                 title: 'Success',
//     //                 subtitle: 'Utility bill added successfully',
//     //                 button: 'Done',
//     //                 icon: CardIcon,
//     //             },
//     //         });
//
//     //         // const newUser = JSON.parse(Cookies.get("wealthState"));
//     //         // Cookies.set("wealthState", {
//     //         //     ...newUser,
//     //         //     utilityApprovalStatus: 1,
//     //         //     utilityUploadStatus: true,
//     //         // });
//
//     //         // dispatch({
//     //         //     type: "CHANGE_DOCUMENTS",
//     //         //     newPayload: {
//     //         //         ...documents,
//     //         //         utilityApprovalStatus: 1,
//     //         //         utilityUploadStatus: true,
//     //         //     }
//     //         // });
//     //     } else {
//     //         setLoading(false);
//     //         setFiles({
//     //             file: '',
//     //             imagePreviewUrl: '',
//     //             isFixed: false,
//     //         });
//     //         setError(response.data.message)
//     //     }
//     // })}
//     >
//       <div className="w-full flex flex-col items-center text-center">
//         <img
//           src={settingsIdentification}
//           className="mx-auto w-32 mb-4"
//           alt=""
//         />
//         <p className="text-center font-normal text-gray-500 leading-normal">
//           As simple as investing your savings and we will help you grow from
//           there.{" "}
//         </p>
//
//         {stage === 1 ? (
//           <>
//             <div className="w-full flex selectFund flex-wrap  justify-between text-left">
//               {utilityOptions.map(({ label, key }) => {
//                 return (
//                   <div className="select-radio--option">
//                     <input
//                       type="radio"
//                       name="utility_type"
//                       value={key}
//                       className="mr-2"
//                       // ref={register}
//                       id={key}
//                       defaultChecked={key === 1}
//                     />
//                     <label htmlFor={key} className="font-medium text-base">
//                       {label}
//                     </label>
//                   </div>
//                 );
//               })}
//             </div>
//           </>
//         ) : loading ? (
//           <div className="w-full text-center mt-8 flex flex-col items-center justify-center">
//             <Loading text="Uploading. Please wait" />
//           </div>
//         ) : (
//           <div className="inner-card--wrap mt-4">
//             {error ? (
//               <div className="w-full mb-8 text-xs text-left">
//                 <p className="w-full p-4 text-center bg-red-200 text-red-700 rounded font-medium">
//                   {error}
//                 </p>
//               </div>
//             ) : (
//               ""
//             )}
//             <ImageUpload files={files} setFiles={setFiles} />
//           </div>
//         )}
//         {loading ? (
//           ""
//         ) : (
//           <div className="flex mt-12">
//             <button
//               type="button"
//               className={`w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm`}
//               onClick={() => {
//                 if (stage === 2) {
//                   setStage(1);
//                 } else {
//                   setShowModal(false);
//                 }
//               }}
//             >
//               Back
//             </button>
//             <button
//               type="submit"
//               className="block py-3 w-40 font-medium bg-wb-primary rounded-lg text-white"
//             >
//               {stage === 1 ? "Next" : "Submit"}
//             </button>
//           </div>
//         )}
//       </div>
//     </form>
//   );
// };
//
// const ImageUpload = ({ files, setFiles }) => {
//   // const [files, setFiles] = useState({
//   //   file: '',
//   //   imagePreviewUrl: '',
//   //   isFixed: false,
//   // })
//
//   const handleImageChange = (e) => {
//     e.preventDefault();
//     let reader = new FileReader();
//     let file = e.target.files[0];
//     reader.onloadend = () => {
//       // setFiles((prevState) => ({
//       //     ...prevState,
//       //     file: file,
//       //     imagePreviewUrl: reader.result,
//       // }))
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };
//
//   // let $imagePreview = null
//   // let $imageText
//   // if (imagePreviewUrl) {
//   //     $imagePreview = <img src='' alt="" />
//   //     $imageText = (
//   //         <h3 className="color-secondary personalize-text text-center">
//   //             + Change ID
//   //   </h3>
//   //     )
//   // } else {
//   //     $imagePreview = (
//   //         <div className="buddy-image--drop">
//   //             <img src={UploadIcon} alt="Wealth Buddy" />
//   //         </div>
//   //     )
//   //     $imageText = (
//   //         <h3 className="color-secondary change-text personalize-text text-center">
//   //             <span>+ Upload ID</span>
//   //         </h3>
//   //     )
//   // }
//
//   return (
//     <div className="personalize--card">
//       <div className="previewComponent">
//         <input
//           className="fileInput"
//           type="file"
//           // onChange={(e) => handleImageChange(e)}
//           accept="image/*"
//         />
//         <div className={`imgPreview`}>imagePreview</div>
//       </div>
//       imageText
//     </div>
//   );
// };
//
// const Fieldset = ({ label }) => (
//   <fieldset className="w-full max-w-input-upload text-left">
//     <label className="block text-xs mb-2">{label}</label>
//     <input
//       placeholder={"placeholder"}
//       // type={type}
//       // id={id}
//       // name={name}
//       className="block w-full text-xs p-3 border border-gray-400 rounded"
//       // ref={register}
//     />
//   </fieldset>
// );

const mapStateToProps = (state) => ({
  meansOfIdentificationApprovalStatus:
    state.account.data.meansOfIdentificationUploadStatus.approvalStatus,
  utilityBillApprovalStatus:
    state.account.data.utilityBillUploadStatus.approvalStatus,
});

export default connect(mapStateToProps)(Documentation);
