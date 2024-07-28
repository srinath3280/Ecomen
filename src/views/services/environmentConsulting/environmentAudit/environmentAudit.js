import React from 'react';
import './environmentAudit.css';

const EnivronmentAudit = () => {
    return (
        <div>
            <section className='environmentAudit'>
                <div className='environmentAudit-heading'>
                    <h1>Environment Audit</h1>
                </div>
                <div className='environmentAudit-text'>
                    <p>
                        Assessment to ensure that businesses and organizations are complying with environmental policies
                    </p>
                </div>
                <div className='environmentAudit-content'>
                    <div className='environmentAudit-content-left'>
                        <img src='/images/services/environmentConsulting/Environmental-Audit-1.jpg' alt='' />
                    </div>
                    <div className='environmentAudit-content-right'>
                        <p>
                            Environment Auditing [EA] is essentially an environmental management tool for measuring the effects of activities on the environment against set criteria or standards. Depending on the types of standards and the focus of the audit, there are different types of environmental audit.
                        </p>
                        <p>
                            The Environment Protection Rules makes it mandatory for all industries, Operations and Process requiring consent under S.25 of the Water Act or under S.21 of the Air Act of both or an authorization under the Hazardous Wastes Rules, to submit environment audit reports to the State Pollution Board within the defined period. The environment auditing is compulsory to all industries which are identified as potentially polluting industries.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='environmentAudit-study'>
                <div className='environmentAudit-study-heading'>
                    <p>Environment Audit Report will include the following</p>
                </div>
                <div className='environmentAudit-study-list'>
                    <ul>
                        <li>
                            Assessment of whether any cleanup or precautions are required. If required, then the report will have recommendations on how to undertake the measures to reduce the impact on the environment.
                        </li>
                        <li>
                            Additional measures or investment proposed for environmental protection and prevention of pollution
                        </li>
                        <li>
                            Environment quality of the project or the risk posed by the project or activity to the environment.
                        </li>
                    </ul>
                </div>
                <div className='environmentAudit-study-text'>
                    <p>
                        We can help our clients by conducting Environmental Audits as per the guidelines of State Pollution Control Boards.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='environmentAudit-buttons'>
                <div>
                    <a href='/environmental-consulting'>Back</a>
                </div>
                <div>
                    <a href='/contact'>Contact Us</a>
                </div>
            </section>
        </div>
    )
}

export default EnivronmentAudit
