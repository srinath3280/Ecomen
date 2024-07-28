import React from 'react';
import './mineAudit.css';

const MineAudit = () => {
    return (
        <div>
            <section className='mineAudit'>
                <div className='mineAudit-heading'>
                    <h1>Mine Audit</h1>
                </div>
                <div className='mineAudit-content'>
                    <div className='mineAudit-content-left'>
                        <img src='/images/services/miningServices/Mining-audit.jpg' alt='' />
                    </div>
                    <div className='mineAudit-content-right'>
                        <p>
                            Mining Audit is an independent management function which involves a continuous and critical appraisal of the functioning of the entity with a view to suggest improvements and add value to strengthen the overall governance mechanism of the entity, including the entity’s strategic risk management and internal control system. This audit activity can play an important role and support the Board & Management in fulfilling an essential component of their governance mechanism.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='mineAudit-study'>
                <div className='mineAudit-study-heading'>
                    <p>Mine Audit helps</p>
                </div>
                <div className='mineAudit-study-list'>
                    <ul>
                        <li>
                            To understand and assess the risks and evaluate the adequacies of the prevalent internal controls
                        </li>
                        <li>
                            To review operations or programs for consistency with established management goals and objectives
                        </li>
                        <li>
                            To determine if assets are safeguarded and verify the existence of these assets
                        </li>
                        <li>
                            To review and ascertain availability and compliance with policies and procedures of the various processes involved
                        </li>
                        <li>
                            To ascertain compliance with applicable legal laws, and regulations
                        </li>
                        <li>
                            To determine resources are used efficiently and economically
                        </li>
                        <li>
                            To determine the adequacy of information systems security and control
                        </li>
                        <li>
                            To ensure adequacy, reliability, accuracy and timeliness of financial & management information systems
                        </li>
                        <li>
                            To determine whether operational problems are identified and reported for correction
                        </li>
                        <li>
                            Identify areas for systems improvement and strengthening controls
                        </li>
                    </ul>
                </div>
            </section>

            {/* Buttons */}
            <section className='mineAudit-buttons'>
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

export default MineAudit