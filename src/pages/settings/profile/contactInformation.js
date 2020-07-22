import React from 'react';
// import { Link, useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker, { utils } from 'react-modern-calendar-datepicker';
// import { StateContext } from '../../../../../contextApi/index';
// import Region from '../../../../../modules/stateRegion.json';
import NumberFormat from 'react-number-format';


// const gender = [
//     {
//         title: "Male",
//         value: "1"
//     },
//     {
//         title: "Female",
//         value: "2"
//     },

// ]


// const maritalStatus = [
//     {
//         title: "Single",
//         value: "1"
//     },
//     {
//         title: "Maried",
//         value: "2"
//     },
//     {
//         title: "Divorced",
//         value: "3"
//     }
// ]

// const religion = [
//     {
//         title: "Christianity",
//         value: "1"
//     },
//     {
//         title: "Islam",
//         value: "2"
//     },
//     {
//         title: "Others",
//         value: "3"
//     }
// ]

const ContactInformation = (props) => {
    // const [{ profile, otherInfo }, dispatch] = useContext(StateContext);
    // const history = useHistory()
    // const [state, setState] = useState({
    //     phoneNumber: profile.phone,
    //     email: profile.email,
    //     state: profile.others.state !== null ? profile.others.state : "",
    //     lga: profile.others.lga !== null ? profile.others.lga : "",
    //     nationality: profile.others.nationality !== null ? profile.others.nationality : "",
    //     homeTown: profile.others.homeTown !== null ? profile.others.homeTown : "",
    //     address: profile.others.address !== null ? profile.others.address : "",
    //     landmark: profile.others.landmark !== null ? profile.others.landmark : "",
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
    //             address: state.address,
    //             landmark: state.landmark,
    //             homeTown: state.homeTown,
    //             nationality: state.nationality,
    //             state: state.state,
    //             lga: state.lga,
    //         }
    //     });

    // }, [state]);
    // const getRegion = Region;
    // let getSingleItemArray = [];

    // if (state.state !== "" && typeof state.state !== "undefined") {
    //     let arr = getRegion;
    //     getSingleItemArray = arr.find(o => o.state.name === state.state);
    // }

    const getRegion =[1,1,1,1,1];

    return (

        <div className="settings-profile--fields">
            <div className="w-full settings-field--content">

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="phoneNumber">Phone Number</label>
                    <NumberFormat format="#### ### ####" placeholder="Enter Phone Number" type="tel" name="phoneNumber" value={9084729840928} className="block w-full text-xs p-3 border border-gray-400 rounded" readOnly />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="email">Email</label>
                    <input placeholder="Enter Email" type="email" name="email" value={"email"} className="block w-full text-xs p-3 border border-gray-400 rounded" readOnly />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap input-full--wrap">
                    <label className="block text-xs mb-3" htmlFor="address">Address</label>
                    <textarea placeholder="Enter Address" type="text" name="address" value={"address"}className="block w-full p-3 border border-gray-400 rounded"></textarea>
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="landmark">Land Mark</label>
                    <input placeholder="Enter Land Mark" type="text" name="landmark" value={"landmark"}  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3">State</label>
                    <select name="state" value={"state"} className="block w-full text-xs p-3 border border-gray-400 rounded">
                        <option value="" disabled>Select State</option>
                        {getRegion.map((select, key) => (
                            <option key={key} value={"name"} >
                                {"name"}
                            </option>
                        ))
                        }
                    </select>
                </fieldset>

                {/* <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3">LGA</label>
                    <select name="lga" value={state.lga} onChange={handleChange} className="block w-full text-xs p-3 border border-gray-400 rounded">
                        <option value="" disabled>Select LGA</option>
                        {(typeof getSingleItemArray !== "undefined" && typeof getSingleItemArray.state !== "undefined") &&
                            getSingleItemArray.state.locals.map((select, key) => (
                                <option key={key} value={select.name} >
                                    {select.name}
                                </option>
                            ))

                        }
                    </select>
                </fieldset> */}

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="homeTown">Home Town</label>
                    <input placeholder="Enter Home Town" type="text" name="homeTown" value={"homeTown"} className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="nationality">Nationality</label>
                    <input placeholder="Enter Nationality" type="text" name="nationality" value={"nationality"}  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>


            </div>


        </div>
    )
}

export default ContactInformation;
