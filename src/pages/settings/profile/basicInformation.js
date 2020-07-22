import React, { useState, useEffect } from 'react';
// import { Link, useHistory } from "react-router-dom"
// import {useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker, { utils } from 'react-modern-calendar-datepicker';
// import { StateContext } from '../../../../../contextApi/index';
// import { getHumanDate } from '../../../utilities';


const gender = [
    {
        title: "Male",
        value: "1"
    },
    {
        title: "Female",
        value: "2"
    },

]


const marritalStatus = [
    {
        title: "Single",
        value: "1"
    },
    {
        title: "Maried",
        value: "2"
    },
    {
        title: "Divorced",
        value: "3"
    }
]

const religion = [
    {
        title: "Christianity",
        value: "1"
    },
    {
        title: "Islam",
        value: "2"
    },
    {
        title: "Others",
        value: "3"
    }
]

const BasicInformation = (props) => {
    // const [{ profile, otherInfo }, dispatch] = useContext(StateContext);
    // const history = useHistory()
    // const [state, setState] = useState({
    //     firstName: profile.otherName,
    //     lastName: profile.lastName,
    //     title: profile.others.title !== null ? profile.others.title : "",
    //     maidenName: profile.others.maidenName !== null ? profile.others.maidenName : "",
    //     gender: parseInt(profile.others.gender) !== 0 || profile.others.gender !== null ? profile.others.gender : "",
    //     marritalStatus: profile.others.marritalStatus !== 0 || profile.others.marritalStatus !== null ? profile.others.marritalStatus : "",
    //     religion: profile.others.religion !== 0 || profile.others.religion !== null ? profile.others.religion : "",
    //     dob: parseInt(profile.others.dateOfBirth) !== null ? profile.others.dateOfBirth : ""
    // });

    const [selectedDay, setSelectedDay] = useState(null);

    const handleChange = e => {
        // const { name, value } = e.target
        // setState(prevState => ({
        //     ...prevState,
        //     [name]: value
        // }))
    }

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
    //             title: state.title,
    //             gender: parseInt(state.gender),
    //             maidenName: state.maidenName,
    //             marritalStatus: parseInt(state.marritalStatus),
    //             religion: parseInt(state.religion),
    //         }
    //     });
    // }, [state])

    const gender = [1,1,1];
    const marritalStatus = [1,1,1];
    const religion = [1,1,1];

    return (
        <div className="settings-profile--fields">
            <div className="w-full settings-field--content">

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="title">Title</label>
                    {/* <input placeholder="Enter Title" type="text" name="title" value={state.title} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded" /> */}
                    <input placeholder="Enter Title" type="text" name="title" className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="firstName">First name</label>
                    <input placeholder="Enter First Name" type="text" name="firstName" value={"profile"} className="block w-full text-xs p-3 border border-gray-400 rounded" readOnly />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="lastName">Last name</label>
                    <input placeholder="Enter Last Name" type="text" name="lastName" value={"lastName"} className="block w-full text-xs p-3 border border-gray-400 rounded" readOnly />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="maidenName">Maiden name</label>
                    <input placeholder="Enter Maiden Name" type="text" name="maidenName" value={"maidenName"} className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3">Gender</label>
                    <select name="gender" value={"gender"} className="block w-full text-xs p-3 border border-gray-400 rounded">
                        <option value="" disabled>Select</option>
                        {gender.map((select, key) => (
                            <option key={key} value={"value"} >
                                title
                            </option>
                        ))
                        }
                    </select>
                </fieldset>
                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3">Marital Status</label>
                    <select name="marritalStatus"  className="block w-full text-xs p-3 border border-gray-400 rounded">
                        <option value="" disabled>Select</option>
                        {marritalStatus.map((select, key) => (
                            <option key={key} value={"value"} >
                                {"title"}
                            </option>
                        ))
                        }
                    </select>
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="religion">Religion</label>
                    <select name="religion"  className="block w-full text-xs p-3 border border-gray-400 rounded">
                        <option value="" disabled>Select</option>
                        {religion.map((select, key) => (
                            <option key={key} value={"value"} >
                                {"title"}
                            </option>
                        ))
                        }
                    </select>
                </fieldset>
                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="dob">Date of Birth</label>
                    <input placeholder="Enter DOB" type="text" name="dob" className="block w-full text-xs p-3 border border-gray-400 rounded" readOnly />
                </fieldset>
            </div>
        </div>
    )
}

export default BasicInformation;
