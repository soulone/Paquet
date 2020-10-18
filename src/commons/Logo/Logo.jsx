import React from 'react';

import '../Logo/Logo.css';
import Logotype from '../../assets/images/figs/paqueio-logo.svg'

const Logo = ()=>{
    return(
        <div className="brand">
            <img className="brand-img" src={Logotype} alt=""/>
            <span className="brand-name">Paquer.io</span>
        </div>
    )

    
};

export default Logo;