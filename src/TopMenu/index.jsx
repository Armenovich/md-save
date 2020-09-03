import React from 'react';
import './style.scss';
import mdsLogo from '../mdsave.svg';

const TopMenu = () => {
    return (
        <div className='topMenu'>
            <div className='topMenuElements'>
                <img src={mdsLogo} className='topMenuImages'/>
                <button className='topMenuButton'>Request a Demo</button>
            </div>
        </div>
        
    )
}

export default TopMenu;