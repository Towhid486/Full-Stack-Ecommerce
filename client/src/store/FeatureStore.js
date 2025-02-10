import axios from 'axios';
import { create } from 'zustand';
 
const FeatureStore = create((set)=>({
    FeatureList:null,
    FeatureListRequest: async()=>{
        let res = await axios.get("/api/v1/FeaturesList")
        if(res.data['status'] === "success"){
            set({FeatureList:res.data['data']})
        }
    },
    LegalDetails:null,
    LegalDetailstRequest: async(type)=>{
        set({LegalDetails:null})
        let res = await axios.get(`/api/v1/LegalDetails/${type}`)
        if(res.data['status'] === "success"){
            set({LegalDetails:res.data['data']})
        }
    },

}))

export default FeatureStore;