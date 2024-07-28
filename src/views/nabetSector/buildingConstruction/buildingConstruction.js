import React from 'react';
import './buildingConstruction.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const BuildingConstruction = () => {
    return (
        <div>
            <section className='buildingConstruction'>
                <div className='buildingConstruction-heading'>
                    <h1>Building & Construction</h1>
                </div>
                <div className='buildingConstruction-content'>
                    <div className='buildingConstruction-content-left'>
                        <img src='/images/nabetSector/Building-and-Construction.jpg' alt='' />
                    </div>
                    <div className='buildingConstruction-content-right'>
                        <p>
                            Infrastructure resembles the economic status of a country. So, the ever shining and growing industry in the world, especially in the developing countries, is the building and construction sector. The Construction sector disturbs the environment of the locality. Here comes the concept of impact assessment, and we are well equipped and established in getting clearances with at least ease and flexibility. We are ready to accept the new challenges that we have not gone through.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='buildingConstruction-services'>
                <div className='buildingConstruction-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='buildingConstruction-services-list'>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Impact-Assessment.jpg' alt='' />
                        <a href='/environment-impact-assessment'>Environment Impact Assessment(EIA)</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Audit-1.jpg' alt='' />
                        <a href='/environment-audit'>Environment Audit(EA)</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Clearance.jpg' alt='' />
                        <a href='/environment-clearance'>Environment Clearance(EC)</a>
                    </div>
                    <div>
                        <img src='/images/services/Enviroment-Monitoring.jpg' alt='' />
                        <a href='/environment-monitoring'>Environment Monitoring(EM)</a>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className='buildingConstruction-projects'>
                <div className='buildingConstruction-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='buildingConstruction-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='buildingConstruction-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='buildingConstruction-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default BuildingConstruction