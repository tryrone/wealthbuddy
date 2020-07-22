import React,{Fragment,useState,useEffect} from 'react'

import DocumentationTab from './documentation'
// import { StateContext } from '../../../../contextApi';
import BasicInformation from './profile/basicInformation';
import ContactInformation from './profile/contactInformation';
import EmploymentInformation from './profile/employmentInformation';
import NextOfKin from './profile/nextOfKin';
import Identity from './profile/identity.js';
// import StickyBox from "react-sticky-box";
// import { urls } from '../../../../modules/network/url';
// import { postCall, postFormCall } from '../../../../modules/network';
// import toaster from "toasted-notes";
// import "toasted-notes/src/styles.css";
// import Cookies from "js-cookie"
import { pencil, arrowIcon } from '../../assets/exports';
// import EmptyBank from '../../../empty-states/bankEmpty'; 
import UserCards from './userCards';
import UserBanks from './userBanks';

const tabs = ['Profile', 'Documentation', 'Banks', 'Cards']

const overviewContent = [
    { name: "Basic Info", excerpt: "Change bio, name and other KYC info", id: 1 },
    { name: "Contact", excerpt: "Update your contact information", id: 2 },
    { name: "Employment", excerpt: "Update your employment information", id: 3 },
    { name: "Next of Kin", excerpt: "Update your Next of kin infomation", id: 4 },
    { name: "Identity", excerpt: "Our contact informations and support", id: 5 }

];

