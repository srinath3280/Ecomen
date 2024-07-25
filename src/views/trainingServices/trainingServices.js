import React from 'react';
import './trainingServices.css';

const TrainingServices = () => {
    return (
        <div>

            {/* Our Training Services */}
            <section className='trainingServices'>
                <div className='trainingServices-heading'>
                    <h1>Our Training Services</h1>
                </div>
                <div className='trainingServices-content'>
                    <div className='trainingServices-content-image'>
                        <img src='/images/trainingServices/GVTC-Outside-300x247.jpg' alt='' />
                        <a href='/gvtc'>Group Vocational Training Centre</a>
                    </div>
                    <div className='trainingServices-content-image'>
                        <img src='/images/trainingServices/Research-and-TC-Outside-300x200.jpg' alt='' />
                        <a href='/research-and-training-centre'>Research and Training Centre</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrainingServices
