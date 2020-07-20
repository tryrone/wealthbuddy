import React, { useState, useContext, useEffect } from 'react';
// import { Link, useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker, { utils } from 'react-modern-calendar-datepicker';
// import { StateContext } from '../../../../../contextApi/index';
import NumberFormat from 'react-number-format';
// import UploadIcon from "../../../assets/img/uploadIcon.svg"


const Identity = (props) => {
    // const [{ profile, otherInfo }, dispatch] = useContext(StateContext);
    // const history = useHistory()
    // const [state, setState] = useState({
    //     idNumber: profile.others.idNumber !== null ? profile.others.idNumber : "",
    //     employerAddress: profile.others.employerAddress !== null ? profile.others.employerAddress : "",
    // });

    // const [selectedDay, setSelectedDay] = useState(null);

    // const handleChange = e => {
    //     const { name, value } = e.target
    //     setState(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }))
    // }

    // useEffect(() => {
    //     if (selectedDay) {
    //         let date = new Date(`${selectedDay.month}/${selectedDay.day}/${selectedDay.year}`) // Or the date you'd like converted.
    //         const isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    //         setState(prevState => ({
    //             ...prevState,
    //             dob: isoDate.toISOString()
    //         }))
    //     }

    // }, [selectedDay])

    // useEffect(() => {
    //     // dispatch({
    //     //     type: "CHANGE_OTHER_INFO",
    //     //     newPayload: {
    //     //         ...otherInfo,
    //     //         occupation: state.occupation,
    //     //         employerName: state.employerName,
    //     //         employerAddress: state.employerAddress,
    //     //         employerPhoneNumber: ""
    //     //     }
    //     // });
    // }, [state])

    // const [files, setFiles] = useState({
    //     file: '',
    //     imagePreviewUrl: '',
    //     isFixed: false
    // })

    // const handleImageChange = (e) => {
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     let file = e.target.files[0];
    //     reader.onloadend = () => {
    //         setFiles(prevState => ({
    //             ...prevState,
    //             file: file,
    //             imagePreviewUrl: reader.result
    //         }))
    //     }
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }

    // }

    // let $imagePreview = null;
    // let $imageText;
    // if (files.imagePreviewUrl) {
    //     $imagePreview = (<img src={files.imagePreviewUrl} alt="" />);
    //     $imageText = (<h3 className="color-secondary personalize-text text-center">+ Change Photo</h3>)
    // } else {
    //     $imagePreview = (<div className="buddy-image--drop">
    //         <img src={UploadIcon} alt="Wealth Buddy" />
    //     </div>);
    //     $imageText = (<h3 className="color-secondary change-text personalize-text text-center">
    //         <span className="color-accent">Upload signature</span>
    //     </h3>)
    // }


    return (

        <div className="settings-profile--fields">
            <div className="w-full settings-field--content">

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="occupation">BVN</label>
                    <NumberFormat format="###########" placeholder="Enter BVN" type="text" name="bvn" value={"bvn"} className="block w-full text-xs p-3 border border-gray-400 rounded" readOnly />
                </fieldset>

                {/* <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="idNumber">ID Number</label>
                    <input placeholder="Enter ID Number" type="text" name="idNumber" value={state.idNumber} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset> */}

                {/* <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="idNumber">Signature</label>
                    <div className="personalize--card mb-5">
                        <div className="previewComponent">
                            <input className="fileInput"
                                type="file"
                                onChange={(e) => handleImageChange(e)} accept="image/*" />
                            <div className={`${files.imagePreviewUrl === "" && "drop"} imgPreview`} >
                                {$imagePreview}
                            </div>
                        </div>
                        {$imageText}
                    </div>

                </fieldset> */}


            </div>
        </div>
    )
}

export default Identity;
