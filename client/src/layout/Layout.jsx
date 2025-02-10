import React from 'react';
import AppNavBar from './appNavBar';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {


    return (
        <>  
            <AppNavBar/>
                {children}
                <Toaster position="bottom-center" reverseOrder={false} />
            <Footer/>
            
        </>
    );
};

export default Layout;