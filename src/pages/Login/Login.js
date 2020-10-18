import React from 'react';
import '../Login/Login.css';

// [Components]
import Box from './components/Box/Box';
import Banner from './components/Banner/Banner'

// [Page]
const Login = () => {
    return(
        <div className="login-page-container">
            <Box className="box"/>
            <Banner className="banner"/>
        </div>
    )

    
};

export default Login;