import axios from "axios";
import { create } from "zustand";
import { unauthorized } from './../utility/utility';

const WishStore = create((set)=>({
    isWishSubmit:false,

    WishSaveRequest:async(productID)=>{
        try{

            set({isWishSubmit:true})
            let res = await axios.post('/api/v1/SaveWishList',{productID:productID});
            return res.data['status'] === 'success';

        }catch(e){
            unauthorized(e)
        }finally{
            set({isWishSubmit:false})
        }
    },


    WishList:null,
    WishCount:0,
    WishListRequest: async()=>{
        try{
            let res = await axios.get(`/api/v1/WishList`)
            set({WishList:res.data['data']})
            set({WishCount:res.data['data'].length})
            
        }catch(e){
            unauthorized(e)
        }
    },

    RemoveWishListRequest: async(productID)=>{
        try{
            set({WishList:null})
            let res = await axios.post(`/api/v1/RemoveWishList`,{productID:productID})
            return res.data['status'] === 'success';
        }catch(e){
            unauthorized(e)
        }
    }

}))

export default WishStore;