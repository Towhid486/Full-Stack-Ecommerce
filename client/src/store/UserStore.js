import axios  from "axios";
import {getEmail, setEmail, unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";
import { create } from "zustand";
const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },

    LoginFormValue:{email:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormValue:{
                ...state.LoginFormValue,
                [name]:value
            }
        }))
    },

    isFormSubmit:false,
    UserOTPRequest:async(email)=>{
        set({isFormSubmit:true})
        let res=await axios.get(`/api/v1/UserOTP/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },


    UserLogoutRequest:async()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`/api/v1/UserLogout`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },



    OtpFormValue:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OtpFormValue:{
                ...state.OtpFormValue,
                [name]:value
            }
        }))
    },
    VerifyLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email= getEmail();
        let res=await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },




    ProfileForm:{cus_add:"",cus_city:"",cus_country:"",cus_fax:"",cus_name:"",cus_phone:"",cus_postcode:"",cus_state:"",ship_add:"",ship_city:"",ship_country:"",ship_name:"",ship_phone:"",ship_postcode:"",ship_state:""},
    ProfileFormChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },


    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try {
            let res=await axios.get(`/api/v1/ReadProfile`);
            if(res.data['data'].length<0){
                set({ProfileDetails:[]})
                
            }else{
                set({ProfileDetails:res.data['data']})
                set({ProfileForm:res.data['data']})
            }
        }catch (e) {
            unauthorized(e)
        }
    },

    ProfileSaveRequest:async(PostBody)=>{
        try {
            set({ProfileDetails:null})
            let res=await axios.post(`/api/v1/UpdateProfile`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e)
        }
    }


}))

export default UserStore;