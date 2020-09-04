import React from 'react';
import './style.scss';
import hospitalSpace from '../images/hospital-space1.svg';
import officeSpace from '../images/office-space.svg';

const SalesMethods = () => {
    return (
        <div className='salesMethods'>
            <h1 className='salesMethodsHeading'>Two Ways to Sell Procedures</h1>
            <span></span>
            <div className='selector'>
                <img src={hospitalSpace} alt='hospitalSpace' className='salesMethodsImg'/>
                <div className='wrapText'>
                    <h1 className='topSelectorHeading'>IN HOSPITAL</h1>
                    <p className='topSelectorText'>
                        Medical staff uses MDsave to make out-<br/>
                        of-pocket purchases on a patient’s<br/>
                        behalf, allowing bundles to be sold in<br/>
                        the hospital without being featured in<br/>
                        the open marketplace.
                    </p>
                </div>
            </div>
            <div className='selector'>
                <div className='wrapBottomText'>
                    <h1 className='topSelectorHeading'>CONSUMER <br/> MARKETPLACE OPTION</h1>
                    <p className='topSelectorText'>
                        Online at MDsave.com, patients shop and<br/>
                        compare local prices and purchase<br/>
                        vouchers online.
                        <br/>
                    </p>
                </div>
                <img src={officeSpace} alt='officeSpace' className='salesMethodsImg'/>
            </div>
        </div>
    )
}

export default SalesMethods;