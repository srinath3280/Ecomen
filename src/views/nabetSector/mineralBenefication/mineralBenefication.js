import React from 'react';
import './mineralBenefication.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const MineralBenefication = () => {
    return (
        <div>
            <section className='mineralBenefication'>
                <div className='mineralBenefication-heading'>
                    <h1>Mineral Benefication</h1>
                </div>
                <div className='mineralBenefication-content'>
                    <div className='mineralBenefication-content-left'>
                        <img src='/images/nabetSector/Mineral-benefication.jpg' alt='' />
                    </div>
                    <div className='mineralBenefication-content-right'>
                        <p>
                            Mining of non-metallic and metallic mineral deposits produces raw minerals which need to be processed further by a specified method depending on the mineral and waste product (s) associated with it.
                            Environmental aspects are the elements of the facility’s activities that can impact environmental performance, that is, impact the environment or regulatory compliance status. By identifying environmental aspects, activities and associated impacts need to be controlled to achieve environmental performance objectives. More significant aspects require more significant controls, helping to manage environmental risk.
                        </p>
                    </div>
                </div>
                <div className='mineralBenefication-text'>
                    <p>
                        Ecomen has been getting environment clearance for mineral beneficiation industries. There are many environment monitoring projects being carried across different parts of India.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='mineralBenefication-services'>
                <div className='mineralBenefication-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='mineralBenefication-services-list'>
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
            <section className='mineralBenefication-projects'>
                <div className='mineralBenefication-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='mineralBenefication-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='mineralBenefication-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='mineralBenefication-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default MineralBenefication