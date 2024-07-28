import React from 'react';
import './miningPlan.css';

const MiningPlan = () => {
    return (
        <div>
            <section className='miningPlan'>
                <div className='miningPlan-heading'>
                    <h1>Mining Plan</h1>
                </div>
                <div className='miningPlan-content'>
                    <div className='miningPlan-content-left'>
                        <img src='/images/services/miningServices/mining-plan.jpg' alt='' />
                    </div>
                    <div className='miningPlan-content-right'>
                        <p>
                            Mining Plan is a primary document for the grant of a Mining Lease. Also, required in obtaining Environment Clearance and Forest Clearance. This document connects the mine with all stakeholders.
                        </p>
                        <ul>
                            <li>
                                It’s a guide book for implementation for the lessees and a monitoring tool for regulatory authorities.
                            </li>
                            <li>
                                It’s a techno-legal document for systematic and scientific development of mine for conservation of minerals; and Progressive closure for protection of environment.
                            </li>
                        </ul>
                        <p>
                            The Mining Plan is prepared as per the new lease boundary finalized by a joint survey team constituted by CEC and is finally being submitted to IBM Bengaluru.
                            Ecomen has experience in creating Mining Plans for both minor and major minerals.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='miningPlan-study'>
                <div className='miningPlan-study-heading'>
                    <p>Mining Plan consists of</p>
                </div>
                <div className='miningPlan-study-list'>
                    <ul>
                        <li>
                            Resource /Reserve as per UNFC
                        </li>
                        <li>
                            Mineral processing & upgradation
                        </li>
                        <li>
                            Control of ground vibration & air pollution.
                        </li>
                        <li>
                            Year-wise excavation plan for 5 years
                        </li>
                        <li>
                            Simultaneous Reclaimation/Rehabilitation to minimize the need for external dumps
                        </li>
                        <li>
                            Protection of environment: Afforestation program
                        </li>
                        <li>
                            Method of mining
                        </li>
                        <li>
                            Re-handling of waste dumps
                        </li>
                        <li>
                            Drainage and Water pollution
                        </li>
                        <li>
                            Requisition of minimum area
                        </li>
                        <li>
                            Determination of site and its capacity for disposal of waste: solid and liquid
                        </li>
                        <li>
                            Mine Closure
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='miningPlan-buttons'>
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

export default MiningPlan