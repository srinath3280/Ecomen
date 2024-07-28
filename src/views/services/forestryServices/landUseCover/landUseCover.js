import React from 'react';
import './landUseCover.css';

const LandUseCover = () => {
    return (
        <div>
            <section className='landUseCover'>
                <div className='landUseCover-heading'>
                    <h1>Land Use & Land Cover</h1>
                </div>
                <div className='landUseCover-content'>
                    <div className='landUseCover-content-left'>
                        <img src='/images/services/forestServices/land-use.jpg' alt='' />
                    </div>
                    <div className='landUseCover-content-right'>
                        <p>
                            Land cover refers to the surface cover on the ground, whether vegetation, dense forest, water, bare soil or other. Identifying, delineating and mapping land cover is important for global monitoring studies, resource management, and planning activities.Land use refers to the purpose the land serves, for example, recreation, wildlife habitat, or agriculture. This knowledge will help develop strategies to balance conservation, conflicting uses, and developmental pressures. Issues driving land use studies include the removal or disturbance of productive land, urban encroachment, and depletion of forests.
                        </p>
                        <p>
                            Ecomen has conducted baseline studies of Land cover and Land use using thematic maps has helped in timely information required to know what current quantity of land is in what type of use and to identify the land use changes from year to year.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='landUseCover-study'>
                <div className='landUseCover-study-heading'>
                    <p>
                        Land use applications for remote sensing include the following
                    </p>
                </div>
                <div className='landUseCover-study-list'>
                    <ul>
                        <li>
                            Natural resource management
                        </li>
                        <li>
                            Baseline mapping for GIS input
                        </li>
                        <li>
                            Legal boundaries for tax and property evaluation
                        </li>
                        <li>
                            Wildlife habitat protection
                        </li>
                        <li>
                            Urban expansion / encroachment
                        </li>
                        <li>
                            Target detection - identification of landing strips, roads, clearings, bridges, land/water interface
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='landUseCover-buttons'>
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

export default LandUseCover