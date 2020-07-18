import React, { useState, useContext } from 'react'
import Icon from "../../../assets/img/emailConfirm.png"
// import { useForm } from 'react-hook-form'
// import { navigate } from 'hookrouter'
// import { postCall } from '../../../modules/network/index'
import Loading from '../../../shared-components/Loading'
// import { urls } from '../../../modules/network/url'
// import { StateContext } from '../../../contextApi'
import { useHistory, Link, Redirect } from "react-router-dom";
import ReactCodeInput from "react-code-input";

const loading = false;
const loginError = false;

const Form = () => {
    // const [{ createUser }, dispatch] = useContext(StateContext);
    // const { handleSubmit, register } = useForm()
    // const [loading, setLoading] = useState(false)
    // const [loginError, setLoginError] = useState(null);
    // const history = useHistory();
    // const [state, setState] = useState({
    //     signup_code: ""
    // })

    // const handleChange = (e) => {
    //     setState({
    //         signup_code: `${e}`
    //     })
    // }

    // if (createUser.emailVerificationID === "") {
    //     return <Redirect to="/signup" />
    // }

    // const onSubmit = async () => {
    //     setLoading(true)
    //     const data = {
    //         verificationID: createUser.emailVerificationID,
    //         otp: state.signup_code,
    //     }

    //     const finalData = JSON.stringify(data);
    //     const response = await postCall(urls.completeVerifyEmail, finalData);

    //     if (typeof response !== "undefined" && response.data.status === true) {

    //         dispatch({
    //             newCreateUser: {
    //                 ...createUser,
    //                 emailVerificationID: response.data.verificationID
    //             },
    //             type: 'CHANGE_USER'
    //         });

    //         history.push("/signup/set-password")
    //     } else {
    //         setLoading(false)
    //         setLoginError(response.data.message)
    //     }

    //     e.preventDefault()
    // }


    return loading ? (
        <Loading text="Verifying your email" />
    ) : (
            <>
                <div className="w-72 mb-3 text-xs text-left">
                    {/* <p>An error occured</p> */}
                    {loginError ? (
                        <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
                            {loginError}
                        </p>
                    ) : (
                            ''
                        )}
                </div>
                {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center"> */}
                <form className="flex flex-col items-center">


                    <fieldset className="is-six--code">
                        <ReactCodeInput type='number' placeholder="*" fields={6}  />
                    </fieldset>
                    <Link to="/">
                    <button className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm opaque`}>
                        Confirm
                    </button>
                    </Link>
                </form>
            </>
        )
}

const Footer = () => {
    return (
        <>
            <div className="mt-8 ">
                <p className="text-sm text-gray-500">
                    Already have an account?{' '}
                    <Link to="/" className="text-wb-primary">
                        Sign In
                    </Link>
                </p>
            </div>
        </>
    )
}

const Heading = () => {
    return (
        <div className="flex flex-col items-center setup-success mb-6">
            <i className="w-10 mb-4">
                <img src={Icon} />
            </i>
            <h1 className="text-xl font-medium mb-2">Confirm your email address</h1>
            <p className="text-center text-gray-500 leading-normal">
                We sent a 6 digit code to please enter it below
      </p>
        </div>
    )
}

const VerifyEmail = ({ }) => {
    return (
        <>
        <div className={`auth-modal flex flex-col my-40 items-center bg-white fadeIn login-fieldset onboarding-wrap`}>
            <Heading />
            <Form />
            <Footer />
            </div>
        </>
    )
}

export default VerifyEmail
