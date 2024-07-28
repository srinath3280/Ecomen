import React from 'react';
import './soilMonitoring.css';

const SoilMonitoring = () => {
    return (
        <div>
            <section className='soilMonitoring'>
                <div className='soilMonitoring-heading'>
                    <h1>Soil Monitoring</h1>
                </div>
                <div className='soilMonitoring-content'>
                    <div className='soilMonitoring-content-left'>
                        <img src='/images/services/environmentMonitoring/soilMonitoring/Soil-Monitoring.jpg' alt='' />
                    </div>
                    <div className='soilMonitoring-content-right'>
                        <p>
                            Over the past few decades, soil monitoring has become increasingly important. Environmental factors such as climate change, dwindling water resources, and threatened habitats are driving the need to monitor the environment and implement better policies to protect it.
                        </p>
                        <p>
                            Soil is an important natural resource, just as the air and water that surround us are. Receiving accurate and instantaneous information on soil moisture content, salinity, temperature, and other parameters is important. Soil Sensors are used in the field and soil samples are collected and analysed in the Laboratory.
                        </p>
                        <p>
                            Ecomen has a team of experienced geologists and geo hydrologists to assess the soil and land properties for more accuracy. We are working on soil monitoring projects across India, and our experts are enthusiastic to face any new challenges in assessing new land patterns.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='soilMonitoring-study'>
                <div className='soilMonitoring-study-heading'>
                    <p>
                        Ecomen has NABL accredited laboratory, which provides soil testing services for chemical and geotechnical properties:
                    </p>
                </div>
                <div className='soilMonitoring-study-list'>
                    <ul>
                        <li>
                            Determine the suitability of the soil for construction project
                        </li>
                        <li>
                            Identify the different types of soil
                        </li>
                        <li>
                            Test soil for strength, density, compaction, contamination, organics and sand content
                        </li>
                    </ul>
                </div>
            </section>

            {/* Types of Soil Monitoring */}
            <section className='soilMonitoring-types'>
                <div className='soilMonitoring-types-heading'>
                    <h1>Types of Soil Monitoring</h1>
                </div>
                <div className='soilMonitoring-types-list'>
                    <div>
                        <img src='/images/services/environmentMonitoring/soilMonitoring/Project-site.jpg' alt='' />
                        <span>Project location sites</span>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/soilMonitoring/road-site.jpg' alt='' />
                        <span>Road & Railway sites</span>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/soilMonitoring/agriculture-land.jpg' alt='' />
                        <span>Agricultural lands</span>
                    </div>
                    <div>
                        <img src='/images/services/environmentMonitoring/soilMonitoring/land-fills.jpg' alt='' />
                        <span>Landfill sites</span>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='soilMonitoring-study'>
                <div className='soilMonitoring-study-heading'>
                    <p>Ecomen offered services:</p>
                </div>
                <div className='soilMonitoring-study-list'>
                    <ul>
                        <li>
                            Soil collection and analysis
                        </li>
                        <li>
                            Extraction and estimation of available nutrients in the soil
                        </li>
                        <li>
                            Sample processing
                        </li>
                        <li>
                            Interpretation of the soil test values for making necessary recommendation
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='soilMonitoring-buttons'>
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

export default SoilMonitoring
