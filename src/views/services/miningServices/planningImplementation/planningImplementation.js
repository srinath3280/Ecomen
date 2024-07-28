import React from 'react';
import './planningImplementation.css';

const PlanningImplementation = () => {
    return (
        <div>
            <section className='planningImplementation'>
                <div className='planningImplementation-heading'>
                    <h1>R&R Planning & Implementation</h1>
                </div>
                <div className='planningImplementation-content'>
                    <div className='planningImplementation-content-left'>
                        <img src='/images/services/miningServices/rr-plan/rr2.png' alt='' />
                    </div>
                    <div className='planningImplementation-content-right'>
                        <div>
                            <p><strong>Reclamation</strong></p>
                            <p>
                                Reclamation means returning the mined out land with useful life. It implies restoring the land to a form and productivity that is useful and unconformity with prior land use. Reclamation may not always be a single-phase operation.
                            </p>
                        </div>
                        <div>
                            <p><strong>Rehabilitation</strong></p>
                            <p>
                                Rehabilitation is to bring back the degraded land to a normal stage by a special treatment. It is a process of taking some mitigation measures for disturbed environmental conditions created through mining activities.
                            </p>
                        </div>
                        <div>
                            <p><strong>Restoration</strong></p>
                            <p>
                                Restoration is the process of returning the mined out land being fit to an acceptable environmental condition. Restoration is often used to indicate that biological properties of soil are put back to what they were. This is a rare phenomenon.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='planningImplementation-study'>
                <div className='planningImplementation-study-heading'>
                    <p>Focus Areas</p>
                </div>
                <div className='planningImplementation-study-list'>
                    <img src='/images/services/miningServices/rr-plan/RR-Plan-Implementation1.png' alt='' />
                </div>
            </section>

            {/* Buttons */}
            <section className='planningImplementation-buttons'>
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

export default PlanningImplementation