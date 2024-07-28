import React from 'react';
import './waterMonitoring.css';

const WaterMonitoring = () => {
    return (
        <div>
            <section className='waterMonitoring'>
                <div className='waterMonitoring-heading'>
                    <h1>Water Monitoring</h1>
                </div>
                <div className='waterMonitoring-content'>
                    <div className='waterMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/waterMonitoring/Water-monitoring.jpg' alt='' />
                    </div>
                    <div className='waterMonitoring-content-right'>
                        <p>
                            Understanding the physical and chemical status of rivers, lakes and aquifers plays a key role in securing the future quality of our natural water environment. It is therefore paramount that these resources are protected from pollution.
                        </p>
                        <p>
                            Industries are becoming more concerned with not just monitoring water usage but also the levels of pollutants that may enter waterways as a result of their processes.
                        </p>
                        <p>
                            The delivery of water quality monitoring programmes is a complex and specialised field demanding experience, quality and customer understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='waterMonitoring-study'>
                <div className='waterMonitoring-study-heading'>
                    <p>Regulations require monitoring of:</p>
                </div>
                <div className='waterMonitoring-study-list'>
                    <ul>
                        <li>
                            Environmental health of ecosystems, fauna and flora
                        </li>
                        <li>
                            Human health and to prevent disease
                        </li>
                        <li>
                            Water balance to monitor rainfall, evaporation, human usage
                        </li>
                        <li>
                            Industry process quality and discharge
                        </li>
                    </ul>
                </div>
            </section>

            {/* Our Water Sampling Capabilities Focus On */}
            <section className='waterMonitoring-types'>
                <div className='waterMonitoring-types-heading'>
                    <h1>Our Water Sampling Capabilities Focus On</h1>
                </div>
                <div className='waterMonitoring-types-list'>
                    <div>
                        <img src='/images/services/environmentMonitoring/waterMonitoring/Ground-Water.jpg' alt='' />
                        <span>Ground Water Analysis</span>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/waterMonitoring/surface-water.jpg' alt='' />
                        <span>Surface Water Analysis</span>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/waterMonitoring/portable-water.jpg' alt='' />
                        <span>Portable Water Analysis</span>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/waterMonitoring/waste-water.jpg' alt='' />
                        <span>Waste Water Analysis</span>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='waterMonitoring-study'>
                <div className='waterMonitoring-study-heading'>
                    <p>Ecomen Laboratory (accredited by NABL) conducts water testing and analysis which includes:</p>
                </div>
                <div className='waterMonitoring-study-list'>
                    <ul>
                        <li>
                            <strong>Physical Tests For Water Quality</strong><br />
                            These indicate properties like Colour,
                            Turbidity, Odour and Taste.
                        </li>
                        <li>
                            <strong>Chemical Tests for Water Quality</strong><br />
                            These determine the amount of mineral and organic substances that affect the quality of water like : pH, BOD, DO, Ca, Mg, Cl are some of the parameters tested.
                        </li>
                        <li>
                            <strong>Bacteriological Tests for Water Quality</strong><br />
                            These indicate the presence of bacteria.
                        </li>
                    </ul>
                </div>
            </section>

            {/* STUDY */}
            <section className='waterMonitoring-study'>
                <div className='waterMonitoring-study-heading'>
                    <p>Ecomen has implemented multiple water monitoring projects for:</p>
                </div>
                <div className='waterMonitoring-study-list'>
                    <ul>
                        <li>
                            Environmental Impact Assessment
                        </li>
                        <li>
                            Municipalities/ Local Government
                        </li>
                        <li>
                            Industrial and company water purity
                        </li>
                        <li>
                            River system self purification
                        </li>
                        <li>
                            Landfill contamination levels
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='waterMonitoring-buttons'>
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

export default WaterMonitoring
