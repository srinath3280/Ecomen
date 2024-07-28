import React from 'react';
import './airMonitoring.css';

const AirMonitoring = () => {
    return (
        <div>
            <section className='airMonitoring'>
                <div className='airMonitoring-heading'>
                    <h1>Air Monitoring</h1>
                </div>
                <div className='airMonitoring-content'>
                    <div className='airMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Air-monitoring.jpg' alt='' />
                    </div>
                    <div className='airMonitoring-content-right'>
                        <p>
                            Air pollutants are known for their adverse effects on human health and ecosystems. Some of these pollutants also erode technical infrastructure and cultural monuments. Emissions of nitrogen oxides and non-methane volatile organic compounds are the main causes of the formation of ground-level ozone, which has adverse effects on human health and ecosystems.
                        </p>
                        <p>
                            Air pollutants originate from sources such as vehicle emissions, refineries, power plants, industrial and laboratory processes. Pollutants include sulfur dioxide, nitrogen dioxide, carbon monoxide and volatile organic compounds.
                        </p>
                        <p>
                            Air pollution is a growing concern in developing countries like us. The MoEF&CC has even introduced air pollution standards expected from all its member states to be met.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='airMonitoring-study'>
                <div className='airMonitoring-study-heading'>
                    <p>Ecomen offer services for:</p>
                </div>
                <div className='airMonitoring-study-list'>
                    <ul>
                        <li>
                            Air quality environmental impact assessment (EIA)
                        </li>
                        <li>
                            Local air quality management (LAQM) review and assessment services.
                        </li>
                        <li>
                            Emission Inventories
                        </li>
                        <li>
                            Dispersion modelling assessments for industrial emissions.
                        </li>
                        <li>
                            Construction environmental plans (CEMPS)
                        </li>
                        <li>
                            Dust management plans
                        </li>
                        <li>
                            Emission monitoring for compliance
                        </li>
                    </ul>
                </div>
            </section>

            {/* Types of Air Monitoring */}
            <section className='airMonitoring-types'>
                <div className='airMonitoring-types-heading'>
                    <h1>Types of Air Monitoring</h1>
                </div>
                <div className='airMonitoring-types-list'>
                    <div>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Ambient-air-monitoring.jpg' alt='' />
                        <a href='/ambient-air-monitoring'>Ambient Air Monitoring</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Indoor-air-monitoring.jpg' alt='' />
                        <a href='/indoor-air-quality-monitoring'>Indoor Air Quality Monitoring</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Stack-monitoring.jpg' alt='' />
                        <a href='/stack-monitoring'>Stack Monitoring</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Fugitive-air-monitoring.jpg' alt='' />
                        <a href='/fugitive-air-monitoring'>Fugitive Air Monitoring</a>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className='airMonitoring-buttons'>
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

export default AirMonitoring
