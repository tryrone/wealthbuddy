

import React, { useState} from "react";
// import { Component } from "react";
// import { StateContext } from "../../contextApi";

const BankListDropdown = (props) => {
    // const [state, setState] = useState({
    //     listOpen: false,
    //     headerTitle: props.title,
    //     initialItems: props.list,
    //     items: props.list,
    //     key: "",
    //     bankName: "",
    //     bankCode: ""
    // })
    // const [{ createSavings, fundSavings }, dispatch] = useContext(StateContext)
    // const mounted = useRef();

    // useEffect(() => {
    //     document.body.classList.add("modal-active");
    //     if (!mounted.current) {
    //         mounted.current = true;
    //     } else {
    //         const { listOpen } = state

    //             if (listOpen) {
    //                 window.addEventListener('click', close);
    //             }
    //             else {
    //                 window.removeEventListener('click', close);
    //                 document.body.classList.remove("modal-active");
    //             }

    //     }
    //     return () => {
    //         window.removeEventListener('click', close);
    //     }
    // })

    // useEffect(() => {
    //     if (props.list !== state.items) {
    //         setState(prevState => ({
    //             ...prevState,
    //             initialItems: props.list,
    //             items: props.list,
    //         }))
    //     }
    // }, [props.list])

    // useEffect(() => {
    //     dispatch({
    //         type: "CHANGE_WALLET_CARD",
    //         newPayload: state.key
    //     });

    // }, [state.headerTitle])

    // const close = (timeOut) => {
    //     setState({
    //         ...state,
    //         listOpen: false
    //     });

    // }

    // const selectItem = (name, id) => {

    //     dispatch({
    //         type: "CHANGE_BANK_DETAILS",
    //         newPayload: {
    //             bankCode: "",
    //             bankName: ""
    //         }
    //     });

    //     // setState({
    //     //     ...state,
    //     //     headerTitle: `${name}`,
    //     //     listOpen: false,
    //     //     key: id,
    //     //     bankName: name,
    //     //     bankCode: id
    //     // });
    // }

    // useEffect(() => {
    //     dispatch({
    //         type: "CHANGE_BANK_DETAILS",
    //         newPayload: {
    //             bankCode: state.bankCode,
    //             bankName: state.bankName
    //         }
    //     });

    // }, [state.bankName])


    // const toggleList = () => {
    //         setState(prevState => ({
    //             ...prevState,
    //             listOpen: !prevState.listOpen,
    //             items: props.list
    //         }))
    // }

    // const filterList = (event) => {
    //     let items = state.initialItems;
    //     items = items.filter((item) => {
    //         return (item.bank.toLowerCase().search(event.target.value.toLowerCase()) !== -1) || (item.last4.toLowerCase().search(event.target.value.toLowerCase()) !== -1);
    //     });
    //     setState({
    //         ...state,
    //         items: items
    //     });
    // }




    // const { listOpen, headerTitle } = state;
    const items = [];

    const [view2 ,setView] = useState(false);

    const toggle = (value)=>{
          setView(!value)
      }

    return (
        <React.Fragment>
            <div className="fund-dropdown">
                <div className="select-option" onClick={()=>toggle(view2)}>
                {/* <div className="select-option" onClick={toggleList}> */}
                    <div className="buddy-dropdown-title">headerTitle</div>
                    <div className="buddy-dropdown-icon" dangerouslySetInnerHTML={{
                        __html: '<svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 7L13.9282 0.25H0.0717969L7 7Z" fill="black"/></svg>'
                    }
                    }></div>
                </div>
            </div>
            { // <ul className="buddy-dropdowns-list basic-dropdowns" onClick={e => e.stopPropagation()}>
                view2 ?
                <ul className="buddy-dropdown-list basic-dropdown">
                    {/* {state.items.map((item, i) => ( */}
                        <React.Fragment>

                            <li className="buddy-dropdown-item">
                            {/* <li className="buddy-dropdowns-item" onClick={() => selectItem(item.name, item.code, item.longcode, state.initialItems)}> */}
                                <p className="dropdown-details">
                                    <span className='dropdown-item--title text-semi-bold'>{`item.name`}</span>
                                </p>
                            </li>
                        </React.Fragment>
                    {/* // ))} */}
                    {items.length === 0 ? (<li className="no-result">No banks found</li>) : null}
                </ul>
                : null
            }
        </React.Fragment>
    )

}
export default BankListDropdown;
