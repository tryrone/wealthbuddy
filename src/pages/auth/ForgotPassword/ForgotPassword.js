import React from 'react';
import LeafRightSvg from 'shared-components/svgs/LeafRightSvg';
import {Link} from 'react-router-dom';
import Icon from '../../../static/logo.svg'
import LeafLeftSvg from 'shared-components/svgs/LeafLeftSvg';


const inputs = [
    {
        label: 'Email',
        name: 'reset_email',
        type: 'email',
        placeholder: 'my@email.com',
        id: 'reset_email',
    }
];

const Fieldset = ({
    label,
    name,
    type = 'text',
    placeholder = '',
    id,
}) => (
        <fieldset className="mb-5" key={id}>
            <label className="block text-xs mb-2">{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                id={id}
                name={name}
                className="block w-72 text-xs p-3 border border-gray-400 rounded"
            />
        </fieldset>
    );
const ForgotPassword =()=> {
    return (
        <section className="h-screen w-screen setup-screens flex flex-col justify-center items-center">
            <div className="leaf-left">
            <LeafLeftSvg/>
            </div>
            <div className="leaf-right">
                <LeafRightSvg/>
            </div>
            <div className={`auth-modal flex flex-col items-center bg-white fadeIn login-fieldset onboarding-wrap`}>
            {/* head */}
            <div className="flex flex-col items-center mb-6 setup-success">
                <i className="w-10 mb-4">
                    <img src={Icon} alt=""/>
                </i>
                <h1 className="text-2xl font-medium">Password reset</h1>
                <p className="text-center mt-3 text-gray-500 leading-normal">Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
            </div>
            {/* error part */}
            <div className="w-72 mb-8 text-xs text-left">
                <p className="w-full p-3 bg-red-200 text-red-700 text-center font-medium rounded">
                    loginError
                </p>
            </div>
            {/* form itself */}
            <form className="flex flex-col items-center">
                {inputs.map(inputCongfig => (
                    <Fieldset
                        {...inputCongfig}
                        key={inputCongfig.id}
                    />
                ))}

                <Link to="/forgot-two"><button className="mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm">
                    Reset</button></Link>
            </form>
            {/* form end */}
            <div className='mt-8 '>
                <p className="text-sm text-gray-500">
                    Don't have an account? <Link to="/signup" className="text-wb-primary">Sign Up</Link>
                </p>
            </div>
            {/* bottom */}
            </div>
        </section>
    )
}

export default ForgotPassword;