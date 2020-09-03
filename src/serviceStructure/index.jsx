import React from 'react';
import './style.scss';
import itemsImage1 from '../images/capture1.png';
import itemsImage2 from '../images/capture2.png';
import itemsImage3 from '../images/capture3.png';
import itemsImage4 from '../images/capture4.png';


const ServiceStructure = () => {
    return (
        <div className='serviceStructure'>
            <h1 className='serviceStructureHeading'>We Bundle Smarter</h1>
            <span />
            <p className='serviceStructureText'>Our unique bundles are global and risk-free. Just set your prices and leave the rest to us.</p>
            <div className='items'>
                <img src={itemsImage1} alt='itemsImage' className='itemsImage1'/>
                <div className='itemsText'>
                    <h3>YOU SET YOUR PRICE</h3>
                    <p>Your fee for service is completely customizable and up to <br/>
                       your discretion. Our team of experts can help you <br /> 
                       determine your optimal rate.
                    </p>
                </div>
            </div>
            <div className='items'>
                <img src={itemsImage2} alt='itemsImage' className='itemsImage1'/>
                <div className='itemsText'>
                    <h3>WE MANAGE AND BUILD A GLOBAL BUNDLE</h3>
                    <p>We work with all employed, affiliated, and ancillary <br/> 
                       providers to negotiate prices, manage the bundle, and <br/> 
                       distribute payment after services.
                    </p>
                </div>
            </div>
            <div className='items'>
                <img src={itemsImage3} alt='itemsImage' className='itemsImage1'/>
                <div className='itemsText'>
                    <h3>WE ELIMINATE RISK</h3>
                    <p>Our bundles include all fees associated with a <br/>
                       procedure.The patient pays one upfront price, no surprise <br/>
                       bills for them and no bad debt for you.
                    </p>
                </div>
            </div>
            <div className='items'>
                <img src={itemsImage4} alt='itemsImage' className='itemsImage1'/>
                <div className='itemsText'>
                    <h3>YOU GET PAID</h3>
                    <p>We unbundle and distribute payment to all parties within 4<br/>
                       days of service.
                    </p>
                </div>
            </div>
            <div className='checkInButton'>
                <button className='serviceStructureButton'>Bundle With Us</button>
            </div>
        </div>
    )
}
export default ServiceStructure;