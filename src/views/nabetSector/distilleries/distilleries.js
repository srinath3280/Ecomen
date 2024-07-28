import React from 'react';
import './distilleries.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const Distilleries = () => {
    return (
        <div>
            <section className='distilleries'>
                <div className='distilleries-heading'>
                    <h1>Distilleries</h1>
                </div>
                <div className='distilleries-content'>
                    <div className='distilleries-content-left'>
                        <img src='/images/nabetSector/Distilleries.jpg' alt='' />
                    </div>
                    <div className='distilleries-content-right'>
                        <p>
                            India is a multicultural region where spirits are very much prevalent on occasions. The significant development in the economy and drastic change in the lifestyle are the key drivers which have led the market growth more enormously. Most of the Indian distilleries use sugarcane molasses as raw material. The technique of fermentation, distillation and blending of alcoholic beverages was developed in India on the lines of practices adopted overseas, particularly in Europe.
                        </p>
                        <p>
                            Distilleries are one of the most polluting industries as 88% of its raw materials are converted into waste and discharged into the water bodies, causing water pollution. The distillery ranks as the top industry among the list of 17 heavily polluting industries identified by the Ministry of Environment & Forests, Govt. Of India.
                        </p>
                    </div>
                </div>
                <div className='distilleries-text'>
                    <p>
                        Distillery industries discharge a huge volume of dark-colored wastewater. This dark-colored wastewater contains very high biological oxygen demand, chemical oxygen demand, total solids, sulfate, phosphate, phenolics and various toxic metals. Distillery wastewater also contains a mixture of organic and inorganic pollutants.
                    </p>
                    <p>
                        Ecomen has more than 30 years of experience in the field of consultancy services, we have successfully completed projects related to these industries. We have a prominent network, expertise and laboratory capability in getting clearances across difficult environments and situations.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='distilleries-services'>
                <div className='distilleries-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='distilleries-services-list'>
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
            <section className='distilleries-projects'>
                <div className='distilleries-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='distilleries-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='distilleries-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='distilleries-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default Distilleries