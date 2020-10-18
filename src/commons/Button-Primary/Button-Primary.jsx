import React from 'react';
import './Button-Primary.css';

const ButtonPrimary = ({attribute,btnText,event,param})=>{
    return (
        <button
         onClick={event}
         id={attribute.id}
         name={attribute.name}
         type={attribute.type}                                 
         className="btn btn-primary"
         >
         <span>{btnText}</span>
         </button>        
    )
};

export default ButtonPrimary;