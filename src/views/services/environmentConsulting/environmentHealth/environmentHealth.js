import React from 'react';
import './environmentHealth.css';

const EnivronmentHealth = () => {
    return (
        <div>
            <section className='environmentHealth'>
                <div className='environmentHealth-heading'>
                    <h1>Environment Health & Safety</h1>
                </div>
                <div className='environmentHealth-text'>
                    <p>
                        Protecting people and the environment is a critical aspect of responsible business.
                    </p>
                </div>
                <div className='environmentHealth-content'>
                    <div className='environmentHealth-content-left'>
                        <img src='/images/services/environmentConsulting/Environmental-Health-and-Safety.jpg' alt='' />
                    </div>
                    <div className='environmentHealth-content-right'>
                        <p>
                            Environmental, health, and safety (EHS) is understanding and implementing practical aspects of environmental protection such as sustainability and safety in the workplace.
                        </p>
                        <p>
                            Industries have to navigate the increasingly complex environmental regulatory landscape, with a focus on achieving and maintaining regulatory compliance, protecting employee health and safety, managing potential business liabilities, and improving clients’ financial and organizational performance.
                        </p>
                        <p>
                            Ecomen team helps clients to unlock smart, predictive and data-driven EHS decisions that increase operational efficiency, reduce risk, create safer working environments and positively impact overall business performance, by combining the industry’s most innovative technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='environmentHealth-study'>
                <div className='environmentHealth-study-text'>
                    <p>
                        Our experienced EHS management consultants have built a system that envisages continuous improvement through enhanced communication, improved performance, built-in team work, employee engagement, safety & health culture and continuous risk reduction. Our process is compatible with quality/productivity/cost-control assurance programs and Occupational Safety, Health & Environment International Standards.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='environmentHealth-buttons'>
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

export default EnivronmentHealth
