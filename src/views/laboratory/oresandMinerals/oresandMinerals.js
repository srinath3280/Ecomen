import React from 'react';
import './oresandMinerals.css';

const OresandMinerals = () => {
    return (
        <div>
            <section className='oresandMinerals'>
                <div className='oresandMinerals-heading'>
                    <h1>Ores and Minerals Testing</h1>
                </div>
                <div className='oresandMinerals-content'>
                    <div className='oresandMinerals-content-left'>
                        <img src='/images/laboratory/ourLaboratoryServices/ores-and-mineral-testing.jpg' alt='' />
                    </div>
                    <div className='oresandMinerals-content-right'>
                        <p>
                            Mineral is a naturally occurring substance and found under the earth’s crust, which has been formed as a result of various Geological processes occurring over substantial periods of time. It would not be wrong to mention that almost each and every utility of a commercial substance in the contemporary world has been produced from a particular mineral or a combination of minerals.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='oresandMinerals-study'>
                <div className='oresandMinerals-study-heading'>
                    <p>
                        Ecomen has expertise in analytical testing for the following parameters
                    </p>
                    <p>
                        Parameters for testing Lime stone:
                    </p>
                </div>
                <div className='oresandMinerals-study-list'>
                    <ul>
                        <li>
                            Loss of Ignition
                        </li>
                        <li>
                            Calcium Oxide
                        </li>
                        <li>
                            Iron
                        </li>
                        <li>
                            Aluminium Oxide
                        </li>
                        <li>
                            Magnesium Oxide
                        </li>
                        <li>
                            Silica
                        </li>
                    </ul>
                </div>
            </section>

            {/* STUDY */}
            <section className='oresandMinerals-study'>
                <div className='oresandMinerals-study-heading'>
                    <p>
                        Parameters for testing Iron Ore:
                    </p>
                </div>
                <div className='oresandMinerals-study-list'>
                    <ul>
                        <li>
                            Moisture
                        </li>
                        <li>
                            Aluminia as Al2 O3
                        </li>
                        <li>
                            Acid Insoluble Matter
                        </li>
                        <li>
                            Magnesium Oxide MgO
                        </li>
                        <li>
                            Phosphorus as P
                        </li>
                        <li>
                            Iron as Fe
                        </li>
                        <li>
                            Magnesium as Mn
                        </li>
                        <li>
                            Calcium Oxide as CaO
                        </li>
                        <li>
                            Silica as SaO2
                        </li>
                        <li>
                            Sulphure as S
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='oresandMinerals-buttons'>
                <div>
                    <a href='/laboratory'>Laboratory Services</a>
                </div>
            </section>
        </div>
    )
}

export default OresandMinerals