import React from 'react';
import './luxMonitoring.css';

const LuxMonitoring = () => {
    return (
        <div>
            <section className='luxMonitoring'>
                <div className='luxMonitoring-heading'>
                    <h1>Lux Monitoring</h1>
                </div>
                <div className='luxMonitoring-content'>
                    <div className='luxMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/Lux-monitoring.jpg' alt='' />
                    </div>
                    <div className='luxMonitoring-content-right'>
                        <p>
                            The illumination Survey or Light Assessment or Lux Level Monitoring is conducted to identify either too bright light and glare, or low or flickering light to avoid potential detrimental effect. Subsequently risk assessment is performed to improve employees’ safety. Adequate and proper lighting has a great impact on performance and efficiency of the employees at the workplace.
                        </p>
                        <p>
                            As the lighting quotient is directly linked with the visual environment and allows the workforce to see, move and perform tasks efficiently and safely, it is integral to the conducive environment at the workplace.
                        </p>
                        <p>
                            Illuminance is a common parameter while studying Illumination Measurement. It defines or measures the amount of light falling on the unit surface area of the workplace, and its unit is lux (lx). It is used to evaluate the capability of lighting for seeing an object.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='luxMonitoring-study'>
                <div className='luxMonitoring-study-text'>
                    <p>
                        Lux meter is used for measuring Illumination levels at different locations and the result is compared with standards.  Appropriate recommendations are provided for the areas where low lux is observed. Ecomen undertakes the  Lux Monitoring (Luminous Intensity) for various premises like Office, Factory, Hotel, Store, Hospital and Schools.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='luxMonitoring-buttons'>
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

export default LuxMonitoring
