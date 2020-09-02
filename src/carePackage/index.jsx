import React from 'react';
import './style.scss';
import imageProcedures from '../images/Create_Instantly_Transac_Table_Carts.7554bdca.png';

const CarePackage = () => {
    return (
        <div className='carePackage'>
            <h1 className='carePackageHeading'>The Guaranteed Way to Get Paid</h1>
            <h2 className='carePackageText'>
               MDsave is a risk-free bundling technology that offers shoppable,<br/>
               instantly transactable procedures at a custom rate.
            </h2>
            <div className='wrapButton'>
                <button className='carePackageButton'>Requaest a Demo</button>
            </div>
            <div className='listProcedures'>
                <img src={imageProcedures} alt='imageProcedures' className='imageProcedures'/>
                <div>
                    <p className='listProceduresText'><span>Satisfy your patients:</span> Give your patients the flexibility to pay at point-of-<br/>
                       service or pursue financing options while you still collect in full.</p>
                </div>
            </div>
        </div>
    )
}

export default CarePackage;