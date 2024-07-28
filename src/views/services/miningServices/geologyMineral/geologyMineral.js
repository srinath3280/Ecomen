import React from 'react';
import './geologyMineral.css';

const GeologyMineral = () => {
    return (
        <div>
            <section className='geologyMineral'>
                <div className='geologyMineral-heading'>
                    <h1>Geology & Mineral Exploration</h1>
                </div>
                <div className='geologyMineral-content'>
                    <div className='geologyMineral-content-left'>
                        <img src='/images/services/miningServices/geology-and-mineral-exploration.jpg' alt='' />
                    </div>
                    <div className='geologyMineral-content-right'>
                        <p>
                            The purpose of mineral exploration is to identify ore bodies and promising deposits to get an overview of the available mineral resources for a mining project. The general principle works by extracting pieces of geological information from several places, and extrapolating this over the larger area to develop a geological picture.
                        </p>
                        <p>
                            Ecomen’s experienced Geologists conduct chemical, mineralogical and microscopic examinations of rocks collected in the field. They identify valuable minerals or indicators of mineralization and map the distribution across a geographic area.
                        </p>
                        <p>
                            Geologists use structural and geological interpretation of ore deposits to construct dynamic 3D geological models using innovative modelling packages.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='geologyMineral-study'>
                <div className='geologyMineral-study-heading'>
                    <p>The exploration study involves</p>
                </div>
                <div className='geologyMineral-study-list'>
                    <ul>
                        <li>
                            Geological Mapping
                        </li>
                        <li>
                            Stream Sediments
                        </li>
                        <li>
                            Geophysical Modelling
                        </li>
                        <li>
                            Soil Sampling
                        </li>
                        <li>
                            Drilling
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='geologyMineral-buttons'>
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

export default GeologyMineral