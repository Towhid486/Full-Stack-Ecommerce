import React, { useEffect } from 'react';
import Layout from './../layout/Layout';
import LegalContents from '../components/features/legal-contents';
import FeatureStore from '../store/FeatureStore';
const ContactPage = () => {
    const {LegalDetailstRequest} = FeatureStore();
    useEffect(()=>{
        (async ()=>{
            await LegalDetailstRequest("contact")
        })()
    },[])

    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default ContactPage;