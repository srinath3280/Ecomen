import React from 'react';
import './cokeandCoal.css';

const CokeandCoal = () => {
    return (
        <div>
            <section className='cokeandCoal'>
                <div className='cokeandCoal-heading'>
                    <h1>Coke and Coal Testing</h1>
                </div>
                <div className='cokeandCoal-content'>
                    <div className='cokeandCoal-content-left'>
                        <img src='/images/laboratory/ourLaboratoryServices/coke-and-coal-testing.jpg' alt='' />
                    </div>
                    <div className='cokeandCoal-content-right'>
                        <p>
                            A combustible black and/or brownish-black sedimentary rock occurring in rock strata in layer or veins is called coal or coal seam. It is a flammable black hard rock which is commonly used as a solid fossil fuel. At the power station, coal plays a major role in the production of electricity. Being highly heterogeneous in nature, to accurately predict its behavior during application several new analytical techniques are developed for its characterization. To avoid economic consequences, analysis needs to be sufficiently accurate as its supply is in a very large amount. Coke, which is a destructive distillation of coal, has high carbon content.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='cokeandCoal-study'>
                <div className='cokeandCoal-study-heading'>
                    <p>
                        Ecomen performs Coal as well as Coke testing for the following parameters:
                    </p>
                </div>
                <div className='cokeandCoal-study-list'>
                    <ul>
                        <li>
                            Moisture
                        </li>
                        <li>
                            Volatile Matter
                        </li>
                        <li>
                            Total Ash
                        </li>
                        <li>
                            Gross Calorific Value
                        </li>
                        <li>
                            Fixed Carbon
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='cokeandCoal-buttons'>
                <div>
                    <a href='/laboratory'>Laboratory Services</a>
                </div>
            </section>
        </div>
    )
}

export default CokeandCoal