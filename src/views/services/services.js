import React, { useEffect, useRef } from 'react';
import './service.css';
import ServiceCarousel from './serviceCarousel/serviceCarousel';

const Services = () => {

    // Service Animation Start
    const ServiceRefs = useRef([]);

    useEffect(() => {

        // Animate the first image immediately on page load
        if (ServiceRefs.current[0]) {
            ServiceRefs.current[0].classList.add('in-view');
        }

        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 5 * 4;
            ServiceRefs.current.forEach(ref => {
                const ServiceTop = ref.getBoundingClientRect().top;

                if (ServiceTop < triggerBottom) {
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
    // Service Animation End

    return (
        <div>

            {/* Our Services Domains */}
            <section className='services'>
                <div className='services-heading'>
                    <h1>Our Services Domains</h1>
                </div>
                <div className='services-content'>
                    <div className='services-content-image' data-direction="top" ref={el => ServiceRefs.current[0] = el}>
                        <img src='/images/services/Environment-Consulting-updated.jpg' alt='' />
                        <a href='/environmental-consulting'>Environment <br /> Consulting</a>
                    </div>
                    <div className='services-content-image' data-direction="right" ref={el => ServiceRefs.current[1] = el}>
                        <img src='/images/services/Enviroment-Monitoring.jpg' alt='' />
                        <a href='/environment-monitoring'>Environment <br /> Monitoring</a>
                    </div>
                    <div className='services-content-image' data-direction="bottom" ref={el => ServiceRefs.current[2] = el}>
                        <img src='/images/services/Mining-Services-scaled.jpg' alt='' />
                        <a href='/mining-services'>Mining <br /> Services</a>
                    </div>
                    <div className='services-content-image' data-direction="left" ref={el => ServiceRefs.current[3] = el}>
                        <img src='/images/services/Ecomen-Services.jpg' alt='' />
                        <a href='/forest-services'>Forestry <br /> Services</a>
                    </div>
                    <div className='services-content-image' data-direction="bottom" ref={el => ServiceRefs.current[4] = el}>
                        <img src='/images/services/Laboratory-Services-scaled.jpg' alt='' />
                        <a href='/laboratory'>Laboratory <br /> Services</a>
                    </div>
                </div>
            </section>

            {/* Trusted Clients */}
            <section className='services-clients'>
                <div className='services-clients-heading'>
                    <h1>Trusted Clients</h1>
                </div>
                <div className='services-clients-content'>
                    <ServiceCarousel></ServiceCarousel>
                </div>
            </section>
        </div>
    )
}

export default Services
