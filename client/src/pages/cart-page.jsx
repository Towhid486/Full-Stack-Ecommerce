import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import CartList from '../components/cart/cartList';
import UserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CartPage = () => {
    const {isLogin} = UserStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin()) {
            toast.error("Please login to view cart")
            navigate('/login'); 
        }
    }, []);

    return (
        <Layout>
            <CartList />
        </Layout>
    );
};

export default CartPage;