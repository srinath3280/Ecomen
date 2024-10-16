import React, { useRef, useEffect } from 'react';
import './environmentMonitoring.css';

const EnivronmentMonitoring = () => {

    // Our Services Animation Start
    const EMServiceRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
            EMServiceRefs.current.forEach(ref => {
                const EMServiceTop = ref.getBoundingClientRect().top;

                if (EMServiceTop < triggerBottom) {
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
    // Our Services Animation End

    return (
        <div>
            <section className='environmentMonitoring'>
                <div className='environmentMonitoring-heading'>
                    <h1>Environment Monitoring</h1>
                </div>
                <div className='environmentMonitoring-content'>
                    <div className='environmentMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/Enviroment-Monitoring.jpg' alt='' />
                    </div>
                    <div className='environmentMonitoring-content-right'>
                        <p>
                            Environmental monitoring is needed to protect the public and the environment from toxic contaminants and pathogens. It is used to prepare environmental impact assessments, as well as to establish the circumstances in which human activities carry a risk of harmful effects on the natural environment.
                        </p>
                        <p>
                            Types of monitoring carried out include that of air, water, soil and noise. All monitoring strategies and programs have reason and justification which help them to establish the current status of an environment or to establish trends in environmental parameters.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='environmentMonitoring-services'>
                <div className='environmentMonitoring-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='environmentMonitoring-services-list'>
                    <div data-direction="top" ref={el => EMServiceRefs.current[0] = el}>
                        <img src='/images/services/environmentMonitoring/Air-monitoring.jpg' alt='' />
                        <a href='/air-monitoring'>Air Monitoring</a>
                    </div>
                    <div data-direction="right" ref={el => EMServiceRefs.current[1] = el}>
                        <img src='/images/services/environmentMonitoring/Water-monitoring.jpg' alt='' />
                        <a href='/water-monitoring'>Water Monitoring</a>
                    </div>
                    <div data-direction="bottom" ref={el => EMServiceRefs.current[2] = el}>
                        <img src='/images/services/environmentMonitoring/Noise-Monitoring.jpg' alt='' />
                        <a href='/noise-monitoring'>Noise Monitoring</a>
                    </div>
                    <div data-direction="left" ref={el => EMServiceRefs.current[3] = el}>
                        <img src='/images/services/environmentMonitoring/Soil-Monitoring.jpg' alt='' />
                        <a href='/soil-monitoring'>Soil Monitoring</a>
                    </div>
                    <div data-direction="bottom" ref={el => EMServiceRefs.current[4] = el}>
                        <img src='/images/services/environmentMonitoring/Lux-monitoring.jpg' alt='' />
                        <a href='/lux-monitoring'>Lux Monitoring</a>
                    </div>
                    <div data-direction="top" ref={el => EMServiceRefs.current[5] = el}>
                        <img src='/images/services/environmentMonitoring/hazardous-waste-monitoring.jpg' alt='' />
                        <a href='/hazardous-waste-monitoring'>Hazardous Waste Monitoring</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EnivronmentMonitoring
