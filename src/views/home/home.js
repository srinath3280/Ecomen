import React from 'react';
import './home.css';
import HomeCarousel from './carousel/carousel';
import ProjectCarousel from './project-carousel/projectCarousel';
import ClientCarousel from './client-carousel/clientCarousel';

const Home = () => {

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
                        <button className="card-section-button">About us →</button>
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
                    <h1>Our Services Domains</h1>
                </div>
                <div className='home-services-cards'>
                    <div className='home-services-cards-1'>
                        <img src='/images/home/ourServices/Environment-Consulting-updated.jpg' alt='' />
                        <a href='/'>Environment <br /> Consulting</a>
                    </div>
                    <div className='home-services-cards-1'>
                        <img src='/images/home/ourServices/Enviroment-Monitoring.jpg' alt='' />
                        <a href='/'>Environment <br /> Monitoring</a>
                    </div>
                    <div className='home-services-cards-1'>
                        <img src='/images/home/ourServices/mining-services.png' alt='' />
                        <a href='/'>Mining <br /> Services</a>
                    </div>
                    <div className='home-services-cards-1'>
                        <img src='/images/home/ourServices/Ecomen-Services.jpg' alt='' />
                        <a href='/'>Forestry <br /> Services</a>
                    </div>
                    <div className='home-services-cards-1'>
                        <img src='/images/home/ourServices/Laboratory-Services-scaled.jpg' alt='' />
                        <a href='/'>Laboratory <br /> Services</a>
                    </div>
                </div>
            </section>

            {/* Our Current Projects */}
            <section className='home-projects'>
                <div className='home-projects-header'>
                    <h1>Our Current Projects</h1>
                </div>
                <ProjectCarousel></ProjectCarousel>
            </section>

            {/* Accreditations and Awards */}
            <section className='home-accreditation'>
                <div className='home-accreditation-content'>
                    {/* <img src='/images/home/Awards-strip-scaled.jpg' alt='' /> */}
                    <div className='home-accreditation-content-image'>
                        <div className='home-accreditation-content-image-left'>
                            <h1>Accreditations and Awards</h1>
                        </div>
                        <div className='home-accreditation-content-image-right'>
                            <a href='/'>Click here →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Clients */}
            <section className='home-clients'>
                <div className='home-clients-header'>
                    <h1>Our Clients</h1>
                </div>
                <div>
                    <ClientCarousel></ClientCarousel>
                </div>
            </section>
        </div>
    )
}

export default Home
