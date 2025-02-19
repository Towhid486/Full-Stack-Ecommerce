import React, {useEffect} from 'react';
import Layout from './../layout/Layout';
import ProfileForm from '../components/user/profile-form';
import UserStore from "../store/UserStore.js";
import {useNavigate} from "react-router-dom";

const ProfilePage = () => {
    const {isLogin} = UserStore()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin()) {
            navigate('/login');  // Redirect if not logged in
        }
    }, [isLogin, navigate]);
    return (
        <Layout>
            {isLogin() && <ProfileForm />}
        </Layout>
    );
};

export default ProfilePage;