import React from 'react';
import './style.scss';
import PhotoRobin from '../images/robin.1243.png';

const PatientAssessment = () => {
    return (
        <div className='patientAssessment'>
            <div className='leftSide'>
                <div className='leftSideSelector'>
                    <h1 className='leftSideHeading'>92</h1>
                    <h2>PATIENT SATISFACTION SCORE</h2>
                </div>
            </div>
            <div className='bottomSide'>
                <h1 className='bottomSideHeading'>LOVED BY PROVIDERS</h1>
                <p className='bottomSideText'>
                    “I was so grateful to the administrative person in the<br/>
                    radiology department at the hospital who told me about<br/>
                    MDsave and how it could benefit me…I paid right at<br/>
                    registration. For hospitals to offer that help to people is<br/>
                    really priceless.”
                </p>
                <img src={PhotoRobin} alt='PhotoRobin' className='bottomSideImg'/>
                <h5>Robin S., Patient</h5>
            </div>
        </div>
    )
}

export default PatientAssessment;