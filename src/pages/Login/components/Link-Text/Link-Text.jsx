import React from 'react';
import '../Link-Text/Link-Text.css'


const LinkText = ({ label, linkText }) => {
    return (
        <div className="container-link-text">
            <span>{label}</span>
            <a href="">{linkText}</a>
        </div>
    )
};

export default LinkText;