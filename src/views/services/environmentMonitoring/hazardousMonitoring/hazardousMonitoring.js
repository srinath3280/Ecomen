import React from 'react';
import './hazardousMonitoring.css';

const HazardousMonitoring = () => {
    return (
        <div>
            <section className='hazardousMonitoring'>
                <div className='hazardousMonitoring-heading'>
                    <h1>Hazardous Waste Monitoring</h1>
                </div>
                <div className='hazardousMonitoring-content'>
                    <div className='hazardousMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/hazardous-waste-monitoring.jpg' alt='' />
                    </div>
                    <div className='hazardousMonitoring-content-right'>
                        <p>
                            Environmental compliance is no simple matter, regardless of how much waste a facility may generate. As requirements evolve and regulatory bodies increase their focus on enforcement, adhering to all applicable regulations can seem like a blur of identification numbers, permit applications and mandatory reports. Despite this complexity, any business that fails to manage compliance and requirements can be exposed to fines and violations that have very real implications for brand perception and financial stability.
                        </p>
                        <p>
                            The ever-growing industrialisation and population growth generates heterogeneous solid waste components. So the sampling and analysis of this waste is very important to find the better handling of the waste.
                        </p>
                        <p>
                            Every firm generates waste, and we work with our clients to ensure compliance, reduce waste and maximize recycling. Ecomen’s Waste Management Experts can help in waste determination, permitting, waste disposition and overall management of client’s solid, hazardous, biological, radiological, and universal waste program.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='hazardousMonitoring-study'>
                <div className='hazardousMonitoring-study-heading'>
                    <p>Ecomen services include:</p>
                </div>
                <div className='hazardousMonitoring-study-list'>
                    <ul>
                        <li>
                            Obtaining statutory permits
                        </li>
                        <li>
                            Zero waste / discharge assessments
                        </li>
                        <li>
                            Waste management reporting
                        </li>
                        <li>
                            Hazardous waste determination
                        </li>
                        <li>
                            Development of effective recycling programs
                        </li>
                        <li>
                            Determining disposal options for waste mixtures
                        </li>
                        <li>
                            Waste Minimization and Pollution Prevention Program development
                        </li>
                        <li>
                            Battery Management and recycling programs
                        </li>
                        <li>
                            Programmatic management of waste including biomedical, solid, radiation, universal and hazardous waste
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='hazardousMonitoring-buttons'>
                <div>
                    <a href='/environment-monitoring'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default HazardousMonitoring
