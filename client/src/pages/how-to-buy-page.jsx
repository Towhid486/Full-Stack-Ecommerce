import React, { useEffect } from 'react';
import Layout from './../layout/Layout';
import LegalContents from '../components/features/legal-contents';
import FeatureStore from '../store/FeatureStore';
const HowToBuyPage = () => {
    const {LegalDetailstRequest} = FeatureStore();
    useEffect(()=>{
        (async ()=>{
            await LegalDetailstRequest("howtobuy")
        })()
    },[])

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default HowToBuyPage;