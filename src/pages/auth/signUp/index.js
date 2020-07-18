import React from 'react';
import LeafLeftSvg from 'shared-components/svgs/LeafLeftSvg';
import LeafRightSvg from 'shared-components/svgs/LeafRightSvg';
import { Link } from "react-router-dom";
const Logo = require('../../../static/logo.svg');

const inputs = [
    {
        label: 'First name',
        name: 'sign_first_name',
        type: 'text',
        placeholder: '',
        id: 'sign_first_name',
    },
    {
        label: 'Last name',
        name: 'sign_last_name',
        id: 'sign_last_name',
        type: 'text',
        placeholder: '',
    },
    {
        label: 'Email',
        name: 'signup_email',
        id: 'signup_email',
        type: 'email',
        placeholder: 'my@email.com',
    },
    {
        label: 'Phone number',
        name: 'signup_phone',
        id: 'signup_phone',
        type: 'text',
        placeholder: '',
    },
    {
        label: 'Referral Code',
        name: 'signup_referral_code',
        id: 'signup_referral_code',
        type: 'text',
        placeholder: '',
    },
]

const Fieldset = ({
    label,
    name,
    type = 'text',
    placeholder = '',
    id,
    register,
    handleChange
}) => (
        <fieldset className="mb-5" key={id}>
            <label className="block text-xs mb-2">{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                className="block w-72 text-xs p-3 border border-gray-400 rounded"
                // ref={register} onChange={handleChange}
            />
        </fieldset>
    )


 const SignUp =()=> {
    return (
        <section className="h-screen setup-screens w-screen flex flex-col justify-center items-center">
        <div className="leaf-left">
        <LeafLeftSvg />
        </div>
        
        <div className="leaf-right">
            <LeafRightSvg/>
        </div>
        <div className={`auth-modal flex flex-col items-center bg-white fadeIn login-fieldset`}>
            {/* header */}
            <div className="flex flex-col items-center w-full">
            <i className="w-10 mb-2">
                <img src={Logo} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">Sign up</h1>
            <p className="text-center leading-normal">We'll get you set up in less than one minute</p>
        </div>

        {/* form */}
        {/* error here */}
        <p className="w-sm my-5 p-3 bg-red-200 text-red-700 rounded text-center font-medium">
        loginError here
         </p>
        {/* error ends here */}


        {/* form here */}
        <form
        // onSubmit={checkEmpty(state) !== true && handleSubmit(onSubmit)}
        className="flex flex-col items-center"
    >
        {inputs.map((inputCongfig, key) => (
            <Fieldset
                {...inputCongfig}
                // register={register}
                key={key}
            />
        ))}
        <Link to="/verify">
        <button className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
            Next
        </button>
        </Link>
        </form>


        {/* footer */}

        <div className="mt-8 ">
                <p className="text-sm text-gray-500">
                Already have an account?{' '}
                <Link to="/" className="text-wb-primary">
                    Sign In
                </Link>
                </p>
            </div>
        </div>
    </section>
    )
}
export default SignUp;