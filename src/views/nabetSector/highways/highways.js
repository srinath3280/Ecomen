import React from 'react';
import './highways.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const Highways = () => {
    return (
        <div>
            <section className='highways'>
                <div className='highways-heading'>
                    <h1>Highways</h1>
                </div>
                <div className='highways-content'>
                    <div className='highways-content-left'>
                        <img src='/images/nabetSector/highways.jpg' alt='' />
                    </div>
                    <div className='highways-content-right'>
                        <p>
                            India has the second-largest road network in the world, spanning a total of 5.89 million kilometres (kms). The road network transports 64.5% of all goods in the country and 90% of India’s total passenger traffic uses the road network to commute. Road transportation has gradually increased over the years with improvement in connectivity between cities, towns and villages in the country. Government is giving utmost priority to the development of infrastructure and has set a target of road construction worth Rs15 lakh crores in next two years.
                        </p>
                        <p>
                            Roads infrastructure aﬀects both biotic and the abiotic components of ecosystem by changing the dynamics of populations of plants and animals, altering ﬂows of materials in the landscape, introducing exotic elements, and changing levels of available resources, such as water, light and nutrients.
                        </p>
                    </div>
                </div>
                <div className='highways-text'>
                    <p>
                        The three most damaging effects of road construction and management are noise, dust and vibrations. Noise disturbances may cause irritation as well as agitation and stress to livestock. Vibrations disturb people close to roads, but they may also cause damage to buildings and sensitive equipment. Dust is created during the construction of gravel roads and unbound aggregate layers. The evaluation of ecological impacts has traditionally been limited to the consideration of individual species, their immediate habitats, and general natural resource categories such as water and air quality.
                    </p>
                    <p>
                        Ecomen with its 30 years of experience of consultancy services can evaluate the impact of Highways surroundings required for environment clearance.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='highways-services'>
                <div className='highways-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='highways-services-list'>
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
            <section className='highways-projects'>
                <div className='highways-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='highways-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='highways-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='highways-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default Highways