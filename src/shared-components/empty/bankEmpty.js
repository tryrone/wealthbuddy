import React, { useState } from 'react'
import AuthModal from '../../shared-components/authModal/AuthModal';
// import { StateContext } from '../../../../wealthbuddy-web-frontend/src/contextApi';
// import CardIcon from "../../assets/img/cardIcon.png"
import { emptyBank } from '../../assets/exports';


const Heading = () => {
    // const [{ successModal }] = useContext(StateContext)
    return (
        <div className="flex flex-col items-center mb-5">
            <i className="mb-4" dangerouslySetInnerHTML={{ __html: emptyBank }}>
            </i>
        </div>
    )
}

const EmptyBank = (props) => {
    // const [{ addBank, withdrawFunds }, dispatch] = useContext(StateContext);

    // const proceed = () => {
    //     dispatch({
    //         type: "CHANGE_WITHDRAW_FUNDS",
    //         newPayload: {
    //             ...withdrawFunds,
    //             modal: false
    //         }
    //     });
    //     dispatch({
    //         type: "CHANGE_ADD_BANKS",
    //         newPayload: {
    //             ...addBank,
    //             modal: true
    //         }
    //     });
    // }

    return (


        <AuthModal className="login-fieldset empty-modal">
            <Heading />
            <p className="text-center card-header text-gray-500 font-normal leading-normal">
                Saving and investing money is important, and so is cashing out. Enter your bank details for withdrawals.
            </p>

            <div className="nav-buttons flex justify-center">

                <button className={`px-6 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
                    Add Bank Details
                </button>

            </div>

        </AuthModal>

    )
}

export default EmptyBank;