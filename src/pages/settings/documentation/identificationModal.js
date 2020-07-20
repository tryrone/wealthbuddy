import React, { useState, useContext, Fragment } from 'react'
// import { useForm } from 'react-hook-form'
// import { urls } from '../../../../../modules/network/url'
import Loading from '../../../shared-components/Loading'
// import { postFormCall } from '../../../../../modules/network'
// import { StateContext } from '../../../../../contextApi';
// import AuthModal from '../../../../../shared-components/AuthModal'
import UploadIcon from '../../../assets/img/uploadIcon.svg'
import DatePicker, { utils } from 'react-modern-calendar-datepicker'
// import settingsSelfie from '../../../../../assets/img/settings-selfie.png'
import settingsIdentification from '../../../assets/img/settings-identification.png'
// import settingsUtility from '../../../../../assets/img/settings-utility.png'
import NumberFormat from 'react-number-format';
// import Cookies from "js-cookie"

const IdentificationModal = ({ setShowModal }) => {

    const identificationOptions = [
        {
            key: 1,
            label: "Driver's License",
        },
        {
            key: 2,
            label: 'National ID',
        },
        {
            key: 3,
            label: 'International Passport',
        },
        {
            key: 4,
            label: 'Others',
        }
    ]

    const [stage, setStage] = useState(1)
    // const { handleSubmit, register } = useForm()
    const [files, setFiles] = useState({
        file: '',
        imagePreviewUrl: '',
        isFixed: false,
    })
    // const [{ documents }, dispatch] = useContext(StateContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null);
    const [issuanceDate, setIssuanceDate] = useState(utils().getToday())
    const [expiryDay, setExpiryDay] = useState(utils().getToday())
    const [idType, setIdType] = useState(1);
    const [state, setState] = useState({
        id_number: "",
    });

    const getType = (event) => {
        setIdType(parseInt(event.target.value))
    }

    const ImageUpload = ({ files, setFiles }) => {
        // const [files, setFiles] = useState({
        //   file: '',
        //   imagePreviewUrl: '',
        //   isFixed: false,
        // })

        const handleImageChange = (e) => {
            e.preventDefault()
            let reader = new FileReader()
            let file = e.target.files[0]
            reader.onloadend = () => {
                // setFiles((prevState) => ({
                //     ...prevState,
                //     file: file,
                //     imagePreviewUrl: reader.result,
                // }))
            }
            if (file) {
                reader.readAsDataURL(file)
            }
        }

        let $imagePreview = null
        let $imageText
        // if (imagePreviewUrl) {
        //     $imagePreview = <img src={""} alt="" />
        //     $imageText = (
        //         <h3 className="color-secondary personalize-text text-center">
        //             + Change ID
        //   </h3>
        //     )
        // } else {
        //     $imagePreview = (
        //         <div className="buddy-image--drop">
        //             <img src={UploadIcon} alt="Wealth Buddy" />
        //         </div>
        //     )
        //     $imageText = (
        //         <h3 className="color-secondary change-text personalize-text text-center">
        //             <span>+ Upload ID</span>
        //         </h3>
        //     )
        // }

        return (
            <div className="personalize--card">
                <div className="previewComponent">
                    <input
                        className="fileInput"
                        type="file"
                        onChange={(e) => handleImageChange(e)}
                        accept="image/*"
                    />
                    <div className={`imgPreview`}>
                        imagePreview
                    </div>
                </div>
                imageText
            </div>
        )
    }

    const handleChange = e => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    // const submit = async (e) => {

    //     if (stage === 1) {
    //         setIdType(id_type)
    //         setStage(2)
    //         return
    //     }

    //     let issuanceDateNative = new Date(
    //         `${issuanceDate.month}/${issuanceDate.day}/${issuanceDate.year}`
    //     )
    //     const isoIssuanceDate = new Date(
    //         issuanceDateNative.getTime() -
    //         issuanceDateNative.getTimezoneOffset() * 60000
    //     )
    //     let expiryDateNative = new Date(
    //         `${expiryDay.month}/${expiryDay.day}/${expiryDay.year}`
    //     )
    //     const isoExpiryDate = new Date(
    //         expiryDateNative.getTime() -
    //         expiryDateNative.getTimezoneOffset() * 60000
    //     )
    //     let finalData;
    //     if (parseInt(idType) === 1 || parseInt(idType) === 3) {
    //         finalData = {
    //             identificationNumber: state.id_number,
    //             identificationType: idType,
    //             identificationIssueDateTime: isoIssuanceDate.toISOString(),
    //             identificationExpiryDateTime: isoExpiryDate.toISOString(),
    //         }
    //     }

    //     else {
    //         finalData = {
    //             identificationNumber: state.id_number,
    //             identificationType: idType,
    //         }
    //     }


    //     let headers
    //     if (process.env.isEncrypted === 'true') {
    //         let password = getReference()
    //         let rsakey = rsaEncryption(password)
    //         let encryptedData = {
    //             data: aesEncryption(JSON.stringify(finalData), password),
    //         }
    //         headers = {
    //             'Content-Type': 'multipart/form-data',
    //             encryptionKey: rsakey,
    //         }
    //         finalData = encryptedData
    //     } else {
    //         // finalData = data
    //         headers = { 'Content-Type': 'multipart/form-data' }
    //     }

    //     let url = urls.uploadIdentification

    //     let bodyFormData = new FormData()
    //     bodyFormData.append('data', JSON.stringify(finalData))
    //     bodyFormData.append('file', files.file)

    //     setLoading(true)
    //     const response = await postFormCall(url, bodyFormData, headers)

    //     if (typeof response !== 'undefined' && response.data.status === true) {
    //         setLoading(false)
    //         setShowModal(false)
    //         dispatch({
    //             type: "CHANGE_DOCUMENTS",
    //             newPayload: {
    //                 ...documents,
    //                 idApprovalStatus: 1,
    //                 idUploadStatus: true,
    //             }
    //         });
    //         const newUser = JSON.parse(Cookies.get("wealthState"));
    //         Cookies.set("wealthState", {
    //             ...newUser,
    //             idApprovalStatus: 1,
    //             idUploadStatus: true,
    //         });
    //         dispatch({
    //             type: 'CHANGE_SUCCESS',
    //             newPayload: {
    //                 status: true,
    //                 title: 'Success',
    //                 subtitle: 'Identification added successfully',
    //                 button: 'Done',
    //                 icon: CardIcon,
    //             },
    //         })
    //     } else {
    //         setLoading(false)
    //         setFiles({
    //             file: '',
    //             imagePreviewUrl: '',
    //             isFixed: false,
    //         });
    //         setState({
    //             id_number: ""
    //         });
    //         setError(response.data.message);
    //     }
    // }

   



    return (
        <form>
            <div className="w-full flex flex-col items-center text-center">
                <img src={settingsIdentification} className="mx-auto w-32 mb-4" />
                <p className="text-center font-normal text-gray-500 leading-normal">
                    As simple as investing your savings and we will help you grow from there.{' '}
                </p>

                {stage === 1 ? (
                    <>
                        <div className="w-full flex selectFund flex-wrap  justify-between text-left" onChange={getType}>
                            {identificationOptions.map(({ label, key }) => {
                                return (
                                    <div className="select-radio--option">
                                        <input
                                            type="radio"
                                            name="id_type"
                                            // value={key}
                                            className="mr-2"
                                            // ref={register}
                                            // id={key} defaultChecked={key === 1}
                                        />
                                        <label htmlFor={key} className="font-medium text-base">label</label>
                                    </div>
                                )
                            })}
                        </div>
                    </>
                ) : loading ? (
                    <div className="w-full mt-8 text-center flex flex-col items-center justify-center">
                        <Loading text="Adding your ID, please wait" />
                    </div>
                ) : (
                            <div className="inner-card--wrap mt-4">
                                {error ? (
                                    <div className="w-full mb-8 text-xs text-left">
                                        <p className="w-full p-4 bg-red-200 text-red-700 rounded text-center font-medium">
                                            {error}
                                        </p>
                                    </div>
                                ) : (
                                        ''
                                    )}
                                <ImageUpload files={files} setFiles={setFiles} />
                                <div className="w-full mt-6 flex justify-center max-wrap fieldset">

                                    <fieldset className="w-full max-w-input-upload text-left">
                                        <label className="block text-xs mb-2">ID number</label>
                                        <NumberFormat placeholder="Enter ID Number" type="tel" id="id_number" name="id_number" className="block w-full text-xs p-3 border border-gray-400 rounded" onChange={handleChange} />
                                    </fieldset>
                                </div>
                                {(parseInt(idType) === 1 || parseInt(idType) === 3) &&
                                    <React.Fragment>
                                        <fieldset className="w-full mt-6 text-left max-wrap">
                                            <label className="block text-xs font-medium mb-2">Issuance date</label>
                                            <DatePicker
                                                value={issuanceDate}
                                                // onChange={setIssuanceDate}
                                                inputPlaceholder="Select a date"
                                                shouldHighlightWeekends
                                                // minimumDate={utils().getToday()}
                                                inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left"
                                            />
                                        </fieldset>
                                        <fieldset className="w-full mt-6 text-left max-wrap ">
                                            <label className="block text-xs font-medium mb-2">Expiry date</label>
                                            <DatePicker
                                                value={expiryDay}
                                                // onChange={setExpiryDay}
                                                inputPlaceholder="Select a date"
                                                shouldHighlightWeekends
                                                // minimumDate={utils().getToday()}
                                                inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left"
                                            />
                                        </fieldset>
                                    </React.Fragment>
                                }
                            </div>
                        )}
                {loading ? (
                    ''
                ) : (
                        <div className="flex mt-12">
                            <button type="button" className={`w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm`} 
                            >
                            Back
                            </button>
                            <button type={'button'} className={`block py-3 w-40 font-medium bg-wb-primary rounded-lg text-white `}
                                >
                                {stage === 1 ? 'Next' : 'Submit'}
                            </button>
                        </div>
                    )}
            </div>
        </form>
    )
}
export default IdentificationModal;