const Settings = () => {
    // const [{ profile, fundSavings, savingsData, otherInfo }, dispatch] = useContext(StateContext);
    const [activeTab, setActiveTab] = useState('profile')

    const changeActiveTab = ({ target: { textContent } }) => {
        setActiveTab(textContent.trim().toLowerCase());
    }

    const [state, setState] = useState({})

    const [files, setFiles] = useState({
        file: '',
        imagePreviewUrl: '',
        isFixed: false,
    });
    const [activeId, setChosen] = useState(1);
    const [activeInnerTab, setInnerActive] = useState("basicInformation");

    const changeInnerTab = ({ target: { textContent } }) => {

        setInnerActive(textContent.trim().toLowerCase())
    }

    const innerTabsContent = {
        1: <BasicInformation />,
        2: <ContactInformation />,
        3: <EmploymentInformation />,
        4: <NextOfKin />,
        5: <Identity />

    }


    const handleActive = (event, id) => {
        console.log("Onclick")
        document.querySelector(".profile-right--wrap").classList.add("tab-is--active");
        document.querySelector(".profile-left--wrap").classList.add("selector-inactive");
        document.querySelector(".back-to--mobile").classList.add("button-is--active");
        setChosen(event)
    }

    // const updateInitialState = () => {
    //     setState({
    //         ...otherInfo
    //     })
    // }
    // useEffect(() => {
    //     updateInitialState()
    // }, [])

    const tabsContent = {
        profile: <ProfileTab   initialState={state}  
        updateFiles={setFiles} files={files} updateTab={activeId} handleTab={handleActive} innerTabContent={innerTabsContent}/>,
        documentation: <DocumentationTab />,
        banks: <UserBanks />,
        cards: <UserCards />,
    }


    const back = () => {
        document.querySelector(".profile-right--wrap").classList.remove("tab-is--active");
        document.querySelector(".profile-left--wrap").classList.remove("selector-inactive");
        document.querySelector(".back-to--mobile").classList.remove("button-is--active");

    }
    return (
        <Fragment>
            <div className="flex flex-col px-12">

                <h1 className="text-4xl mb-6 font-medium">Settings</h1>
                <div className="flex flex-col flex-grow shadow-card overflow-hidden font-medium bg-white mb-12 account-section rounded-lg">
                    <ul onClick={changeActiveTab} className="flex border-solid border-gray-100 profile-tab--wrap text-lg">
                        {tabs.map((val) => {
                            return (
                                <li className={`w-1/4 text-center cursor-pointer ${val.toLowerCase() == activeTab ? 'tab-active' : ''}`}>
                                    <span className={`inline-block py-6 px-4`}>{val}</span>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="flex-grow account-wrap">
                        <div className="back-to--mobile" onClick={back}><span className="flex mr-2" dangerouslySetInnerHTML={{ __html: arrowIcon }}></span>Back</div>
                        {tabsContent[activeTab]}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}



// const Accordion = ({ title, className, children }) => {
//     const [isOpen, setOpen] = React.useState(false);
//     return (
//         <div className={`accordion-wrapper ${className}`}>

//             <div
//                 className={`accordion-title  ${isOpen ? "open" : ""}`}
//                 onClick={() => {
//                     setOpen(!isOpen);
//                     Array.from(document.querySelectorAll(`.accordion-title,.accordion-item`)).forEach(
//                         element => {
//                             element.classList.remove("default")
//                         }
//                     );
//                 }}
//             >
//                 {title}
//             </div>
//             <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
//                 <div className="accordion-content">{children}</div>
//             </div>
//         </div>
//     );
// };

const ProfileTab = ({ profile, otherInfo, initialState, dispatch, update, updateFiles, files, updateTab, handleTab, innerTabContent }) => {
    useEffect(() => {
        Array.from(document.querySelectorAll(`.default .accordion-title,.default .accordion-item`)).forEach(
            element => {
                element.classList.add("default")
            }
        );

    }, [])


    // const uploadSelfie = async (e) => {

    //     let reader = new FileReader()
    //     let file = e.target.files[0];
    //     let element = e.target;
    //     let fileData = {
    //         file: "",
    //         imagePreviewUrl: ""
    //     };
    //     reader.onloadend = async () => {
    //         element.nextElementSibling.classList.add("edit-loading")
    //         fileData = {
    //             file: file,
    //             imagePreviewUrl: reader.result,
    //         };

    //         let finalData
    //         let headers
    //         if (process.env.isEncrypted === 'true') {
    //             let password = getReference()
    //             let rsakey = rsaEncryption(password)
    //             headers = {
    //                 'Content-Type': 'multipart/form-data',
    //                 encryptionKey: rsakey,
    //             }
    //         } else {
    //             headers = { 'Content-Type': 'multipart/form-data' }
    //         }

    //         let url = urls.uploadProfilePicture

    //         let bodyFormData = new FormData()
    //         bodyFormData.append('file', fileData.file)
    //         const response = await postFormCall(url, bodyFormData, headers)

    //         if (typeof response !== 'undefined' && response.data.status === true) {
    //             localStorage.setItem('wealthUserImage', fileData.imagePreviewUrl)
    //             dispatch({
    //                 type: "CHANGE_PROFILE",
    //                 newPayload: {
    //                     ...profile,
    //                     image: fileData.imagePreviewUrl
    //                 }
    //             });

    //             toaster.notify("Selfie updated successfully", {
    //                 position: "bottom",
    //                 duration: 5000
    //             });
    //         } else {

    //             toaster.notify(response.data.message, {
    //                 position: "bottom",
    //                 duration: 5000
    //             });
    //         }
    //         element.nextElementSibling.classList.remove("edit-loading")
    //     }
    //     if (file) {
    //         reader.readAsDataURL(file)
    //     }
    // }




    // const saveProfile = async (e) => {
    //     e.target.classList.add("loading");
    //     let url;
    //     url = urls.saveProfile


    //     setTimeout(async () => {
    //         const data = {
    //             ...otherInfo
    //         }

    //         const finalData = JSON.stringify(data);
    //         const response = await postCall(url, finalData);

    //         if (response === "Token Expired") {
    //             forceLogout()
    //         }
    //         else if (response !== false && typeof response !== "undefined" && response.data.status === true) {

    //             dispatch({
    //                 type: "CHANGE_PROFILE",
    //                 newPayload: {
    //                     ...profile,
    //                     others: {
    //                         ...profile.others,
    //                         ...otherInfo
    //                     }
    //                 }
    //             });

    //             const userData = JSON.parse(Cookies.get("wealthUser"));

    //             Cookies.set("wealthUser", {
    //                 ...userData,
    //                 others: {
    //                     ...userData.others,
    //                     ...otherInfo
    //                 }
    //             });

    //             update()

    //             toaster.notify("Profile updated successfully", {
    //                 position: "bottom",
    //                 duration: 5000
    //             });
    //         }
    //         else {
    //             toaster.notify(response.data.message, {
    //                 position: "bottom",
    //                 duration: null
    //             });
    //         }
    //         Array.from(document.querySelectorAll(".loading")).forEach(
    //             element => {
    //                 element.classList.remove("loading")
    //             }
    //         );
    //     }, 1000);
    // }

    const profileImage = null;

    return (
        <form className="account-content fadeIn">
            <div className="profile-left--wrap">
                {overviewContent.map((item, index) => (
                    <div className={`profile-side--menu ${updateTab === item.id ? 'is-active' : ""}`} key={index} onClick={handleTab.bind(this, item.id)} >
                        <div className="profile-side--item" key={item}>
                            <div>
                                <h3 className="text-semi--bold ">{item.name}</h3>
                                <p className="mt-2 text-sm text-gray-300">{item.excerpt}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="profile-right--wrap">
                <div className="settings-fields--wrap">
                    <div className="wrapper">
                        {updateTab === 1 &&
                            <figure className="basic-profile mb-5 flex items-center">
                                {/* profileImage !== null ?
                                    <img src={profile.image} alt={`Wealth Buddy Investments`} className="mb-4" /> : */}
                                    <div className="user-no--picture mb-4 text-white">
                                        {`names`}
                                    </div>
                                
                                <figcaption className="ml-5">
                                    <p className="font-medium card-header mb-2">Upload Selfie</p>
                                    <p className=" text-sm color-accent">Click image to change it</p>
                                </figcaption>

                                <input
                                    className="selfieInput"
                                    type="file"
                                    // onChange={uploadSelfie}
                                    accept="image/*"
                                />
                                <div className="edit-image" dangerouslySetInnerHTML={{ __html: pencil }}></div>
                            </figure>}
                        {innerTabContent[updateTab]}
                        <div className={`wealth-buddy--cta bg-wb-primary mt-8 text-white opaque`}> Save<span className="loader"></span></div>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Settings
