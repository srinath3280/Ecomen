import React from 'react';
import './hydrologicalStudy.css';

const HydrologicalStudy = () => {
    return (
        <div>
            <section className='hydrologicalStudy'>
                <div className='hydrologicalStudy-heading'>
                    <h1>Hydrological Study</h1>
                </div>
                <div className='hydrologicalStudy-content'>
                    <div className='hydrologicalStudy-content-left'>
                        <img src='/images/services/forestServices/Hydrological-Study.jpg' alt='' />
                    </div>
                    <div className='hydrologicalStudy-content-right'>
                        <p>
                            Water is one of our most precious natural resources. Without it, there would be no life on earth. Hydrology has evolved as a science in response to the need to understand the complex water system of the earth and help solve water problems. The hydrology primer gives information about water on Earth and humans’ involvement and use of water.
                        </p>
                        <p>
                            Hydrology is the science that encompasses the occurrence, distribution, movement and properties of the waters of the earth and their relationship with the environment within each phase of the hydrologic cycle.
                        </p>
                        <p>
                            The hydrological study involves the fundamental transport processes to be able to describe the quantity and quality of water as it moves through the cycle (evaporation, precipitation, streamflow, infiltration, groundwater flow, and other components).
                        </p>
                    </div>
                </div>
                <div className='hydrologicalStudy-text'>
                    <p>
                        At Ecomen our dedicated hydrologists and engineers have experience in providing detailed hydrological assessments which are carried out as part of  flood risk and drainage assessments. Combination of topographical information, site investigations, hydrological data, flow surveys, rainfall data, geological information and other historic data to determine the extent of catchment areas contributing runoff, and the flows in watercourses and drainage systems.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='hydrologicalStudy-buttons'>
                <div>
                    <a href='/forest-services'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default HydrologicalStudy