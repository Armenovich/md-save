import React from 'react';
import './style.scss';
import highDeductibles from '../images/High-Deductibles.jpg';
import engaging from '../images/Engaging.jpg';
import mdsave from '../images/MDsave.jpg';

const OfficialDocuments = () => {
    return (
        <div className='officialDocuments'>
            <div className='callSelector'>
                <h1 className='callSelectorHeading'>Ready to Learn More?</h1>
                <p className='callSelectorText'>Schedule a demo call with a product specialist who will answer all your questions.</p>
                <button className='callSelectorButton'>Request a Demo</button>
            </div>
            <div className='bottomSelector'>
                <h1 className='bottomSelectorHeading'>Explore Case Studies, White Papers, and More</h1>
                <p className='bottomSelectorText'>We’re leading the charge on the full consumerization of healthcare.</p>
            </div>
            <ul className='caseStudies'>
                    <li>
                        <img src={engaging} alt='engaging' className='caseStudiesImg'/>
                        <p>
                            Solving Surprise Bills: Fixing<br/>
                            Misconceptions about Bundled Care
                        </p>
                        <span>Read More</span>
                    </li>
                    <li>
                        <img src={mdsave} alt='mdsave' className='caseStudiesImg'/>
                        <p>
                            A Win for Everyone:<br/>
                            Three Ways to Increase Patient<br/>
                            Satisfaction and Capture<br/>
                            Revenue
                        </p>
                        <span>Read More</span>
                    </li>
                    <li>
                        <img src={highDeductibles} alt='highDeductibles' className='caseStudiesImg'/>
                        <p>Gulf Coast Hospital Collects<br/>
                           18x More in ED Using MDsave
                        </p>
                        <span>Read More</span>
                    </li>
                </ul>
        </div>
    )
}

export default OfficialDocuments;