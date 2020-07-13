import React, { useState } from 'react'
import { navigate } from 'hookrouter'
import { useForm } from 'react-hook-form'
import { makeParams } from '../../../modules/utilities'
import Loading from '../../../shared-components/Loading'
import AuthModal from '../../../shared-components/AuthModal'
import BVN from '../../../static/bvn.png'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

import formatISO from 'date-fns/formatISO'

const Heading = () => {
    return (
        <div className="flex flex-col items-center mb-6">
            <i className="w-20 mb-4">
                <img src={BVN} />
            </i>
            <h1 className="text-2xl font-medium mb-2">Add your BVN</h1>
            <p className="text-center text-gray-500 leading-normal">
                As simple as investing your savings and we will help you grow from
                there.
      </p>
        </div>
    )
}

const inputs = [
    {
        label: '(BVN)',
        name: 'new_user_bvn',
        type: 'text',
        placeholder: '--------',
        id: 'new_user_bvn',
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
    const [selectedDay, setSelectedDay] = useState(null)
    const { handleSubmit, register, errors } = useForm()
    const [loading, setLoading] = useState(false)
    const [loginError, setLoginError] = useState(null)

    const onSubmit = async ({ new_user_bvn }, e) => {
        // setLoading(true)

        // const data = {
        //   dateOfBirth: formatISO(
        //     selectedDay.year,
        //     selectedDay.month - 1,
        //     selectedDay.day
        //   ),
        //   bvn: new_user_bvn,
        // }

        // const response = await fetch(
        //   `https://13.73.156.61:7090/api/Customer/AddbvnToProfile`,
        //   {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //       Key: encryptedData.key,
        //     },
        //     body: JSON.stringify({
        //       data: encryptedData.data,
        //     }),
        //   }
        // )
        // const parsed = await response.json()
        // if (parsed.status) {
        //   navigate('/dashboard/bvn_success')
        // } else {
        //   setLoading(false)
        //   setLoginError(parsed.message)
        // }
        // console.log({ parsed })

        e.preventDefault()
    }

    return loading ? (
        <Loading text="Verifying" />
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
                    className="flex flex-wrap justify-center"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {inputs.map(inputCongfig => (
                        <Fieldset
                            {...inputCongfig}
                            key={inputCongfig.id}
                            register={register}
                        />
                    ))}
                    <fieldset className="mb-5">
                        <label className="block text-xs mb-2">Date of birth</label>

                        <DatePicker
                            value={selectedDay}
                            onChange={setSelectedDay}
                            inputPlaceholder="Date of birth"
                            shouldHighlightWeekends
                            inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left"
                        />
                    </fieldset>

                    <button
                        type="submit"
                        className="w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm mt-8"
                    >
                        Confirm
        </button>
                </form>
            </>
        )
}

const AddBVN = () => {
    return (
        <section className="absolute inset-0 bg-wb-overlay flex justify-center items-center">
            <AuthModal width="30rem" className="login-fieldset">
                <Heading />
                <Form />
            </AuthModal>
        </section>
    )
}

export default AddBVN
