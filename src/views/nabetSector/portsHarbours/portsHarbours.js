import React from 'react';
import './portsHarbours.css';
import NABETSectorCarousel3 from '../nabetSectorCarousel3/nabetSectorCarousel3';

const PortsHarbours = () => {
    return (
        <div>
            <section className='portsHarbours'>
                <div className='portsHarbours-heading'>
                    <h1>Ports, Harbours, Break Waters & Dredging</h1>
                </div>
                <div className='portsHarbours-content'>
                    <div className='portsHarbours-content-left'>
                        <img src='/images/nabetSector/Ports-and-harbours.jpg' alt='' />
                    </div>
                    <div className='portsHarbours-content-right'>
                        <p>
                            Ports along the 7,500-odd kilometer long peninsular coastline of India have suddenly become the cynosure of investor and public policy attention in India. Major technological changes, especially the containerization of cargo and the development of larger and deeper specialised vessels have revolutionised the seaport sector.
                        </p>
                        <p>
                            Developments of major/minor ports and fishery harbours consist of the construction of coastal structures like breakwaters, jetties, groynes and reclamation bunds. Developments of the ports also involve the dredging and disposal activities to maintain the required depths for navigation. These coastal structures and the dredging activities interfere in the coastal processes of the region. Modifications in the coastal processes have a large impact on the coastline. Major morphological impact is felt in the coastal region having a high rate of longshore littoral drift. Accumulation of sediments on the updrift side and erosion of the downdrift side is inevitable in these regions. Sand bypassing is one of the best solutions to mitigate this problem.
                        </p>
                    </div>
                </div>
                <div className='portsHarbours-text'>
                    <p>
                        The potential adverse effects of port development include water pollution, contamination of bottom sediments, loss of bottom habitat, damage to marine ecology and fisheries, beach erosion, current pattern changes, waste disposal, oil leakage and spillage, hazardous material emissions, air pollution, noise, vibration, light and visual pollution. Aside from the environmental impacts on communities, ports are responsible for several direct and indirect social impacts as well.
                    </p>
                    <p>
                        Ecomen with its 30 years of experience of consultancy services can evaluate the hazardous & chemical substances required for environment clearance.
                    </p>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='portsHarbours-services'>
                <div className='portsHarbours-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='portsHarbours-services-list'>
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
            <section className='portsHarbours-projects'>
                <div className='portsHarbours-projects-completed'>
                    <div>
                        <h3>Successfully Completed Projects</h3>
                        <a href='/completed-projects'>Click Here</a>
                    </div>
                </div>
                <div className='portsHarbours-projects-ongoing'>
                    <div>
                        <h3>On-going Projects</h3>
                        <a href='/ongoing-projects'>Click Here</a>
                    </div>
                </div>
            </section>

            {/* Carousel */}
            <section className='portsHarbours-carousel'>
                <div>
                    <NABETSectorCarousel3></NABETSectorCarousel3>
                </div>
            </section>

            {/* Buttons */}
            <section className='portsHarbours-buttons'>
                <div>
                    <a href='/service-sectors'>NABET Sector</a>
                </div>
            </section>
        </div>
    )
}

export default PortsHarbours