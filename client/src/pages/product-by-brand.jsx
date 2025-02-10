import React, { useEffect } from 'react';
import ProductStore from '../store/ProductStore';
import Layout from '../layout/Layout';
import ProductList from '../components/product/product-list';
import { useParams } from 'react-router-dom';

const ProductByBrand = () => {
    const {ListByBrandRequest} = ProductStore();
    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await ListByBrandRequest(id);
        })()
    },[id]);

    return (
        <Layout>
            <ProductList/>
        </Layout>
    );
};

export default ProductByBrand;