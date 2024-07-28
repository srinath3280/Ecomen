import React from 'react';
import './asbestosTesting.css';

const AsbestosTesting = () => {
    return (
        <div>
            <section className='asbestosTesting'>
                <div className='asbestosTesting-heading'>
                    <h1>Asbestos Testing</h1>
                </div>
                <div className='asbestosTesting-content'>
                    <div className='asbestosTesting-content-left'>
                        <img src='/images/laboratory/ourLaboratoryServices/asbestos-testing.jpg' alt='' />
                    </div>
                    <div className='asbestosTesting-content-right'>
                        <p>
                            Ecomen laboratories perform a wide range of real estate pollutants analyses, including testing for asbestos, not only in materials but also in air samples. Ecomen offer solutions for research on asbestos in the air, housing materials, road asphalt and dust.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='asbestosTesting-study'>
                <div className='asbestosTesting-study-list'>
                    <ul>
                        <li>
                            Materials
                        </li>
                        <li>
                            Water
                        </li>
                        <li>
                            Concrete
                        </li>
                        <li>
                            Soils
                        </li>
                        <li>
                            Dust
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='asbestosTesting-buttons'>
                <div>
                    <a href='/laboratory'>Laboratory Services</a>
                </div>
            </section>
        </div>
    )
}

export default AsbestosTesting