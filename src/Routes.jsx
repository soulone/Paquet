import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

const Routes = () => {
    return (
        <>
            <Router>
                <Route exact path='/' component={Login} />                
                <Route exact path='/dashboard' component={Dashboard} />
            </Router>
        </>
    )
}

export default Routes;