import React from 'react';
import './enivronmentConsulting.css';

const EnivronmentConsulting = () => {
    return (
        <div>
            <section className='enivronmentConsulting'>
                <div className='enivronmentConsulting-heading'>
                    <h1>Environmental Consulting</h1>
                </div>
                <div className='enivronmentConsulting-text'>
                    <p>
                        Helping companies to manage risk, transform operations and drive growth in a sustainable and compliant environment.
                    </p>
                </div>
                <div className='enivronmentConsulting-content'>
                    <div className='enivronmentConsulting-content-left'>
                        <img src='/images/services/environmentConsulting/Environment-Consulting-updated.jpg' alt='' />
                    </div>
                    <div className='enivronmentConsulting-content-right'>
                        <p>
                            For any organization, starting its processes or managing operations comes with several safety hazards and environmental risks. Managing these complex processes would need better insights in taking control in order to minimize the impact. <br />
                            Over three decades of experience, we have provided Strategic Environment Consulting solutions to our clients’, who had better control on their risk exposure to successfully drive their business goals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Offerings */}
            <section className='enivronmentConsulting-services'>
                <div className='enivronmentConsulting-services-heading'>
                    <h1>Service Offerings</h1>
                </div>
                <div className='enivronmentConsulting-services-list'>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Site-Assessment.jpg' alt='' />
                        <a href='/environment-site-assessment'>Environment Site Assessment(ESA)</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Impact-Assessment.jpg' alt='' />
                        <a href='/environment-impact-assessment'>Environment Impact Assessment(EIA)</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Audit-1.jpg' alt='' />
                        <a href='/environment-audit'>Environment Audit(EA)</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Clearance.jpg' alt='' />
                        <a href='/environment-clearance'>Environment Clearance(EC)</a>
                    </div>
                    <div>
                        <img src='/images/services/environmentConsulting/Environmental-Health-and-Safety.jpg' alt='' />
                        <a href='/environment-health-safety'>Environment Health & Safety(EHS)</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default EnivronmentConsulting
