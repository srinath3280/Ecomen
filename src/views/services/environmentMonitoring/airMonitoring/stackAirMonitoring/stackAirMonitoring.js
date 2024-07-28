import React from 'react';
import './stackAirMonitoring.css';

const StackAirMonitoring = () => {
    return (
        <div>
            <section className='stackAirMonitoring'>
                <div className='stackAirMonitoring-heading'>
                    <h1>Stack Monitoring</h1>
                </div>
                <div className='stackAirMonitoring-content'>
                    <div className='stackAirMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Stack-monitoring.jpg' alt='' />
                    </div>
                    <div className='stackAirMonitoring-content-right'>
                        <p>
                            Stacks are essentially large industrial chimneys designed to emit and disperse hot air, particulate matter, and pollutants into the atmosphere at such height that they do not constitute danger to surrounding life on the ground.
                        </p>
                        <p>
                            These stacks need to be monitored for emissions into the atmosphere, which is often referred to as the air monitoring of an emission point. Stacks from boilers and industrial processes will carry pollutants such as SOx, NOx, particles, solvents, other dusts and gases. These can have a detrimental effect on local air quality and for this reason such emissions are often regulated. Typically, this regulation requires measurement of the concentration of these pollutants on a regular basis, often referred to as periodic stack emission monitoring.
                        </p>
                        <p>
                            Ecomen has vast experience and facilities for measurement of Boiler, DG sets, Furnace and many other APCS (Air Pollution Control System).
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='stackAirMonitoring-study'>
                <div className='stackAirMonitoring-study-heading'>
                    <p>There are several types of stacks in use today, such as:</p>
                </div>
                <div className='stackAirMonitoring-study-list'>
                    <ul>
                        <li>
                            Boiler Stacks
                        </li>
                        <li>
                            Flue Gas Stacks
                        </li>
                        <li>
                            DG Set Stacks
                        </li>
                        <li>
                            Furnace Stacks
                        </li>
                        <li>
                            Chimneys
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='stackAirMonitoring-buttons'>
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

export default StackAirMonitoring