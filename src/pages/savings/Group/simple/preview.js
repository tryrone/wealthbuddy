import React from 'react'
// import { Link, useParams, useRouteMatch, useHistory } from 'react-router-dom'
// import { StateContext } from '../../../../../../contextApi'
import AutomateIcon from '../../../../assets/img/automate.svg';
// import { formatMoney, checkEmpty } from '../../../../../../modules/utilities';
// import CardIcon from '../../../../../../assets/img/cardIcon.png'
import Loading from '../../../../shared-components/Loading'
// import { urls } from '../../../../../../modules/network/url'
// import { postFormCall } from '../../../../../../modules/network';
const stage = 3;
const loading = false;
const Preview = ({ savingsDetails, setStage, ...props }) => {
    // const {
    //     goalName,
    //     goalAmount,
    //     saveFrequency,
    //     durationLength,
    //     durationType,
    //     selectedDay,
    //     image,
    //     members = [],
    // } = savingsDetails
    // const paymentAmount =
    //     goalAmount / (freqToDur[durationType][saveFrequency] * durationLength)
    // const paymentInterval = `N${formatMoney((Math.round(paymentAmount * 100) / 100).toFixed(
    //     2
    // ))} ${saveFrequency}`
    // const [, dispatch] = useContext(StateContext)
    // const { path } = useRouteMatch()
    // const { stage } = useParams()
    // const history = useHistory()
    // const back = () => {
    //     history.push(path.replace(':stage', stage - 1), savingsDetails)
    // }
    // const [agreed, setAgreed] = useState(false)
    // const [loading, setLoading] = useState(false)

    // const TopNavigation = () =>
    //     stage > 2 ? (
    //         <div className="flex justify-between px-12">
    //             <button className="font-medium">Back</button>
    //         </div>
    //     ) : (
    //             ''
    //         )
    const PercentageCompletion = () =>
        stage > 2 ? (
            <div className="mb-6">
                <div className="w-1/2 mx-auto h-1 bg-gray-200 rounded-full mb-3"></div>
                <div className="w-1/2 mx-auto flex justify-between">
                    <span>0% achieved</span>
                    {/* <span>N{formatMoney(goalAmount)}</span> */}
                    <span>NgoalAmount</span>
                </div>
            </div>
        ) : (
                ''
            )
    const Stage3AddedMembers = () =>
        stage == 3 ? (
            <div className="p-4 px-16">
                <div className="mt-4 bg-gray-100 p-6 flex justify-end text-left relative">
                    <p className="w-2/3 pr-4 text-xs">
                    people have
                        {/* {members.length > 0 ? `${members.length} ${members.length > 1 ? 'people have' : 'person has'} been added to this group savings and will be sent a */}
            {/* mail to confirm the agree.` : `You haven't added any members`} */}
                    </p>
                    <div className="mr-6">
                        <img className="h-8 w-8 rounded-full bg-gray-200" alt="" />
                    </div>

                    <button
                        className="h-full px-10 text-white bg-gray-900 text-lg font-medium absolute top-0 left-0"
                        // onClick={back}
                    >
                        0/3
                        {/* 0/{members.length} */}
                    </button>
                </div>
            </div>
        ) : (
                ''
            )
    const Stage4GroupMembers = () =>
        stage == 4 ? (
            <div className="px-24 pt-16">
                <h3 className="font-medium mb-6">Group members</h3>
                <ul className="w-full flex">

                <li className="w-1/2 flex p-6 bg-white mb-4 rounded-lg shadow-lg">
                            <img className="h-8 w-8 rounded-full mr-3" alt=""/>
                            <div className="flex-grow">
                                <div className="flex justify-between mb-2">
                                    <div className="text-sm font-medium">email</div>
                                    <span>0%</span>
                                </div>
                                <div className="h-1 bg-gray-200 rounded-full"></div>
                            </div>
                        </li>
                    {/* {members.map(({ email }) => (
                        <li className="w-1/2 flex p-6 bg-white mb-4 rounded-lg shadow-lg">
                            <img className="h-8 w-8 rounded-full mr-3" />
                            <div className="flex-grow">
                                <div className="flex justify-between mb-2">
                                    <div className="text-sm font-medium">{email}</div>
                                    <span>0%</span>
                                </div>
                                <div className="h-1 bg-gray-200 rounded-full"></div>
                            </div>
                        </li>
                    ))} */}
                </ul>
            </div>
        ) : (
                ''
            )

    const Stage3GroupMembers = () =>
        stage == 3 ? (
            <div className="ml-4 min-h-192 bg-white shadow-card w-2/5 rounded-14 -ml-4 p-8 text-left">
                <h2 className="font-medium text-base">Group members</h2>
                <div className="p-8">
                    <ul>
                    <li className="flex p-6 bg-white mb-4 rounded-lg shadow-lg">
                        <img className="h-8 w-8 rounded-full mr-3" alt="" />
                        <div>email</div>
                    </li>
                        {/* {members.map(({ email }) => {
                            return (
                                <li className="flex p-6 bg-white mb-4 rounded-lg shadow-lg">
                                    <img className="h-8 w-8 rounded-full mr-3" />
                                    <div>{email}</div>
                                </li>
                            )
                        })} */}
                    </ul>
                </div>
            </div>
        ) : (
                ''
            )

    // const Stage4TransactionHistory = () => { }

    // const AgreementAndMembers = () => <div />
    // const ConditionalGroupMembers = () => <GroupMembers />
    // const GroupMembersGrid = () => <div />
    // const Stage1Button1 = () => { }
    // const Stage1Button2 = () => { }
    // const Stage2Button1 = () => { }
    // const Stage2Button2 = () => { }
    // const Stage3Button1 = () => { }
    // const Stage3Button2 = () => { }
    // const Stage4Button1 = () => { }
    // const Stage4Button2 = () => { }
    const Stage2EditAndAgreement = () =>
        stage == 2 ? (
            <>
                <div className="p-4 px-24">
                    <div className="mt-4 bg-gray-100 p-6 flex items-center text-left relative">
                        <div className="mr-6">
                            <img className="h-8 w-8 rounded-full bg-gray-200" alt="" />
                        </div>
                        <p className="w-2/3 text-xs ">
                            {/* {members.length > 0 ? `${members.length} ${members.length > 1 ? 'people have' : 'person has'} been added to this group savings and will be sent a
              mail to confirm the agree.` : `You haven't added any members`} */}
                            You haven't added any members
                        </p>
                        <button
                            className="h-full px-10 text-white bg-gray-900 absolute top-0 right-0"
                            // onClick={back}
                        >
                            Edit
                    </button>
                    </div>
                </div>
                <div className="terms">
                    <div className="flex items-center justify-between">
                        <div className="confirm-automation flex items-center">
                            <img src={AutomateIcon} className="mr-4" alt="Wealth Buddy" />
                            <p className="text-xs">
                                Do you agree with our{' '}
                                <span className="color-primary font-medium">Disclaimers</span> &{' '}
                                <span className="color-primary font-medium">Terms</span>
                            </p>
                        </div>
                        <div className="pretty p-switch p-fill ">
                            {/* <input type="checkbox" checked={agreed} onChange={({ target: { checked } }) => setAgreed(checked)} /> */}
                            <input type="checkbox" checked={false} />
                            <div className="state">
                                <label></label>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        ) : (
                ''
            )

    return (
        <div className="flex justify-between">
            <div className=" min-h-192 bg-white shadow-card w-7/12 rounded-14 -ml-4 py-12 text-center">
                {/* {TopNavigation()} */}
                {/* <img src={image.imagePreviewUrl} className="inline-block mx-auto h-32 mb-6 w-auto" /> */}
                <h2 className="w-auto mx-auto text-center text-lg mb-4">goalName</h2>
                <p className="w-auto mx-auto text-4xl text-center mb-8 font-bold">
                    N20000
                </p>
                <PercentageCompletion />
                <ul className="flex border-t border-b border-solid border-gray-200 text-left">
                    <li className="border-r border-solid border-gray-200 w-1/3 px-12 py-6">
                        <h4 className="text-xs text-gray-600 mb-2">Contribution</h4>
                        <p className="text-base font-bold">paymentInterval</p>
                    </li>
                    <li className="border-r border-solid border-gray-200 w-1/3 px-12 py-6">
                        <h4 className="text-xs text-gray-600 mb-2">Interest Rate</h4>
                        <p className="text-base font-bold">15.5%</p>
                    </li>
                    <li className="border-r border-solid border-gray-200 w-1/3 px-12 py-6">
                        <h4 className="text-xs text-gray-600 mb-2">Start Date</h4>
                        {/* <p className="text-base font-bold">{`${selectedDay.month}/${selectedDay.day}/${selectedDay.year} `}</p> */}
                        <p className="text-base font-bold">03/09/2020</p>
                    </li>
                </ul>
                <Stage2EditAndAgreement />
                <div className="nav-buttons flex justify-center">
                    {loading ? <div className='w-full text-center flex flex-col items-center justify-center'><Loading text="Creating Goal" /></div> : <><button
                        className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
                        >
                        Back
                    </button>
                        <button
                            className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm opaque`}
                            // onClick={async () => {
                            //     if (stage == 2 && !agreed) return;
                            //     if (stage == 2) {
                            //         setLoading(true)
                            //         const data = {
                            //             amount: savingsDetails.goalAmount,
                            //             duration: freqToDur[savingsDetails.durationType][savingsDetails.saveFrequency] * savingsDetails.durationLength,
                            //             schedule: scheduleToIndex[savingsDetails.saveFrequency],
                            //             name: savingsDetails.goalName,
                            //             description: '',
                            //             participants: savingsDetails.members || []
                            //         }

                            //         let finalData;
                            //         let headers;
                            //         if (process.env.isEncrypted === "true") {
                            //             let password = getReference()
                            //             let rsakey = rsaEncryption(password);
                            //             let encryptedData = { 'data': aesEncryption(JSON.stringify(finalData), password) }
                            //             headers = { 'Content-Type': 'multipart/form-data', 'encryptionKey': rsakey }
                            //             finalData = encryptedData
                            //         }
                            //         else {
                            //             finalData = data;
                            //             headers = { 'Content-Type': 'multipart/form-data' }
                            //         }

                            //         let url = urls.createGroupChallengeSavings;
                            //         // if (savingsData.isFixed === "locked") {
                            //         //     url = urls.createFixedLocked;
                            //         // }
                            //         // else {
                            //         //     url = urls.createFixedFlexible;
                            //         // }

                            //         let bodyFormData = new FormData()
                            //         bodyFormData.append('data', JSON.stringify(finalData))
                            //         bodyFormData.append('file', savingsDetails.image.file);

                            //         const response = await postFormCall(props.apiUrl, bodyFormData, headers);

                            //         if (typeof response !== "undefined" && response.data.status === true) {
                            //             setLoading(false)
                            //             dispatch({
                            //                 type: "CHANGE_SUCCESS",
                            //                 newPayload: {
                            //                     status: true,
                            //                     title: "Success",
                            //                     subtitle: "Your goal has been created successfully",
                            //                     button: "Done",
                            //                     icon: CardIcon
                            //                 }
                            //             });
                            //             props.refreshSavings();
                            //             props.refreshDashboard();
                            //             history.push(path.replace(':stage', 3), savingsDetails)

                            //             // history.push(path.replace(':stage', 4), savingsDetails)
                            //             // props.getSavings();
                            //             // props.refreshDashboard();
                            //             // history.push("/dashboard/savings")
                            //             // dispatch({
                            //             //     type: "CHANGE_FUNDSAVINGS", newPayload: {
                            //             //         ...fundSavings,
                            //             //         modal: false
                            //             //     }
                            //             // });

                            //         } else {
                            //             setLoading(false)
                            //             // setLoginError(response.data.message)
                            //         }

                            //     }

                            //     if (stage == 3) {
                            //         history.push('/dashboard/savings')

                            //         // dispatch({
                            //         //   type: 'CHANGE_SUCCESS',
                            //         //   newPayload: {
                            //         //     status: true,
                            //         //     title: 'Success',
                            //         //     subtitle: 'Your goal has been created successfully',
                            //         //     button: 'Done',
                            //         //     icon: CardIcon,
                            //         //   },
                            //         // })

                            //     }

                            //     // if (stage == 4) {
                            //     //   history.push(path.replace(':sta'))
                            //     // }

                            // }}
                        >
                            {stage == 2 ? 'Launch' : stage == 3 ? 'Start' : 'Withdraw'}
                        </button></>}
                </div>
                <Stage3AddedMembers />
                <Stage4GroupMembers />
            </div>
            <Stage3GroupMembers />
        </div>
    )
}

// const GroupMembers = () => {
//     return (
//         <div className="ml-4 min-h-192 bg-white shadow-card w-2/5 rounded-14 -ml-4 p-8 text-left">
//             <h2 className="font-medium text-base">Group members</h2>
//             <div className="p-8">
//                 <ul>
//                     <li className="flex p-6 bg-white mb-4 rounded-lg shadow-lg">
//                         <img className="h-8 w-8 rounded-full mr-3" alt="" />
//                         <div>Johnward@gmail.com</div>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

export default Preview;

// const freqToDur = {
//     years: {
//         daily: 365,
//         weekly: 56,
//         monthly: 12,
//     },
//     months: {
//         daily: 30,
//         weekly: 4,
//         monthly: 1,
//     },
//     weeks: {
//         daily: 7,
//         weekly: 1,
//         monthly: 1,
//     },
//     days: {
//         daily: 1,
//         weekly: 1,
//         monthly: 1,
//     },
// }


// const scheduleToIndex = {
//     daily: 1,
//     weekly: 2,
//     monthly: 3
// }