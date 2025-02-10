import React, { useEffect } from 'react';
import ProductStore from '../store/ProductStore';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import ProductList from '../components/product/product-list';
import ScrollToTop from '../utility/ScrollToTop';

const ProductByCategory = () => {
    const {ListByCategoryRequest} = ProductStore();
    const {id} = useParams();

    useEffect(()=>{
        (async ()=>{
            await ListByCategoryRequest(id);
        })()
    },[id])

    // useEffect(()=>{
    //     window.scrollTo(0,0);
    // },[])
    return (
        <Layout>
            <ScrollToTop/>
            <ProductList/>
        </Layout>
    );
};

export default ProductByCategory;