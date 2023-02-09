import React from 'react';
import './style.css';

const ContentContainer = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
}

export default ContentContainer;