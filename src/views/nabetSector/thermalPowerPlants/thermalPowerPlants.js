import React from 'react';
import './thermalPowerPlants.css';
import NABETSectorCarousel2 from '../nabetSectorCarousel2/nabetSectorCarousel2';

const ThermalPowerPlants = () => {
    return (
        <div>
            <section className='thermalPowerPlants'>
                <div className='thermalPowerPlants-heading'>
                    <h1>Thermal Power Plants</h1>
                </div>
                <div className='thermalPowerPlants-content'>
                    <div className='thermalPowerPlants-content-left'>
                        <img src='/images/nabetSector/Thermal-power-plants.jpg' alt='' />
                    </div>
                    <div className='thermalPowerPlants-content-right'>
                        <p>
                            The backbone of any economy is the power sector along with the mining. Coal is the major and basic source of power generation in developing countries like us. But the emissions and effects of thermal power generation are inevitable though a lot of research is going on.
                        </p>
                        <p>
                            For new power plants establishment or any capacity extension of existing plants, would require Environment Clearance and Environment Impact Assessment done so that Environmental, Social and Economic factors are studied and presented.
                        </p>
                        <p>
                            Ecomen has team of coordinators and experts who are experienced to get the clearance at the earliest.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='thermalPowerPlants-services'>
                <div className='thermalPowerPlants-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='thermalPowerPlants-services-list'>
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
            <section className='thermalPowerPlants-projects'>
                <div className='thermalPowerPlants-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='thermalPowerPlants-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='thermalPowerPlants-carousel'>
                <div>
                    <NABETSectorCarousel2></NABETSectorCarousel2>
                </div>
            </section>

            {/* Buttons */}
            <section className='thermalPowerPlants-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default ThermalPowerPlants