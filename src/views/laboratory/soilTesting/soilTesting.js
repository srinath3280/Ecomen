import React from 'react';
import './soilTesting.css';

const SoilTesting = () => {
    return (
        <div>
            <section className='soilTesting'>
                <div className='soilTesting-heading'>
                    <h1>Soil Analysis and Testing</h1>
                </div>
                <div className='soilTesting-content'>
                    <div className='soilTesting-content-left'>
                        <img src='/images/laboratory/ourLaboratoryServices/soil-testing.jpg' alt='' />
                    </div>
                    <div className='soilTesting-content-right'>
                        <p>
                            For soil investigation and soil remediation projects, the testing of environmentally relevant parameters of soil and groundwater is of great importance. Ecomen performs Soil analysis and testing on routine parameters like heavy metals, TPH, PAH, aromatics, VOCs and pesticides, as well as non-standard parameters like glycols and phthalates using a wide range of modern techniques including (LVI)-GC/MS, HPLC and LC-MS. The pre-treatment and analytical methods that we currently use fully comply with legislation and standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='soilTesting-study'>
                <div className='soilTesting-study-heading'>
                    <p>
                        Ecomen scope of soil testing acquired from NABL & MoEF&CC covers following parameters
                    </p>
                </div>
                <div className='soilTesting-study-list'>
                    <ul>
                        <li>
                            pH
                        </li>
                        <li>
                            Chlorine
                        </li>
                        <li>
                            Zinc
                        </li>
                        <li>
                            Total Coliform
                        </li>
                        <li>
                            Electrical Conductivity
                        </li>
                        <li>
                            Sulphate
                        </li>
                        <li>
                            iron
                        </li>
                        <li>
                            Faecal Coliform
                        </li>
                        <li>
                            Sodium
                        </li>
                        <li>
                            Boron
                        </li>
                        <li>
                            Nickel
                        </li>
                        <li>
                            Faecal Streptococci
                        </li>
                        <li>
                            Available Potassium
                        </li>
                        <li>
                            Calcium
                        </li>
                        <li>
                            Cadmium
                        </li>
                        <li>
                            E Coli
                        </li>
                        <li>
                            Available Phosphate
                        </li>
                        <li>
                            Magnesium
                        </li>
                        <li>
                            Polychlorinated Biphenyls (PCBs)
                        </li>
                        <li>
                            Total Plate Count
                        </li>
                        <li>
                            Acid Insoluble Ash Content
                        </li>
                        <li>
                            Copper
                        </li>
                        <li>
                            Polycyclic Aromatic Hydrocarbons (PAHs)
                        </li>
                        <li>
                            Organic Carbon
                        </li>
                        <li>
                            Moisture Content
                        </li>
                        <li>
                            Bulk Density
                        </li>
                        <li>
                            Ash Content
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='soilTesting-buttons'>
                <div>
                    <a href='/laboratory'>Laboratory Services</a>
                </div>
            </section>
        </div>
    )
}

export default SoilTesting