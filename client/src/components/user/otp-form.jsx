import React from 'react';
import UserSubmitButton from './userSubmitButton';
import UserStore from '../../store/UserStore';
import { useNavigate } from 'react-router-dom';
import ValidationHelper from '../../utility/ValidationHelper';
import toast from 'react-hot-toast';
import { getEmail } from '../../utility/utility';

const OtpForm = () => {
    let navigate = useNavigate()
    let {OtpFormValue,OTPFormOnChange,VerifyLoginRequest} = UserStore();
    let OTP = OtpFormValue.otp;
    let Email = getEmail()

    const onFormSubmit = async ()=>{
        if(ValidationHelper.IsEmpty(OTP)){
            toast.error("Valid PIN Required")
        }else{
            let res = await VerifyLoginRequest(OTP);
            res?navigate('/') : toast.error("Something went wrong")
        }
    }

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            if (OTP.trim().length > 0) {
                let res = await VerifyLoginRequest(OTP);
                res?navigate('/') : toast.error("Something went wrong")// Navigate to the search results
            }else if(ValidationHelper.IsEmpty(OTP)){
                toast.error("Valid PIN Required")
            }
        }
    };
    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Verification Code</h4>
                        <p>6 digit code has been sent to {Email.slice(0,9)}***@***.com</p>
                        <input onKeyDown={handleKeyDown} value={OTP} onChange={(e)=>{OTPFormOnChange('otp',e.target.value)}} placeholder="Code" type="text" className="form-control"/>
                        <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpForm;