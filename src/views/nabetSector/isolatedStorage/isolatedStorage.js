import React from 'react';
import './isolatedStorage.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const IsolatedStorageHandlingofHazardousChemicals = () => {
    return (
        <div>
            <section className='isolatedStorage'>
                <div className='isolatedStorage-heading'>
                    <h1>Isolated Storage & Handling of Hazardous Chemicals</h1>
                </div>
                <div className='isolatedStorage-content'>
                    <div className='isolatedStorage-content-left'>
                        <img src='/images/nabetSector/Isolated-Storage.jpg' alt='' />
                    </div>
                    <div className='isolatedStorage-content-right'>
                        <p>
                            The isolated storage of hazardous chemicals calls for items to be isolated and stored according to guidelines specified on its container or packaging. Vapour recovery units should be installed to recover vapours. It is necessary to adopt safety norms while handling, storing and transporting hazardous materials. Risk assessment, on-site, off-site emergency plans and disaster management plans are necessary.
                        </p>
                        <p>
                            Sustainable development is built on three basic premises, i.e., economic growth, ecological balance and social progress. Economic growth achieved in a way that does not consider the environmental concerns will not be sustainable in the long run. Therefore, sustainable development needs careful integration of environmental, economic, and social needs in order to achieve both an increased standard of living in the short term, and a net gain or equilibrium among human, natural, and economic resources to support future generations in the long term.
                        </p>
                    </div>
                </div>
                <div className='isolatedStorage-text'>
                    <p>
                        Hazardous properties, as the name suggests, are those properties which can cause harm to people or the surroundings. The evaluation of the hazardous properties of a chemical substance helps in the identification of both physical hazards such as flammability, reactivity or health hazards.
                    </p>
                    <p>
                        Ecomen with its 30 years of experience in consultancy services, it can evaluate the hazardous & chemical substances required for environment clearance.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='isolatedStorage-services'>
                <div className='isolatedStorage-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='isolatedStorage-services-list'>
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
            <section className='isolatedStorage-projects'>
                <div className='isolatedStorage-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='isolatedStorage-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='isolatedStorage-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='isolatedStorage-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default IsolatedStorageHandlingofHazardousChemicals