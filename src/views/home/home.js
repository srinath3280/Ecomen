import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import HomeCarousel from './carousel/carousel';
import ProjectCarousel from './project-carousel/projectCarousel';
import ClientCarousel from './client-carousel/clientCarousel';
import './homeScript.js';

const Home = () => {

    // Service Header Animation
    const serviceheaderRef = useRef(null);
    const [isVisible1, setIsVisible1] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (serviceheaderRef.current) {
                const rect = serviceheaderRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight) {
                    setIsVisible1(true);
                }
                else {
                    setIsVisible1(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Project Header Animation
    const projectheaderRef = useRef(null);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (projectheaderRef.current) {
                const rect = projectheaderRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight) {
                    setIsVisible2(true);
                }
                else {
                    setIsVisible2(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Client Header Animation
    const clientheaderRef = useRef(null);
    const [isVisible3, setIsVisible3] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (clientheaderRef.current) {
                const rect = clientheaderRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight) {
                    setIsVisible3(true);
                }
                else {
                    setIsVisible3(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // Services Animation Start
    const ServiceRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
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
    // Services Animation End


    // Accreditation Animation Start
    const AccreditationRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            const triggerBottom = window.innerHeight / 4 * 4;
            AccreditationRefs.current.forEach(ref => {
                const AccreditationTop = ref.getBoundingClientRect().top;

                if (AccreditationTop < triggerBottom) {
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
    // Accreditation Animation End

    return (
        <div className='home'>
            {/* Carousel Section */}
            <HomeCarousel></HomeCarousel>

            {/* Info Section */}
            <section className='home-info'>
                <div className="card-section">
                    <div className="card-section-left">
                        <h2>More than 30 years of undefeated success</h2>
                        <p>
                            We have a long and proud history giving emphasis to environment, social and economic outcomes.
                        </p>
                        <div>
                            <a href='/about-us'>About us →</a>
                        </div>
                        {/* <button className="card-section-button">About us →</button> */}
                        <img src='/images/home/trophy.png' alt='' />
                    </div>
                    <div className="card-section-right">
                        <div className="card">
                            <div className="card-icon">
                                <i class="fas fa-suitcase"></i>
                            </div>
                            <div className="card-info">
                                <h3>600+</h3>
                                <p>Successfully completed projects</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <i class="fas fa-record-vinyl"></i>
                            </div>
                            <div className="card-info">
                                <h3>17+</h3>
                                <p>NABET accredited sectors</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div className="card-info">
                                <h3>20+</h3>
                                <p>Functional area experts</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-icon">
                                <i class="fas fa-award"></i>
                            </div>
                            <div className="card-info">
                                <h3>30+</h3>
                                <p>Certification & achievements gained</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services */}
            <section className='home-services'>
                <div className='home-services-header'>
                    <h1 ref={serviceheaderRef} className={isVisible1 ? 'visible' : ''}>Our Services Domains</h1>
                </div>
                <div className='home-services-cards'>
                    <div className='home-services-cards-1' data-direction="top" ref={el => ServiceRefs.current[0] = el}>
                        <img src='/images/home/ourServices/Environment-Consulting-updated.jpg' alt='' />
                        <a href='/'>Environment <br /> Consulting</a>
                    </div>
                    <div className='home-services-cards-1' data-direction="left" ref={el => ServiceRefs.current[1] = el}>
                        <img src='/images/home/ourServices/Enviroment-Monitoring.jpg' alt='' />
                        <a href='/'>Environment <br /> Monitoring</a>
                    </div>
                    <div className='home-services-cards-1' data-direction="bottom" ref={el => ServiceRefs.current[2] = el}>
                        <img src='/images/home/ourServices/mining-services.png' alt='' />
                        <a href='/'>Mining <br /> Services</a>
                    </div>
                    <div className='home-services-cards-1' data-direction="right" ref={el => ServiceRefs.current[3] = el}>
                        <img src='/images/home/ourServices/Ecomen-Services.jpg' alt='' />
                        <a href='/'>Forestry <br /> Services</a>
                    </div>
                    <div className='home-services-cards-1' data-direction="left" ref={el => ServiceRefs.current[4] = el}>
                        <img src='/images/home/ourServices/Laboratory-Services-scaled.jpg' alt='' />
                        <a href='/'>Laboratory <br /> Services</a>
                    </div>
                </div>
            </section>

            {/* Our Current Projects */}
            <section className='home-projects'>
                <div className='home-projects-header'>
                    <h1 ref={projectheaderRef} className={isVisible2 ? 'visible' : ''}>Our Current Projects</h1>
                </div>
                <ProjectCarousel></ProjectCarousel>
            </section>

            {/* Accreditations and Awards */}
            <section className='home-accreditation'>
                <div className='home-accreditation-content'>
                    {/* <img src='/images/home/Awards-strip-scaled.jpg' alt='' /> */}
                    <div className='home-accreditation-content-image'>
                        <div className='home-accreditation-content-image-left' data-direction="right" ref={el => AccreditationRefs.current[0] = el}>
                            <h1>Accreditations and Awards</h1>
                        </div>
                        <div className='home-accreditation-content-image-right' data-direction="left" ref={el => AccreditationRefs.current[1] = el}>
                            <a href='/accreditation-awards'>Click here →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Clients */}
            <section className='home-clients'>
                <div className='home-clients-header'>
                    <h1 ref={clientheaderRef} className={isVisible3 ? 'visible' : ''}>Our Clients</h1>
                </div>
                <div>
                    <ClientCarousel></ClientCarousel>
                </div>
            </section>
        </div>
    )
}

export default Home
