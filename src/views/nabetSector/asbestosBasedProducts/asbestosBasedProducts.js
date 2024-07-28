import React from 'react';
import './asbestosBasedProducts.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const AsbestosMiningAsbestosBasedProducts = () => {
    return (
        <div>
            <section className='asbestosBasedProducts'>
                <div className='asbestosBasedProducts-heading'>
                    <h1>Asbestos Mining & Asbestos Based Products</h1>
                </div>
                <div className='asbestosBasedProducts-content'>
                    <div className='asbestosBasedProducts-content-left'>
                        <img src='/images/nabetSector/Asbestos.jpg' alt='' />
                    </div>
                    <div className='asbestosBasedProducts-content-right'>
                        <p>
                            Asbestos, a name that embraces a number of fibrous mineral silicates, has been used for thousands of years because of its resistance to combustion. Yet, research has shown that even though asbestos has been credited with saving lives, its social utility may be outweighed by its deadly health effects. Asbestos milling and products manufacturing facilities have significant risk and adverse health effects resulting from hazardous air pollutants involved in this process. The environment impact assessment focuses on assessing occupational health risks associated with mining asbestos, with special emphasis on differentiating between the health risks of different types and lengths of asbestos fibers. Our team conduct study on the impacts and suggest the mitigations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='asbestosBasedProducts-services'>
                <div className='asbestosBasedProducts-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='asbestosBasedProducts-services-list'>
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
            <section className='asbestosBasedProducts-projects'>
                <div className='asbestosBasedProducts-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='asbestosBasedProducts-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='asbestosBasedProducts-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='asbestosBasedProducts-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default AsbestosMiningAsbestosBasedProducts