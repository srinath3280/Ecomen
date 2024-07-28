import React from 'react';
import './metallurgicalIndustries.css';
// import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const MetallurgicalIndustries = () => {
    return (
        <div>
            <section className='metallurgicalIndustries'>
                <div className='metallurgicalIndustries-heading'>
                    <h1>Metallurgical Industries (ferrous & non-ferrous)</h1>
                </div>
                <div className='metallurgicalIndustries-content'>
                    <div className='metallurgicalIndustries-content-left'>
                        <img src='/images/nabetSector/mettalurgical.jpg' alt='' />
                    </div>
                    <div className='metallurgicalIndustries-content-right'>
                        <p>
                            The ferrous and non-ferrous metals industry is a key sector in the Indian economy as it meets the requirements of a wide range of key industries including engineering, electrical and electronics, infrastructure, automobile and automobile components, packaging etc. As a part of the materials cycle, ores and fossil fuels are extracted from the earth, processed, and converted into metals, chemicals, and other processed materials. Wastes are generated which include gases, dusts, sludge or solutions, ashes, and a variety of solid materials such as overburden, waste rocks, tailings, and slag. They must be disposed of at low cost with a minimum of environmental degradation. To achieve the target of less impact on our surroundings, the study of baseline data and prediction of impact and provision for more eco-friendly mitigation measures is the basic duty of stakeholders. Submission and presentation of work and getting clearance from the central and state assessment authorities is the biggest milestone in this process. Post EC monitoring works such as compliance to the conditions stipulated in the EC & half-year monitoring reports has to be submitted periodically.
                        </p>
                    </div>
                </div>
                <div className='metallurgicalIndustries-text'>
                    <p>
                        Ecomen has more than 30 years of experience in the field of consultancy services, we have successfully completed projects across Steel, Aluminum and Copper Industries. We have a prominent network, expertise and laboratory capability in getting clearances across difficult environments and situations.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='metallurgicalIndustries-services'>
                <div className='metallurgicalIndustries-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='metallurgicalIndustries-services-list'>
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
            {/* <section className='metallurgicalIndustries-projects'>
                <div className='metallurgicalIndustries-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/'>Click Here</a>
                    </div>
                </div>
                <div className='metallurgicalIndustries-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/'>Click Here</a>
                    </div>
                </div>
            </section> */}

            {/* Carousel */}
            {/* <section className='metallurgicalIndustries-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section> */}

            {/* Buttons */}
            <section className='metallurgicalIndustries-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default MetallurgicalIndustries