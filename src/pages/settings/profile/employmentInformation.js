import React, { useState, useContext, useEffect } from 'react';
// import { Link, useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker, { utils } from 'react-modern-calendar-datepicker';
import { StateContext } from '../../../../../contextApi/index';

const EmploymentInformation = (props) => {
    // const [{ profile, otherInfo }, dispatch] = useContext(StateContext);
    // const history = useHistory()
    // const [state, setState] = useState({
    //     occupation: profile.others.occupation !== null ? profile.others.occupation : "",
    //     employerName: profile.others.employerName !== null ? profile.others.employerName : "",
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
    //     dispatch({
    //         type: "CHANGE_OTHER_INFO",
    //         newPayload: {
    //             ...otherInfo,
    //             occupation: state.occupation,
    //             employerName: state.employerName,
    //             employerAddress: state.employerAddress,
    //             employerPhoneNumber: ""
    //         }
    //     });

    // }, [state])


    return (

        <div className="settings-profile--fields">
            <div className="w-full settings-field--content">

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="occupation">Occupation</label>
                    <input placeholder="Enter Occupation" type="text" name="occupation" value={"occupation"}  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="employerName">Employer Name</label>
                    <input placeholder="Enter Employer Name" type="text" name="employerName" value={"employerName"}  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap input-full--wrap">
                    <label className="block text-xs mb-3" htmlFor="lastName">Employer Address</label>
                    <textarea placeholder="Enter Employer Address" type="text" name="employerAddress" value={"employerAddress"}  className="block w-full p-3 border border-gray-400 rounded"></textarea>
                </fieldset>

            </div>
        </div>
    )
}

export default EmploymentInformation;
