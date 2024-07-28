import React from 'react';
import './environmentImpactAssessment.css';

const EnivronmentImpactAssignment = () => {
    return (
        <div>
            <section className='environmentImpactAssessment'>
                <div className='environmentImpactAssessment-heading'>
                    <h1>Environment Imapct Assessment</h1>
                </div>
                <div className='environmentImpactAssessment-text'>
                    <p>
                        We help to measure the impact of your development on Environmental and Local Communities
                    </p>
                </div>
                <div className='environmentImpactAssessment-content'>
                    <div className='environmentImpactAssessment-content-left'>
                        <img src='/images/services/environmentConsulting/Environmental-Impact-Assessment.jpg' alt='' />
                    </div>
                    <div className='environmentImpactAssessment-content-right'>
                        <p>
                            Defining the impact on the environment and local communities is critical for planning and development of new business operations. Baseline Study Report of the area is prepared by conducting monitoring activities for environmental elements such as Air, Water, Soil, Noise and Biological aspects. Environment Impact Assessment (EIA) will assess the impact of the project on the existing baseline and corresponding mitigation measures are suggested from compliance standards.
                        </p>
                        <p>
                            Social Impact Assessments (SIA) is conducted to assess impact on local communities and similarly counter measures are suggested to reduce the impact and have an inclusive environment.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='environmentImpactAssessment-study'>
                <div className='environmentImpactAssessment-study-text'>
                    <p>
                        Our environment specialists and operators have more than 500+ project experiences across India and have provided high quality impact assessment reports across large complex projects in difficult environments – our projects mainly span across industries with Mining, Power, Cement, Distilleries, Sugar, Highways, Townships and Constructions.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='environmentImpactAssessment-buttons'>
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

export default EnivronmentImpactAssignment
