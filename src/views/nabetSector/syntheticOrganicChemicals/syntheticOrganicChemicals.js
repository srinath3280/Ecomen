import React from 'react';
import './syntheticOrganicChemicals.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const SyntheticOrganicChemicalsIndustry = () => {
    return (
        <div>
            <section className='syntheticOrganicChemicals'>
                <div className='syntheticOrganicChemicals-heading'>
                    <h1>Synthetic Organic Chemicals Industry</h1>
                </div>
                <div className='syntheticOrganicChemicals-content'>
                    <div className='syntheticOrganicChemicals-content-left'>
                        <img src='/images/nabetSector/Synthetic-Organic-Chemicals.jpg' alt='' />
                    </div>
                    <div className='syntheticOrganicChemicals-content-right'>
                        <p>
                            This industry manufactures basic organic chemicals (other than petrochemicals), industrial gases and synthetic dyes and pigments. These products are predominantly intermediates that are used as raw material inputs by other manufacturing industries in the production of downstream products.
                        </p>
                        <p>
                            Chemical industry is recognized as one of the most powerful sources of environmental pollution. This can involve aspects of climate change, conservation, biodiversity, groundwater and soil contamination, use of natural resources, waste management, air pollution, and noise pollution. The main purpose is to provide clear and concise information on EIA to all the stakeholders, i.e., the project proponent, the consultant, the reviewer, and the public.
                        </p>
                    </div>
                </div>
                <div className='syntheticOrganicChemicals-text'>
                    <p>
                        Ecomen has more than 30 years of experience in the field of consultancy services, we have successfully completed projects related to these various industries. We have a prominent network, expertise and laboratory capability in getting clearances across difficult environments and situations.
                    </p>
                </div>
            </section>

            {/* STUDY */}
            <section className='syntheticOrganicChemicals-study'>
                <div className='syntheticOrganicChemicals-study-heading'>
                    <p>
                        The subsectors of the synthetic organic chemical sector is very exhaustive, to name few
                    </p>
                </div>
                <div className='syntheticOrganicChemicals-study-list'>
                    <ul>
                        <li>
                            Dyes & Dye
                        </li>
                        <li>
                            Pharmaceuticals
                        </li>
                        <li>
                            Soaps and Detergents
                        </li>
                        <li>
                            Synthetic Rubbers
                        </li>
                        <li>
                            Flavors and Perfumes
                        </li>
                        <li>
                            Biotechnology products
                        </li>
                        <li>
                            Biocides (pesticides, herbicides, fungicides)
                        </li>
                        <li>
                            Adhesives
                        </li>
                        <li>
                            Paints and Coatings
                        </li>
                    </ul>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='syntheticOrganicChemicals-services'>
                <div className='syntheticOrganicChemicals-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='syntheticOrganicChemicals-services-list'>
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
            <section className='syntheticOrganicChemicals-projects'>
                <div className='syntheticOrganicChemicals-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='syntheticOrganicChemicals-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='syntheticOrganicChemicals-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='syntheticOrganicChemicals-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default SyntheticOrganicChemicalsIndustry