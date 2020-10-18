import React from 'react';
import '../Link/Link.css'

const Link = ({linkText})=>{
    return (
        <div className="container-link">
            <a href="">{linkText}</a>
        </div>
    )
};

export default Link;