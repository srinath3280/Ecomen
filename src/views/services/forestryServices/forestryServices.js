import React from 'react';
import './forestryServices.css';

const ForestryServices = () => {
    return (
        <div>
            <section className='forestServices'>
                <div className='forestServices-heading'>
                    <h1>Forest Services</h1>
                </div>
                <div className='forestServices-content'>
                    <div className='forestServices-content-left'>
                        <img src='/images/services/forestServices/Ecomen-Services.jpg' alt='' />
                    </div>
                    <div className='forestServices-content-right'>
                        <p>
                            India is rich in faunal & floral biodiversity stretching for over 273,000 square miles. Ecomen provides consulting services in Forest Resource Management, Environment & Climate Change, and Sustainable Development. We evaluate economic and environmental implications of forest related projects particular in getting statutory compliance approvals and monitoring for soil, water and weather conditions. Economic development and Forest conservation should go hand-in-hand to serve the country in a sustainable manner.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='forestServices-services'>
                <div className='forestServices-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='forestServices-services-list'>
                    <div>
                        <img src='/images/services/forestServices/Forest-Clearance-1.jpg' alt='' />
                        <a href='/forest-clearance'>Statutory Forest Clearance (FC)</a>
                    </div>
                    <div>
                        <img src='/images/services/forestServices/land-use.jpg' alt='' />
                        <a href='/land-use-and-land-cover'>Land Use and Land Cover</a>
                    </div>
                    <div>
                        <img src='/images/services/forestServices/Reforestation.jpg' alt='' />
                        <a href='/reclamation--afforestation'>Reclamation & Afforestation</a>
                    </div>
                    <div>
                        <img src='/images/services/forestServices/Remote-Sencing.jpg' alt='' />
                        <a href='/remote-sensing--gis'> Remote Sensing & GIS</a>
                    </div>
                    <div>
                        <img src='/images/services/forestServices/Thematic-Mapping-using-RS-GIS.png' alt='' />
                        <a href='/thematic-mapping'>Thematic Mapping</a>
                    </div>
                    <div>
                        <img src='/images/services/forestServices/Hydrological-Study.jpg' alt='' />
                        <a href='/hydrological-study'>Hydrological Study</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForestryServices
