import React from 'react';
import './fugitiveAirMonitoring.css';

const FugitiveAirMonitoring = () => {
    return (
        <div>
            <section className='fugitiveAirMonitoring'>
                <div className='fugitiveAirMonitoring-heading'>
                    <h1>Fugitive Air Monitoring</h1>
                </div>
                <div className='fugitiveAirMonitoring-content'>
                    <div className='fugitiveAirMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/airMonitoring/Fugitive-air-monitoring.jpg' alt='' />
                    </div>
                    <div className='fugitiveAirMonitoring-content-right'>
                        <p>
                            The term fugitive dust refers to particulate that is lifted into the air either by man-made or natural activities in large open areas. Fugitive dust is typically the result from activities such as the physical movement of soil, vehicles traveling over unpaved surfaces, heavy equipment operation, blasting, and wind.
                        </p>
                        <p>
                            The impact of fugitive dust results is not restricted to nuisance problems, but in areas of high concentrations, visibility is reduced, which can lead to traffic accidents. Valuable farm top soil can be carried by winds, leading to poor crop yields. The impact on the health of both workers and residents being in contact with the fugitive dust conditions can be severe.
                        </p>
                        <p>
                            Fugitive emissions can also be emissions of gases or vapors from pressurized equipment due to leaks and other unintended or irregular releases of gases, mostly from industrial activities – this could have costly consequences for the health, safety and business performance.
                        </p>
                        <p>
                            Ecomen has significant experience in monitoring fugitive dust in Mines, Power and Cement Industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className='fugitiveAirMonitoring-buttons'>
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

export default FugitiveAirMonitoring