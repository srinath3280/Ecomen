import React from 'react';
import './thematicMapping.css';

const ThematicMapping = () => {
    return (
        <div>
            <section className='thematicMapping'>
                <div className='thematicMapping-heading'>
                    <h1>Thematic Mapping</h1>
                </div>
                <div className='thematicMapping-content'>
                    <div className='thematicMapping-content-left'>
                        <img src='/images/services/forestServices/thematic-mapping.jpg' alt='' />
                    </div>
                    <div className='thematicMapping-content-right'>
                        <p>
                            Thematic maps pull in attributes or statistics about a location and represent that data in a way that enables a greater understanding of the relationships between locations and the discovery of spatial patterns in the data that we are exploring.
                        </p>
                        <p>
                            Ecomen Laboratories can provide quality, cost-effective GIS and desktop mapping services for a range of applications including asset management, demographic analysis, environmental projects, agribusiness, mineral exploration and mining production change.
                        </p>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className='thematicMapping-buttons'>
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

export default ThematicMapping