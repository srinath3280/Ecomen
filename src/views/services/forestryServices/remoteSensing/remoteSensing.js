import React from 'react';
import './remoteSensing.css';

const RemoteSensing = () => {
    return (
        <div>
            <section className='remoteSensing'>
                <div className='remoteSensing-heading'>
                    <h1>Remote Sensing & GIS</h1>
                </div>
                <div className='remoteSensing-content'>
                    <div className='remoteSensing-content-left'>
                        <img src='/images/services/forestServices/Remote-Sencing.jpg' alt='' />
                    </div>
                    <div className='remoteSensing-content-right'>
                        <p>
                            Remote sensing provides us with a continuous and constant source of information about the Earth, and  geographic information systems (GIS) are a methodology for handling all of this geographic data. This allows us to carry out large scale analyses of the surface and, at the same time, provide increasingly detailed knowledge on many planetary variables and improve our understanding of its functioning.  These analyses are essential for decision-making on the sustainable management of natural resources, designing networks of protected areas, and addressing the threats of global change.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='remoteSensing-study'>
                <div className='remoteSensing-study-heading'>
                    <p>
                        Ecomen with its 30 years of experience of consultancy services has significant experience in
                    </p>
                </div>
                <div className='remoteSensing-study-list'>
                    <ul>
                        <li>
                            Data quality and uncertainty: study the spatial distribution of uncertainty in categorical maps.
                        </li>
                        <li>
                            Theoretical and methodological studies in GIS: do research in the field of the data interpolation which is needed for geodesic calculations implemented in GIS tools.
                        </li>
                        <li>
                            Advanced image processing.
                        </li>
                        <li>
                            Applications in GIS and remote sensing: created land-cover maps, and we study landscape dynamics and ecology.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='remoteSensing-buttons'>
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

export default RemoteSensing