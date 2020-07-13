import React, { useState } from 'react'
import Logo from '../../../static/logo.svg'
import { useForm } from 'react-hook-form'
import { navigate } from 'hookrouter'
import { makeParams } from '../../../modules/utilities'

import Loading from '../../../shared-components/Loading'

const inputs = [
  {
    label: 'Code',
    name: 'signup_code',
    type: 'text',
    placeholder: '------',
    id: 'sign_first_name',
  },
]

const Fieldset = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  id,
  register,
}) => (
    <fieldset className="mb-5" key={id}>
      <label className="block text-xs mb-2">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        id={id}
        name={name}
        className="block w-72 text-xs p-3 border border-gray-400 rounded"
        ref={register}
      />
    </fieldset>
  )

const Form = () => {
  const { handleSubmit, register, errors } = useForm()
  const [loading, setLoading] = useState(false)
  const [loginError, setLoginError] = useState(null)

  const onSubmit = async ({ signup_code, ...values }, e) => {
    // setLoading(true)
    // const params = new URLSearchParams(location.search)
    // const data = {
    //   verificationID: params.get('email'),
    //   otp: signup_code,
    // }
    // console.log(data, values)

    // const response = await fetch(
    //   `https://13.73.156.61:7090/api/Customer/CompleteVerifyEmail`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Key: encryptedData.key,
    //     },
    //     body: JSON.stringify({
    //       data: data,
    //     }),
    //   }
    // )
    // const parsed = await response.json()
    // if (parsed.status) {
    //   const personalDetails = {
    //     ...data,
    //     lastName: sign_last_name,
    //     otherNames: sign_first_name,
    //   }
    //   navigate('/signup/success', false, personalDetails)
    // } else {
    //   setLoading(false)
    //   setLoginError(parsed.message)
  }

  e.preventDefault()
}

return loading ? (
  <Loading text="Verifying your email" />
) : (
    <>
      <div className="w-72 mb-8 text-xs text-left">
        {/* <p>An error occured</p> */}
        {loginError ? (
          <p className="w-full p-3 bg-red-200 text-red-700 rounded text-center font-medium">
            {loginError}
          </p>
        ) : (
            ''
          )}
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        {inputs.map(inputCongfig => (
          <Fieldset
            {...inputCongfig}
            key={inputCongfig.id}
            register={register}
          />
        ))}
        <button className="mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm">
          Next
        </button>
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
          <a href="/login" className="text-wb-primary">
            Sign In
          </a>
        </p>
      </div>
    </>
  )
}

const Heading = () => {
  return (
    <div className="flex flex-col items-center mb-6">
      <i className="w-10 mb-4">
        <img src={Logo} />
      </i>
      <h1 className="text-2xl font-medium mb-2">Confirm your email address</h1>
      <p className="text-center text-gray-500 leading-normal">
        We sent a 6 digit code to please enter it below
      </p>
    </div>
  )
}

const PersonalDetails = ({ }) => {
  return (
    <>
      <Heading />
      <Form />
      {/* <Footer /> */}
    </>
  )
}

export default PersonalDetails
