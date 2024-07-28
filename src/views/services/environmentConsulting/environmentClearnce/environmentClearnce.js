import React from 'react';
import './environmentClearnce.css';

const EnivronmentClearance = () => {
    return (
        <div>
            <section className='environmentClearnce'>
                <div className='environmentClearnce-heading'>
                    <h1>Environment Clearance</h1>
                </div>
                <div className='environmentClearnce-text'>
                    <p>
                        Expert Advice to get through Complex Environmental Regulations
                    </p>
                </div>
                <div className='environmentClearnce-content'>
                    <div className='environmentClearnce-content-left'>
                        <img src='/images/services/environmentConsulting/Environmental-Clearance.jpg' alt='' />
                    </div>
                    <div className='environmentClearnce-content-right'>
                        <p>
                            Before land acquisition or prior to setting up an industry or expansion or change in area, or change in process, you need to have an Environmental Clearance [EC] from the Ministry of Environment, Forest and Climate Change (MoEF&CC) and State Environment Impact Assessment Authority (SEIAA).
                        </p>
                        <p>
                            Environmental Clearance process involves generation of Baseline Environmental Data [Air Quality, Water Quality, Noise Level, Soil Quality etc], specific Studies [Flora Fauna, Socio Economic, Land Use, Ground Water Potential etc] and preparation of Environment Management Plan.
                        </p>
                        <p>
                            Our multi-disciplinary team provide solutions that are practical, cost-effective, and minimizes risk. We help our clients achieve regulatory compliance, optimize current operations, and turn environmental liabilities into assets.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='environmentClearnce-study'>
                <div className='environmentClearnce-study-text'>
                    <p>
                        Ecomen has NABET accreditation for 14 Sectors: Mining, Thermal power plants, Mineral beneficiation, Metallurgical industries (ferrous & non-ferrous), Cement plants, Asbestos milling and asbestos based products, Synthetic organic chemicals industry, Distilleries, Sugar Industry, Isolated storage & handling of hazardous chemicals, Ports, harbours, break waters and dredging, Highways, Building & Construction projects and Townships & Area development projects.
                    </p>
                    <p>
                        Involvement of the public is one of the fundamental principles of a successful EC process, it is done through Public Hearing. It not only provides an opportunity to those directly affected by a project to express their views on the environmental and social impacts of the proposal but also brings about transparency in the Environmental Clearance system. We have experience in conducting Public Hearing sessions and managing public expectations.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='environmentClearnce-buttons'>
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

export default EnivronmentClearance
