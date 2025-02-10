import React, { useEffect } from 'react';
import Layout from '../layout/Layout';
import WishList from './../components/wish/WishList';
import UserStore from '../store/UserStore';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const WishListPage = () => {
    const {isLogin} = UserStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin()) {
            toast.error("Please login to view Wishlist")
            navigate('/login'); 
        }
    }, []);

    return (
        <Layout>
            <WishList/>
        </Layout>
    );
};

export default WishListPage;