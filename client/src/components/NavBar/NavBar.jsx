import React, {Component} from 'react';
import ContentContainer from "../ContentContainer/ContentContainer";

import './style.css';

const NavBar = () => {
    return (
        <div className='navBarWrapper'>
            <ContentContainer>
                <div className="navBarContent">
                    <div className="logo">
                        LOGO
                        <img src="" alt=""/>
                    </div>
                    <div className="navBarLinks">
                        <a href='/'>Home</a>
                        <div className="navBarLinkWrapperAvatar"></div>
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
}

export default NavBar;