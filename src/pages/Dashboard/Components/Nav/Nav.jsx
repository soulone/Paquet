import React from 'react';
import '../../Components/Nav/Nav.css';

import Logotype from '../../../../commons/Logo/Logo';
import Search from '../../Components/General-Search/General-Search';

const Nav = ({nickname}) =>{
    return(
        <div className="navbar">
            <div>
            <h1>@{nickname}</h1>
            <img src="" alt=""/>
            </div>

            <div>
                <img src="" alt=""/> 
                <img src="" alt=""/>
            </div>
        </div>
    )
   
};
export default Nav;