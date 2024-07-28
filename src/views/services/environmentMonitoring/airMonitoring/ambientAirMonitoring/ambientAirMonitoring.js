import React from 'react';
import './ambientAirMonitoring.css';

const AmbientAirMonitoring = () => {
    return (
        <div>
            <section className='ambientAirMonitoring'>
                <div className='ambientAirMonitoring-heading'>
                    <h1>Ambient Air Monitoring</h1>
                </div>
                <div className='ambientAirMonitoring-content'>
                    <div className='ambientAirMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Ambient-air-monitoring.jpg' alt='' />
                    </div>
                    <div className='ambientAirMonitoring-content-right'>
                        <p>
                            Ambient air monitoring is the systematic, long-term assessment of pollutant levels by measuring the quantity and types of certain pollutants in the surrounding, outdoor air.
                        </p>
                        <p>
                            Monitoring air for sulfur dioxide (SO2), carbon monoxide (CO), nitrogen dioxide (NO2), ozone (O3), and total suspended particles (TSP). It determines the extent of pollution in the air, provides information on air quality and supports the implementation of clean air strategies among others. The locations for monitoring stations depend on the purpose of the monitoring.
                        </p>
                        <p>
                            Ecomen has vast experience, equipment and facilities in Ambient Air Quality Monitoring for parameters like PM10, PM2.5, SO2, NO2, CO, As, Ni, Pb and many others.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='ambientAirMonitoring-study'>
                <div className='ambientAirMonitoring-study-heading'>
                    <p>Effective air quality management includes :</p>
                </div>
                <div className='ambientAirMonitoring-study-list'>
                    <ul>
                        <li>
                            Assess the extent of pollution
                        </li>
                        <li>
                            Support implementation of air quality goals or standards
                        </li>
                        <li>
                            Provide information on air quality trends
                        </li>
                        <li>
                            Provide air pollution data to the monitoring committee in a timely manner
                        </li>
                        <li>
                            Evaluate the effectiveness of emissions control strategies
                        </li>
                        <li>
                            Provide data for the evaluation of air quality models
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='ambientAirMonitoring-buttons'>
                <div>
                    <a href='/air-monitoring'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default AmbientAirMonitoring