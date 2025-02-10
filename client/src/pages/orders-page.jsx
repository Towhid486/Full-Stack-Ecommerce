import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import InvoiceList from '../components/invoice/invoice-list';
import UserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OrdersPage = () => {
    const {isLogin} = UserStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin()) {
            toast.error("Login Required")
            navigate('/login'); 
        }
    }, []);

    return (
        <Layout>
            <InvoiceList/>
        </Layout>
    );
};

export default OrdersPage;