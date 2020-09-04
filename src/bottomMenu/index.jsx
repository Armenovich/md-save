import React from 'react';
import '../bottomMenu/style.scss';
import mdsLogo from '../mdsave.svg';
import Icone1 from '../images/Icone1.png';
import Icone2 from '../images/Icone2.png';
import Icone3 from '../images/Icone3.png';

const BottomMenu = () => {
    return (
        <div className='bottomMenu'>
            <div className='childWrapbottomMenu'>
                <div className='bottomMenuImage'>
                    <img src={mdsLogo} alt='mdsLogo'/>
                </div>
                <div>
                <ul className='bottomMenuList'>
                    <li><h4>MDSAVE</h4></li>
                    <li><p>How It Works</p></li>
                    <li><p>Financing</p></li>
                    <li><p>MDsave Rx</p></li>
                    <li><p>FAQ</p></li>
                    <li><p>Blog</p></li>
                    <li><p>Business Solutions</p></li>
                </ul>
                <ul className='bottomMenuList'>
                    <li><h4>COMPANY</h4></li>
                    <li><p>About Us</p></li>
                    <li><p>Careers</p></li>
                    <ul className='bottomMenuContact'>
                        <li><h4>CONTACT</h4></li>
                        <li><p>Contect Us</p></li>
                        <li><p>(877) 461-2491</p></li>
                    </ul>
                </ul>
                <ul className='bottomMenuList'>
                    <li><h4>View All</h4></li>
                    <li><p>Procedures</p></li>
                    <li><p>Providers</p></li>
                    <li><p>Hospitalss</p></li>
                </ul>
                <ul className='bottomMenuList'>
                    <li><h4>PROCEDURES</h4></li>
                    <li><p>Balloon Sinuplasty</p></li>
                    <li><p>Cardiac Assessment (EKG)</p></li>
                    <li><p>Colonoscopy</p></li>
                    <li><p>CT Scan</p></li>
                    <li><p>Echocardiography</p></li>
                    <li><p>Gastric Sleeve</p></li>
                    <li><p>Hernia Repair</p></li>
                    <li><p>HIDA Scan</p></li>
                </ul>
                <ul className='lastList'>
                    <li><p>Mammogram</p></li>
                    <li><p>MRI</p></li>
                    <li><p>Physical Therapy</p></li>
                    <li><p>Sleep Study</p></li>
                    <li><p>Ultrasound</p></li>
                    <li><p>Upper Endoscopy</p></li>
                    <li><p>X-Ray</p></li>
                    <li><p>More…</p></li>
                </ul>
                </div>
            </div>
            <div className='listIcons'>
                <ul className='listIconsWrap'>
                    <li className='listIconsElement'>
                        <img src={Icone1}/>
                    </li>
                    <li className='listIconsElement'>
                        <img src={Icone2}/>
                    </li>
                    <li className='listIconsElement'>
                        <img src={Icone3}/>
                    </li>
                </ul>
            </div>
            <div className='bottomText'>
              <p>© Copyright 2020 MDsave Incorporated. All Rights Reserved</p>
              <a>Privacy Policy</a>
              <a>Terms and Conditions</a>  
            </div>
        </div>
    )
}

export default BottomMenu;