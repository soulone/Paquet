import React from 'react';

import "../Dashboard/Dashboard.css"
import Nav from  "../../pages/Dashboard/Components/Nav/Nav"
import Sidebar from '../Dashboard/Components/Sidebar/Sidebar';
import AreaTools from '../Dashboard/Components/Area-Tools/Area-Tools';


const Dashboard = () =>{

    let ac = localStorage.getItem('account')
    let account = JSON.parse(ac)    

    return(      
        <div className="page-dashboard-container">   
          <>
            <div className='HomeContainer'>
                <Sidebar></Sidebar>                
            </div>
        </>
        </div>
    )
};

export default Dashboard;