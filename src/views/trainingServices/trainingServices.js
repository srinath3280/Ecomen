import React, { useRef, useEffect } from 'react';
import './trainingServices.css';

const TrainingServices = () => {

    // TrainingServices Animation Start
    const TrainingServicesRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
            TrainingServicesRefs.current.forEach(ref => {
                const TrainingServicesTop = ref.getBoundingClientRect().top;

                if (TrainingServicesTop < triggerBottom) {
                    ref.classList.add('in-view');
                } else {
                    ref.classList.remove('in-view');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // TrainingServices Animation End

    return (
        <div>

            {/* Our Training Services */}
            <section className='trainingServices'>
                <div className='trainingServices-heading'>
                    <h1>Our Training Services</h1>
                </div>
                {/* <div className='trainingServices-divideline'></div> */}
                <div className='trainingServices-content'>
                    <div className='trainingServices-content-image' data-direction="top" ref={el => TrainingServicesRefs.current[0] = el}>
                        <img src='/images/trainingServices/GVTC-Outside-300x247.jpg' alt='' />
                        <a href='/gvtc'>Group Vocational Training Centre</a>
                    </div>
                    <div className='trainingServices-content-image' data-direction="bottom" ref={el => TrainingServicesRefs.current[1] = el}>
                        <img src='/images/trainingServices/Research-and-TC-Outside-300x200.jpg' alt='' />
                        <a href='/research-and-training-centre'>Research and Training Centre</a>
                    </div>
                </div>
                {/* <div className='trainingServices-divideline'></div> */}
            </section>
        </div>
    )
}

export default TrainingServices
