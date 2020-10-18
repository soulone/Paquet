import React from 'react';
import '../Sidebar/Sidebar.css'
import Logotipe from '../../../../commons/Logo/Logo'


const Sidebar = () => {
    return (
        <aside className="aside-bar">
            <Logotipe className="logo"/>
            <div>
            <a className="btn-aside" href="" type="button">Add new package +</a>            
            </div>            
            <ul>
                <li><a href="">Review</a></li>
                <li><a href="">My Packages</a></li>
                <li><a href="">Tracking</a></li>
                <li><a href="">Favorites</a></li>
                <li><a href="">Archived</a></li>
            </ul>
            
            <div>
            <hr/>
            <a href="">More information</a>
            </div>
        </aside>

    )
};

export default Sidebar;