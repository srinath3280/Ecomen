import React from 'react';
import './townshipsArea.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const TownshipsAreaDevelopmentProjects = () => {
    return (
        <div>
            <section className='townshipsArea'>
                <div className='townshipsArea-heading'>
                    <h1>Townships & Area development Projects</h1>
                </div>
                <div className='townshipsArea-content'>
                    <div className='townshipsArea-content-left'>
                        <img src='/images/nabetSector/Townships.jpg' alt='' />
                    </div>
                    <div className='townshipsArea-content-right'>
                        <p>
                            Cities of emerging economies are the engines of growth because if villages cater to agriculture and allied activities, then cities to the industry and service sector. The influx of FDI, expansion of markets, international assistance and aid, globalization, etc. all contribute to the rapid urbanisation. Townships are self-sufficient, self-managed and self-governed units, with well-defined and well-designed residential, commercial, retail and recreational areas; has integrated waste management systems, water resource management systems, and other amenities in place thus reducing the pressure on the local governing bodies and the city resources.
                        </p>
                        <p>
                            This rapid growth has a significant impact on the environment, resource consumption (water demand and energy demand) and pollution potential (solid and liquid waste generation as well as air pollution).
                        </p>
                    </div>
                </div>
                <div className='townshipsArea-text'>
                    <p>
                        Ecomen conducts the study of land use pattern, habitation, cropping pattern, forest cover, environmentally sensitive places etc., employing remote sensing techniques and ground truth and also through secondary data sources. Geographical latitude and microclimatic factors such as solar access and wind loads have a major impact.
                    </p>
                </div>
            </section>

            {/* STUDY */}
            <section className='townshipsArea-study'>
                <div className='townshipsArea-study-heading'>
                    <p>
                        The following parameters will be analyzed as part of baseline data collection for Environment Impact Assessment
                    </p>
                </div>
                <div className='townshipsArea-study-list'>
                    <ul>
                        <li>
                            Land Environment
                        </li>
                        <li>
                            Air Environment
                        </li>
                        <li>
                            Biological Environment
                        </li>
                        <li>
                            Water Environment
                        </li>
                        <li>
                            Noise Environment
                        </li>
                        <li>
                            Socio Economic Environment
                        </li>
                    </ul>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='townshipsArea-services'>
                <div className='townshipsArea-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='townshipsArea-services-list'>
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
            <section className='townshipsArea-projects'>
                <div className='townshipsArea-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='townshipsArea-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='townshipsArea-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='townshipsArea-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default TownshipsAreaDevelopmentProjects