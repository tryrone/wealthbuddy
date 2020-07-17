import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
// import UploadIcon from '../../../../../../assets/img/uploadIcon.svg'
// import { formatMoney, checkEmpty } from '../../../../../../modules/utilities'
import Preview from './preview'
import AutomateIcon from '../../../../assets/img/automate.svg'
// import { useForm } from 'react-hook-form'
// import { StateContext } from '../../../../../../contextApi'

const stage = 1;

// const freqToDur = {
//   years: {
//     daily: 365,
//     weekly: 56,
//     monthly: 12,
//   },
//   months: {
//     daily: 30,
//     weekly: 4,
//     monthly: 1,
//   },
//   weeks: {
//     daily: 7,
//     weekly: 1,
//     monthly: 1,
//   },
//   days: {
//     daily: 1,
//     weekly: 1,
//     monthly: 1,
//   },
// }

// const FirstForm = ({ savingsDetails: propsSavingsDetails, setSavingsDetails }) => {
const FirstForm = () => {
//   const [{ profile: {email: logged_in_email} }] = useContext(StateContext)
//   const [goalName, setGoalName] = useState(propsSavingsDetails.goalName || '')
//   const [goalAmount, setGoalAmount] = useState(propsSavingsDetails.goalAmount || 0)
//   const [saveFrequency, setGoalFrequency] = useState(propsSavingsDetails.saveFrequency || 'daily')
//   const [durationLength, setDurationLength] = useState(propsSavingsDetails.durationLength || 1)
//   const [durationType, setDurationType] = useState(propsSavingsDetails.durationType || 'months')
//   const [selectedDay, setSelectedDay] = useState(propsSavingsDetails.selectedDay || '')
//   const [members, setMembers] = useState(propsSavingsDetails.members || [{ email: logged_in_email }])
//   const { handleSubmit, register } = useForm()
//   const { stage } = useParams()
//   const { path } =  useRouteMatch();
//   const history = useHistory()

//   let memberEmailRef = createRef()
//   // const [paymentInterval, setPaymentInterval] = useState('')
//   const onGoalNameChange = ({ target: { value } }) => {
//     setGoalName(value)
//   }

//   const onGoalAmountChange = ({ target: { value } }) => {
//     setGoalAmount(value)
//   }

//   const onSaveFrequencyChange = ({ target: { value } }) => {
//     setGoalFrequency(value)
//   }

//   const onDurationLengthChange = ({ target: { value } }) => {
//     setDurationLength(value)
//   }

//   const onDurationTypeChange = ({ target: { value } }) => {
//     setDurationType(value)
//   }

//   const paymentAmount =
//     goalAmount / (freqToDur[durationType][saveFrequency] * durationLength)
//   const paymentInterval = `N${formatMoney(
//     (Math.round(paymentAmount * 100) / 100).toFixed(2)
//   )} ${saveFrequency}`

//   const [files, setFiles] = useState({
//     file: '',
//     imagePreviewUrl: '',
//     isFixed: false,
//   })

//   const handleImageChange = (e) => {
//     e.preventDefault()
//     let reader = new FileReader()
//     let file = e.target.files[0]
//     reader.onloadend = () => {
//       setFiles((prevState) => ({
//         ...prevState,
//         file: file,
//         imagePreviewUrl: reader.result,
//       }))
//     }
//     if (file) {
//       reader.readAsDataURL(file)
//     }
//   }

//   let $imagePreview = null
//   let $imageText
//   if (files.imagePreviewUrl) {
//     $imagePreview = <img src={files.imagePreviewUrl} alt="" />
//     $imageText = (
//       <h3 className="color-secondary personalize-text text-center">
//         + Change Photo
//       </h3>
//     )
//   } else {
//     $imagePreview = (
//       <div className="buddy-image--drop">
//         <img src={UploadIcon} alt="Wealth Buddy" />
//       </div>
//     )
//     $imageText = (
//       <h3 className="color-secondary change-text personalize-text text-center">
//         Personalise your goal by <br /> <span>+ Adding a photo.</span>
//       </h3>
//     )
//   }

//   let savingsDetails = {
//     goalName,
//     goalAmount,
//     saveFrequency,
//     durationLength,
//     durationType,
//     selectedDay,
//   }
//   const isNotComplete = checkEmpty(savingsDetails)
//   savingsDetails = {
//     ...savingsDetails,
//     image: files || UploadIcon,
//     members
//   }
//   const nextClick = () => {
//     setSavingsDetails(savingsDetails)
//     history.push(path.replace(':stage', '2'), {savingsDetails})
//     // setStage(1)
//   }

  return (
    <form className=" flex-grow flex items-center">
      <div className="flex flex-wrap justify-between min-h-192 bg-white shadow-card w-5/12 rounded-14 -ml-4 pt-16">
        <fieldset className="mb-4 w-72 mx-auto">
          <label className="block text-xs font-medium">Goal name</label>
          <input
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            placeholder="Savings"
            // value={goalName}
            // onChange={onGoalNameChange}
            type="text"
          />
        </fieldset>
        <fieldset className="mb-4 w-72 mx-auto">
          <label className="block text-xs font-medium">
            How much do you want to save?
          </label>
          <input
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            placeholder={0}
            type="number"
            // value={goalAmount}
            // onChange={onGoalAmountChange}
          />
        </fieldset>
        <fieldset className="mb-4 w-72 mx-auto">
          <label className="block text-xs font-medium">
            How often do you want to save?
          </label>
          <select
            className="block w-full text-xs p-3 border border-gray-400 rounded"
            // onChange={onSaveFrequencyChange}
            // selected={saveFrequency}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            {/* <option value="yearly">Yearly</option> */}
          </select>
        </fieldset>
        <fieldset className="mb-4 w-72 mx-auto">
          <label className="block text-xs font-medium">
            When will you like to start saving?
          </label>
          <DatePicker
            // value={selectedDay}
            // onChange={setSelectedDay}
            inputPlaceholder="Select a date"
            shouldHighlightWeekends
            // minimumDate={utils().getToday()}
            inputClassName="w-72 text-xs p-3 border border-gray-400 rounded text-left"
          />
          {/* <input className="block w-full text-xs p-3 border border-gray-400 rounded" /> */}
        </fieldset>
        <fieldset className="mb-4 w-72 mx-auto">
          <label className="block text-xs font-medium">
            How long do you want to save for?
          </label>
          <div className="flex border-solid border border-gray-400 rounded items-center">
            <input
              className="block w-1/2 text-xs p-4"
            //   value={durationLength}
            //   onChange={onDurationLengthChange}
              placeholder="0"
              type="number"
            />
            {/* <span className="h-6 border border-gray-400"  /> */}
            <select
              className="block w-1/2 text-xs p-4"
            //   value={durationType}
            //   onChange={onDurationTypeChange}
            >
              <option value="days">Day(s)</option>
              <option value="weeks">Week(s)</option>
              <option value="months">Month(s)</option>
              <option value="years">Year(s)</option>
            </select>
          </div>
        </fieldset>
        <div className="w-full my-6 text-center">
          <h4>Contribution</h4>
          {/* <p className="text-4xl font-medium">{paymentInterval}</p> */}
          <p className="text-4xl font-medium">paymentInterval</p>
        </div>
        <div className="w-full flex items-center border-t border-gray-200 border-solid py-6 px-16">
          <img src={AutomateIcon} className="mr-4" alt="Wealth Buddy" />
          <span className="inline-block flex-grow text-xs text-gray-300">
            {' '}
            Will you like to automatically fund this savings
          </span>
          <div className="pretty p-switch p-fill ">
            <input type="checkbox" />
            <div className="state">
              <label></label>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-192 bg-white shadow-card w-5/12 rounded-14 ml-6 pt-16 pb-8">
        {/* <div>Image upload</div> */}
        <div className="personalize--card">
          <div className="previewComponent">
            <input
              className="fileInput"
              type="file"
            //   onChange={(e) => handleImageChange(e)}
              accept="image/*"
            />
            <div
            //   className={`${files.imagePreviewUrl === '' && 'drop'} imgPreview`}
              className={`imgPreview`}
            >
              imagePreview
            </div>
          </div>
          imageText
        </div>

        <div className="w-full max-w-input-upload mx-auto  my-4">
          <label className="text-xs mb-2 font-medium">Group members</label>
          <form className="h-64 flex flex-col justify-between border border-solid border-gray-200 px-4 py-4 rounded-lg" 
            // onSubmit={handleSubmit(({ member_email}, e) => {
            //   e.preventDefault()
            //   if ( !members.find(({email}) => email == member_email) ) setMembers([...members, { email: member_email }])
            // })}
          >
            <div>
              {/* {members.map(({ email }) => {
                return (
                  <div className="w-full flex flex-no-wrap justify-center items-center mb-2">
                    <div className="inline-block h-8 w-8 bg-gray-200 rounded-full">
                      <img />
                    </div>
                    <div className="inline-block flex-grow ml-3">{email}</div>
                  </div>
                )
              })} */}
              <div className="w-full flex flex-no-wrap justify-center items-center mb-2">
                <div className="inline-block h-8 w-8 bg-gray-200 rounded-full">
                    <img alt="" />
                </div>
                <div className="inline-block flex-grow ml-3">email</div>
                </div>

              <div className="w-full flex flex-no-wrap justify-center">
                <div className="inline-block h-8 w-8 bg-gray-200 rounded-full">
                  <img alt=""/>
                </div>
                <input
                  // ref={memberEmailRef}
                  className="inline-block flex-grow ml-3 border-b border-solid border-gray-200"
                  placeholder="Johnward@gamil.com"
                  type='email'
                  name='member_email'
                //   ref={register}
                  required
                />
              </div>
            </div>
            <button
              // type="button"
              className="text-wb-primary"
              // onClick={() => {
              //   console.dir(memberEmailRef)
              //   const v = memberEmailRef.current.value
              //   if (v) {
              //     setMembers([...members, { email: v }])
              //   }
              // }}
            >
              + Add a member
            </button>
          </form>
        </div>
        <div className="nav-buttons flex justify-center">
          <Link
            to="/dashboard/savings/create"
            className="mt-12 w-40  border-b text-center bg-white leading-loose border-wb-primary text-wb-primary mr-3 border wealth-buddy--cta text-white rounded-sm"
          >
            Back
          </Link>
          {/* <button
            className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm ${
              isNotComplete ? 'opaque' : ''
            }`}
            onClick={
              isNotComplete
                ? (e) => {
                    e.preventDefault()
                  }
                : nextClick
            }
          >
            Next
          </button> */}
          <button
           className={`mt-12 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}
          >
         Next
          </button>
        </div>
      </div>
    </form>
  )
}

const CreateContributory = (props) => {
  // const [stage, setStage] = useState(1)
//   const { state } = useLocation()
//   let propsSavingsDetails = {}
//   if ( state ) {
//     propsSavingsDetails = state.savingsDetails
//   }
//   const [savingsDetails, setSavingsDetails] = useState({
//     goalName: 'Group Savings',
//     goalAmount: '0',
//     saveFrequency: 'weekly',
//     durationLength: '1',
//     durationType: 'years',
//     selectedDay: utils().getToday(),
//     image: '',
//     ...propsSavingsDetails
//   })
//   const { stage } = useParams()
  
  return (
    <div className="h-screen flex-col fadeIn p-20">
      <h1 className="text-5xl mb-8 font-medium">{ props.title || 'Group Savings'}</h1>
      {stage == 1 ? (
        <FirstForm  />
      ) : (
        <Preview  {...props} />
      )}
    </div>
  )
} 

export default CreateContributory 
