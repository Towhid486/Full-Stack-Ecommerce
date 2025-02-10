import axios from "axios";
import { create } from "zustand";
import { unauthorized } from './../utility/utility';

const ReviewStore = create((set)=>({

    isReviewSubmit:false,
    ReviewFormData:{productID:"",rating:"",des:""},
    ReviewFormOnChange: (name,value)=>{
        set((state)=>({
            ReviewFormData:{
                ...state.ReviewFormData,
                [name]:value
            }
        }))
    },

    ReviewSaveRequest:async(PostBody)=>{
        try{
            set({isReviewSubmit:true})
            let res = await axios.post('/api/v1/CreateReview',PostBody)
            return res.data['status']==="success"
        }catch(e){
            unauthorized(e)
        }finally{
            set({isReviewSubmit:false})

        }
    }



}))

export default ReviewStore;