import React from 'react';
import '../Banner/Banner.css';
import ImageBanner from '../../../../assets/images/figs/banner-img.svg'


const Banner = ()=>{
    return(
        <div className="banner-container">
            <img className="banner-img" src={ImageBanner} alt=""/>
            <h1 className="banner-text">
            Track your packets with Paquet.io 
            </h1>
        </div>
    )
};

export default Banner;