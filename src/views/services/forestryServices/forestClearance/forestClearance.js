import React from 'react';
import './forestClearance.css';

const ForestClearance = () => {
    return (
        <div>
            <section className='forestClearance'>
                <div className='forestClearance-heading'>
                    <h1>Forest Clearance</h1>
                </div>
                <div className='forestClearance-text'>
                    <p>
                        Need to balance economic growth along with forest conservation
                    </p>
                </div>
                <div className='forestClearance-content'>
                    <div className='forestClearance-content-left'>
                        <img src='/images/services/forestServices/Forest-Clearance-1.jpg' alt='' />
                    </div>
                    <div className='forestClearance-content-right'>
                        <p>
                            The Forest (Conservation) Act 1980 had been done to conserve the forests of the country. This regulates forest land being used for non-forest purposes without the prior approval of concerned authorities.
                        </p>
                        <p>
                            All proposals involving up to forty hectares (40ha) of forest land, clearance is granted by Regional Empowered Committee (REC) and proposals above forty hectares(40ha) of forest land will be granted by the Forest Advisory Committee (FAC) at central government (MoEF&CC).
                        </p>
                        <p>
                            We provide consultancy services in the field of Forest Clearance for both public and private sectors to comply with various guidelines issued by the Ministry of Environment, Forest & Climate Change from time to time. Our expert team has an in-depth understanding of the process and have a customized approach for clearance.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='forestClearance-study'>
                <div className='forestClearance-study-heading'>
                    <p>
                        Projects can be for fresh FC or renewal, depending on requirements we provide following activities:
                    </p>
                </div>
                <div className='forestClearance-study-list'>
                    <ul>
                        <li>
                            Upload the proposal on Forest Clearance Portal-Parivesh
                        </li>
                        <li>
                            Prepare Forest Diversion Proposal
                        </li>
                        <li>
                            Liaison till the final approval (Stage-I and Stage-II) from the MoEF&CC
                        </li>
                        <li>
                            Draft and submit responses raised by the authorities
                        </li>
                        <li>
                            Prepare Biodiversity Impact Assessment Report
                        </li>
                        <li>
                            Conduct DGPS survey of the area
                        </li>
                        <li>
                            Prepare Rehabilitation and Resettlement (R&R) Plan
                        </li>
                        <li>
                            Prepare Compensatory Afforestation Plan for identified non-forest area/ degraded forest area and obtain approval from the concerned DFO
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='forestClearance-buttons'>
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

export default ForestClearance