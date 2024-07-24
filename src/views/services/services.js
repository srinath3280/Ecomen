import React from 'react';
import './service.css';
import ServiceCarousel from './serviceCarousel/serviceCarousel';

const Services = () => {
    return (
        <div>

            {/* Our Services Domains */}
            <section className='services'>
                <div className='services-heading'>
                    <h1>Our Services Domains</h1>
                </div>
                <div className='services-content'>
                    <div className='services-content-image'>
                        <img src='/images/services/Environment-Consulting-updated.jpg' alt='' />
                        <a href='/'>Environment <br /> Consulting</a>
                    </div>
                    <div className='services-content-image'>
                        <img src='/images/services/Enviroment-Monitoring.jpg' alt='' />
                        <a href='/'>Environment <br /> Monitoring</a>
                    </div>
                    <div className='services-content-image'>
                        <img src='/images/services/Mining-Services-scaled.jpg' alt='' />
                        <a href='/'>Mining <br /> Services</a>
                    </div>
                    <div className='services-content-image'>
                        <img src='/images/services/Ecomen-Services.jpg' alt='' />
                        <a href='/'>Forestry <br /> Services</a>
                    </div>
                    <div className='services-content-image'>
                        <img src='/images/services/Laboratory-Services-scaled.jpg' alt='' />
                        <a href='/'>Laboratory <br /> Services</a>
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
