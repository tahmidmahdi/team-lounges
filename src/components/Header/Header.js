import React from 'react';
import './Header.css'
import banner from '../../images/BANNER.jpg'

const Header = () => {
    return (
        <div className="header">
            <img className="img-fluid" src={banner} alt=""/>
            <h1>team lounges</h1>
        </div>
    );
};

export default Header;