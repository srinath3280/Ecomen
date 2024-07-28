import React from 'react';
import './environmentSiteAssignment.css';

const EnivronmentSiteAssignment = () => {
    return (
        <div>
            <section className='enivronmentSiteAssignment'>
                <div className='enivronmentSiteAssignment-heading'>
                    <h1>Environment Site Assessment</h1>
                </div>
                <div className='enivronmentSiteAssignment-text'>
                    <p>
                        Evaluate environmental contamination liabilities of the property before you make wise Investment Decisions.
                    </p>
                </div>
                <div className='enivronmentSiteAssignment-content'>
                    <div className='enivronmentSiteAssignment-content-left'>
                        <img src='/images/services/environmentConsulting/Environmental-Site-Assessment.jpg' alt='' />
                    </div>
                    <div className='enivronmentSiteAssignment-content-right'>
                        <p>
                            Environment Site Assessment [ESA] is a findings report on potential or existing environmental contamination liabilities. The analysis typically addresses both the underlying land as well as physical improvements to the property. This is a two phase process, Phase I ESA is considered as due diligence and if it concludes as a contaminated site, only then a phase two may be conducted.
                        </p>
                        <p>
                            ESA involves examination of potential soil contamination, ground water and surface water quality. The scope extends to examination of any chemical residues within structures; identification of possible asbestos containing building materials; inventory of hazardous substances stored or used on site; assessment of mold & mildew; and evaluation of other indoor air quality parameters.
                        </p>
                    </div>
                </div>
            </section>

            {/* STUDY */}
            <section className='enivronmentSiteAssignment-study'>
                <div className='enivronmentSiteAssignment-study-heading'>
                    <p>ESA is study conducted commonly across</p>
                </div>
                <div className='enivronmentSiteAssignment-study-list'>
                    <ul>
                        <li>
                            Purchase of real estate property by a person or entity
                        </li>
                        <li>
                            Contemplation by a new lender to provide a loan on the property
                        </li>
                        <li>
                            Obtaining Clearance for change of use or other discretionary land use permit
                        </li>
                        <li>
                            To understand the toxic history of existing property
                        </li>
                        <li>
                            Compulsion by a regulatory agency who suspects toxic conditions on the site
                        </li>
                        <li>
                            Divestiture and disinvestment of properties
                        </li>
                    </ul>
                </div>
                <div className='enivronmentSiteAssignment-study-text'>
                    <p>
                        Our experienced team helps in arriving a clear understanding and extent of contamination of the property through proven process of assessment, monitoring, sampling and testing. We help in defining the property risk score.
                    </p>
                </div>
            </section>

            {/* Buttons */}
            <section className='enivronmentSiteAssignment-buttons'>
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

export default EnivronmentSiteAssignment
