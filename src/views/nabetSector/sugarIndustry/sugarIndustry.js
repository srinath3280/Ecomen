import React from 'react';
import './sugarIndustry.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const SugarIndustry = () => {
    return (
        <div>
            <section className='sugarIndustry'>
                <div className='sugarIndustry-heading'>
                    <h1>Sugar Industry</h1>
                </div>
                <div className='sugarIndustry-content'>
                    <div className='sugarIndustry-content-left'>
                        <img src='/images/nabetSector/Sugar-Industry.jpg' alt='' />
                    </div>
                    <div className='sugarIndustry-content-right'>
                        <p>
                            India is the second-largest producer of sugar. There are over 530 sugar mills in the country, and a significant chunk of sugar production (80%) happens in UP, Maharashtra, and Karnataka.
                        </p>
                        <p>
                            Sugar industries generate large amounts of pollution load, particularly in terms of suspended solids, organic matter, press mud, bagasse pith and bagasse fly ash. The change of water chemistry is the main associated environmental impact of discharging the sugar mill’s effluent on an open water body. Wastewater from sugar mills with its high Biological Oxygen Demand (BOD) and Chemical Oxygen Demand (COD) rapidly deplete available oxygen supply when discharged into water bodies,
                        </p>
                        <p>
                            Discharge of water with a high Total Dissolved Solids (TDS) level would have an adverse impact on aquatic life, render the receiving water unfit for drinking and domestic purposes, reduce crop yields if used for irrigation, and exacerbate corrosion in water systems and pipes.
                        </p>
                    </div>
                </div>
                <div className='sugarIndustry-text'>
                    <p>
                        To achieve the target of less impact to our surroundings, the study of baseline data and prediction of impact and provision for more eco-friendly mitigation measures is the basic duty of stakeholders. Submission and presentation of work and getting clearance from the central and state assessment Authorities is the biggest milestone in this process. Post EC monitoring works such as compliance to the conditions stipulated in the EC & half-yearly monitoring reports has to be submitted periodically. Ecomen has more than 30 years of experience and can provide environment clearance consultancy services.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='sugarIndustry-services'>
                <div className='sugarIndustry-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='sugarIndustry-services-list'>
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
            <section className='sugarIndustry-projects'>
                <div className='sugarIndustry-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='sugarIndustry-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='sugarIndustry-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='sugarIndustry-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default SugarIndustry