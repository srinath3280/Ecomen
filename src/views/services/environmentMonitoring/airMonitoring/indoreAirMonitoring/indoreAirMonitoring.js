import React from 'react';
import './indoreAirMonitoring.css';

const IndoorAirMonitoring = () => {
    return (
        <div>
            <section className='indoorAirMonitoring'>
                <div className='indoorAirMonitoring-heading'>
                    <h1>Indoor Air Quality Monitoring</h1>
                </div>
                <div className='indoorAirMonitoring-content'>
                    <div className='indoorAirMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Indoor-air-monitoring.jpg' alt='' />
                    </div>
                    <div className='indoorAirMonitoring-content-right'>
                        <p>
                            Indoor Air Quality (IAQ) refers to the air quality within & around buildings and structures, especially as it relates to the health and comfort of building occupants. Understanding and controlling common indoor pollutants can help reduce health risks. Health effects from indoor air pollutants may be experienced soon after exposure or, possibly, after many years later.
                        </p>
                        <p>
                            Indoor air quality can be affected by gases (including carbon monoxide, radon, volatile organic compounds), particulates, microbial contaminants (mould, bacteria), or any mass or energy that can result in poor air quality and could induce adverse health conditions in occupants.
                        </p>
                        <p>
                            We need to study how much of any given source emits pollutants and how hazardous these emissions are.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='indoorAirMonitoring-study'>
                <div className='indoorAirMonitoring-study-text'>
                    <p>
                        Many factors contribute to indoor pollutants such as the age of the structure and whether it is properly maintained. Some building materials, furnishings and products such as air fresheners can release pollutants more or less continuously. Unvented or malfunctioning appliances or improperly used products can release higher and sometimes dangerous levels of pollutants.
                    </p>
                    <p>
                        Ecomen has facilities for measurement of Indoor Air Quality parameters PM, PM10, SO2, NO2, Humidity, Temperature etc.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='indoorAirMonitoring-buttons'>
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

export default IndoorAirMonitoring