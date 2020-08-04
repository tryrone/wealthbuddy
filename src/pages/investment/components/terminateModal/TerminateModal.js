import React,{useState,Fragment} from 'react';
import CardIcon from '../../../../assets/img/cardIcon.png';
import successDoc from '../../../../assets/img/success.svg';


function TerminateModal(props) {
    const[payment,setPayment] = useState(false);

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

            {/* UI before payment  */}
            {/* UI before payment  */}
              {
                !payment ?
           <Fragment>

          <div className="flex flex-col items-center mb-0">
            <i className="w-20 mb-4">
              <img src={CardIcon} alt="" />
            </i>
            <h1 className="text-2xl font-medium mb-2">Terminate Investment</h1>
            <p className="text-center text-gray-500 leading-normal">
            N200,000 will be terminated and sent to your wallet.
             This will also attract 2% penalty fee on interest.
            </p>
          
                <button 
                onClick={()=>{setPayment(true)}}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
                  Continue
                </button>
          </div>
             
              </Fragment>
                :""
              }
             {/* UI before payment end  */}
            {/* UI before payment  end */}


            {/* UI after payment */}
            {/* UI after payment */}
            {
              payment ?
                <Fragment>
                <div className="flex flex-col items-center mb-0">
                  <i className="w-20 mb-4">
                    <img src={successDoc} alt="" />
                  </i>
                  <h1 className="text-2xl font-medium mb-2">Success</h1>
                  <p className="text-center text-gray-500 leading-normal">
                  Your investment has been successfully terminated.
                  </p>

                  <button 
                onClick={()=>{onclose()}}
                className={`mt-6 w-40 text-center leading-loose bg-wb-primary wealth-buddy--cta text-white rounded-sm`}>
                  Done
                </button>
                </div>
                </Fragment>
                :""
            }
            {/* UI after payment end */}
            {/* UI after payment end*/}
        </div>
      </div>
    
    )
}

export default TerminateModal;
