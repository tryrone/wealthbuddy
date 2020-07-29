import React,{Fragment} from 'react';
import successDoc from '../../../../assets/img/success.svg';

function SuccessModal(props) {
    const onclose=()=>{
        props.myclose(false);
        // console.log(props);
        }
    return (
        <div className="modal fixed inset-0 bg-wb-overlay flex justify-center items-center modal-active">
        <div className="auth-modal flex flex-col items-center bg-white fadeIn login-fieldset">
          <span className="closeModal cursor-pointer" onClick={()=> onclose()} >
            <p className="text-hairline text-base text-right">Close</p>
          </span>

            <Fragment>
                <div className="flex flex-col items-center mb-0">
                  <i className="w-20 mb-4">
                    <img src={successDoc} alt="" />
                  </i>
                  <h1 className="text-2xl font-medium mb-2">Success</h1>
                  <p className="text-center text-gray-500 leading-normal">
                    {props.text}
                  </p>

                  <button 
                onClick={()=>{onclose()}}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
                  Done
                </button>
                </div>
                </Fragment>
        </div>
        </div>
    )
}

export default  SuccessModal;