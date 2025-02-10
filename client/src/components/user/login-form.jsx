import React from 'react';
import UserStore from '../../store/UserStore';
import UserSubmitButton from './userSubmitButton';
import ValidationHelper from '../../utility/ValidationHelper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    let {LoginFormValue,LoginFormOnChange,UserOTPRequest} = UserStore();
    let Email = LoginFormValue.email;
    let navigate = useNavigate()

    const onFormSubmit = async ()=>{
        if(!ValidationHelper.IsEmail(Email)){
            toast.error("Valid Email Address Required")
        }else{
            let res = await UserOTPRequest(Email);
            res?navigate('/otp') : toast.error("Something went wrong")
        }
    }


    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            if (Email.trim().length > 0) {
                let res = await UserOTPRequest(Email);
                res?navigate('/otp') : toast.error("Something went wrong")// Navigate to the search results
            }else if(!ValidationHelper.IsEmail(Email)){
                toast.error("Valid Email Address Required")
            }
        }
    };

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4>Enter Your Email</h4>
                        <p>A verification code will be sent to the email address you provide</p>
                        <input onKeyDown={handleKeyDown} value={Email} onChange={(e)=>{LoginFormOnChange('email',e.target.value)}} placeholder="Email Address" type="email" className="form-control"/>
                        <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Next"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;