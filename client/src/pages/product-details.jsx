import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import Brands from '../components/product/brands';
import ProductStore from '../store/ProductStore';
import Details from './../components/product/details';

const ProductDetails = () => {
    const {DetailsRequest,ReviewListRequest,BrandList,BrandListRequest} = ProductStore();
    const {id} = useParams();

    useEffect(()=>{
        (async()=>{
            await DetailsRequest(id)
            await ReviewListRequest(id)
            await BrandList===null? await BrandListRequest() : null 
        })()
    },[])

    return (
        <Layout>
            <Details/>
            <Brands/>
        </Layout>
    );
};

export default ProductDetails;