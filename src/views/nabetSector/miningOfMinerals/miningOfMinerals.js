import React from 'react';
import './miningOfMinerals.css';
import NABETSectorCarousel1 from '../nabetSectorCarousel1/nabetSectorCarousel1';

const MiningOfMinerals = () => {
    return (
        <div>
            <section className='miningOfMinerals'>
                <div className='miningOfMinerals-heading'>
                    <h1>Mining Of Minerals</h1>
                </div>
                <div className='miningOfMinerals-content'>
                    <div className='miningOfMinerals-content-left'>
                        <img src='/images/nabetSector/Mining-of-minerals.jpg' alt='' />
                    </div>
                    <div className='miningOfMinerals-content-right'>
                        <p>
                            Geological exploration and extraction of minerals disturbs the ecology and biodiversity of the area. Exploration of a virgin mine required the study of the site location and have to define the impact on the environment and social aspects. To achieve the target of less impact on our surroundings, the study of baseline data and prediction of impact is the basic duty of stakeholders. Submission and presentation of work for getting clearance from the central and state assessment authorities is the biggest milestone in this process. Post EC monitoring works such as compliance to the conditions stipulated in the EC & half-year monitoring reports have to be submitted periodically.
                        </p>
                        <p>
                            Ecomen has more than 30 years of experience in the field of consultancy services for mining and has successfully completed 100+ projects in 16 types of mines and 10 states like Orissa, Jharkhand, Meghalaya, Uttar Pradesh, Delhi, Punjab, Rajasthan, Madhya Pradesh, Karnataka, Telangana. Currently we are working on 10+ new mining projects, including Environmental Clearance works. We have a prominent network, expertise and laboratory capability in getting clearances across difficult environments and situations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='miningOfMinerals-services'>
                <div className='miningOfMinerals-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='miningOfMinerals-services-list'>
                    <div>
                        <img src='/images/services/forestServices/Forest-Clearance-1.jpg' alt='' />
                        <a href='/forest-clearance'>Forest Clearance(FC)</a>
                    </div>
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
            <section className='miningOfMinerals-projects'>
                <div className='miningOfMinerals-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='miningOfMinerals-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='miningOfMinerals-carousel'>
                <div>
                    <NABETSectorCarousel1></NABETSectorCarousel1>
                </div>
            </section>

            {/* Buttons */}
            <section className='miningOfMinerals-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default MiningOfMinerals