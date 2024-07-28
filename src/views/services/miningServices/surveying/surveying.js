import React from 'react';
import './surveying.css';

const Surveying = () => {
    return (
        <div>
            <section className='surveying'>
                <div className='surveying-heading'>
                    <h1>Surveying</h1>
                </div>
                <div className='surveying-text'>
                    <p>
                        Land surveying is the science, art, and profession of determining the positions of points on the surface of the earth and measuring the distances, directions, angles, and elevations between them. This data helps accurately create maps and determine plot boundaries.
                    </p>
                </div>
                <div className='surveying-content1'>
                    <div className='surveying-content1-left'>
                        <img src='/images/services/miningServices/surveying/mining-survey.jpg' alt='' />
                    </div>
                    <div className='surveying-content1-right'>
                        <div>
                            <p><strong>DGPS & TOTAL STATION SURVEY</strong></p>
                            <p>
                                We conduct DGPS and total station surveys of mining sites as per the guidelines of MoEF (Ministry of Environment and Forest) and IBM (Indian Bureau of Mines). The purpose of the surveys is to collect the coordinates of mining lease boundary pillars/forest pillars and other features for georeferencing the base maps of the mining sites.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='surveying-content2'>
                    <div className='surveying-content2-left'>
                        <div>
                            <p><strong>TOPOGRAPHICAL SURVEY</strong></p>
                            <p>
                                Detailed topographical survey of a mining site is necessary to understand the physical and geological condition of the land. We conduct topographical surveys for multiple surface features including drainage, hills, barren land, water bodies, roads, bridges, forest pillars, afforested area, dump area etc. This data can be used for getting a visual idea about land use and land cover, generating contour maps etc. Based on this, mining authorities can take crucial decisions for executing various operations.
                            </p>
                        </div>
                    </div>
                    <div className='surveying-content2-right'>
                        <img src='/images/services/miningServices/surveying/Topographical-survey-e1623598466229.png' alt='' />

                    </div>
                </div>

                <div className='surveying-content1'>
                    <div className='surveying-content1-left'>
                        <img src='/images/services/miningServices/surveying/Surveying2.png' alt='' />
                    </div>
                    <div className='surveying-content1-right'>
                        <div>
                            <p><strong>DRONE SURVEY</strong></p>
                            <p>
                                Drones are viable solutions for getting a bird’s eye view of the mining site. We use survey-grade drones to accumulate high-precision data of land features. These Unmanned Aerial Vehicles (UAVs) are equipped with digital cameras to capture high-resolution 360-degree view of the topographical features, mining lease boundaries etc. of the areas of interest from various angles. These can be used to identify potential hazards, assess impact of mining operations etc.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='surveying-text'>
                    <p>Ecomen has done extensive Survey projects across many Industries .</p>
                </div>
            </section>

            {/* Buttons */}
            <section className='surveying-buttons'>
                <div>
                    <a href='/mining-services'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default Surveying