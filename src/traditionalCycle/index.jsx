import React from 'react';
import './style.scss';
import traditionalCycleImages from '../images/traditionalCycleImages.png';
import collectMore from '../images/collectMore.png';

const TraditionalCycle = () => {
    return (
        <div className='traditionalCycle'>
            <div className='selector'>
                <img src={traditionalCycleImages} />
                <div className='wrapText'>
                    <h1 className='topSelectorHeading'>We Pay Faster</h1>
                    <p className='topSelectorText'>Receive 100% of your pre-determined<br/>
                       custom rate within 4 business days of<br/>
                       service rendered with no claims filing,<br/>
                       denials, or patient payment plans.
                    </p>
                    <button className='topSelectorButton'>Get Pay Faster</button>
                </div>
            </div>
            <div className='selector'>
                <div className='wrapBottomText'>
                    <h1 className='topSelectorHeading'>We Collect More</h1>
                    <p className='topSelectorText'>
                        Upfront payment collection nets more facility<br/>
                        revenue from any patient paying out of<br/>
                        pocket.
                        <br/>
                        Want to see how much MDsave can increase<br/>
                        your collections?
                    </p>
                </div>
                <img src={collectMore} />
            </div>
        </div>
    )
}

export default TraditionalCycle;