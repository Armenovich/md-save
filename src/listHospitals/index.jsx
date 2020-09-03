import React from 'react';
import './style.scss';
import listImages1 from '../images/Bitmap4.png';
import listImages2 from '../images/Bitmap5.png';
import listImages3 from '../images/Bitmap6.png';
import listImages4 from '../images/Bitmap1.png';
import listImages5 from '../images/Bitmap2.png';
import listImages6 from '../images/Bitmap3.png';

const ListHospitals = () => {
    return (
        <div className='wrapListHospitals'>
            <h3 className='listHospitalsHeading'>TRUSTED BY HOSPITALS</h3>
            <ul className='listHospitals'>
                <li>
                    <img src={listImages1}/>
                </li>
                <li>
                    <img src={listImages2}/>
                </li>
                <li>
                    <img src={listImages3}/>
                </li>
                <li>
                    <img src={listImages4}/>
                </li>
                <li>
                    <img src={listImages5}/>
                </li>
                <li>
                    <img src={listImages6}/>
                </li>
            </ul>
        </div>
    )
}

export default ListHospitals;