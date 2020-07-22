import React from 'react';
// import { Link, useHistory } from "react-router-dom"
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker, { utils } from 'react-modern-calendar-datepicker';
// import { StateContext } from '../../../../../contextApi/index';
import NumberFormat from 'react-number-format';

const NextOfKin = (props) => {
    // const [{ profile, otherInfo }, dispatch] = useContext(StateContext);
    // const history = useHistory()
    // const [state, setState] = useState({
    //     name: profile.others.nextOfKinName !== null ? profile.others.nextOfKinName : "",
    //     phone: profile.others.nextOfKinPhoneNumber !== null ? profile.others.nextOfKinPhoneNumber : "",
    //     email: profile.others.nextOfKinEmail !== null ? profile.others.nextOfKinEmail : "",
    //     address: profile.others.nextOfKinAddress !== null ? profile.others.nextOfKinAddress : "",
    //     relationship: profile.others.nextOfKinRelationship !== null ? profile.others.nextOfKinRelationship : "",

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
    //             nextOfKinName: state.name,
    //             nextOfKinAddress: state.address,
    //             nextOfKinRelationship: state.relationship,
    //             nextOfKinPhoneNumber: state.phone,
    //             nextOfKinEmail: state.email,
    //         }
    //     });

    // }, [state])


    return (

        <div className="settings-profile--fields">
            <div className="w-full settings-field--content">

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="name">Full Name</label>
                    <input placeholder="Enter Full Name" type="text" name="name" value={"name"}  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="phone">Phone Number</label>
                    <NumberFormat format="#### ### ####" placeholder="Enter Phone Number" type="text" name="phone" value={90930409498} className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>


                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="email">Email Address</label>
                    <input placeholder="Enter Email" type="email" name="email" value={"email"} className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap">
                    <label className="block text-xs mb-3" htmlFor="relationship">Relationship</label>
                    <input placeholder="Enter Relationship" type="text" name="relationship" value={"relationship"}  className="block w-full text-xs p-3 border border-gray-400 rounded" />
                </fieldset>

                <fieldset className="mb-6 input-field--wrap input-full--wrap">
                    <label className="block text-xs mb-3" htmlFor="address">Address</label>
                    <textarea placeholder="Enter Address" type="text" name="address" value={"address"} className="block w-full p-3 border border-gray-400 rounded"></textarea>
                </fieldset>

            </div>
        </div>
    )
}

export default NextOfKin;
