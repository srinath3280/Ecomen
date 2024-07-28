import React from 'react';
import './cementPlants.css';
import NABETSectorCarousel2 from '../nabetSectorCarousel2/nabetSectorCarousel2';

const CementPlants = () => {
    return (
        <div>
            <section className='cementPlants'>
                <div className='cementPlants-heading'>
                    <h1>Cement Plants</h1>
                </div>
                <div className='cementPlants-content'>
                    <div className='cementPlants-content-left'>
                        <img src='/images/nabetSector/Cement-Plants.jpg' alt='' />
                    </div>
                    <div className='cementPlants-content-right'>
                        <p>
                            Cement is the basic material for any construction. The Indian cement industry is the second largest in the world. It has witnessed an unprecedented growth as a sequel to the liberalization policies in India. It has a large potential to grow in the future. The cement  production industry is one of the major reasons for the global warming effect. This shows the importance of assessing the impacts and the requirement of diminution.  Ecomen has executed multiple projects in getting the environment clearance with support of our experts, laboratory and experience in this field. We have executed more than 50 projects around environment monitoring in the cement industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='cementPlants-services'>
                <div className='cementPlants-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='cementPlants-services-list'>
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
            <section className='cementPlants-projects'>
                <div className='cementPlants-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='cementPlants-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='cementPlants-carousel'>
                <div>
                    <NABETSectorCarousel2></NABETSectorCarousel2>
                </div>
            </section>

            {/* Buttons */}
            <section className='cementPlants-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default CementPlants